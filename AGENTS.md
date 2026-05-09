# Agent Guidelines

## Technology Stack
- **Modern Web Technologies**: The codebase must only use modern, plain HTML, CSS, and JavaScript. Do not use frontend frameworks or libraries unless explicitly instructed.
- **Focus on Simplicity**: Avoid overengineering. Keep the code straightforward, readable, and easy to maintain.

## Styling (CSS)
- **Centralized Styles**: All styles must be defined under the `assets/css` directory.
- **New Stylesheets**: If you are adding styles that are very specific to new pages, a new CSS stylesheet must be created within `assets/css` (rather than bloating the main stylesheets).

## Language
- **English Only**: The codebase (including comments, variable names, etc.) and all visible text must be in English.

## Directory Structure
- **Scripts**: All JavaScript files must be placed in the `assets/js` directory.
- **Images**: All image assets must be placed in the `assets/images` directory.
- **Root Files**: Do not clutter the root directory with sub-components or assets.

## Environment & Build Tools
- **No Build Step**: There is no build process for this project. Do not initialize `package.json`, do not use `npm` or `node`, and do not configure Webpack/Vite. The site is served exactly as written.

## Design & Aesthetics
- **Mobile-First**: Always design with a mobile-first approach. Ensure all new components and pages are fully responsive.
- **Consistency**: Use CSS variables for colors and themes to maintain a consistent aesthetic across the site.

## Behavioral Constraints
- **Preserve Files**: Do not delete or rename existing files without explicit user permission.
- **Semantic HTML**: When modifying existing pages, preserve the core layout and semantic HTML structure.
