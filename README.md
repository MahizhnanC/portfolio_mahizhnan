# Modern Portfolio Website

A high-performance, accessible React portfolio SPA featuring interactive mouse/scroll effects, built with React, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## ✨ Features

### Interactive Effects
- **Custom Cursor Blob** - Smooth, blend-mode cursor with hover interactions
- **Particle Hero Background** - Interactive particle system with mouse repulsion
- **Scroll Reveal Animations** - Elements fade and slide in on scroll
- **3D Tilt Cards** - Project cards with perspective tilt effect
- **Smooth Parallax** - Subtle parallax effects throughout

### Performance Optimizations
- ⚡ **Lazy Loading** - Images and heavy components load on demand
- 📦 **Code Splitting** - Vendor chunks separated for optimal caching
- 🎯 **Optimized Animations** - GPU-accelerated transforms, reduced on mobile
- 🔄 **Request Animation Frame** - Efficient animation loops
- 📱 **Mobile-First** - Reduced particle count and effects on mobile devices

### Accessibility & Best Practices
- ♿ **ARIA Labels** - Comprehensive screen reader support
- ⌨️ **Keyboard Navigation** - Full keyboard accessibility
- 📱 **Responsive Design** - Mobile-friendly layouts (320px+)
- 🎨 **High Contrast** - WCAG AA compliant color ratios
- 🔍 **SEO Optimized** - Semantic HTML and meta tags

### Tech Stack
- **React 18** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Production-ready animations
- **Vitest** - Fast unit testing
- **Lucide React** - Beautiful icons

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Run tests with UI
npm run test:ui
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── effects/
│   │   │   ├── CursorBlob.jsx      # Custom cursor effect
│   │   │   ├── ParticleHero.jsx    # Particle background
│   │   │   ├── ScrollReveal.jsx    # Scroll animations
│   │   │   └── TiltCard.jsx        # 3D card tilt
│   │   ├── sections/
│   │   │   ├── Hero.jsx            # Hero section
│   │   │   ├── About.jsx           # About section
│   │   │   ├── Skills.jsx          # Skills section
│   │   │   ├── Projects.jsx        # Projects showcase
│   │   │   └── Contact.jsx         # Contact form
│   │   ├── Navigation.jsx          # Main navigation
│   │   └── Footer.jsx              # Footer component
│   ├── test/
│   │   ├── setup.js                # Test configuration
│   │   ├── App.test.jsx
│   │   ├── Navigation.test.jsx
│   │   ├── ScrollReveal.test.jsx
│   │   └── Contact.test.jsx
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # App entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
└── package.json                    # Dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    500: '#0ea5e9', // Your brand color
    // ... other shades
  },
}
```

### Content
Update content in section components:
- `src/components/sections/Hero.jsx` - Hero text and CTAs
- `src/components/sections/About.jsx` - About information
- `src/components/sections/Skills.jsx` - Skills and percentages
- `src/components/sections/Projects.jsx` - Project showcase
- `src/components/sections/Contact.jsx` - Contact information

### Images
Replace project images in `Projects.jsx` with your own:
```jsx
image: 'your-image-url.jpg'
```

## ⚙️ Performance Features

### Code Splitting
Automatic vendor chunk splitting in `vite.config.js`:
```js
manualChunks: {
  'react-vendor': ['react', 'react-dom'],
  'animation-vendor': ['framer-motion'],
}
```

### Lazy Loading
Components lazy load with React.lazy:
```jsx
const TiltCard = lazy(() => import('../effects/TiltCard'))
```

Images load with native lazy loading:
```jsx
<img loading="lazy" ... />
```

### Animation Optimization
- Uses CSS transforms for GPU acceleration
- Reduces particle count on mobile
- Disables custom cursor on touch devices
- Intersection Observer for scroll reveals

## 🧪 Testing

Run the test suite:
```bash
npm test          # Run tests once
npm run test:ui   # Run with UI
```

Tests cover:
- Component rendering
- User interactions
- Form submissions
- Accessibility features
- Animation behaviors

## 🏗️ Building for Production

```bash
npm run build
```

Creates an optimized production build in `dist/`:
- Minified JavaScript and CSS
- Optimized images
- Vendor chunk splitting
- Source maps for debugging

### Build Output
```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── react-vendor-[hash].js
│   ├── animation-vendor-[hash].js
│   └── index-[hash].css
└── index.html
```

## 🚢 Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
Add to `vite.config.js`:
```js
base: '/your-repo-name/'
```

Then build and deploy:
```bash
npm run build
```

## 📊 Performance Metrics

Optimized for Core Web Vitals:
- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1

## 🔧 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 💡 Tips

### Performance
- Keep particle count under 50 for mobile
- Use WebP images when possible
- Lazy load below-the-fold content
- Minimize animation complexity on scroll

### Accessibility
- Test with screen readers (NVDA, JAWS)
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Add alt text to all images

### SEO
- Update meta tags in `index.html`
- Add Open Graph tags
- Create a sitemap
- Use semantic HTML

## 📧 Contact

For questions or feedback, reach out at: contact@example.com

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
