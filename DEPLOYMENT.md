# Deployment Guide

## Quick Deploy

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. New site from Git in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update vite.config.js base: `base: '/repo-name/'`
4. Run: `npm run deploy`

## Environment Variables

Create `.env` file for sensitive data:
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

Access in code:
```js
const apiUrl = import.meta.env.VITE_API_URL
```

## Pre-deployment Checklist

- [ ] Update personal information
- [ ] Replace placeholder images
- [ ] Update contact email
- [ ] Add actual project links
- [ ] Test all forms
- [ ] Run production build locally
- [ ] Test responsive design
- [ ] Check accessibility
- [ ] Verify meta tags
- [ ] Test performance
