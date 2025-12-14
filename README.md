# soldunov.dev

Personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Sanity CMS. Features a modern, accessible design with schema.org structured data, SEO optimization, and smooth animations.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **State Management**: Jotai
- **CMS**: Sanity v4
- **Animation**: Motion (Framer Motion)
- **Package Manager**: Bun
- **Linting/Formatting**: Biome
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## ✨ Features

### SEO & Metadata
- **Schema.org structured data** (JSON-LD) for Person, WebSite, WebPage, and SoftwareApplication
- Dynamic metadata generation with Open Graph images
- Sitemap generation
- Proper `metadataBase` configuration using Vercel environment variables

### Accessibility
- Semantic HTML structure with proper landmark regions
- Skip-to-content link
- ARIA labels and hidden decorative icons
- Proper heading hierarchy
- Keyboard navigation support

### Content Management
- Sanity CMS integration with live preview
- Visual editing support
- Custom icon picker plugin
- Orderable document lists
- Image optimization with blurhash placeholders

### Performance
- Image optimization via Next.js Image component
- Static site generation where possible
- Optimized Sanity CDN image URLs
- Smooth scroll animations with Motion

### Design
- Theme system infrastructure (provisioned but UI toggle not yet implemented)
- Grain texture background
- Custom color palette (azure-blue, strawberry-red, malachite-green)
- Responsive design
- Smooth animations and transitions

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (site)/            # Main site routes
│   │   ├── layout.tsx     # Root layout with metadata
│   │   └── [[...slug]]/   # Dynamic page routes
│   ├── (studio)/          # Sanity Studio routes
│   └── sitemap.ts         # Sitemap generation
├── components/
│   ├── elements/          # Reusable building blocks
│   ├── layout/            # Layout components (Container, Footer, Html)
│   ├── motion/            # Animation components
│   ├── sections/          # Page sections (Hero, Portfolio, Experience)
│   └── ui/                # Interactive UI components
├── lib/
│   ├── schema.org.ts      # Schema.org JSON-LD generators
│   ├── state.ts           # Jotai atoms
│   └── utils.ts           # Utility functions
├── sanity/
│   ├── lib/               # Sanity client and queries
│   └── schemas/           # Sanity schema definitions
└── styles/
    └── globals.css        # Global styles and Tailwind config
```

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh)
- Sanity account and project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd soldunov.dev
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Required environment variables:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-05-01
SANITY_API_READ_TOKEN=your-read-token
SANITY_API_WRITE_TOKEN=your-write-token
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

6. Access Sanity Studio at [http://localhost:3000/admin](http://localhost:3000/admin)

## 📝 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun run lint` - Run Biome linter
- `bun run format` - Format code with Biome

## 🌐 Environment Variables

### Vercel System Variables
The project uses Vercel's system variables for URL detection:
- `VERCEL_ENV` - Environment (production, preview, development)
- `VERCEL_PROJECT_PRODUCTION_URL` - Production URL

### Custom Variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset name
- `NEXT_PUBLIC_SANITY_API_VERSION` - Sanity API version
- `SANITY_API_READ_TOKEN` - Sanity read token
- `SANITY_API_WRITE_TOKEN` - Sanity write token (for mutations)

## 🎨 Styling

### Tailwind CSS v4
- Custom theme variables in `src/styles/globals.css`
- Color palette: `--onyx`, `--alibaster-gray`, `--azure-blue`, `--strawberry-red`, `--malachite-green`
- Custom utilities: `leading-xtight`, `text-4.5xl`
- Use `cn()` helper from `@/lib/utils` for class merging

### Theme System
- **Status**: Infrastructure provisioned, UI toggle not yet implemented
- Theme state managed with Jotai (`themeAtom`) in `src/lib/state.ts`
- `data-theme` attribute applied via `Html` component
- CSS theme definitions for light/dark modes in `globals.css`
- Theme preference persisted to localStorage (when set)
- Currently defaults to system preference via CSS `prefers-color-scheme`

## 🔍 SEO & Structured Data

### Schema.org Implementation
- **Person schema**: Developer profile information
- **WebSite schema**: Site-wide metadata
- **WebPage schema**: Page-specific metadata
- **SoftwareApplication schema**: Portfolio projects (ready for use)

All schemas are injected as JSON-LD via the `JsonLd` component.

### Metadata
- Dynamic metadata generation in `generateMetadata()` functions
- Open Graph images from Sanity
- Proper `metadataBase` configuration
- Sitemap generation

## ♿ Accessibility

- Semantic HTML (`<main>`, `<section>`, `<article>`, `<footer>`)
- Skip-to-content link
- ARIA labels for interactive elements
- `aria-hidden` on decorative icons
- Proper heading hierarchy (h1 → h2 → h3)
- Keyboard navigation support

## 📦 Content Management

### Sanity Schema Types
- **Page**: Dynamic pages with sections
- **Route**: URL routing configuration
- **Project**: Portfolio projects
- **Technology**: Tech stack items
- **Partner**: Design partners
- **Settings**: Site-wide settings

### Sections
- `heroSection`: Hero section with image and text
- `portfolioSection`: Portfolio project listings
- `experienceSection`: Work experience and contact links

## 🚀 Deployment

### Vercel
The project is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

The project uses Vercel's system variables (`VERCEL_ENV`, `VERCEL_PROJECT_PRODUCTION_URL`) for automatic URL detection.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion Documentation](https://motion.dev)
- [Jotai Documentation](https://jotai.org)

## 📄 License

Private project - All rights reserved
