# 🚀 Development Workflow Guide

A complete guide for developing, testing, and deploying your portfolio website.

## 📋 Table of Contents
- [Local Development Setup](#local-development-setup)
- [Making Changes](#making-changes)
- [Testing Locally](#testing-locally)
- [Committing Changes](#committing-changes)
- [Deploying to Production](#deploying-to-production)
- [Troubleshooting](#troubleshooting)
- [Useful Commands](#useful-commands)

---

## 🛠️ Local Development Setup

### Prerequisites
- **Node.js 22+** (check with `node --version`)
- **pnpm** package manager (check with `pnpm --version`)
- **Git** (check with `git --version`)

### Initial Setup
```bash
# Clone your repository (if starting fresh)
git clone https://github.com/Kushal-11/my-portfolio.git
cd my-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Your site will be available at: **http://localhost:5173/**

---

## ✏️ Making Changes

### 1. Create a New Branch (Optional but Recommended)
```bash
# Create and switch to a new feature branch
git checkout -b feature/your-feature-name

# Or just work on main branch for quick changes
git checkout main
```

### 2. Make Your Code Changes
Edit files in your preferred code editor:
- **Components**: `src/components/`
- **Styles**: `src/App.css` or component-specific CSS
- **Data**: `src/data/portfolio-data.js`
- **Config**: `src/config/`

### 3. File Structure Overview
```
src/
├── components/           # React components
│   ├── sections/        # Page sections (Hero, About, etc.)
│   ├── ui/              # Reusable UI components
│   ├── ThemeToggle.jsx  # Theme switching component
│   └── ...
├── config/              # Configuration files
│   ├── themes.js        # Theme definitions
│   └── services.js      # Service configurations
├── data/                # Static data
│   └── portfolio-data.js # Your portfolio content
└── ...
```

---

## 🧪 Testing Locally

### 1. Start Development Server
```bash
# Start the dev server (with hot reload)
pnpm run dev
```
- Opens at **http://localhost:5173/**
- **Auto-reloads** when you save changes
- **Hot module replacement** for instant updates

### 2. Test Your Changes
- ✅ **Theme switching** - Try all 6 themes
- ✅ **Responsive design** - Test on different screen sizes
- ✅ **Navigation** - Check all menu items work
- ✅ **Animations** - Verify smooth transitions
- ✅ **Content** - Review all text and links
- ✅ **Performance** - Check for any lag or issues

### 3. Build and Preview Production Version
```bash
# Build for production
pnpm run build

# Preview the production build locally
pnpm run preview
```
This tests the exact version that will be deployed.

### 4. Run Linting (Optional)
```bash
# Check for code issues
pnpm run lint
```

---

## 💾 Committing Changes

### 1. Check What Changed
```bash
# See all modified files
git status

# See detailed changes
git diff
```

### 2. Stage Your Changes
```bash
# Stage all changes
git add .

# Or stage specific files
git add src/components/YourComponent.jsx
git add src/data/portfolio-data.js
```

### 3. Commit with Descriptive Message
```bash
# Commit with a clear, descriptive message
git commit -m "feat: Add new project to portfolio

- Added XYZ project with description and tech stack
- Updated project filtering to include new category
- Optimized project card hover animations
```

#### Commit Message Guidelines:
- **feat:** New features
- **fix:** Bug fixes
- **style:** Visual/CSS changes
- **refactor:** Code improvements
- **docs:** Documentation updates
- **perf:** Performance improvements

---

## 🚀 Deploying to Production

### 1. Push to GitHub
```bash
# Push to main branch (triggers automatic deployment)
git push origin main

# Or push feature branch first, then merge
git push origin feature/your-feature-name
```

### 2. Automatic Deployment
- **Vercel automatically deploys** when you push to `main` branch
- Check deployment status at: https://vercel.com/dashboard
- Deployment typically takes **2-3 minutes**

### 3. Monitor Deployment
1. Go to your **Vercel Dashboard**
2. Find your portfolio project
3. Check the **"Deployments"** tab
4. Wait for green ✅ "Ready" status

### 4. Verify Live Site
Once deployed:
- Visit your live URL
- Test all functionality
- Check different devices/browsers
- Verify theme switching works
- Test any new features

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### **Build Fails on Vercel**
```bash
# Test build locally first
pnpm run build

# If it fails locally, fix issues before pushing
# If it works locally but fails on Vercel, check:
# - vercel.json configuration
# - Node.js version compatibility
# - Package manager settings
```

#### **Dependencies Issues**
```bash
# Clear and reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### **Theme System Issues**
- Check browser console for JavaScript errors
- Verify localStorage is working (theme persistence)
- Test in incognito mode to rule out cached issues

#### **Performance Issues**
```bash
# Analyze bundle size
pnpm run build

# Check the generated dist/ folder sizes
# Large files indicate optimization opportunities
```

### **Emergency Rollback**
If something breaks in production:
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or rollback to specific commit
git reset --hard COMMIT_HASH
git push origin main --force
```

---

## 📚 Useful Commands

### Development
```bash
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run preview      # Preview production build
pnpm run lint         # Check code quality
```

### Git
```bash
git status            # Check file changes
git diff              # See detailed changes
git log --oneline     # View commit history
git checkout main     # Switch to main branch
git pull origin main  # Get latest changes
```

### Project Structure
```bash
# Find specific files
find src -name "*.jsx" | grep -i theme

# Search for text in files
grep -r "your-search-term" src/

# Count lines of code
find src -name "*.jsx" -exec wc -l {} + | tail -1
```

---

## 🎯 Quick Development Workflow

For quick changes, follow this streamlined process:

```bash
# 1. Start development
pnpm run dev

# 2. Make your changes in code editor
# 3. Test in browser at localhost:5173
# 4. When satisfied:

git add .
git commit -m "your descriptive message"
git push origin main

# 5. Check Vercel dashboard for deployment status
# 6. Verify changes on live site
```

---

## 🔗 Important Links

- **Live Site**: [Your Vercel URL]
- **GitHub Repo**: https://github.com/Kushal-11/my-portfolio
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Local Dev**: http://localhost:5173/

---

## 📝 Notes

- Always test locally before pushing to production
- Keep commits small and focused on one feature/fix
- Use descriptive commit messages for future reference
- Monitor Vercel dashboard for deployment status
- Test theme switching and responsive design regularly

---

**Happy coding! 🎨✨**