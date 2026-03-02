# FieldMatrix AI — Landing Page

Production landing page for [agents.fieldmatrix.ai](https://agents.fieldmatrix.ai). Built with Next.js 14, TypeScript, Tailwind CSS, and Stripe.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Payments:** Stripe Checkout (subscription mode)
- **Font:** Bebas Neue (display), Inter (body)

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Edit .env.local with your Stripe keys

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stripe Setup

1. Create a [Stripe account](https://dashboard.stripe.com/register)
2. Create four recurring products/prices in the Stripe Dashboard:
   - Starter: $149/mo
   - Pro: $299/mo
   - Business: $599/mo
   - Enterprise: $1,499/mo
3. Replace the placeholder `price_*_monthly` IDs in `app/page.tsx` with your real Stripe price IDs
4. Add your API keys to `.env.local`

## Deployment

```bash
npm run build
npm start
```

Deploy to Vercel, AWS, or any Node.js hosting platform.

## Sections

- **Hero** — Headline, CTA, stats bar
- **How It Works** — 4-step process
- **Pricing** — 4 tiers with Stripe Checkout integration
- **Use Cases** — 6 operational domains
- **FAQ** — Expandable accordion
- **Footer** — Navigation, legal links

## License

Proprietary. All rights reserved.
