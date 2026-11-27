---
name: new-tool
description: Creates a new tool page for this site. Use when asked to build, add, or develop a new tool. Creates tools/<slug>.html, adds any needed CSS/JS assets, and links the tool from tools.html.
---

# New Tool

Create a self-contained, responsive tool page and register it on the tools index.

## Before you start

Gather (or infer from the request) the following. Ask the user only if it is genuinely ambiguous:

- **Tool name** and one-line description.
- **Slug**: lowercase, hyphen-separated, e.g. `color-picker`. This becomes the filename.
- **Category**: `Software` or `Hobbies` (the two sections in `tools.html`).
- **Font Awesome icon**: a free solid icon class, e.g. `fa-solid fa-palette`.

Follow the repository rules in `AGENTS.md`: plain HTML/CSS/JS only, no frameworks, no build step, English text, mobile-first, and shared colors via CSS variables.

## Steps

### 1. Create the tool page

Create `tools/<slug>.html`. Copy the structure below exactly, replacing the placeholders. Keep the sidebar, breadcrumb, and overall layout identical to the other tool pages. All asset paths from `tools/` use `../assets/...`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TOOL_NAME - Lorenzo Piersante</title>
    <link rel="icon" type="image/x-icon" href="../assets/images/favicon.ico">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
<div class="container">
    <aside class="sidebar">
        <div class="profile">
            <img src="../assets/images/avatar.jpg" alt="Lorenzo Piersante" class="avatar">
            <h1>Lorenzo Piersante</h1>
            <p class="description">Building my own little website, work in progress...</p>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="../index.html">
                        <i class="fa-solid fa-house"></i>
                        HOME
                    </a>
                </li>
                <li>
                    <a href="../articles.html">
                        <i class="fa-solid fa-pen-clip"></i>
                        ARTICLES
                    </a>
                </li>
                <li>
                    <a href="../tools.html" class="active">
                        <i class="fa-solid fa-screwdriver-wrench"></i>
                        TOOLS
                    </a>
                </li>
                <li>
                    <a href="../about.html">
                        <i class="fa-solid fa-circle-info"></i>
                        ABOUT
                    </a>
                </li>
            </ul>
        </nav>

        <div class="sidebar-bottom">
            <a href="https://github.com/lorenzo-piersante" target="_blank" aria-label="GitHub">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/lorenzopiersante" target="_blank" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>
    </aside>

    <main class="content">
        <div class="main-column">
            <div class="page-header">
                <a href="../tools.html" class="breadcrumb-link">Tools</a> / TOOL_NAME
            </div>

            <!-- Tool UI goes here. Reuse shared classes such as
                 tool-display-container, tool-display-icon, big-id-display,
                 copy-button, tool-textarea, button-group, action-button,
                 calculator-form, form-group, form-input, form-select,
                 radio-group, result-display, result-grid, result-item,
                 result-label, result-value. -->

        </div>

        <aside class="right-sidebar">
        </aside>
    </main>
</div>

<!-- Include only if the tool needs JavaScript -->
<script src="../assets/js/SLUG.js" defer></script>
</body>
</html>
```

Guidelines for the UI:

- Reuse existing classes from `assets/css/style.css` before adding new ones.
- If the tool needs a few very specific styles, create `assets/css/<slug>.css` and link it after `style.css` (per `AGENTS.md`, do not bloat the main stylesheet).
- Put tool JavaScript in `assets/js/<slug>.js` (per `AGENTS.md`, do not inline scripts in new pages). Use `defer` and query elements by ID.
- Ensure it works on mobile: stack inputs, avoid fixed widths, test narrow viewports.

### 2. Link it from tools.html

Add a card to the matching section (`Software` or `Hobbies`) inside the relevant `.tools-grid` in `tools.html`. Append it after the existing cards, keeping the same markup:

```html
<a href="tools/SLUG.html" class="tool-card">
    <i class="fa-solid fa-ICON"></i>
    <h3>TOOL_NAME</h3>
    <p>ONE_LINE_DESCRIPTION</p>
</a>
```

### 3. Verify

- [ ] `tools/<slug>.html` exists and opens without missing assets.
- [ ] All `../assets/...` paths resolve correctly from inside `tools/`.
- [ ] The new card appears in `tools.html` in the correct section with a working relative link.
- [ ] Tool-specific CSS (if any) lives in `assets/css/`; JS (if any) lives in `assets/js/`.
- [ ] No frameworks, no build step, no new root-level files.
- [ ] Text is in English and the page is responsive.
