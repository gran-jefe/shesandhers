# She's & Hers — Website Build Briefing (Production Grade)

# Paste this entire file into Claude Code in VS Code.

# This website must feel warm, homely, feminine, and premium.

# Like walking into a beautiful boutique. Not cold. Not corporate.

---

## Project Setup

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir
npm install framer-motion
npm install next-themes
npm install lucide-react
```

**Font setup** — in `src/app/layout.tsx` use `next/font/google`:

```ts
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});
```

Apply both variables to `<html>` tag.

- `--font-playfair` → all headings, hero text, CEO quote, section titles
- `--font-lato` → all body text, nav links, buttons, descriptions

---

## Tailwind Config

```js
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        lato:     ['var(--font-lato)', 'sans-serif'],
      },
      colors: {
        sh: {
          base:    '#1A0A14',
          deep:    '#2E1025',
          plum:    '#8B1A6B',
          magenta: '#C4527A',
          rose:    '#E8A0B4',
          gold:    '#C4952A',
          blush:   '#FDF6FB',
          petal:   '#F5E6F0',
          border:  '#F0D0E0',
          muted:   '#8B4A6B',
          white:   '#FFFFFF',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float':   'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

---

## Theme System

```tsx
// src/app/providers.tsx
"use client";
import { ThemeProvider } from "next-themes";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```

Wrap `<html>` in `<Providers>` in `layout.tsx`. Set `suppressHydrationWarning` on `<html>`.

### Theme Color Mapping

| Context        | Light Mode   | Dark Mode    |
| -------------- | ------------ | ------------ |
| Page bg        | `sh-blush`   | `sh-base`    |
| Alt section bg | `sh-petal`   | `sh-deep`    |
| Cards          | `sh-white`   | `sh-deep`    |
| Primary text   | `sh-base`    | `sh-white`   |
| Secondary text | `sh-muted`   | `sh-rose`    |
| Borders        | `sh-border`  | `sh-deep`    |
| CTA buttons    | `sh-plum`    | `sh-plum`    |
| CTA hover      | `sh-magenta` | `sh-magenta` |
| Gold accents   | `sh-gold`    | `sh-gold`    |
| Navbar bg      | `sh-white`   | `sh-base`    |

---

## Logo SVG Component

Create `src/components/ui/Logo.tsx`.
Accepts `variant: 'dark' | 'light' | 'auto'` and `size: 'sm' | 'md' | 'lg'`.
`auto` = uses dark variant in dark mode, light variant in light mode.

The SVG uses inline paths — no external files, no img tags.

### Dark variant SVG (white/dark backgrounds):

```tsx
<svg
  viewBox="0 0 260 72"
  xmlns="http://www.w3.org/2000/svg"
  aria-label="She's and Hers Beauty Palace"
>
  <defs>
    <linearGradient id="sil-dark" x1="0%" y1="0%" x2="20%" y2="100%">
      <stop offset="0%" stopColor="#8B1A6B" />
      <stop offset="100%" stopColor="#C4527A" />
    </linearGradient>
  </defs>
  {/* Flowing hair */}
  <path
    d="M30,2 C36,0 44,2 46,9 C48,15 44,11 41,16 C46,13 50,16 48,23 C46,18 42,20 41,26 C44,23 47,25 45,32 C43,27 39,28 38,34 L32,34 C33,26 30,22 28,15 C26,8 23,5 30,2 Z"
    fill="url(#sil-dark)"
  />
  {/* Head */}
  <path
    d="M18,14 C18,6 24,2 30,3 C36,4 40,9 39,17 C38,24 34,29 28,29 C22,29 18,22 18,14 Z"
    fill="url(#sil-dark)"
  />
  {/* Neck */}
  <rect x="24" y="28" width="8" height="7" rx="3" fill="url(#sil-dark)" />
  {/* Shoulders */}
  <path
    d="M10,35 C14,32 20,31 24,32 C28,32 33,31 38,35 C40,37 38,42 36,42 L12,42 C10,42 8,37 10,35 Z"
    fill="url(#sil-dark)"
  />
  {/* Wordmark */}
  <text
    x="56"
    y="24"
    fontFamily="Georgia,'Times New Roman',serif"
    fontSize="17"
    fontWeight="700"
    fill="#C4952A"
    letterSpacing="1.5"
  >
    {"SHE'S &"}
  </text>
  <text
    x="56"
    y="44"
    fontFamily="Georgia,'Times New Roman',serif"
    fontSize="17"
    fontWeight="700"
    fill="#C4952A"
    letterSpacing="1.5"
  >
    {"HER'S"}
  </text>
  {/* Gold underline */}
  <rect
    x="56"
    y="48"
    width="108"
    height="1.5"
    rx="1"
    fill="#C4952A"
    opacity="0.45"
  />
  {/* Subtitle */}
  <text
    x="56"
    y="60"
    fontFamily="Georgia,'Times New Roman',serif"
    fontSize="8.5"
    fontWeight="400"
    fill="#E8A0B4"
    letterSpacing="3"
  >
    BEAUTY PALACE
  </text>
</svg>
```

### Light variant SVG (cream/white backgrounds):

Same SVG but:

- Wordmark `fill` → `#8B1A6B` (instead of `#C4952A`)
- Underline `fill` → `#8B1A6B`
- Subtitle `fill` → `#8B4A6B`

### Size props:

```tsx
const sizes = {
  sm: { width: 130, height: 36 },
  md: { width: 180, height: 50 },
  lg: { width: 240, height: 66 },
};
```

---

## Favicon SVG

Save this as `public/favicon.svg`:

```svg
<svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#2E1025"/>
  <rect width="64" height="64" rx="14" fill="none" stroke="#8B1A6B" stroke-width="2.5"/>
  <defs>
    <linearGradient id="sil-fav" x1="0%" y1="0%" x2="20%" y2="100%">
      <stop offset="0%" stop-color="#8B1A6B"/>
      <stop offset="100%" stop-color="#C4527A"/>
    </linearGradient>
  </defs>
  <g transform="translate(12, 6) scale(0.84)">
    <path d="M26,2 C32,0 40,2 42,9 C44,15 40,11 37,16 C42,13 46,16 44,23 C42,18 38,20 37,26 C40,23 43,25 41,32 C39,27 35,28 34,34 L28,34 C29,26 26,22 24,15 C22,8 19,5 26,2 Z" fill="url(#sil-fav)"/>
    <path d="M14,14 C14,6 20,2 26,3 C32,4 36,9 35,17 C34,24 30,29 24,29 C18,29 14,22 14,14 Z" fill="url(#sil-fav)"/>
    <rect x="20" y="28" width="8" height="7" rx="3" fill="url(#sil-fav)"/>
    <path d="M6,35 C10,32 16,31 20,32 C24,32 29,31 34,35 C36,37 34,42 32,42 L8,42 C6,42 4,37 6,35 Z" fill="url(#sil-fav)"/>
  </g>
</svg>
```

In `layout.tsx` metadata:

```tsx
icons: {
  icon: '/favicon.svg',
  apple: '/favicon.svg',
}
```

---

## globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  scroll-behavior: smooth;
}
* {
  box-sizing: border-box;
}

body {
  font-family: var(--font-lato), sans-serif;
  -webkit-font-smoothing: antialiased;
  transition:
    background-color 0.4s ease,
    color 0.3s ease;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #8b1a6b;
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #c4527a;
}

::selection {
  background: #8b1a6b;
  color: #fdf6fb;
}

*,
*::before,
*::after {
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}
```

---

## Layout Metadata — `layout.tsx`

```tsx
export const metadata = {
  title: "She's & Hers — Beauty Palace | Uyo, Nigeria",
  description:
    "She's & Hers Beauty Palace — wigs, weave-on, hair accessories, makeup, cosmetics, jewellery, bags and more. Based in Uyo, Nigeria. Serving 3,000+ clients.",
  keywords: [
    "wigs Nigeria",
    "hair accessories Uyo",
    "makeup Nigeria",
    "jewellery Uyo",
    "beauty shop Nigeria",
  ],
  openGraph: {
    title: "She's & Hers Beauty Palace",
    description: "We don't just sell beauty. We sell confidence.",
    type: "website",
  },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Products.tsx
│   │   ├── Impact.tsx
│   │   ├── About.tsx
│   │   ├── CEO.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Logo.tsx          ← SVG logo component
│       ├── ThemeToggle.tsx
│       ├── SectionLabel.tsx
│       ├── Button.tsx
│       ├── WaveDivider.tsx
│       └── AnimatedSection.tsx
└── lib/
    └── utils.ts
public/
├── favicon.svg
└── images/
    ├── banner.jpg     ← client's original flyer (used as bg in Impact section)
    ├── ceo.jpg        ← CEO photo
    ├── product-1.jpg
    ├── product-2.jpg
    ... (up to product-15.jpg)
```

---

## Design Philosophy

This website must feel:

- **Homely** — warm, inviting, like a boutique you want to stay in
- **Feminine** — soft curves, elegant serif headings, gentle spacing
- **Premium** — white space is luxury. Never cluttered.
- **Natural** — organic shapes, warm tones, nothing harsh or boxy
- **Trustworthy** — woman-owned, 3,000+ clients, real community impact

Use throughout:

- Soft organic blob shapes (CSS, very low opacity 3–5%) as background decoration
- Rounded cards (`border-radius: 1.5rem` or higher)
- SVG wave dividers between sections
- Thin gold (`sh-gold`) lines as decorative accents near headings
- NO sharp edges, NO cold grays or blues anywhere

---

## WaveDivider Component

```tsx
// src/components/ui/WaveDivider.tsx
export function WaveDivider({
  flip = false,
  colorClass = "text-white",
}: {
  flip?: boolean;
  colorClass?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full ${colorClass}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
```

Place between sections — match `colorClass` to the incoming section's bg color:

- Into white section → `text-white dark:text-sh-deep`
- Into blush section → `text-sh-blush dark:text-sh-base`
- Into petal section → `text-sh-petal dark:text-sh-deep`
- Into dark section → `text-sh-base`

---

## Navbar Component

- Sticky `top-0 z-50`
- `bg-white dark:bg-sh-base border-b border-sh-border dark:border-sh-deep`
- Scroll past 60px: `backdrop-blur-md` + subtle shadow
- Left: `<Logo variant="auto" size="md" />`
- Nav links: Home, Products, About, Our Story, Contact
  - Smooth scroll to `#products`, `#about`, `#story`, `#contact`
  - `text-sh-muted dark:text-sh-rose hover:text-sh-plum dark:hover:text-sh-magenta`
  - Active link (via Intersection Observer): `text-sh-plum dark:text-sh-magenta`
- Right: `<ThemeToggle />` + "Shop Now" button
  - `bg-sh-plum hover:bg-sh-magenta text-white rounded-full px-5 py-2 text-sm font-lato`
- Mobile: hamburger → full-screen drawer, centered nav links, elegant close button

---

## Hero Section

- `min-h-screen bg-sh-blush dark:bg-sh-base`
- Decorative background blobs (CSS, no images):
  ```tsx
  {
    /* Large blob top-right */
  }
  <div
    className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] bg-sh-plum"
    style={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%" }}
  />;
  {
    /* Small blob bottom-left */
  }
  <div
    className="absolute bottom-20 left-10 w-48 h-48 opacity-[0.05] bg-sh-gold"
    style={{ borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%" }}
  />;
  ```
- Two column desktop layout (text left, visual right), stacked mobile
- LEFT COLUMN:
  - Pill: "Beauty Palace · Uyo, Nigeria"
    - `bg-sh-petal text-sh-muted dark:bg-sh-deep dark:text-sh-rose`
  - Headline (Playfair italic):
    - Line 1: "We don't just" — `text-sh-base dark:text-white`
    - Line 2: "sell beauty." — `text-sh-base dark:text-white`
    - Line 3: "We sell _confidence._" — `text-sh-plum dark:text-sh-magenta italic`
    - `font-playfair italic font-700 text-5xl md:text-6xl lg:text-7xl leading-tight`
  - Sub: "Hair · Wigs · Accessories · Makeup · Jewellery · and more"
    - `font-lato font-light text-sh-muted dark:text-sh-rose`
  - Buttons:
    1. "Order via WhatsApp" → `https://wa.me/2348080571942`
       `bg-sh-plum hover:bg-sh-magenta text-white rounded-full`
    2. "Our Story" → smooth scroll to `#story`
       `border border-sh-plum text-sh-plum hover:bg-sh-plum hover:text-white rounded-full`
  - Trust line: "Trusted by 3,000+ women across Nigeria 🌸"
    `font-lato text-sm italic text-sh-muted dark:text-sh-rose`
- RIGHT COLUMN:
  - Large decorative circle: `border-2 border-sh-plum/20 rounded-full`
  - Inside: `bg-sh-petal dark:bg-sh-deep` with product category pills floating
  - Pills: Hair, Wigs, Makeup, Jewellery, Bags — styled in sh-plum/sh-gold
  - Apply `animate-float` to circle
- Framer Motion: headline fades up, sub 200ms delay, buttons 400ms delay

---

## Products Section

- `id="products"`
- `bg-white dark:bg-sh-deep`
- Label: "What we offer"
- Heading (Playfair): "Everything she needs, beautifully curated."
- Gold divider line (60px wide, 2px tall, sh-gold, rounded)
- 2×3 grid desktop, 1 col mobile, `gap-6`
- Each card:
  - `rounded-2xl overflow-hidden border border-sh-border dark:border-sh-deep`
  - `hover:scale-[1.03] hover:shadow-lg transition-all duration-300`
  - Top image block: product photo as background
    ```tsx
    <div className="relative h-52 overflow-hidden">
      <img
        src={`/images/product-${n}.jpg`}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-sh-base/30" />
    </div>
    ```
  - Body: `bg-white dark:bg-sh-deep p-5`
  - Name: `font-playfair font-600 text-sh-base dark:text-white`
  - Desc: `font-lato font-light text-sm text-sh-muted dark:text-sh-rose`
  - CTA: "Order via WhatsApp →" `text-sh-plum text-sm font-lato`
  - Staggered fade-up (80ms apart)

Products:

1. Hair & Wigs — image: product-1.jpg — All types of wigs and weave-on.
2. Hair Accessories — image: product-2.jpg — Clips, bands, bonnets and more.
3. Makeup & Cosmetics — image: product-3.jpg — Full glam sets and skincare.
4. Jewellery — image: product-4.jpg — Pieces that speak for themselves.
5. Bags — image: product-5.jpg — Handbags, clutches, everyday carry.
6. Wrist-watches & Sunglasses — image: product-6.jpg — The finishing touch.

---

## Impact Section (Stats)

**IMPORTANT:** This section uses the client's banner image as a background.

```tsx
<section
  id="impact"
  className="relative py-24 overflow-hidden"
  style={{
    backgroundImage: "url('/images/banner.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // parallax effect
  }}
>
  {/* Dark plum overlay — brick texture shows through subtly at ~15% */}
  <div className="absolute inset-0 bg-sh-base/85" />

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    {/* Quote */}
    <p className="font-playfair italic text-2xl md:text-3xl text-white mb-2">
      "Beauty is business, and business is ministry."
    </p>
    <p className="font-lato text-sm text-sh-gold mb-12 tracking-widest uppercase">
      — Dr. Sheila Charles, Founder
    </p>

    {/* Stats grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* 3000+ Clients, 2 Locations, ∞ Confidence, 100% Woman-Owned */}
    </div>

    {/* Community line */}
    <p className="font-lato font-light text-xs text-sh-rose/60 italic mt-8">
      Employing women · Partnering with local artisans · Keeping value in Uyo,
      Nigeria
    </p>
  </div>
</section>
```

Stats cards:

- `bg-sh-deep/80 backdrop-blur-sm rounded-2xl p-6 text-center`
- Number: `font-playfair font-800 text-4xl text-sh-gold`
- Label: `font-lato font-light text-sm text-sh-rose`

Stats: "3,000+" / Clients Served · "2" / Locations · "∞" / Confidence Sold · "100%" / Woman-Owned

---

## About Section

- `id="about" bg-sh-petal dark:bg-sh-deep`
- Two column desktop (visual left, text right), stacked mobile
- LEFT: Large rounded frame `rounded-3xl bg-sh-plum/10 dark:bg-sh-base p-8`
  - `<Logo variant="auto" size="lg" />` centered
  - Below: "Est. in Uyo, Nigeria" gold pill badge
  - Organic blob behind frame at 4% opacity
- RIGHT:
  - Label: "About us"
  - Heading (Playfair): "From a single idea to a trusted name."
  - Gold divider line
  - Body (Lato light, leading-relaxed):
    "She's & Hers began as a single idea and grew into one of Uyo's most trusted beauty destinations. Today, we serve thousands of women across Nigeria — online and in-store."
    "We carry wigs, weave-on, hair accessories, makeup, jewellery, bags, wrist-watches, sunglasses and more. Everything a woman needs to look and feel her best."
    "We don't just sell products — we build confidence, create livelihoods, and leave a legacy."
  - `text-sh-muted dark:text-sh-rose`
  - Left teal-style accent line: `border-l-2 border-sh-plum pl-5`
  - Feature pills: "Woman-Owned" + "Community Driven"

---

## CEO / Our Story Section

- `id="story"` — always dark, never changes with theme
- `bg-sh-base py-24`
- Top + bottom gold border `border-sh-gold border-t-2`
- Two column layout: quote left, CEO photo right
- LEFT:
  - Decorative `"` quote mark: `font-playfair text-9xl text-sh-gold/20`
  - Full CEO statement (Playfair italic, white, `text-lg md:text-xl leading-relaxed`):

    ```
    Through She's & Hers, I am redefining beauty and confidence
    in women, while building a business that creates economic
    opportunity and impact.

    From a single idea, I have grown She's & Hers into a trusted
    name in hair, accessories, makeup, and Jewelleries. Over the
    years, we've served 3,000+ clients, expanded to online and
    physical locations, and directly employed women and young women.

    We don't just sell hairs, makeup, and Jewelleries —
    we sell confidence. She's & Hers proves that beauty is business,
    and business is ministry.
    ```

  - Key phrase "beauty is business, and business is ministry" → `text-sh-gold`
  - Attribution:
    - 40px gold horizontal line
    - "Dr. Sheila Charles" — `font-playfair font-600 text-white text-lg`
    - "Founder & CEO, She's & Hers" — `font-lato text-sm text-sh-rose`

- RIGHT:
  - CEO photo: `<img src="/images/ceo.jpg" className="rounded-2xl object-cover w-full ring-2 ring-sh-plum/40" />`
  - Fallback if no image: `bg-sh-deep rounded-2xl flex items-center justify-center`
    with "Dr. SC" in `font-playfair text-4xl text-sh-gold`

---

## Contact Section

- `id="contact" bg-sh-blush dark:bg-sh-base`
- Label: "Get in touch"
- Heading (Playfair italic): _"Ready to look and feel your best?"_
  - "best?" → `text-sh-plum`
- Sub: "Reach out via WhatsApp to place orders, ask questions, or just say hello."
  - `font-lato font-light text-sh-muted dark:text-sh-rose`
- WhatsApp CTA button (large, rounded-full):
  - `bg-sh-plum hover:bg-sh-magenta text-white`
  - href: `https://wa.me/2348080571942`
  - Label: "Chat with us on WhatsApp"
- Social links:
  - Facebook: She's & Her's \_Beauty Palace
  - Instagram: She's & Her's \_ Beauty Palace
  - WhatsApp: 08032878736
  - `text-sh-muted dark:text-sh-rose hover:text-sh-plum transition-colors`
- Location: "📍 Uyo, Nigeria — Online & In-store"
  `font-lato text-sm italic text-sh-muted dark:text-sh-rose/60`

---

## Footer

- Always dark: `bg-sh-base`
- Top border: `border-t-2 border-sh-gold`
- Three columns:
  - Left: `<Logo variant="dark" size="sm" />` + "Beauty Palace" subtitle
  - Center: nav links (Home, Products, About, Our Story, Contact)
  - Right: social icons + WhatsApp number
- Bottom bar:
  - Left: "© 2025 She's & Hers Beauty Palace. All rights reserved."
  - Right: "Built with ❤️ by Gran Jefe" → `https://granjefe.com`
    `text-sh-rose/40 hover:text-sh-rose text-xs transition-colors`
- All text: `text-sh-rose/60 text-xs font-lato`
- Link hover: `hover:text-sh-gold transition-colors`

---

## Animation Guide (Framer Motion)

```ts
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
```

All `whileInView`: `viewport={{ once: true, margin: '-80px' }}`

---

## page.tsx Assembly

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Impact } from "@/components/sections/Impact";
import { About } from "@/components/sections/About";
import { CEO } from "@/components/sections/CEO";
import { Contact } from "@/components/sections/Contact";
import { WaveDivider } from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider colorClass="text-white dark:text-sh-deep" />
        <Products />
        <WaveDivider flip colorClass="text-sh-base" />
        <Impact />
        <WaveDivider colorClass="text-sh-petal dark:text-sh-deep" />
        <About />
        <WaveDivider flip colorClass="text-sh-base" />
        <CEO />
        <WaveDivider colorClass="text-sh-blush dark:text-sh-base" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

---

## Build Order

1. `globals.css` + `tailwind.config.ts` + `providers.tsx` + `layout.tsx`
2. `Logo.tsx` (SVG embedded) + `favicon.svg` in `/public`
3. `ThemeToggle.tsx` + `Button.tsx` + `SectionLabel.tsx` + `WaveDivider.tsx` + `AnimatedSection.tsx`
4. `Navbar.tsx` — test both themes + mobile menu
5. `Hero.tsx` — test animations + both themes
6. `Products.tsx`
7. `Impact.tsx` — confirm banner.jpg is in `/public/images/`
8. `About.tsx`
9. `CEO.tsx` — confirm ceo.jpg is in `/public/images/`
10. `Contact.tsx`
11. `Footer.tsx`
12. Wire `page.tsx` with WaveDividers
13. Light mode check — every section
14. Dark mode check — every section
15. Mobile check: 375px, 768px, 1280px
16. `npm run build` — zero errors, zero warnings

---

## Final Checklist

- [ ] Logo SVG renders correctly at all sizes in both themes
- [ ] Favicon shows in browser tab
- [ ] Fonts load: Playfair Display (headings) + Lato (body)
- [ ] Wave dividers flow naturally between all sections
- [ ] Banner image shows in Impact section with plum overlay
- [ ] CEO photo renders with ring border
- [ ] WhatsApp button links to wa.me/2348080571942
- [ ] All social links are correct
- [ ] Dark mode feels rich, warm, premium
- [ ] Light mode feels warm blush — NOT cold white
- [ ] Impact + CEO sections always dark regardless of theme
- [ ] Theme toggle smooth — no flash on load
- [ ] Navbar sticky + scroll behavior works
- [ ] Mobile hamburger menu works cleanly
- [ ] All product images load correctly
- [ ] "Built with ❤️ by Gran Jefe" in footer
- [ ] `npm run build` passes cleanly
- [ ] No console errors

---

## A Note on Feel

Dr. Sheila Charles built this from a single idea. She has served 3,000+ women,
employed people, partnered with local artisans, and created a legacy in Uyo.

Every woman who visits this website should feel seen, welcomed, and beautiful.

Warm. Homely. Natural. Premium. That is the brief.
