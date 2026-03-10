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
-   **CSS Grid (Auto-Responsive Patterns):** Sections like "Services", "Projects" and "Skills" rely on declarative `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`. This instructs the browser layout engine to wrap columns seamlessly without needing to micromanage `@media` query breakpoints. It fits as many 280-pixel columns into a row as possible and stretches them out (`1fr`) to fill remaining space. Below mobile layout sizes, it automatically stacks them cleanly.
-   **Masonry Gallery (Advanced Layout):** The new "Image Gallery" implements advanced Grid spanning (`grid-column: span 2; grid-row: span 2`) on specific elements to generate an interlocking mosaic pattern often seen in modern design portfolios.
-   **CSS Flexbox:** Applied primarily to one-dimensional axes where precise alignment is necessary. Examples include perfectly placing the navigation menu items natively adjacent to the top-level logo component using `justify-content: space-between` and `align-items: center`.
-   **BEM Methodology:** All HTML class names strictly utilize BEM conventions (e.g., Block: `.service-card`, Element: `.service-card__icon`, Modifier: `.btn--primary`). This system completely isolates layouts dynamically ensuring styling does not capriciously break logic later due to aggressive "cascading" rules and guarantees elements remain predictable and modular.
-   **State-of-the-Art Theming (CSS Variables):** Rather than creating duplicate "light" and "dark" style rulesheets, the core theme properties are mounted directly onto the `:root` pseudo-class (e.g., `--color-primary`, `--color-background`). Instantly exchanging these properties dynamically using the `[data-theme="dark"]` override completely updates the site's palette without writing custom queries or loading massive new files.
-   **Advanced Animations:**
    -   *Staggered Keyframes:* The load logic for cards includes `@keyframes fadeInUp` with precise `:nth-child()` sequence delays. This ensures cards visibly load in an appealing waterfall presentation rather than spontaneously populating content.
    -   *Continuous Transforms:* A `float` keyframe using `translateY` ensures the avatar remains playfully in mid-air natively without utilizing JavaScript timers.

### Javascript Implementation
-   **DOM Manipulation & Validation (`main.js`):** Client-side validations exist to capture user mistakes prematurely before hitting unready or non-existent backend systems. Ensures names are >3 characters, messages are >10 characters, and emails trigger standard generic HTML5 patterns before updating explicit `.is-invalid` UI states to the viewport.
-   **LocalStorage Hydration (`theme-switcher.js`):** Leverages explicit interactions via a click event listener on the Sun/Moon toggle. Once toggled, script swaps the active `[data-theme]` parameter on the body element. Critically, it executes a `localStorage.setItem('theme', ...)` function storing whether it prefers logic to persist the theme immediately without relying on backend session systems, drastically decreasing Flash of Unstyled Content (FOUC) anomalies.

## Testing Evidence
-   **Functional Validation:** Verified form input captures empty strings, evaluates lengths properly, highlights `.is-invalid` borders automatically, and auto-hides success dialogs.
-   **Responsive Adjustments:** The gallery correctly shifts its `span 2` dimensions into standard `1fr` blocks underneath the `min-width: 768px` threshold, guaranteeing usability on mobile displays.
-   **Performance Checks:** Layout properties avoid JavaScript resize observers or dimension calculations in favor of native CSS Grid, achieving strict 60FPS scrolling outputs with hardware-accelerated `transform` attributes handling the hovered states.
