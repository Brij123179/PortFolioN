# Advanced Portfolio with CSS Grid & Javascript (Week 5 & Cumulative)

## Project Overview
This project represents a fully functional, highly interactive, and responsive portfolio. It integrates fundamental layout structures (CSS Grid and Flexbox), robust theming capabilities (CSS variables), sophisticated interactions (DOM manipulation and animations), and standardized CSS paradigms (BEM). The latest update adds an advanced masonry-style CSS Grid Gallery and a multi-column Services layout.

## Setup Instructions
1.  **Clone or Download the Repository:** Obtain the project files to your local machine (`git clone`).
2.  **Open the Project:** Navigate to the project directory that contains `index.html`.
3.  **Launch the site:** Open `index.html` in your default web browser. For developers, a local server (like Live Server extension or `python -m http.server`) is recommended to prevent any strict MIME-type issues on deep assets, though not strictly required.

## Code Structure
The codebase follows a modular structure separated by concern:
-   `/index.html`: The semantic HTML layout, implementing BEM classes (`Block__Element--Modifier`).
-   `/css/`: The central stylesheet directory.
    -   `main.css`: Core design system, resets, and CSS variables (Theming anchors).
    -   `layout.css`: Structural Grid and Flexbox frameworks for each distinct section.
    -   `animations.css`: Keyframe definitions, transitions, and hover states.
-   `/js/`: Interactivity scripts.
    -   `theme-switcher.js`: Manages the Dark/Light mode toggle and its persistence via LocalStorage.
    -   `main.js`: Contains logic for form validation and DOM manipulation (e.g., Read More logic).
-   `/screenshots/`: Visual evidence of the application in various states. Includes `dark-mode.png` and `light-mode.png`.
-   `/images/`: Storage for visual assets like the profile icon.

## Visual Documentation
Real-world screenshots validating the architecture have been generated and pushed to the `/screenshots/` directory.

### Dark Mode Reference
![Dark Mode Screenshot](screenshots/dark-mode.png)

### Light Mode Reference
![Light Mode Screenshot](screenshots/light-mode.png)

## Technical Details

### Architecture & Layout Decisions
-   **CSS Grid (Auto-Responsive Patterns):** Sections like "Services", "Projects" and "Skills" rely on declarative `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`. This instructs the browser layout engine to wrap columns seamlessly without needing to micromanage `@media` query breakpoints.
-   **Masonry Gallery (Advanced Layout):** The new "Image Gallery" implements advanced Grid spanning (`grid-column: span 2; grid-row: span 2`) on specific elements to generate an interlocking layout often seen in modern design portfolios.
-   **Methodology:** All classes utilize BEM (Block Element Modifier). Example: `.service-card__icon`. This isolates layout logic from presentation, removing catastrophic cascading failures and eliminating dependency on `!important` flags.
-   **CSS Variables:** Variables like `--color-primary` define the root of the layout. The `data-theme="dark"` attribute switches base CSS custom property definitions, executing instant, calculation-free theme swaps.

### Javascript Implementation
-   **DOM Manipulation & Validation:** The contact form prevents native browser submission until all requirements are met: name length > 3, generic regex matching for email configuration, and message > 10 characters.
-   **LocalStorage Hydration:** On initial load, the browser queries `localStorage.getItem('theme')` to hydrate the DOM, preventing a Flash of Unstyled Content (FOUC).

## Testing Evidence
-   **Functional Validation:** Verified form input captures empty strings, evaluates lengths properly, highlights `.is-invalid` borders automatically, and auto-hides success dialogs.
-   **Responsive Adjustments:** The gallery correctly shifts its `span 2` dimensions into standard `1fr` blocks underneath the `min-width: 768px` threshold, guaranteeing usability on mobile displays.
-   **Performance Checks:** Layout properties avoid JavaScript resize observers or dimension calculations in favor of native CSS Grid, achieving strict 60FPS scrolling outputs with hardware-accelerated `transform` attributes handling the hovered states.
