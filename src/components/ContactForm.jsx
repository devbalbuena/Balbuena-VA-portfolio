import React, { useState, useEffect } from 'react';
import { useToast } from '../context/ToastContext';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [sessionCount, setSessionCount] = useState(0);
  const [recipient, setRecipient] = useState('');
  const { addToast } = useToast();

  useEffect(() => {
    // Obfuscate recipient email
    const p1 = "balbuenadexter2";
    const p2 = "gmail.com";
    setRecipient(`${p1}@${p2}`);

    // Load session count from sessionStorage
    const count = parseInt(sessionStorage.getItem('contact_form_count') || '0', 10);
    setSessionCount(count);

    // Check if we are in cooldown from a previous reload (optional, but good UX)
    const lastSent = parseInt(sessionStorage.getItem('contact_form_last_sent') || '0', 10);
    const now = Date.now();
    if (lastSent && now - lastSent < 60000) {
      setCooldown(Math.ceil((60000 - (now - lastSent)) / 1000));
    }
  }, []);

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (sessionCount >= 3) {
      addToast("You've reached the maximum number of messages for this session.", "error");
      return;
    }
    if (cooldown > 0) return;

    setIsSubmitting(true);

    try {
      const apiKey = import.meta.env.VITE_BREVO_API_KEY;
      
      if (!apiKey) {
        throw new Error("API key is missing. Contact form is currently unavailable.");
      }

      const payload = {
        sender: { name: formData.name, email: formData.email },
        to: [{ email: recipient, name: "Dexter Balbuena" }],
        subject: `[Portfolio Contact] ${formData.subject}`,
        htmlContent: `<p><strong>From:</strong> ${formData.name} (${formData.email})</p><p><strong>Message:</strong></p><p>${formData.message.replace(/\n/g, '<br/>')}</p>`
      };

      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "api-key": apiKey
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      // Success
      addToast("Message sent successfully!", "success");
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      const newCount = sessionCount + 1;
      setSessionCount(newCount);
      sessionStorage.setItem('contact_form_count', newCount.toString());
      sessionStorage.setItem('contact_form_last_sent', Date.now().toString());
      
      setCooldown(60);

    } catch (error) {
      console.error(error);
      addToast(error.message || "An error occurred while sending your message.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = isSubmitting || cooldown > 0 || sessionCount >= 3;

  return (
    <div id="contact" className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
      <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Send me a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white transition-colors text-sm"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white transition-colors text-sm"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            required 
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white transition-colors text-sm"
            placeholder="Project Inquiry"
          />
        </div>
        
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white transition-colors text-sm resize-none"
            placeholder="How can I help you?"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isDisabled}
          className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:dark:bg-slate-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <Loader2 size={18} className="animate-spin" />
          ) : cooldown > 0 ? (
            <span>Wait {cooldown}s to send again</span>
          ) : sessionCount >= 3 ? (
            <span>Message limit reached</span>
          ) : (
            <>
              <Send size={18} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
