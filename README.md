# Free Agar Games

A modern, SEO-optimized website for playing free Agar.io-style games online, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design with Tailwind CSS
- SEO-optimized for US market
- TypeScript for type safety
- shadcn/ui components for consistent UI
- Fast performance with Next.js 15 App Router
- Dark mode support

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- pnpm (recommended)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ken-fs/freeagargames.git
cd freeagargames
```

2. Install dependencies:

```bash
pnpm install
```

3. Copy environment variables:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
freeagargames/
├── app/                # Next.js App Router
│   ├── layout.tsx     # Root layout with SEO metadata
│   ├── page.tsx       # Homepage
│   └── globals.css    # Global styles with Tailwind
├── components/        # React components
│   └── ui/           # shadcn/ui components
├── lib/              # Utility functions
│   └── utils.ts      # cn() helper for Tailwind
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
├── constants/        # App constants
└── public/           # Static assets
```

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript type checking
```

## Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add [component-name]
```

## SEO Optimization

This project is optimized for US market with:

- Comprehensive metadata configuration
- OpenGraph and Twitter cards
- Semantic HTML structure
- Optimized for search engines
- Fast loading times

## Deployment

### Deploy on Vercel

The easiest way to deploy is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ken-fs/freeagargames)

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any platform supporting Next.js

## Environment Variables

See `.env.example` for all available environment variables.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For support, please open an issue on GitHub.

---

Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)
