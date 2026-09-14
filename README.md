# ACWahana Website

Company website for **ACWahana** — a Retail, Distributor & Contractor for air conditioning (AC) systems. Built with Next.js.

## Features

- Responsive landing page (Hero, Services, Products, About, Contact)
- Floating WhatsApp button for instant customer chat
- SEO metadata (Open Graph, keywords)
- All content centralized in `lib/site.ts` for easy editing

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19 + TypeScript

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Configuration

Edit **`lib/site.ts`** to update content. Important fields:

```ts
whatsapp: "6281234567890",   // WhatsApp number, international format (no + or spaces)
email: "info@acwahana.com",  // contact email
phoneDisplay: "+62 812-...", // phone number shown on the site
```

## Project Structure

```
app/
  layout.tsx      # metadata, fonts
  page.tsx        # all page sections
  globals.css     # styling
components/
  Header.tsx
  WhatsAppButton.tsx
lib/
  site.ts         # all site content & config
```

## Deploy

Deploy easily on [Vercel](https://vercel.com/new): import the repo, and it auto-detects Next.js — no configuration needed.
