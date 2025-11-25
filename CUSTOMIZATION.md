# Customization Examples

Quick code snippets for common customizations.

## 🎨 Change Primary Color

**File:** `tailwind.config.js`

```js
// Change from blue to purple
primary: {
  50: '#faf5ff',
  100: '#f3e8ff',
  200: '#e9d5ff',
  300: '#d8b4fe',
  400: '#c084fc',
  500: '#a855f7',  // Main color
  600: '#9333ea',
  700: '#7e22ce',
  800: '#6b21a8',
  900: '#581c87',
},
```

Or use a single color and let Tailwind generate shades:
```js
primary: {
  DEFAULT: '#a855f7',
}
```

## 🖼️ Add Your Project

**File:** `src/components/sections/Projects.jsx`

```jsx
const projects = [
  {
    title: 'My Awesome App',
    description: 'A full-stack application built with React and Node.js...',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/assets/my-project.jpg', // or 'https://...'
    github: 'https://github.com/yourusername/project',
    demo: 'https://myproject.com',
  },
  // ... more projects
]
```

## 📧 Connect Real Contact Form

### Option 1: EmailJS (Free)

1. Sign up at https://www.emailjs.com/
2. Create email service and template
3. Update Contact.jsx:

```jsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
  } catch (error) {
    setSubmitStatus('error')
  }
  
  setIsSubmitting(false)
}
```

### Option 2: Formspree (Even Easier)

```jsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  onSubmit={handleSubmit}
>
  {/* ... form fields */}
</form>
```

## 🔗 Update Social Links

**File:** `src/components/Footer.jsx`

```jsx
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourprofile" ...>
<a href="mailto:your.email@example.com" ...>
```

**File:** `src/components/sections/Hero.jsx`

Add social icons to hero:
```jsx
import { Github, Linkedin, Twitter } from 'lucide-react'

// In the Hero component
<div className="flex gap-4 justify-center mt-6">
  <a href="https://github.com/yourusername" className="...">
    <Github size={24} />
  </a>
  <a href="https://linkedin.com/in/yourprofile" className="...">
    <Linkedin size={24} />
  </a>
  <a href="https://twitter.com/yourhandle" className="...">
    <Twitter size={24} />
  </a>
</div>
```

## 📊 Update Skills

**File:** `src/components/sections/Skills.jsx`

```jsx
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },       // 0-100
      { name: 'Vue.js', level: 75 },
      { name: 'TypeScript', level: 85 },
      // Add your skills here
    ],
  },
  // ... more categories
]
```

## 🌙 Add Dark/Light Mode Toggle

**File:** `src/components/Navigation.jsx`

```jsx
import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <nav>
      {/* ... other nav items */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded-lg hover:bg-white/10"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  )
}
```

## 📝 Add Blog Section

Create `src/components/sections/Blog.jsx`:

```jsx
import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'

const Blog = () => {
  const posts = [
    {
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React...',
      date: '2024-11-20',
      readTime: '5 min read',
      slug: 'getting-started-react',
    },
    // ... more posts
  ]

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Latest <span className="text-gradient">Articles</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <div className="flex gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {post.readTime}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="text-primary-400 hover:text-primary-300"
              >
                Read more →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
```

Then add to `App.jsx`:
```jsx
import Blog from './components/sections/Blog'

// In the App component
<ScrollReveal>
  <Blog />
</ScrollReveal>
```

## 🎭 Customize Cursor Blob

**File:** `src/components/effects/CursorBlob.jsx`

```jsx
// Change blob color
<div className="... bg-purple-500 ..." /> // Change from primary-500

// Change blob size
<div className={`... ${isPointer ? 'w-16 h-16' : 'w-8 h-8'}`} />

// Disable blend mode
<div className="fixed pointer-events-none z-50"> // Remove mix-blend-difference
```

## ✨ Adjust Particle Count

**File:** `src/components/effects/ParticleHero.jsx`

```jsx
const particleCount = useMemo(() => {
  // Increase/decrease particle count
  return window.innerWidth < 768 ? 50 : 100  // was 30 : 50
}, [])
```

## 📱 Change Mobile Breakpoint

**File:** `tailwind.config.js`

```jsx
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',  // Change this
    'lg': '1024px',
    'xl': '1280px',
  }
}
```

## 🎨 Add Custom Font

1. Import in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.js`:
```js
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
}
```

## 🖼️ Optimize Images

### Use Next-Gen Formats
```jsx
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" loading="lazy" />
</picture>
```

### Responsive Images
```jsx
<img
  srcSet="
    image-320.jpg 320w,
    image-640.jpg 640w,
    image-1024.jpg 1024w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  src="image-640.jpg"
  alt="Description"
  loading="lazy"
/>
```

## 🔍 Add SEO Meta Tags

**File:** `index.html`

```html
<head>
  <meta name="description" content="Your portfolio description">
  <meta name="keywords" content="web developer, react, portfolio">
  <meta name="author" content="Your Name">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yoursite.com">
  <meta property="og:title" content="Your Name - Web Developer">
  <meta property="og:description" content="Your description">
  <meta property="og:image" content="https://yoursite.com/og-image.jpg">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://yoursite.com">
  <meta property="twitter:title" content="Your Name - Web Developer">
  <meta property="twitter:description" content="Your description">
  <meta property="twitter:image" content="https://yoursite.com/twitter-image.jpg">
</head>
```

## 📊 Add Google Analytics

**File:** `index.html`

```html
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

## 🚀 Bonus: Add Loading Screen

Create `src/components/LoadingScreen.jsx`:

```jsx
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 500)
          return 100
        }
        return prev + 10
      })
    }, 100)
    
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gradient mb-4">Loading...</h1>
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-primary-500"
          />
        </div>
        <p className="mt-4 text-gray-400">{progress}%</p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
```

Use in `App.jsx`:
```jsx
const [isLoading, setIsLoading] = useState(true)

{isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
```

---

For more customizations, check the component files - they're well-commented!
