# Kushal Therokar - Portfolio Website

A modern, dark-themed personal portfolio website showcasing Kushal Therokar's expertise in Data Science, Machine Learning, and Explainable AI research.

## 🌟 Features

- **Modern Dark Theme**: Sleek dark design with red accent colors (#EF4444)
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth Framer Motion animations and micro-interactions
- **Project Showcase**: Filterable project grid with detailed case studies
- **Professional Timeline**: Experience section with vertical timeline
- **Contact Integration**: Working contact form with validation
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Performance Optimized**: Built with Vite for fast loading and optimal performance

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Static hosting ready

## 📁 Project Structure

```
kushal-portfolio/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   ├── sections/              # Page sections
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── Timeline.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ProjectModal.jsx
│   ├── data/
│   │   └── portfolio-data.js      # All content data
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Design System

### Colors
- **Background**: `#0f0f0f` (Dark)
- **Card Background**: `#1a1a1a`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a1a1aa`
- **Accent**: `#ef4444` (Red)
- **Border**: `#27272a`

### Typography
- **Font Family**: Inter (system font stack)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with proper line height

### Components
- **Buttons**: Multiple variants (primary, secondary, ghost)
- **Cards**: Consistent padding and hover effects
- **Badges**: Skill tags with hover animations
- **Timeline**: Vertical timeline with animated indicators

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kushal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Sections Overview

### 1. Hero Section
- Dynamic introduction with animated profile image
- Call-to-action buttons (View Projects, Download CV)
- Social media links
- Achievement statistics pills

### 2. About Section
- Personal story and current role
- Education cards with GPA and honors
- Academic focus description
- Sports and interests

### 3. Skills Section
- Categorized skill groups:
  - ML & DL (Machine Learning & Deep Learning)
  - Python & Libraries
  - XAI (Explainable AI)
  - NLP & LLMs
  - Cloud & DevOps
- Interactive skill badges with hover effects

### 4. Experience Section
- Vertical timeline layout
- Professional roles with descriptions
- Company information and duration
- Key achievements and responsibilities

### 5. Projects Section
- Filterable project grid by category
- Project cards with technology stacks
- Detailed case study modals
- Live demo and code links

### 6. Contact Section
- Contact form with validation
- Direct contact information
- Social media links
- Availability status indicators

## 🎯 Content Management

All content is centralized in `src/data/portfolio-data.js`:

- **Personal Information**: Name, title, bio, contact details
- **Education**: Degrees, institutions, GPAs, honors
- **Skills**: Categorized technical skills
- **Experience**: Professional roles and achievements
- **Projects**: Portfolio projects with detailed information

To update content, simply modify the data in this file.

## 🔧 Customization

### Changing Colors
Update the color scheme in `src/App.css`:

```css
:root {
  --background: 15 15 15;        /* Dark background */
  --foreground: 255 255 255;     /* White text */
  --accent: 239 68 68;           /* Red accent */
  /* ... other colors */
}
```

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and add to `src/App.jsx`
3. Update navigation in `src/components/Navigation.jsx`

### Modifying Animations
Framer Motion animations are configured in each component. Common patterns:

```jsx
// Fade up on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

## 🚀 Deployment

### Static Hosting (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to any static hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront

### Environment Variables
No environment variables required for basic functionality.

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~383KB (gzipped: ~120KB)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Focus indicators
- Screen reader friendly

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Semantic HTML structure
- Fast loading times

## 📄 License

This project is created for Kushal Therokar's personal portfolio. All rights reserved.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please contact Kushal Therokar directly.

## 📞 Support

For any questions or support, please contact:
- Email: kushaltherokar1010@gmail.com
- LinkedIn: [linkedin.com/in/kushaltherokar](https://linkedin.com/in/kushaltherokar)
- GitHub: [github.com/kushaltherokar](https://github.com/kushaltherokar)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion

