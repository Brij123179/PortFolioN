# Week 5: Advanced Portfolio with CSS Grid

## Project Overview
The goal of this project was to redesign the existing personal portfolio using advanced CSS techniques. This includes implementing a robust CSS Grid layout system for complex designs, utilizing Flexbox for component layouts (such as navigation), adding CSS variables (custom properties) for theming, incorporating smooth CSS animations and transitions, using advanced selectors, and adhering to the BEM (Block Element Modifier) methodology to keep CSS scalable and maintainable. 

## Setup Instructions
1. **Clone or Download the Repository:** Obtain the project files to your local machine.
2. **Open the Project:** Navigate to the project directory that contains `index.html`.
3. **Launch the site:** Simply double-click `index.html` to open it in your default web browser or use a local server like Live Server in VS Code for a better development experience. No complicated build steps are required.

## Code Structure
To improve organization, the previous single `style.css` and `script.js` have been modularized:
- `/index.html`: The main markup file, refactored to use semantic HTML and BEM classes.
- `/css/main.css`: Base styles, CSS resets, typography, global components (like forms and buttons), and CSS variables defining the light/dark themes.
- `/css/layout.css`: Exclusively manages layout definitions employing CSS Grid and Flexbox for various sections (Header, About, Projects, Skills).
- `/css/animations.css`: Contains `@keyframes`, hover states, and transitions, separating presentation logic from layout.
- `/js/theme-switcher.js`: A dedicated script for handling Dark/Light mode toggles using CSS variables and LocalStorage.
- `/js/main.js`: Contains component interactivity, such as the "Read More" functionality and form validation.
- `/images/`: Contains necessary image assets, like SVGs.
- `/screenshots/`: Directory designated for UI screenshots indicating project functionality and visual documentation.

## Visual Documentation
Screenshots of the redesigned portfolio, including edge cases like mobile views and light/dark theme appearances, are hosted within the `/screenshots` directory. These assets confirm the responsiveness and aesthetic success of the CSS Grid layouts and theming functionality.

## Technical Details

### Advanced CSS Techniques & Layout Decisions
- **CSS Grid:** Employed extensively in the "Projects" and "Skills" sections (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) to create deeply powerful, auto-responsive grids that wrap gracefully without needing arbitrary media query breakpoints. It handles complex, multi-dimensional structures beautifully.
- **Flexbox:** Retained for strictly one-dimensional alignments, such as within the `header__nav`, ensuring links space out dynamically. It's also used for internally centering card contents.
- **CSS Variables (Custom Properties):** Set at the `:root` pseudo-class level for theming (`--color-primary`, `--color-background`, etc.), allowing immediate real-time visual updates by changing minimal attributes (`data-theme` on the body tag), greatly minimizing redundant code.
- **BEM Methodology:** Implemented to eliminate deeply nested, fragile selectors and specificity conflicts. Class names strictly follow `Block__Element--Modifier` conventions (e.g., `project-card__title`, `btn--primary`).
- **Animations:** Utilizing `@keyframes fadeInUp` on load, and `transform: translateY` for interactive card hovers to generate micro-interactions that elevate the perceived quality. 

### Performance Optimizations
- **Modular Assets:** Splitting the CSS allows the browser to fetch and parse stylesheets predictably. Though HTTP/2 mitigates the multi-file overhead, separate files significantly enhance developer experience.
- **CSS Over JS for Layout:** Removed all JavaScript-calculated logic for carousels and resizing. Responsiveness is entirely pushed to the CSS Grid algorithms, dramatically decreasing JavaScript CPU footprint.
- **Hardware Acceleration:** Using `transform` and `opacity` for animations (instead of height/width/margins) triggers GPU acceleration, eliminating jank and ensuring consistent 60FPS updates.

## Testing Evidence
- **Cross-Browser Verification:** Tested layout integrity on modern continuous release browsers (Chrome, Firefox, Safari). The Grid `auto-fit` fallback displays appropriately across varying aspect ratios.
- **Theme Persistence:** Confirmed that `js/theme-switcher.js` properly hydrates the previously chosen mode from `LocalStorage` on subsequent page loads without FOUC (Flash of Unstyled Content).
- **Form Validation Logic:** Ran test sequences injecting invalid email strings and short messages; UI successfully responds with `.is-invalid` borders and block-level error messages before preventing the submit event.
- **Responsive Simulation:** Leveraged DevTools mobile emulation (iPhone 12, Pixel 7, iPad Mini profiles) to verify touch targets, font scaling, and that grid elements safely drop into one-column stacks under 768px viewports.
