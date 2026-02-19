# Nirbhik Datta — Close-Up Card Magician

A modern, minimal website for Nirbhik Datta built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout (fonts, header, footer, grain overlay)
    page.tsx            # Home page
    globals.css         # Tailwind theme + global styles
    about/page.tsx      # About page
    performances/page.tsx # Performances gallery
    services/page.tsx   # Services detail page
    contact/page.tsx    # Contact form page
    press/page.tsx      # Press kit page
    api/contact/route.ts # Contact form API handler
  components/
    Header.tsx          # Sticky header with nav
    Footer.tsx          # Site footer
    MobileMenu.tsx      # Full-screen mobile nav
    PageTransition.tsx  # Framer Motion page wrapper
    VideoCard.tsx       # Video thumbnail card
    ServiceCard.tsx     # Service overview card
    TestimonialStrip.tsx # Testimonial grid
    ContactForm.tsx     # Contact form with validation
    SectionHeading.tsx  # Reusable section heading
    GrainOverlay.tsx    # Subtle grain texture overlay
    icons/              # SVG pip icons (Spade, Heart, Diamond, Club, Deck)
  content/
    site.ts             # ALL editable content lives here
```

## Editing Content

All site content is managed from a single file:

```
src/content/site.ts
```

This includes:

- **name, tagline, bios** — identity and copy
- **social links** — Instagram, YouTube, WhatsApp, email
- **services** — title, description, audience, duration, inclusions, requirements
- **testimonials** — quote, author, role
- **videos** — title, category, description, YouTube URL, thumbnail
- **press** — short bio, tech rider bullet points

Edit this file to update all content across the site. No database or CMS needed.

## Tech Stack

| Technology     | Purpose                    |
| -------------- | -------------------------- |
| Next.js 16     | React framework (App Router) |
| TypeScript     | Type safety                |
| Tailwind CSS 4 | Utility-first styling      |
| Framer Motion  | Subtle animations          |
| next/font      | Google Fonts (Sora + Inter)|

## Design System

- **Palette:** near-black (#0a0a0b) / charcoal / off-white with cool silver accent (#a8b4c0)
- **Typography:** Sora (headings), Inter (body)
- **Motifs:** hairline borders, subtle grain overlay, pip icons used sparingly
- **Animation:** minimal — fade/slide on entry, subtle hover lifts

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy** — no environment variables needed

The site will build and deploy automatically. Vercel will also set up preview deployments for pull requests.

## Contact Form

The contact form submits to `/api/contact`, which logs the payload to the server console and returns a success JSON response. To connect it to a real email service (e.g., Resend, SendGrid), update `src/app/api/contact/route.ts`.

## License

Private project. All rights reserved.
