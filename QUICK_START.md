# 🚀 Quick Start Guide

## Installation & Setup (< 5 minutes)

### 1. Navigate to Project Directory
```bash
cd d:\Velasco
```

### 2. Install Dependencies (Already Done ✅)
```bash
npm install
```
All required packages are already installed:
- React 19.2.3
- Tailwind CSS 4.1.18
- Framer Motion 12.27.0
- Vite 6.4.1
- TypeScript 5.9.3

### 3. Start Development Server
```bash
npm start
```
or
```bash
npm run dev
```

**Output:**
```
VITE v6.4.1 ready in 376 ms

➜  Local:   http://localhost:3000/
➜  press h + enter to show help
```

Visit **http://localhost:3000/** in your browser

### 4. Make It Your Own (10 minutes)

#### Essential Changes:
1. **Update Your Name** in `src/components/HeroSection.tsx`
2. **Update Email** in `src/components/ContactSection.tsx`
3. **Add Your Projects** in `src/components/ProjectsSection.tsx`
4. **Update Skills** in `src/components/SkillsSection.tsx`
5. **Change Colors** in `tailwind.config.js`

#### See Changes Instantly
The development server has hot-reload enabled. Changes appear immediately in your browser!

### 5. Build for Production
```bash
npm run build
```

Creates optimized production build in `dist/` folder:
- Minified CSS: 24.89 kB (gzipped: 5.20 kB)
- Minified JS: 344.00 kB (gzipped: 107.78 kB)

### 6. Preview Production Build
```bash
npm run preview
```

## 📋 File Locations

| File | Purpose | Edit For |
|------|---------|----------|
| `HeroSection.tsx` | Hero Section | Your name, tagline |
| `AboutSection.tsx` | About Section | Bio, stats |
| `SkillsSection.tsx` | Skills Section | Skills, proficiency |
| `ProjectsSection.tsx` | Projects | Your projects |
| `ContactSection.tsx` | Contact Form | Email, location |
| `Navbar.tsx` | Navigation | Nav items |
| `Footer.tsx` | Footer | Footer links |
| `tailwind.config.js` | Colors | Theme colors |
| `index.css` | Global Styles | Font, custom CSS |

All files are in `src/components/`

## 🎨 Quick Color Change

Edit `tailwind.config.js` line 5-8:

```js
colors: {
  primary: '#6366f1',      // Blue (change this)
  secondary: '#ec4899',    // Pink (or this)
  dark: '#0f172a',         // Background
  light: '#f8fafc',        // Text
},
```

## 📱 What's Included

✅ **Responsive Design** - Works on all devices
✅ **Smooth Animations** - Framer Motion powered
✅ **Animated Background** - Gradient + particles
✅ **Modern UI** - Glass morphism effects
✅ **Dark Theme** - Eye-friendly colors
✅ **SEO Ready** - Meta tags included
✅ **TypeScript** - Type-safe code
✅ **Fast** - Optimized with Vite

## 🔗 Live Demo Features

Try these interactions:
- 🎯 Click navbar items to smooth scroll
- 🖱️ Hover over buttons and cards
- 📱 Resize browser to see responsive layout
- 🎬 Scroll down to see scroll animations
- 🌈 Notice gradient background movement

## 🚀 Deploy in 1 Minute

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```
Follow prompts - done!

### Netlify
```bash
npm run build
# Drag & drop `dist/` folder to Netlify
```

### GitHub Pages
```bash
git init
git add .
git commit -m "Portfolio"
git remote add origin <your-repo>
git push -u origin main
# Enable Pages in GitHub settings
```

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Change port in `vite.config.ts` |
| Animations choppy | Clear cache, check GPU settings |
| Images not showing | Use full URLs, not relative paths |
| TypeScript errors | Run `npm install` again |

## 📚 Next Level Customization

- Add dark/light mode toggle
- Integrate contact form with backend
- Add blog section
- Add testimonials
- Multi-language support

See `CUSTOMIZATION_GUIDE.md` for detailed instructions.

## 📞 Commands Reference

```bash
npm start        # Start dev server
npm run dev      # Same as above
npm run build    # Build for production
npm run preview  # Preview production build
npm install      # Install dependencies
```

## ✨ You're All Set!

**Your portfolio is ready. Time to customize it!**

1. Update your information
2. Add your projects
3. Deploy
4. Share the link

**Happy coding! 🚀**

---

**Next:** Open `CUSTOMIZATION_GUIDE.md` for detailed customization instructions.
