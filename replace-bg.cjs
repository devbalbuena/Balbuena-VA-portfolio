const fs = require('fs');
const path = require('path');

function replaceClasses(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceClasses(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Update main card backgrounds
      content = content.replace(/bg-white\/50 dark:bg-slate-900/g, 'bg-white dark:bg-slate-800');
      // Fix RightSidebar background string if it's there
      content = content.replace(/bg-slate-800 border border-slate-700/g, 'bg-slate-900 dark:bg-slate-900 border border-slate-800');
      // Update text colors for dark mode muting
      content = content.replace(/text-slate-600 dark:text-slate-400/g, 'text-slate-600 dark:text-slate-400');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

replaceClasses(path.join(__dirname, 'src'));
console.log('Background classes replaced.');
