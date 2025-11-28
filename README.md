# Live Hindustan - News Portal Clone

A Next.js-based news portal that replicates the core features of LiveHindustan.com.

## 🎯 Features

### 1. **Layout & UI**
- Header with date, newsletter subscription, and category navigation
- Featured articles section with beautiful card design
- Main news feed with article listings
- Sidebar with "Most Read" widget and newsletter signup
- Responsive footer with company info and social links
- Dark-themed color scheme matching LiveHindustan (Primary Red: #C60C30)

### 2. **Data Source**
- Mock JSON data for 6 articles with Hindi content
- Easy to replace with NewsAPI or any real API
- Articles include: title, description, content, image, category, author, publish date, read time

### 3. **Next.js Features Implemented**

#### Data Fetching Strategy: **Incremental Static Regeneration (ISR)**
**Why ISR?** 
- Home page: Can remain static for 60 seconds, then regenerate on-demand
- Better than SSR for news sites (fast initial load, fresh content)
- Better than SSG alone (no need to rebuild entire app for content updates)
- Perfect for news content that updates frequently but doesn't need real-time updates

#### Dynamic Routing
- `/article/[id]` - Individual article pages
- `/` - Home page with category filtering via query params
- 404 page with beautiful error message

#### Image Optimization
- Next.js `<Image>` component for all article images
- Automatic optimization for different screen sizes
- Remote images from Unsplash CDN

#### Responsive Design
- Mobile-first approach with TailwindCSS
- Tested breakpoints: mobile, tablet, desktop
- Responsive navigation and grid layouts

### 4. **SEO Considerations**
- Meta tags for home page and article pages
- OpenGraph tags for social sharing
- Twitter card data
- Structured meta descriptions
- Proper HTML semantics

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Font**: System fonts (optimized)
- **Image Hosting**: Unsplash (for demo purposes)

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── not-found.tsx        # 404 page
│   └── article/[id]/
│       └── page.tsx         # Individual article page
├── components/
│   ├── ArticleCard.tsx      # Article card component
│   ├── Header.tsx           # Header component
│   └── Footer.tsx           # Footer component
├── lib/
│   └── mockData.ts          # Mock article data & API functions
├── types/
│   └── article.ts           # TypeScript interfaces
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📱 Features Demo

### Home Page (`/`)
- Featured articles in a 3-column grid
- Main news feed with article cards
- Category filtering via query parameters (e.g., `/?category=दिल्ली`)
- Sidebar with most-read articles
- Newsletter subscription widget

### Article Page (`/article/[id]`)
- Full article display with image
- Author and publication date
- Read time estimate
- Share buttons
- Breadcrumb navigation
- Related articles placeholder

### Navigation
- Category links in header
- Sticky header on scroll
- Mobile-responsive menu

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#C60C30',      // Main red color
  secondary: '#1a1a1a',    // Dark background
}
```

### Add Real Articles
Replace mock data in `src/lib/mockData.ts` with API calls:
```typescript
async function getAllArticles() {
  const response = await fetch('YOUR_API_URL');
  return response.json();
}
```

### Use NewsAPI
```bash
npm install axios
```

Replace `src/lib/mockData.ts` with NewsAPI integration:
```typescript
import axios from 'axios';

export async function getAllArticles() {
  const { data } = await axios.get('https://newsapi.org/v2/top-headlines', {
    params: {
      country: 'in',
      language: 'hi',
      apiKey: process.env.NEXT_PUBLIC_NEWSAPI_KEY
    }
  });
  return data.articles;
}
```

## 📊 Performance Optimizations

1. **Image Optimization**: Next.js Image component with automatic WebP conversion
2. **Code Splitting**: Automatic per-route splitting
3. **Font Optimization**: System fonts (no external font downloads)
4. **Incremental Static Regeneration**: Fresh content without full rebuilds
5. **CSS Optimization**: TailwindCSS with PurgeCSS

## 🔐 Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_NEWSAPI_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📝 License

MIT

## 🤝 Contributing

Feel free to fork and create pull requests for improvements!

## 📧 Support

For issues and questions, please create an issue in the repository.
