# Project Submission: Personal Portfolio Website (Week 1 - HTML Only)

## 1. Project Overview & Objectives

This project is the foundational phase of my personal portfolio website, built entirely using **pure HTML5** without any CSS styling or JavaScript interactivity. The primary focus of this stage is to establish a robust, accessible, and semantically correct document structure. 

Before introducing visual presentation (CSS) or dynamic behavior (JavaScript), it is critical to ensure that the content is logically organized and meaningful to both web browsers and assistive technologies (like screen readers).

**Core Objectives:**
- Create a fully functional, multi-section webpage using strictly HTML.
- Apply modern **Semantic HTML5** elements to replace generic `<div>` tags, improving code readability, maintainability, and Search Engine Optimization (SEO).
- Implement an effective internal navigation system.
- Build a functional contact form utilizing the browser's native capabilities and accessibility best practices.

## 2. Setup & Installation Instructions

Because this project utilizes a **Static Client-Side Architecture** consisting of pure HTML, there is no need for a backend server, database, or package managers (like npm). 

1. **Get the Code**: Clone the repository using Git:
   ```bash
   git clone https://github.com/Brij123179/PortFolioN.git
   ```
   *Alternatively, download the project folder as a ZIP file.*
2. **Execution**: No installation or build process is required. Render the project by navigating to the project directory and double-clicking the `index.html` file. This action will open the local file path directly in your default web browser (Chrome, Edge, Firefox, etc.).

## 3. Code Structure & Architecture Exploration

The project strictly follows a hierarchical file structure. The core application logic resides entirely in:
- `index.html`: The root document containing the complete DOM (Document Object Model) representation of the content.
- `images/`: A dedicated asset directory holding visual media (e.g., `profile.svg`).

### The Document Structure
The `index.html` file is divided into two main conceptual areas:
- **The `<head>`**: Contains metadata that the browser uses but does not display directly. This includes the `<meta charset="UTF-8">` declaration to ensure proper character encoding, the `<meta name="viewport" ...>` tag to ensure the page scales correctly on mobile devices, and the document `<title>`.
- **The `<body>`**: Contains the visible content of the page, organized hierarchically using semantic landmark tags.

## 4. In-Depth Technical Implementation & Semantic HTML

To meet the requirements, I implemented various HTML5 features to ensure the code is robust.

### 4.1 Semantic Organization
Instead of using generic `<div>` containers, I structured the page using meaningful HTML5 landmarks:
- `<header>`: Represents the introductory content and houses the site's main heading.
- `<nav>`: Specifically designates the area containing the major navigation blocks.
- `<main>`: Encapsulates the dominant, unique content of the page, signaling to screen readers where the core information begins.
- `<section>`: Divides the `<main>` content into distinct thematic groupings (`#about`, `#projects`, `#skills`, `#contact`). Every section begins with an `<h2>` heading to create a logical document outline.
- `<footer>`: Represents the concluding metadata of the document, such as copyright information.

### 4.2 Internal Navigation System
The `<nav>` element contains multiple anchor tags (`<a>`). Instead of linking to external URLs, they utilize **fragment identifiers** (e.g., `href="#contact"`). 
When a user clicks an anchor link, the browser algorithm matches the `href` value with the `id` attribute of a corresponding `<section>`. The browser then calculates the exact vertical offset of that element and automatically scrolls the user to that section.

### 4.3 Images and Accessibility
To ensure inclusivity across all user environments:
- The `<img>` tag is used to display the profile picture.
- A descriptive `alt` attribute (`alt="Profile Picture"`) was included. If the image fails to load over a slow network, or if a visually impaired user relies on a screen reader, the `alt` text provides a textual alternative conveying the image's purpose.

### 4.4 Form Implementation and Validation
The Contact section features a functional user input form structured with `<form>`:
- **Labeling**: Every `<input>` and `<textarea>` is explicitly paired with a `<label>`. This is achieved by matching the `for` attribute of the label to the `id` attribute of the input. Clicking the label focuses the input, greatly expanding the click target and aiding usability.
- **Native Browser Validation**: I utilized the `required` HTML attribute on all input fields. This leverages the browser's built-in validation algorithms to prevent form submission if fields are empty. Furthermore, using `type="email"` invokes the browser's native Regex engine to ensure the user inputs a valid email format before the form can be submitted.

## 5. Visual Documentation (Screenshots)

*Note: As this iteration is pure HTML, the visuals represent the browser's default user agent stylesheet.*

- **Header & Navigation**: Displays the main `<h1>` and the horizontal/vertical list of anchor links.
- **About Section**: Displays the profile image and biography text structure.
- **Contact Form**: Demonstrates the `input` and `textarea` fields with their associated labels.
- **Full Result**: A continuous snapshot of the semantic document flow.

*Screenshots have been saved in the project directory.*

## 6. Concepts Learned & Reflections

Through this week's milestone, I deeply reinforced several foundational concepts:
1. **The Separation of Concerns**: Recognizing that HTML is strictly for **content and structure**, not styling. It defines *what* is on the page, leaving *how it looks* for future CSS.
2. **The Document Object Model (DOM)**: I learned how the browser parses my raw text file (HTML) into a hierarchical tree of objects (nodes) that the browser engine eventually renders to the screen. 
3. **Accessibility (A11y)**: Understanding that semantic tags (`<nav>`, `<header>`) and attributes (`alt`, `for`) are not just stylistic choices, but direct instructions to assistive technologies. Bad HTML breaks the web for disabled users.

## 7. Technical Details & Algorithms

### Architecture
The project adheres to a **Static Client-Side Architecture**. 
- There is no server-side rendering or backend processing. 
- The HTML file is delivered directly to the client's browser.
- Due to the lack of external resources (no CSS files, no JS files, no complex database queries), the time-to-first-byte (TTFB) and rendering speeds are exceptionally fast.

### Data Structures: The DOM Tree
The browser utilizes a tree data structure to evaluate the HTML. The hierarchy for this project can be visualized specifically as:
```text
Document (Root)
└── <html>
    ├── <head> (Metadata, Title)
    └── <body>
        ├── <header>
        │   └── <nav> (Links)
        ├── <main>
        │   ├── <section id="about">
        │   ├── <section id="skills">
        │   └── <section id="contact"> (Form Nodes)
        └── <footer>
```

### Algorithms Utilized by the Browser
While no JavaScript was explicitly written, this project relies heavily on the browser's native algorithms:
1. **HTML Parsing Algorithm**: The browser's layout engine reads the HTML stream token by token, constructing the DOM tree in memory.
2. **Fragment Routing Algorithm**: Used by the navigation links. When clicked, the browser iterates through the DOM nodes until it finds an `id` matching the anchor hash, and updates the viewport scroll position to its computed Y-coordinate.
3. **Constraint Validation Algorithm**: Executed when the user clicks the "Submit" button inside the `<form>`. The browser iterates through all child input nodes. If any node has the `required` flag but an empty value, or a `type="email"` flag but a string failing an internal Regex test, the form submission event is blocked and a native error tooltip is generated.

> **Warning:** No CSS or JS was used, adhering strictly to the Week 1 HTML-only requirement.
