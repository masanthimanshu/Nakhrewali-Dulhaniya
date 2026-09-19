# Nakhrewali Dulhaniya 🌸✨

> **Filmy Romance & Aesthetic Keepsake Gifting** — A vibrant, Bollywood-inspired Gen-Z gifting and jewelry boutique crafted for cinema-worthy romantic gestures.

[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/masanthimanshu/Nakhrewali-Dulhaniya/pulls)

---

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Design & Aesthetic Highlights](#design--aesthetic-highlights)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build & Preview](#build--preview)
- [Available Scripts](#available-scripts)
- [State Management & Routing](#state-management--routing)
- [Coupons & Promotional Codes](#coupons--promotional-codes)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

---

## About The Project

**Nakhrewali Dulhaniya** is a bespoke e-commerce gifting platform celebrating the drama, poetry, and nostalgia of classic Bollywood romance. Designed specifically for young couples, brides-to-be, and thoughtful partners seeking gifts with emotional resonance, the platform blends traditional Indian jewelry artistry with modern Gen-Z digital shopping experiences.

From iconic mirror chandbalis to poetic velvet bangles, wax-sealed love letters, and interactive gift-building tools, every touchpoint is engineered to evoke heartfelt nostalgia and joyful unboxing experiences.

---

## Key Features

### 💎 Signature Filmy Collections

- **Haye Jhumka (Collection I)**: Handcrafted mirror chandbalis, kundan drops, and meenakari statement earrings designed for celebration and dance.
- **Bole Chudiyan (Collection II)**: Velvet stacks, resham thread bangles, and latkan kadas carrying the poetic chime of traditional craftsmanship.
- **Yeh Reshmi Zulfen (Collection III)**: Silk organza oversized bows, cultured pearl hairpins, and embroidered bridal bands.
- **Dil Tu Jaan Tu (Collection IV)**: Curated keepsake trunks, wax-sealed romantic notes, and sentimental gift boxes.

### 🎁 Bespoke Hamper Studio (`HamperBuilderModal`)

- An interactive custom gift-trunk builder enabling users to select heirloom packaging (e.g., _Gulabi Velvet_, _Emerald Royal Trunk_, _Vintage Tin_).
- Live pricing calculation, product selector with multi-item bundles, and handwritten wax-sealed love note personalization.

### 🎯 Boyfriend Gifting Concierge Quiz (`GiftFinderQuizModal`)

- A playful 3-step decision engine to help boyfriends pick the ideal gift tailored to their partner's personality, relationship milestones, and aesthetic preferences.

### 🛍️ Smart Shopping Trunk & Wishlist

- Slide-over cart drawer with real-time subtotal computation, coupon discounts, and dynamic free-shipping progress indicators.
- Instant wishlist saving and one-click move-to-cart functionality.

### 📖 Immersive Product Detail Experience

- Multi-angle product photo galleries with smooth zoom preview and responsive carousel navigation.
- Curated Bollywood dialogue snippets and storytelling narratives for each piece.
- Craftsmanship highlights, styling tips, material details, customer photo reviews, and expandable FAQ accordions.

### 💳 Complete Checkout & Order Simulation

- Gifting-ready delivery address and recipient details.
- Custom love letter and wax seal personalization options.
- Order review with real-time tax and discount breakdown.
- Multi-channel payment simulation (UPI, Credit/Debit Cards, Net Banking, COD) and celebratory order confirmation screen.

---

## Design & Aesthetic Highlights

- **Romantic Color Palette**: Deep royal ruby (`#961A38`), blushing rose (`#FF4D8D`), champagne cream (`#FAF7F2`), and gilded gold accents.
- **Tailored Typography**: Editorial serif pairing featuring **Playfair Display**, **Cormorant Garamond**, and **Plus Jakarta Sans**.
- **Delightful Micro-Interactions**: Smooth entrance animations, floating badge indicators, animated marquee ticker, and custom rose-gold scrollbars.

---

## Tech Stack

| Category       | Technology                                                                     |
| :------------- | :----------------------------------------------------------------------------- |
| **Framework**  | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 8](https://vitejs.dev/) with code-splitting and asset optimization       |
| **Styling**    | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`           |
| **Routing**    | [React Router DOM v7](https://reactrouter.com/)                                |
| **Animations** | [Motion](https://motion.dev/) (Framer Motion v13)                              |
| **Icons**      | [Lucide React](https://lucide.dev/)                                            |

---

## Project Structure

```text
nakhrewali-dulhaniya/
├── .agents/                    # Agent customizations & developer skills
├── public/                     # Static public assets
├── src/
│   ├── components/             # Reusable UI elements and interactive modals
│   │   ├── AestheticLookbook.tsx
│   │   ├── AnnouncementTicker.tsx
│   │   ├── BoyfriendGuide.tsx
│   │   ├── BrandPerks.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── CategoryShowcase.tsx
│   │   ├── FaqSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GiftFinderQuizModal.tsx
│   │   ├── HamperBuilderModal.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductCraftsmanship.tsx
│   │   ├── ProductFaqSection.tsx
│   │   ├── ProductGiftingJourney.tsx
│   │   ├── ProductReviewsSection.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── SocialProofWall.tsx
│   │   └── WishlistDrawer.tsx
│   ├── context/
│   │   └── ShopContext.tsx     # Cart, wishlist, and modal UI state
│   ├── data/
│   │   └── products.ts         # Product catalog, categories, and review data
│   ├── pages/                  # Routed application views (code-split)
│   │   ├── CheckoutPage.tsx
│   │   ├── CollectionPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── OrderSuccessPage.tsx
│   │   └── ProductDetailPage.tsx
│   ├── utils/
│   │   └── imageFallback.ts    # Resilient image placeholder handlers
│   ├── App.tsx                 # Root layout, routing, and modal orchestration
│   ├── index.css               # Design tokens, typography, and utility classes
│   ├── main.tsx                # React DOM root mounting
│   └── types.ts                # TypeScript domain models and interfaces
├── index.html                  # HTML entry point with Google Fonts preconnect
├── package.json                # Project dependencies and lifecycle scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration with chunk splitting
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: `v18.0.0` or higher (Node 20+ recommended)
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/masanthimanshu/Nakhrewali-Dulhaniya.git
   cd Nakhrewali-Dulhaniya
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Launch the Vite local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` with hot module replacement (HMR).

### Build & Preview

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Available Scripts

| Script    | Command           | Purpose                                                          |
| :-------- | :---------------- | :--------------------------------------------------------------- |
| `dev`     | `npm run dev`     | Runs the Vite development server and opens browser automatically |
| `build`   | `npm run build`   | Compiles TypeScript and builds production bundles into `dist/`   |
| `preview` | `npm run preview` | Spins up a local server to test the production build             |

---

## State Management & Routing

- **Global Store (`ShopContext`)**: Manages shopping cart line items, gift customization notes, active wishlist items, and modal states (Hamper Studio, Quiz Concierge, Wishlist, and Cart drawers).
- **Code-Splitting**: Route-level code splitting using React `lazy` and `Suspense` ensures fast first contentful paint (FCP) and optimal chunk distributions.
- **Route Hierarchy**:
  - `/`: Home view featuring hero marquee, categories, lookbook, and concierge teasers.
  - `/collection/:categoryId`: Category-filtered product grid with sorting and filtering.
  - `/product/:id`: Comprehensive product story, photo showcase, craftsmanship, and reviews.
  - `/checkout`: Multi-step address, gift card, and payment processing page.
  - `/order-success/:orderId`: Celebratory confirmation and order timeline summary.

---

## Coupons & Promotional Codes

The checkout and cart drawers support built-in promo codes for testing discounts:

| Code        | Discount    | Description                         |
| :---------- | :---------- | :---------------------------------- |
| `NAKHRA15`  | **15% Off** | Default welcome discount code       |
| `FILMYLOVE` | **15% Off** | Bollywood lovers seasonal promotion |
| `BAE15`     | **15% Off** | Boyfriend concierge special         |
| `NAKHRA10`  | **10% Off** | Standard cart discount              |

---

## Contributing

Contributions, suggestions, and feedback are warmly welcomed!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/FilmyFeature`)
3. Commit your Changes (`git commit -m 'feat: add romantic unboxing animation'`)
4. Push to the Branch (`git push origin feature/FilmyFeature`)
5. Open a Pull Request

Please ensure code compiles cleanly with `npm run build` before opening a pull request.

---

## Support

If you have questions, feedback, or discover any issues:

- Open an issue on GitHub: [Issues Page](https://github.com/masanthimanshu/Nakhrewali-Dulhaniya/issues)
- Reach out to the maintainer: [masanthimanshu](https://github.com/masanthimanshu)

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more details.

---

<div align="center">
  Crafted with ❤️ and filmy melodrama for every romantic soul.
</div>
