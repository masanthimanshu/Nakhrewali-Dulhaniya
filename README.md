# Nakhrewali Dulhaniya 🪞✨

[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B.svg)](LICENSE)

A vibrant, Bollywood-inspired Gen-Z romantic gifting and jewelry e-commerce web application. **Nakhrewali Dulhaniya** blends nostalgic cinema aesthetics with modern digital retail, featuring curated heirloom accessories, interactive concierge quizzes, custom hamper builders, and heartfelt unboxing rituals.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Signature Collections](#signature-collections)
- [Tech Stack & Architecture](#tech-stack--architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Configuration & Environment](#configuration--environment)
- [Contributing](#contributing)
- [Support & Feedback](#support--feedback)
- [Maintainers & Authors](#maintainers--authors)
- [License](#license)

---

## Overview

Traditional jewelry shopping often feels formal and impersonal. **Nakhrewali Dulhaniya** transforms gifting into a cinematic experience:

- Each product is paired with iconic Bollywood dialogues, styling tips, and craftsmanship details.
- Boyfriends and partners can navigate gifting easily via an interactive quiz and curated guide.
- Shoppers can build custom royal hampers with real-time pricing and calligraphy-style gift letters.
- The platform is engineered with modern React 19, Vite, and Tailwind CSS v4 for snappy performance and responsive layouts across all viewports.

---

## Key Features

### 🛍️ Complete E-Commerce Journey

- **Multipage Routing**: Powered by React Router v7 with dedicated routes for Home, Catalog Collections, Product Details, Checkout, and Order Success confirmation.
- **Persistent Shopping Trunk (Cart)**: Drawer-based shopping cart with dynamic subtotal, shipping threshold tracker (free shipping over ₹999), and coupon engine (`NAKHRA15`, `BAE15`, `FILMYLOVE`, `NAKHRA10`).
- **Wishlist Drawer**: Instant favoriting with persistent local storage sync.
- **Rich Product Detail Pages**: High-resolution image zoom, material specs, weightless craft highlights, verified review chronicles, and accordion FAQs.

### 🎁 Interactive Gifting Concierge

- **Bespoke Hamper Studio (`HamperBuilderModal`)**: Mix and match up to 4 items across collections to build custom royal trunks with automatic bundle savings (15% off) and personalized gift notes.
- **Boyfriend Gifting Concierge Quiz (`GiftFinderQuizModal`)**: Multi-step interactive advisor recommending curated pieces based on her vibe, the gifting occasion, and relationship milestones.
- **The Boyfriend Survival Guide**: Built-in styling tips, aesthetic cheat sheets, and do's & don'ts for stress-free romantic gifting.

### ⚡ Performance & Design

- **Code-Splitting**: Route-level and modal-level lazy loading (`React.lazy` + `Suspense`) ensuring rapid First Contentful Paint (FCP).
- **Tailwind CSS v4 & Luxury Typography**: Styled with Google Fonts (`Playfair Display`, `Cormorant Garamond`, `Plus Jakarta Sans`) and a romantic color palette (Gulabi crimson `#961A38`, gold `#D4AF37`, and warm parchment `#FAF7F2`).
- **Accessibility & SEO Ready**: Semantic HTML5 markup, meta tags, OpenGraph attributes, and keyboard-navigable modals.

---

## Signature Collections

The catalog is organized into four signature ranges:

| Range   | Collection Name       | Highlights & Craft                                                          |
| :------ | :-------------------- | :-------------------------------------------------------------------------- |
| **I**   | **Haye Jhumka**       | Mirror chandbalis, kundan drops, lightweight hollow-brass meenakari         |
| **II**  | **Bole Chudiyan**     | Velvet bangle stacks, silk thread wraps, heirloom ghungroo kadas            |
| **III** | **Yeh Reshmi Zulfen** | Silk organza bows, freshwater pearl hair vines, embroidered headband crowns |
| **IV**  | **Dil Tu Jaan Tu**    | Curated royal trunks, crimson wax-sealed letters, scented rose keepsakes    |

---

## Tech Stack & Architecture

- **Core**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/) with `@vitejs/plugin-react`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API (`ShopContext`) with `localStorage` persistence

---

## Project Structure

```text
Nakhrewali-Dulhaniya/
├── index.html                   # HTML entry point with web fonts and SEO metadata
├── package.json                 # Project dependencies and script declarations
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS v4 plugin
├── public/                      # Static assets
└── src/
    ├── App.tsx                  # Root router, global layouts, drawers & modals
    ├── main.tsx                 # React DOM mount entry
    ├── index.css                # Global CSS & Tailwind imports
    ├── types.ts                 # Core TypeScript data contracts (Product, CartItem, Order)
    ├── components/              # Reusable UI elements & modules
    │   ├── AestheticLookbook.tsx    # Visual editorial moodboard
    │   ├── AnnouncementTicker.tsx   # Top animated promotional marquee
    │   ├── BoyfriendGuide.tsx       # Gifting guide and cheat sheet
    │   ├── BrandPerks.tsx           # Value proposition & craftsmanship badges
    │   ├── CartDrawer.tsx           # Slide-over shopping bag drawer
    │   ├── CategoryShowcase.tsx     # Range I–IV visual collection cards
    │   ├── FaqSection.tsx           # Global accordion FAQ
    │   ├── FilterSortControls.tsx   # Price range, search, and sort filters
    │   ├── Footer.tsx               # Atelier brand footer with links & newsletter
    │   ├── GiftFinderQuizModal.tsx  # Concierge quiz wizard
    │   ├── HamperBuilderModal.tsx   # Custom hamper studio builder
    │   ├── HeroBanner.tsx           # Hero showcase banner
    │   ├── Navbar.tsx               # Header with search, categories, and counters
    │   ├── ProductCard.tsx          # Interactive catalog product card
    │   ├── ProductCraftsmanship.tsx # Heritage craftsmanship feature section
    │   ├── ProductFaqSection.tsx    # Per-product care & delivery accordion
    │   ├── ProductGiftingJourney.tsx# Unboxing experience steps
    │   ├── ProductReviewsSection.tsx# Rating breakdown and customer reviews
    │   ├── ScrollToTop.tsx          # Route change scroll reset handler
    │   ├── SocialProofWall.tsx      # Customer quotes & social wall
    │   ├── StarRating.tsx           # Reusable star rating visualization
    │   └── WishlistDrawer.tsx       # Saved favorites drawer
    ├── context/
    │   └── ShopContext.tsx          # Global cart, wishlist, coupon, and modal state
    ├── data/
    │   └── products.ts              # Product catalog and collection metadata
    ├── pages/
    │   ├── HomePage.tsx             # Main landing and discovery storefront
    │   ├── CollectionPage.tsx       # Filtered category collection view
    │   ├── ProductDetailPage.tsx    # Individual product showcase & add-to-bag
    │   ├── CheckoutPage.tsx         # Shipping address & order checkout
    │   └── OrderSuccessPage.tsx     # Order confirmation & receipt summary
    └── utils/
        ├── imageFallback.ts         # Image loading error fallback handler
        └── productUtils.ts          # Filtering, sorting, coupon, and pricing logic
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js) or `yarn` / `pnpm`

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/masanthimanshu/Nakhrewali-Dulhaniya.git
   cd Nakhrewali-Dulhaniya
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will launch at `http://localhost:5173/`.

### Production Build

To compile a production-optimized build:

```bash
npm run build
```

The compiled assets will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## Configuration & Environment

The application runs entirely on client-side state and mock dataset out-of-the-box:

- **Product Data**: Configured in `src/data/products.ts`. Add or modify items, prices, images, and dialogues directly.
- **Coupons & Thresholds**: Managed in `src/utils/productUtils.ts`. Modify `FREE_SHIPPING_THRESHOLD`, `SHIPPING_FEE`, and `VALID_COUPONS`.
- **Vite & Tailwind**: Configured in `vite.config.ts` using `@tailwindcss/vite`.

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure code formatting conforms with Prettier (`npx prettier --write .`) and TypeScript types check cleanly (`npx tsc --noEmit`).

---

## Support & Feedback

If you encounter any issues or have suggestions:

- Open an issue on GitHub: [Issues](https://github.com/masanthimanshu/Nakhrewali-Dulhaniya/issues)
- Reach out to the maintainer via GitHub profile: [@masanthimanshu](https://github.com/masanthimanshu)

---

## Maintainers & Authors

- **Himanshu** ([@masanthimanshu](https://github.com/masanthimanshu)) — Project Creator & Maintainer

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
