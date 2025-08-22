# ChaoticTanx Marketing Website

A modern, responsive marketing website for the ChaoticTanx mobile game built with [Astro](https://astro.build) and deployed to GitHub Pages.

## 🎮 About ChaoticTanx

ChaoticTanx is a physics-based artillery tank warfare game featuring:
- Destructible terrain
- Strategic combat mechanics
- Multiple weapon types
- Smart AI opponents
- Intuitive touch controls

## 🚀 Website Features

- **Responsive Design**: Optimized for all devices
- **Modern Styling**: Dark theme with orange/red gradient accents
- **Performance Optimized**: Static site generation with Astro
- **SEO Friendly**: Complete meta tags and OpenGraph support
- **Smooth Animations**: CSS animations and scroll effects
- **Professional Layout**: Hero section, features, screenshots, and download areas

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/chaotictanx/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
/
├── public/
│   └── favicon.svg          # Custom ChaoticTanx favicon
├── src/
│   └── pages/
│       └── index.astro      # Main landing page
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages deployment
└── astro.config.mjs         # Astro configuration
```

## 🌐 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions:

1. **Push to main branch** triggers the deployment workflow
2. **Build process** runs `npm run build` and generates static files
3. **Deploy to Pages** uploads the built site to GitHub Pages

### Custom Domain Deployment

The website is deployed using the ChaoticTanx GitHub organization:

1. **GitHub Organization**: Repository at `https://github.com/chaotictanx/website`
2. **GitHub Pages**: Enable GitHub Pages with source set to "GitHub Actions"
3. **Organization Pages**: Site available at `https://chaotictanx.github.io`
4. **HTTPS**: GitHub automatically provisions SSL certificates
5. **Deploy**: Push to main branch to deploy

### Custom Domain (Optional)
To use a custom domain like `chaotictanx.com`:
1. Update the CNAME file with your domain
2. Configure DNS to point to `chaotictanx.github.io`
3. GitHub Pages will handle SSL and routing automatically

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#ff6b35`
- **Primary Red**: `#c41e3a` 
- **Accent Orange**: `#ff8c42`
- **Dark Background**: `#0a0a0a`
- **Dark Cards**: `#1a1a1a`
- **Text Light**: `#ffffff`
- **Text Muted**: `#cccccc`

### Typography
- **Headers**: Orbitron (sci-fi/tech theme)
- **Body**: Inter (clean, readable)

### Layout Sections
1. **Hero**: Large title, description, call-to-action buttons
2. **Features**: 6-card grid showcasing game mechanics
3. **Screenshots**: Visual preview placeholders
4. **Download**: App store links and platform availability
5. **Footer**: Contact links and copyright

## 📱 Responsive Design

- **Desktop**: Full layout with animations
- **Tablet**: Adapted grid layouts
- **Mobile**: Stacked single-column layout
- **Touch-Friendly**: Large buttons and touch targets

## 🔧 Customization

### Adding Screenshots
Replace the placeholder emoji in the screenshots section with actual game images:

```html
<div class="screenshot-placeholder">
  <img src="/screenshot1.png" alt="Game Screenshot" />
</div>
```

### Updating Links
Update platform links in the download section when the game is published:

```html
<a href="https://apps.apple.com/app/chaotictanx" class="platform-badge">
  <span>📱</span> iOS
</a>
```

### SEO Optimization
Update meta tags in the `<head>` section for better search engine visibility and social media sharing.

## 📄 License

This website is part of the ChaoticTanx project. See the main game repository for license information.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the website.

---

Built with ❤️ using [Astro](https://astro.build), deployed on [GitHub Pages](https://pages.github.com)
