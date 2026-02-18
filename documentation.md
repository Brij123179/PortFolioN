# Project Submission: Styled Personal Portfolio Website

**Student:** Brij Patel
**Repository:** [github.com/Brij123179/PortFolioN](https://github.com/Brij123179/PortFolioN)
**Submission Date:** February 2026

---

## Table of Contents
1. [Project Overview & Objectives](#1-project-overview--objectives)
2. [Setup & Installation Instructions](#2-setup--installation-instructions)
3. [File & Code Structure](#3-file--code-structure)
4. [CSS Concepts Explained in Depth](#4-css-concepts-explained-in-depth)
   - [4.1 CSS Custom Properties (Variables)](#41-css-custom-properties-variables)
   - [4.2 CSS Selectors Used](#42-css-selectors-used)
   - [4.3 The CSS Box Model](#43-the-css-box-model)
   - [4.4 Flexbox Layout](#44-flexbox-layout)
   - [4.5 CSS Grid Layout](#45-css-grid-layout)
   - [4.6 Hover Effects & Transitions (Micro-interactions)](#46-hover-effects--transitions-micro-interactions)
   - [4.7 Responsive Design & Media Queries](#47-responsive-design--media-queries)
   - [4.8 Glassmorphism & Backdrop Filter](#48-glassmorphism--backdrop-filter)
5. [Design Decisions](#5-design-decisions)
6. [Technical Requirements Checklist](#6-technical-requirements-checklist)
7. [Visual Documentation (Screenshots)](#7-visual-documentation-screenshots)
8. [Testing Evidence](#8-testing-evidence)
9. [Concepts Learned & Reflections](#9-concepts-learned--reflections)

---

## 1. Project Overview & Objectives

This project is a **personal portfolio website** built from scratch using only HTML5 and CSS3. The goal was to move beyond plain, unstyled HTML and apply modern CSS techniques to create a professional, visually appealing, and fully responsive web page.

The portfolio contains three core sections:
- **About Me** – A profile image and a short personal bio.
- **My Skills** – A grid of skill cards showcasing technical and soft skills.
- **Contact Me** – A styled form allowing visitors to send a message.

**Primary Objectives:**
- Apply an **external CSS stylesheet** (`style.css`) linked to `index.html`.
- Use **at least 3 different types of CSS selectors** (element, class, ID, pseudo-class).
- Implement **hover effects** on interactive elements (buttons, links, cards, images).
- Build a **responsive layout** that adapts gracefully from desktop to mobile screens.
- Use **CSS Flexbox** and **CSS Grid** for modern, robust layout management.
- Define a **consistent color scheme and typography** using CSS Custom Properties.

---

## 2. Setup & Installation Instructions

This is a **static website** — it requires no server, no build tool, and no package manager. It runs directly in any modern web browser.

### Step-by-Step Setup

**Step 1: Get the Project Files**

Clone the repository using Git:
```bash
git clone https://github.com/Brij123179/PortFolioN.git
```
Or download the ZIP file from GitHub and extract it to a folder on your computer.

**Step 2: Verify the File Structure**

After cloning/extracting, your folder should look like this:
```
PortFolioN/
├── index.html          ← Main webpage file
├── style.css           ← All CSS styling rules
├── README.md           ← Project summary
├── documentation.md    ← This detailed document
└── images/
    └── profile.svg     ← Profile picture asset
```

**Step 3: Open in a Browser**

Simply double-click `index.html`, or right-click it and choose **"Open with" → your browser** (Chrome, Edge, Firefox, etc.).

> **Note on Google Fonts:** The project loads the *Inter* font from Google Fonts via a CDN link in the `<head>` of `index.html`. An active internet connection is required to display the custom font. If offline, the browser will fall back to the system's default `sans-serif` font.

**Step 4: (Optional) Use Live Server for Development**

If you have VS Code installed, you can use the **Live Server** extension for a better development experience. Right-click `index.html` in VS Code and select **"Open with Live Server"**. This auto-refreshes the browser whenever you save a file.

---

## 3. File & Code Structure

The project deliberately follows a **Separation of Concerns** principle — a fundamental concept in web development where structure, presentation, and behavior are kept in separate files.

| File | Role | Responsibility |
|---|---|---|
| `index.html` | **Structure** | Defines the content, semantic meaning, and hierarchy of the page using HTML5 tags. |
| `style.css` | **Presentation** | Controls all visual aspects: colors, fonts, spacing, layout, animations, and responsiveness. |
| `images/profile.svg` | **Asset** | The profile picture, stored as a scalable SVG so it looks sharp at any size. |
| `README.md` | **Documentation** | A brief project summary for anyone visiting the GitHub repository. |
| `documentation.md` | **Documentation** | This in-depth technical report explaining all concepts and decisions. |

### How HTML and CSS Connect

In `index.html`, the following line inside the `<head>` tag links the external stylesheet:
```html
<link rel="stylesheet" href="style.css">
```
This tells the browser: *"Before rendering the page, also load and apply all the rules from `style.css`."* Without this line, the page would appear completely unstyled.

---

## 4. CSS Concepts Explained in Depth

### 4.1 CSS Custom Properties (Variables)

**What they are:** CSS Custom Properties (also called CSS Variables) allow you to define a value once and reuse it throughout the entire stylesheet. They are declared inside the `:root` pseudo-class, which targets the highest-level element of the document (the `<html>` tag), making the variables globally accessible.

**Why I used them:** Instead of typing the same color code (e.g., `#6366f1`) in 10 different places, I define it once as `--primary-color`. If I ever want to change the accent color, I only need to update **one line** instead of searching through the entire file. This makes the code far more **maintainable** and **consistent**.

**Code from `style.css` (lines 1–12):**
```css
:root {
    --primary-color: #6366f1;   /* Indigo accent for buttons, borders, highlights */
    --primary-hover: #4f46e5;   /* Darker indigo for hover states */
    --background-color: #0f172a; /* Deep dark blue for the page background */
    --surface-color: #1e293b;   /* Slightly lighter dark blue for cards/panels */
    --text-color: #f8fafc;      /* Near-white for primary readable text */
    --text-muted: #94a3b8;      /* Muted grey-blue for secondary text */
    --border-color: #334155;    /* Subtle border color for dividers and outlines */
    --font-family: 'Inter', sans-serif; /* The chosen typeface */
    --transition-speed: 0.3s;   /* Consistent animation duration across all transitions */
}
```

**How they are used:** Throughout the stylesheet, variables are referenced with the `var()` function:
```css
body {
    background-color: var(--background-color); /* Uses the value #0f172a */
    color: var(--text-color);                  /* Uses the value #f8fafc */
}
```

---

### 4.2 CSS Selectors Used

CSS selectors are patterns used to target specific HTML elements and apply styles to them. This project uses **five distinct types** of selectors:

#### Type 1: Element Selector
Targets all instances of a specific HTML tag.
```css
body { font-family: var(--font-family); }  /* Targets the <body> tag */
a    { text-decoration: none; }             /* Targets ALL <a> tags */
ul   { list-style: none; }                 /* Targets ALL <ul> tags */
```

#### Type 2: Class Selector (`.`)
Targets any element that has a specific `class` attribute. Classes are reusable — multiple elements can share the same class.
```css
.container { max-width: 1200px; margin: 0 auto; } /* Targets <div class="container"> */
.btn       { padding: 0.75rem 1.5rem; }            /* Targets <button class="btn"> */
.skill-item { background-color: var(--surface-color); } /* Targets <li class="skill-item"> */
```

#### Type 3: ID Selector (`#`)
Targets a **single, unique** element with a specific `id` attribute. IDs must be unique on a page.
```css
/* In HTML: <section id="about"> */
/* In CSS, we can target it as: */
#about { /* styles specific to the about section */ }
```
In this project, IDs are primarily used in HTML for **anchor navigation** (e.g., `href="#about"`) rather than for styling, which is a best practice.

#### Type 4: Pseudo-class Selector (`:hover`, `:focus`)
Targets an element only when it is in a specific **state** — such as when the user's mouse is hovering over it, or when a form field is focused (clicked into).
```css
.nav-link:hover {
    color: var(--primary-color); /* Link turns indigo when hovered */
}

input:focus, textarea:focus {
    border-color: var(--primary-color); /* Border turns indigo when user clicks into field */
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2); /* Adds a soft glow ring */
}
```

#### Type 5: Descendant Combinator Selector
Targets an element only when it is **nested inside** another specific element. This adds specificity without needing extra classes.
```css
.main-header .container {
    display: flex; /* Only the .container INSIDE .main-header gets flex layout */
}

.section h2 {
    font-size: 2rem; /* Only <h2> tags INSIDE a .section get this size */
}
```

---

### 4.3 The CSS Box Model

**What it is:** Every single HTML element is treated by the browser as a rectangular box. The **CSS Box Model** describes the layers of this box, from the inside out:

1. **Content** — The actual text or image inside the element.
2. **Padding** — Transparent space *inside* the border, between the content and the border.
3. **Border** — A visible (or invisible) line surrounding the padding.
4. **Margin** — Transparent space *outside* the border, separating this element from its neighbors.

**The `box-sizing: border-box` fix:**

By default, browsers use `box-sizing: content-box`, which means if you set `width: 200px` and `padding: 20px`, the element's *actual* rendered width becomes `240px` (200 + 20 + 20). This is confusing and causes layout bugs.

By applying `box-sizing: border-box` globally (to every element with `*`), the `width` property now **includes** the padding and border. So `width: 200px` always means the element is exactly `200px` wide, no matter the padding. This is the modern standard.

```css
/* Applied to EVERY element on the page */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Width/height now includes padding and border */
}
```

**Box Model in practice — the Contact Form:**
```css
.contact-form {
    max-width: 600px;   /* Content area is at most 600px wide */
    margin: 0 auto;     /* Auto left/right margin centers the form horizontally */
    padding: 2rem;      /* 32px of inner space on all sides */
    border-radius: 0.75rem; /* Rounds the corners of the border */
    border: 1px solid var(--border-color); /* A 1px visible border */
}
```

---

### 4.4 Flexbox Layout

**What it is:** CSS Flexbox (Flexible Box Layout) is a one-dimensional layout system. It excels at arranging items in a **single row or column**, distributing space between them, and aligning them along an axis.

**Where I used it:**

#### Navigation Bar (Horizontal Row)
The header needs the logo on the left and the navigation links on the right. Flexbox makes this trivial:
```css
.main-header .container {
    display: flex;              /* Activates Flexbox on this container */
    justify-content: space-between; /* Pushes logo to left, nav to right */
    align-items: center;        /* Vertically centers both items in the header */
}
```
- `justify-content: space-between` — distributes items along the **main axis** (horizontal), placing maximum space between them.
- `align-items: center` — aligns items along the **cross axis** (vertical), centering them.

#### Navigation Links (Horizontal Row with Gap)
```css
.main-nav {
    display: flex;
    gap: 2rem; /* Adds 32px of space between each navigation link */
}
```
The `gap` property is a modern, clean way to add spacing between flex items without using margins.

#### About Section (Vertical Column)
```css
.profile-container {
    display: flex;
    flex-direction: column; /* Stacks items vertically (image above text) */
    align-items: center;    /* Centers items horizontally */
    gap: 1.5rem;
}
```

---

### 4.5 CSS Grid Layout

**What it is:** CSS Grid is a two-dimensional layout system. Unlike Flexbox (which handles one direction at a time), Grid lets you control both **rows and columns** simultaneously. It is ideal for card-based layouts.

**Where I used it — The Skills Section:**

```css
.skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
}
```

**Breaking down `repeat(auto-fit, minmax(150px, 1fr))`:**

This is one of the most powerful single lines in CSS. Here's what each part means:

| Part | Meaning |
|---|---|
| `repeat(...)` | Tells CSS to repeat a column pattern. |
| `auto-fit` | Automatically creates as many columns as will fit in the available space. |
| `minmax(150px, 1fr)` | Each column must be **at least 150px** wide, but can grow to fill an equal share (`1fr`) of the remaining space. |

**The result:** On a wide desktop screen, you might get 4 or 5 columns. On a tablet, maybe 3. On a small phone, maybe 2. **This single line of CSS makes the grid automatically responsive without any media queries.** The browser figures out the optimal number of columns based on the screen width.

---

### 4.6 Hover Effects & Transitions (Micro-interactions)

**What they are:** Micro-interactions are small, subtle animations that provide visual feedback to the user when they interact with an element. They make the interface feel alive, polished, and professional.

**The `transition` property** is the key. It tells the browser to animate a property change smoothly over a set duration, instead of snapping instantly.

**Syntax:** `transition: [property] [duration] [timing-function];`

I defined a global transition speed variable (`--transition-speed: 0.3s`) to keep all animations consistent.

#### Example 1: Navigation Link Color Change
```css
.nav-link {
    color: var(--text-muted); /* Starts as muted grey */
    /* The 'a' element already has: transition: color var(--transition-speed); */
}
.nav-link:hover {
    color: var(--primary-color); /* Smoothly fades to indigo on hover */
}
```

#### Example 2: Skill Card Lift Effect
```css
.skill-item {
    transition: transform var(--transition-speed), border-color var(--transition-speed);
}
.skill-item:hover {
    transform: translateY(-5px);       /* Moves the card 5px upward (lift effect) */
    border-color: var(--primary-color); /* Border turns indigo simultaneously */
}
```
`transform: translateY(-5px)` moves the element **up** by 5 pixels. Because `transform` is GPU-accelerated, this animation is extremely smooth and does not cause the page to re-layout.

#### Example 3: Profile Image Scale
```css
.profile-img {
    transition: transform var(--transition-speed);
}
.profile-img:hover {
    transform: scale(1.05); /* Gently enlarges the image to 105% of its size */
}
```

#### Example 4: Button Color Shift
```css
.btn-primary {
    background-color: var(--primary-color); /* Normal: indigo */
    transition: background-color var(--transition-speed);
}
.btn-primary:hover {
    background-color: var(--primary-hover); /* Hover: darker indigo */
}
```

#### Example 5: Form Input Focus Ring
```css
input:focus, textarea:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2); /* Soft indigo glow ring */
}
```
This uses `box-shadow` with a spread radius to create a focus ring — a common accessibility pattern that shows users which field is currently active.

---

### 4.7 Responsive Design & Media Queries

**What it is:** Responsive design is the practice of making a website look and function well on all screen sizes — from large desktop monitors to small mobile phones.

**The `viewport` meta tag** (in `index.html`) is the essential first step:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Without this, mobile browsers would render the page as if it were a full desktop screen and then zoom out, making everything tiny. This tag tells the browser: *"Set the viewport width to the device's actual screen width."*

**Media Queries** allow you to apply different CSS rules based on the screen's characteristics (like width). The syntax is:
```css
@media (condition) {
    /* CSS rules that ONLY apply when the condition is true */
}
```

**The breakpoint used in this project is `768px`** — a common threshold that separates tablet/mobile screens from desktop screens.

```css
@media (max-width: 768px) {

    /* 1. Stack the header vertically on small screens */
    .main-header .container {
        flex-direction: column; /* Changes from row to column layout */
        gap: 1rem;
    }

    /* 2. Wrap navigation links and center them */
    .main-nav {
        gap: 1.5rem;
        flex-wrap: wrap;        /* Allows links to wrap to a new line if needed */
        justify-content: center;
    }

    /* 3. Slightly reduce heading size for smaller screens */
    .section h2 {
        font-size: 1.75rem; /* Reduced from 2rem on desktop */
    }

    /* 4. Force the skills grid to exactly 2 columns on mobile */
    .skills-list {
        grid-template-columns: repeat(2, 1fr); /* Overrides the auto-fit behavior */
    }
}
```

**How it works:** The browser reads the stylesheet top-to-bottom. The base styles (outside the media query) apply to all screens. When the screen width is **768px or less**, the browser also applies the rules inside the `@media` block, **overriding** the base styles where specified.

---

### 4.8 Glassmorphism & Backdrop Filter

**What it is:** Glassmorphism is a modern UI design trend that simulates a frosted-glass effect. Elements appear semi-transparent with a blurred background behind them.

**Where I used it — The Sticky Navigation Header:**
```css
.main-header {
    background-color: rgba(15, 23, 42, 0.9); /* 90% opaque dark color (not fully solid) */
    backdrop-filter: blur(10px);              /* Blurs whatever is behind the header */
    position: sticky;                         /* Keeps the header fixed at the top while scrolling */
    top: 0;
    z-index: 1000; /* Ensures the header stays on top of all other page content */
}
```

- `rgba(15, 23, 42, 0.9)` — The `0.9` alpha value makes the background **90% opaque**, allowing a hint of the page content to show through as you scroll.
- `backdrop-filter: blur(10px)` — This is the key property. It applies a **10px Gaussian blur** to the area *behind* the element, creating the frosted glass look.
- `position: sticky; top: 0;` — The header **sticks to the top of the viewport** as the user scrolls down the page, keeping navigation always accessible.

---

## 5. Design Decisions

### Color Scheme: Dark Theme with Indigo Accent

I chose a **dark color palette** for several reasons:
- **Reduced eye strain** for users browsing in low-light environments.
- **Modern aesthetic** — dark themes are widely used in professional developer portfolios and tools.
- **High contrast** — light text on a dark background is highly readable.

The palette uses **Slate colors** (a cool, blue-tinted grey family) for backgrounds and surfaces, with **Indigo** (`#6366f1`) as the single accent color. Using one accent color creates visual harmony and draws the eye to important interactive elements (links, buttons, active borders).

| Variable | Hex Value | Purpose |
|---|---|---|
| `--background-color` | `#0f172a` | Main page background (darkest) |
| `--surface-color` | `#1e293b` | Cards, panels, form backgrounds (slightly lighter) |
| `--primary-color` | `#6366f1` | Accent: buttons, active links, highlights |
| `--text-color` | `#f8fafc` | Primary text (near-white for maximum contrast) |
| `--text-muted` | `#94a3b8` | Secondary text, labels, inactive links |

### Typography: Inter Font

The **Inter** typeface was chosen because:
- It is specifically designed for **screen readability** at all sizes.
- It has a **clean, neutral, modern** appearance suitable for a professional portfolio.
- It is available for free via **Google Fonts** with no licensing concerns.
- It supports multiple weights (400, 500, 600, 700), allowing typographic hierarchy without switching fonts.

### Layout: Max-Width Container

All content is wrapped in a `.container` class:
```css
.container {
    max-width: 1200px;
    margin: 0 auto;  /* Centers the container horizontally */
    padding: 0 2rem; /* Adds horizontal padding so content doesn't touch screen edges */
}
```
On very large screens (e.g., 4K monitors), content would stretch uncomfortably wide without `max-width`. The `margin: 0 auto` trick centers the container by giving equal automatic margins on both sides.

---

## 6. Technical Requirements Checklist

| Requirement | Status | Implementation Detail |
|---|---|---|
| External CSS file (`style.css`) | ✅ Done | Linked via `<link rel="stylesheet" href="style.css">` in `<head>` |
| At least 3 CSS selectors | ✅ Done | Uses 5 types: element, class, ID, pseudo-class (`:hover`, `:focus`), descendant combinator |
| Hover effects on buttons/links | ✅ Done | `.btn-primary:hover`, `.nav-link:hover`, `.skill-item:hover`, `.profile-img:hover` |
| Responsive design (mobile) | ✅ Done | `@media (max-width: 768px)` block adjusts header, nav, and grid layout |
| CSS Flexbox | ✅ Done | Used in `.main-header .container` and `.main-nav` for the navigation bar |
| CSS Grid | ✅ Done | Used in `.skills-list` with `repeat(auto-fit, minmax(150px, 1fr))` |
| Custom fonts | ✅ Done | Google Fonts 'Inter' loaded via CDN |
| Color scheme | ✅ Done | Dark slate theme with indigo accent, defined via CSS Custom Properties |
| CSS Variables | ✅ Done | 9 variables defined in `:root` for colors, font, and transition speed |
| Box Model (`box-sizing`) | ✅ Done | `box-sizing: border-box` applied globally via `*` selector |

---

## 7. Visual Documentation (Screenshots)

All screenshots below were captured from the live running application in Google Chrome.

### Desktop View — Full Layout
The full-width layout showing the sticky glassmorphism header, About section with profile image, Skills grid, and Contact form.

![Desktop View - Full Page](images/Screenshot%202026-02-18%20212104.png)

---

### Skills Section — CSS Grid in Action
The Skills section demonstrating the `repeat(auto-fit, minmax(150px, 1fr))` CSS Grid layout with multiple columns on desktop.

![Skills Grid - Desktop](images/Screenshot%202026-02-18%20212127.png)

---

### Contact Form — Styled Inputs & Button
The Contact form showing the dark-themed input fields, labels, and the indigo "Send Message" button.

![Contact Form Section](images/Screenshot%202026-02-18%20212148.png)

---

### Hover Effect — Skill Card Lift
A skill card in its hovered state: lifted 5px upward (`translateY(-5px)`) with an indigo border highlight.

![Skill Card Hover Effect](images/Screenshot%202026-02-18%20212218.png)

---

### Mobile View — Responsive Layout (≤ 768px)
The layout at mobile viewport width showing the stacked vertical header, centered navigation links, and 2-column skills grid triggered by the `@media (max-width: 768px)` query.

![Mobile Responsive View](images/Screenshot%202026-02-18%20212225.png)

---

## 8. Testing Evidence

### Browser Compatibility
The website was tested and visually verified in the following browsers:
- **Google Chrome** (v131) — Full support for all features including `backdrop-filter`.
- **Microsoft Edge** (v131) — Full support (Chromium-based, same engine as Chrome).
- **Mozilla Firefox** (v133) — Full support.

### Responsiveness Testing
Responsive behavior was verified using **Chrome DevTools Device Mode** (`F12` → Toggle Device Toolbar):

| Device Preset | Viewport Width | Result |
|---|---|---|
| iPhone SE | 375px | Header stacks vertically, 2-column skills grid, form fills width ✅ |
| iPad Air | 820px | Desktop layout maintained, grid auto-adjusts columns ✅ |
| Desktop (1080p) | 1920px | Content centered within 1200px max-width container ✅ |

### HTML & CSS Validation
- **HTML5**: Validated using the [W3C Markup Validation Service](https://validator.w3.org/). No errors or warnings found.
- **CSS3**: Validated using the [W3C CSS Validation Service (Jigsaw)](https://jigsaw.w3.org/css-validator/). No errors found.

### Accessibility Check
- All images include descriptive `alt` text (e.g., `alt="Profile Picture"`).
- Form inputs are associated with `<label>` elements via matching `for` and `id` attributes, which is essential for screen readers.
- The `lang="en"` attribute is set on the `<html>` tag to declare the page language.

---

## 9. Concepts Learned & Reflections

### CSS Custom Properties (Variables)
I learned that defining design tokens as variables at the top of the stylesheet is a professional practice that makes large stylesheets manageable. Changing the entire color scheme of a website becomes a matter of editing just a few lines.

### Flexbox vs. Grid: When to Use Which
- **Flexbox** is best for **one-dimensional** layouts — arranging items in a single row (like a navigation bar) or a single column.
- **Grid** is best for **two-dimensional** layouts — arranging items in both rows and columns simultaneously (like a card grid).

Understanding when to reach for each tool was one of the most valuable lessons from this project.

### The Power of `auto-fit` and `minmax()`
The single line `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))` was a revelation. It creates a fully responsive grid that adapts to any screen size without a single media query. This is a technique I will use in every future project.

### CSS Transitions for User Experience
I learned that micro-interactions (small hover animations) have a disproportionately large impact on how professional and polished a website feels. A 0.3-second color transition on a button makes the interface feel responsive and alive, even though it is a trivial amount of CSS code.

### Responsive Design is a Mindset, Not a Feature
Responsive design is not just about adding a media query at the end. It starts with using relative units (`rem`, `%`, `fr`), flexible layouts (Flexbox, Grid), and the `viewport` meta tag from the very beginning. The media query is the final adjustment, not the primary solution.
