# Implementation Plan - Digital Gujarati Wedding Invitation (Kankotri)

A single-page, responsive, cinematic digital Gujarati wedding invitation built with React, Vite, GSAP, and ScrollTrigger.

---

## 1. Project Overview & Architectural Vision
- **Theme**: Royal Gujarati Kankotri (Royal Maroon, Kesari Saffron, Gold Gradient, Ivory Parchment).
- **Typography**: Dual-script typography with authentic Gujarati fonts (`Noto Serif Gujarati`, `Noto Sans Gujarati`) and regal serif headers (`Rozha One`, `Cinzel`).
- **Animations**: GSAP + ScrollTrigger driven scroll-based reveal animations, floating marigold/rose petals, golden shimmer borders, and traditional Shehnai/Lagna geet audio sync.
- **Tech Stack**:
  - React 19 + Vite
  - GSAP 3 + ScrollTrigger
  - Lucide React (Icons)
  - Pure CSS Custom Properties for Royal Theme System

---

## 2. Directory Structure

```
kankotri-invitation/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── audio/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── audio/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AudioPlayer.jsx
│   │   │   ├── Countdown.jsx
│   │   │   ├── FloralBorder.jsx
│   │   │   ├── FloatingPetals.jsx
│   │   │   ├── GaneshBlessing.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── index.js
│   │   └── sections/
│   │       ├── HeroSection.jsx
│   │       ├── CoupleSection.jsx
│   │       ├── EventsSection.jsx
│   │       ├── TimelineSection.jsx
│   │       ├── FamilySection.jsx
│   │       ├── VenueSection.jsx
│   │       ├── RsvpSection.jsx
│   │       ├── FooterSection.jsx
│   │       └── index.js
│   ├── data/
│   │   └── invitationData.js
│   ├── styles/
│   │   ├── variables.css
│   │   ├── globals.css
│   │   └── animations.css
│   ├── utils/
│   │   └── gsapConfig.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 3. Implementation Phases

### Phase 1: Project Setup, Architecture & Skeleton (CURRENT PHASE)
- [x] Configure folder structure and modular paths.
- [x] Configure HTML head with Google Fonts (`Noto Serif Gujarati`, `Cinzel`, `Rozha One`, `Great Vibes`).
- [x] Configure GSAP & ScrollTrigger initialization in `src/utils/gsapConfig.js`.
- [x] Define royal wedding color palette, typography, and styling variables in `variables.css`.
- [x] Create foundational styling, CSS reset, and utility classes in `globals.css` and `animations.css`.
- [x] Create centralized data store `invitationData.js` containing Gujarati shlokas, couple details, itinerary, venue, and family details.
- [x] Create clean, reusable skeletons for common components (`AudioPlayer`, `Countdown`, `FloralBorder`, `FloatingPetals`, `GaneshBlessing`, `ScrollToTop`).
- [x] Create clean, reusable skeletons for invitation sections (`HeroSection`, `CoupleSection`, `EventsSection`, `TimelineSection`, `FamilySection`, `VenueSection`, `RsvpSection`, `FooterSection`).
- [x] Assemble skeleton in `App.jsx` and ensure successful production build.

### Phase 2: ContinuousPathway & 4 Connected Scenes (COMPLETED)
- [x] Implemented `ContinuousPathway` component unifying all 4 invitation sections into one illustrated journey.
- [x] Consistent central sacred pathway spine (`central-pathway-spine` & transition stream bridges).
- [x] Unbroken architectural temple borders (`continuous-border` left & right) running top-to-bottom.
- [x] Seamless background color transitions with zero gaps:
  - Welcome (Sacred Ivory & Temple Cream)
  - Haldi (Turmeric Amber & Kesari Sunlight)
  - Marriage (Royal Kumkum, Crimson & Mandap Gold)
  - Closing (Evening Starlight, Sandalwood & Diya Gold)
- [x] Responsive layout tested for 360px, 390px, and desktop viewports.
- [x] Natural browser scrolling with smooth navigation triggers.
- [x] Production build and ESLint passed with 0 errors.

### Phase 3: Interactive Enhancements & Media Assets (NEXT)
- Build Bride & Groom profiles with royal framed portraits and auspicious descriptions.
- Build Gujarati wedding ceremonies cards:
  - Ganesh Sthapan & Mandap Muhurat
  - Mameru / Mosalu
  - Pithi / Haldi Rasam
  - Sangeet Sandhya & Raas-Garba
  - Jaan Prasthan (Baarat) & Hastamelap
  - Bhojan Samarambh (Reception)
- Build interactive Timeline and Google Maps venue navigation.
- Implement Nimantrak, Tahuko ("કાકા-કાકીના લગ્નમાં..."), and Snehbhinamna section.
- Implement one-tap RSVP with WhatsApp direct messaging.

### Phase 4: GSAP & ScrollTrigger Cinematic Animations
- Scroll-triggered parallax and card reveals with ScrollTrigger.
- Canvas marigold and rose petal falling particle system.
- Shimmer effects on golden borders and text headings.
- Smooth reveal sequence on page load.

### Phase 5: Responsiveness, Performance & Final Polish
- Ensure pixel-perfect mobile-first responsive layout across iOS & Android devices.
- Add to Google Calendar / iCal event download.
- Optimize asset loading, lazy load media, and verify production build.
