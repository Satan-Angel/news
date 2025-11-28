# 📐 Project Architecture & Data Flow

## Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    NEXT.JS APPLICATION                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │               BROWSER / CLIENT                       │  │
│  │  ┌──────────────────────────────────────────────┐   │  │
│  │  │          HTML + CSS + JS Bundle             │   │  │
│  │  │  • Interactive Components                   │   │  │
│  │  │  • Event Handlers                           │   │  │
│  │  │  • Client-side Navigation                   │   │  │
│  │  └──────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ▲                                  │
│                           │ HTTP                             │
│                           ▼                                  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            NEXT.JS SERVER (Node.js)                │  │
│  │  ┌──────────────────────────────────────────────┐   │  │
│  │  │    Server Components & Data Fetching        │   │  │
│  │  │  • getStaticProps (ISR)                     │   │  │
│  │  │  • generateStaticParams                     │   │  │
│  │  │  • Server-side Rendering                    │   │  │
│  │  └──────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ▲                                  │
│                           │ Data Access                      │
│                           ▼                                  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              DATA LAYER                             │  │
│  │  ┌──────────────────────────────────────────────┐   │  │
│  │  │     src/lib/mockData.ts                     │   │  │
│  │  │  • getAllArticles()                         │   │  │
│  │  │  • getArticleById(id)                       │   │  │
│  │  │  • getArticlesByCategory(cat)               │   │  │
│  │  │                                             │   │  │
│  │  │  JSON Data Structure:                       │   │  │
│  │  │  [                                          │   │  │
│  │  │    {id, title, description, content,        │   │  │
│  │  │     image, category, author, date, time}    │   │  │
│  │  │  ]                                          │   │  │
│  │  └──────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Page Flow Diagram

```
                          ┌─────────────────┐
                          │   USER OPENS    │
                          │   http://...    │
                          └────────┬────────┘
                                   │
                    ┌──────────────┼──────────────┐
                    │              │              │
                    ▼              ▼              ▼
              ┌─────────────┐  ┌───────┐  ┌────────────┐
              │ Home Page   │  │  No   │  │  Article   │
              │     /       │  │ Match │  │  /article/1│
              └─────────────┘  └───────┘  └────────────┘
                    │                            │
                    ▼                            ▼
          ┌──────────────────────┐    ┌──────────────────┐
          │ getStaticProps       │    │ generateStaticParams
          │ (ISR - 60s)          │    │ & getStaticProps │
          │                      │    │                  │
          │ 1. Get all articles  │    │ 1. Get article   │
          │ 2. Render HTML       │    │ 2. Get metadata  │
          │ 3. Cache & serve     │    │ 3. Render HTML   │
          └──────────────────────┘    └──────────────────┘
                    │                            │
                    ▼                            ▼
          ┌──────────────────────┐    ┌──────────────────┐
          │  Featured Articles   │    │  Article Content │
          │  News Feed           │    │  Author Info     │
          │  Sidebar Widgets     │    │  Metadata        │
          │  Footer              │    │  Share Buttons   │
          └──────────────────────┘    └──────────────────┘
```

## Component Hierarchy

```
┌─ layout.tsx (Root Layout)
│  │
│  └─ page.tsx (Home Page) / article/[id]/page.tsx
│     │
│     ├─ Header.tsx
│     │  ├─ Navigation Links
│     │  ├─ Logo
│     │  └─ Newsletter CTA
│     │
│     ├─ Main Content
│     │  ├─ Featured Section
│     │  │  └─ ArticleCard.tsx (featured=true)
│     │  │     ├─ Image (Next/Image)
│     │  │     ├─ Category Badge
│     │  │     └─ Title
│     │  │
│     │  ├─ Articles List
│     │  │  └─ ArticleCard.tsx (featured=false)
│     │  │     ├─ Thumbnail
│     │  │     ├─ Title & Description
│     │  │     └─ Metadata
│     │  │
│     │  └─ Sidebar
│     │     ├─ Most Read Widget
│     │     └─ Newsletter Widget
│     │
│     └─ Footer.tsx
│        ├─ Company Info
│        ├─ Links
│        └─ Social Media
```

## Data Flow: Home Page

```
┌──────────────────────────────────────────────────────────┐
│ User visits http://localhost:3000                       │
└────────────────────┬─────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────────────────┐
│ Next.js checks if page is cached (ISR)                 │
└────────────────────┬─────────────────────────────────────┘
                     │
         ┌───────────┴────────────┐
         │ (cache valid)          │ (cache invalid)
         ▼                        ▼
    Serve cached         Call getStaticProps
    HTML instantly       ─────────────────────
                        
                        1. Call getAllArticles()
                        2. Read mock JSON
                        3. Return article data
                        4. Render JSX
                        5. Generate HTML
                        6. Cache for 60s
                        7. Serve to browser
                        
                             │
                             ▼
                        Browser receives HTML
                        ────────────────────
                        1. Parse HTML
                        2. Load CSS (Tailwind)
                        3. Load Images (Unsplash)
                        4. Interactive page ready
```

## Data Flow: Article Page

```
┌──────────────────────────────────────────────────────────┐
│ User clicks article → /article/5                        │
└────────────────────┬─────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────────────────┐
│ Build Time (during npm run build)                       │
├──────────────────────────────────────────────────────────┤
│ 1. generateStaticParams()                               │
│    └─ getAllArticles()                                  │
│       └─ Returns: [1, 2, 3, 4, 5, 6]                   │
│                                                         │
│ 2. For each ID:                                         │
│    └─ generateMetadata()                                │
│    └─ Page component renders                            │
│       └─ HTML + CSS generated                           │
│       └─ Cached in .next/                               │
└────────────────────┬─────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────────────────┐
│ User navigates to article                               │
├──────────────────────────────────────────────────────────┤
│ 1. Browser loads pre-generated HTML                     │
│ 2. CSS and images load                                  │
│ 3. Page renders instantly (< 100ms)                     │
│ 4. User reads article                                   │
└──────────────────────────────────────────────────────────┘
```

## ISR (Incremental Static Regeneration) Timeline

```
Build Time (npm run build)
    │
    ├─ Generate all static pages
    ├─ Cache in .next/ folder
    └─ Ready for deployment

Runtime (Production)
    │
    ├─ User 1 visits → serves cached HTML (instant)
    │
    ├─ User 2 visits → serves cached HTML (instant)
    │
    ├─ [60 seconds pass]
    │
    ├─ User 3 visits → regenerates in background
    │  (still serves old version while regenerating)
    │
    ├─ User 4 visits → serves fresh HTML
    │
    └─ Cycle repeats...
    
Benefits:
✅ Always fast (cached response)
✅ Always fresh (regenerates)
✅ No database needed
✅ No server load spikes
```

## File Dependencies

```
page.tsx (Home)
├─ getAllArticles() ──┐
│                    └─ mockData.ts
├─ Article interface ├─ article.ts
├─ Header ────────────┤─ Header.tsx
├─ ArticleCard ───────┤─ ArticleCard.tsx
├─ Footer ────────────┤─ Footer.tsx
└─ Styles ────────────┤─ globals.css

article/[id]/page.tsx
├─ getArticleById() ──┐
├─ generateStaticParams()
│                    └─ mockData.ts
├─ generateMetadata() ├─ article.ts
├─ Header ────────────┤─ Header.tsx
├─ Footer ────────────┤─ Footer.tsx
└─ Styles ────────────┤─ globals.css

layout.tsx
├─ globals.css
└─ Metadata

ArticleCard.tsx
├─ Image (Next.js)
├─ Link (Next.js)
└─ Article interface
```

## Technology Stack Diagram

```
┌────────────────────────────────────────────────────────┐
│                   NEXTJS 14                            │
│                                                        │
│  ┌──────────────┐        ┌──────────────────────────┐ │
│  │ React 18     │        │ Image Optimization       │ │
│  │ Server       │        │ - WebP conversion        │ │
│  │ Components   │        │ - Responsive sizing      │ │
│  └──────────────┘        │ - Lazy loading           │ │
│                          └──────────────────────────┘ │
│                                                        │
│  ┌──────────────┐        ┌──────────────────────────┐ │
│  │ Dynamic      │        │ ISR Support              │ │
│  │ Routing      │        │ - getStaticProps         │ │
│  │ [id]         │        │ - revalidate             │ │
│  └──────────────┘        └──────────────────────────┘ │
│                                                        │
└────────────────────────────────────────────────────────┘
           │
           ├─────────────────────┬─────────────────────┐
           │                     │                     │
           ▼                     ▼                     ▼
    ┌──────────────┐      ┌──────────────┐    ┌──────────────┐
    │ TypeScript   │      │ TailwindCSS  │    │ React        │
    │              │      │              │    │ (JSX)        │
    │ Type Safety  │      │ Utility CSS  │    │ Components   │
    │ IDE Support  │      │ Responsive   │    │ Reusable UI  │
    └──────────────┘      └──────────────┘    └──────────────┘
```

## Request/Response Cycle

```
┌─────────────────┐
│ Browser Request │
│ GET /article/5  │
└────────┬────────┘
         │
         ▼
┌──────────────────────────────────┐
│ Next.js Server Router            │
│ Routes to: article/[id]/page.tsx │
└────────┬─────────────────────────┘
         │
         ▼
┌──────────────────────────────────┐
│ Check Cache (.next/out/article/5)│
└────────┬─────────────────────────┘
         │
    ┌────┴────┐
    │ (cached) │ (not cached - regenerate)
    ▼          ▼
 Serve      Call Component
 HTML       ├─ getArticleById(5)
   │        │  └─ return article
   │        │
   │        ├─ generateMetadata()
   │        │
   │        ├─ Render JSX
   │        │
   │        └─ Generate HTML
   │           │
   │           └─ Cache & Serve
   │
   ▼
Browser receives HTML + CSS + Images
        │
        ▼
  Render Page
        │
        ▼
  User sees article (instant for cached pages)
```

## Build & Deployment Pipeline

```
Development
    │
    ├─ npm run dev
    │  └─ Hot reload on file changes
    │
    ▼
Testing
    │
    ├─ npm run lint
    │  └─ Check TypeScript & ESLint
    │
    ├─ Manual testing
    │  └─ Browser verification
    │
    ▼
Production Build
    │
    ├─ npm run build
    │  │
    │  ├─ TypeScript compilation
    │  ├─ Bundle JavaScript
    │  ├─ Generate static pages
    │  ├─ Optimize images
    │  └─ Generate .next/
    │
    ▼
Deploy
    │
    ├─ Vercel (recommended)
    │  └─ Auto-deploys on git push
    │
    ├─ Netlify
    │  └─ Connect GitHub repo
    │
    ├─ Docker
    │  └─ Run npm run build && npm start
    │
    └─ Manual Server
       └─ Copy .next/ + run npm start
```

---

This architecture is optimized for:
- ⚡ **Speed** - ISR + Image optimization
- 🔍 **SEO** - Server-rendered metadata
- 📱 **Responsive** - TailwindCSS breakpoints
- 🎯 **Scalability** - Can handle 1000s of articles
- 🔐 **Security** - Type-safe TypeScript
