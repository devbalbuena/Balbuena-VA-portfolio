# Dexter Balbuena - Virtual Assistant Portfolio

A complete, production-ready Virtual Assistant portfolio website built with React 19, Vite, Tailwind CSS v4, and Framer Motion.

## Features

- **Modern UI & Aesthetics**: Built with a sleek, premium design using Tailwind CSS v4 and custom glassmorphism components.
- **Animations**: Staggered fade-in-up animations and micro-interactions powered by Framer Motion.
- **Responsive Layout**: Two-column layout on desktop (main content + sticky sidebar) gracefully degrading to a single column on mobile.
- **Dark Mode**: Full dark mode support using `ThemeContext` and persisted via `localStorage`. Toggle button included.
- **Contact Form**: Secure contact form with rate-limiting (3 max per session, 60s cooldown) integrated with the Brevo (Sendinblue) API.
- **Command Palette (Ctrl+K)**: Quick navigation and actions using `cmdk`. Search sections, toggle themes, or download the CV effortlessly.
- **Photo Gallery Marquee**: Infinite horizontally scrolling photo gallery with full-screen Lightbox modal.
- **Scroll Progress**: A subtle top progress bar indicating scroll depth.
- **SEO & Security Optimized**: Pre-configured `index.html` with full Open Graph and Twitter card meta tags, and `vercel.json` with strict security headers.
- **Email Obfuscation**: Email addresses are generated at runtime to mitigate spam bots.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion
- Lucide React Icons
- `cmdk` for Command Menu

## Setup & Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the root directory and add your Brevo API key:
   ```env
   VITE_BREVO_API_KEY="your-brevo-api-key-here"
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Customizing Assets

- `public/profile.jpg`: Replace with your actual high-res profile photo.
- `public/gallery/gallery-1.jpg` to `gallery-5.jpg`: Add photos for the marquee gallery.
- `public/cv.pdf`: Place your resume PDF here for download functionality.
