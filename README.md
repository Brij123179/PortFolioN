# 🌐 Brij Patel — Personal Portfolio Website

A modern, responsive personal portfolio website built with **HTML5** and **CSS3**. This project demonstrates core front-end web development skills including semantic HTML, CSS layout systems (Flexbox & Grid), responsive design, and interactive micro-animations.

---

## ✨ Features

- **Sticky Navigation Header** with a glassmorphism (frosted-glass) effect using `backdrop-filter`.
- **About Section** with a circular profile image and a smooth scale-on-hover animation.
- **Skills Section** using a fully responsive CSS Grid that auto-adjusts columns based on screen width.
- **Contact Form** with styled inputs and an indigo focus-ring effect for accessibility.
- **Hover Micro-interactions** on all interactive elements (links, cards, buttons, profile image).
- **Responsive Layout** that adapts seamlessly from desktop to mobile using a `@media` query.
- **Dark Theme** with a consistent color palette defined via CSS Custom Properties (variables).
- **Custom Typography** using the *Inter* font from Google Fonts.

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Edge, or Firefox recommended).
- An internet connection (required to load the Google Fonts CDN).
- *(Optional)* [VS Code](https://code.visualstudio.com/) with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for a better development experience.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Brij123179/PortFolioN.git
   ```

2. **Navigate into the project folder:**
   ```bash
   cd PortFolioN
   ```

3. **Open the website:**
   - Simply double-click `index.html`, **OR**
   - In VS Code, right-click `index.html` → **"Open with Live Server"**.

No build steps, no `npm install`, no configuration needed. It just works.

---

## 📁 Project Structure

```
PortFolioN/
├── index.html          # Main HTML file — page structure and content
├── style.css           # External stylesheet — all visual design and layout rules
├── README.md           # This file — project overview and setup guide
├── documentation.md    # Detailed technical documentation and CSS concept explanations
└── images/
    └── profile.svg     # Profile picture (SVG for crisp rendering at any size)
```

---

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | — | Semantic page structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) |
| CSS3 | — | Styling, layout (Flexbox & Grid), animations, and responsive design |
| Google Fonts (Inter) | CDN | Modern, screen-optimized typography |

**No JavaScript. No frameworks. No dependencies.**

---

## 🎨 CSS Techniques Demonstrated

| Technique | Where Used |
|---|---|
| **CSS Custom Properties** | `:root` block — defines the entire color scheme and font |
| **Flexbox** | Navigation bar (logo + links), About section (image + bio) |
| **CSS Grid** | Skills section — `repeat(auto-fit, minmax(150px, 1fr))` |
| **CSS Transitions** | All hover effects — smooth 0.3s animations |
| **Media Queries** | `@media (max-width: 768px)` — mobile layout adjustments |
| **Pseudo-classes** | `:hover` on links/cards/buttons, `:focus` on form inputs |
| **Glassmorphism** | Sticky header — `backdrop-filter: blur(10px)` |
| **Box Model** | `box-sizing: border-box` applied globally |

---

## 📱 Responsive Breakpoints

| Screen Size | Behavior |
|---|---|
| **Desktop** (> 768px) | Full horizontal navigation, multi-column skills grid |
| **Mobile** (≤ 768px) | Stacked vertical header, centered nav links, 2-column skills grid |

---

## ✅ Validation & Testing

- **HTML5** — Validated with the [W3C Markup Validator](https://validator.w3.org/). ✅ No errors.
- **CSS3** — Validated with the [W3C CSS Validator (Jigsaw)](https://jigsaw.w3.org/css-validator/). ✅ No errors.
- **Browsers Tested** — Google Chrome, Microsoft Edge, Mozilla Firefox.
- **Devices Tested** — Desktop (1080p), iPad Air (820px), iPhone SE (375px) via Chrome DevTools.

---

## 📄 Documentation

For a detailed explanation of every CSS concept used in this project — including how Flexbox, Grid, transitions, media queries, and CSS variables work — please read **[documentation.md](./documentation.md)**.

---

## 👤 Author

**Brij Patel**
- GitHub: [@Brij123179](https://github.com/Brij123179)

---

*© 2026 Brij Patel. All rights reserved.*
