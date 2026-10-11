# iwamad-sis1-portfolio

Live site: **https://abylaykamalbek26-ui.github.io/iwamad-sis1-portfolio//**

## About this site

This is my personal portfolio for the SIS 1 assignment, built with HTML, CSS and JavaScript. It has three sections (About Me, Projects, Contact) that you can reach from the navigation at the top, plus a dark/light theme toggle and a contact form that validates itself.

## Design decisions

I built the layout mobile-first, so the projects grid is a single column by default and switches to three columns at 1000px, giving small screens a genuinely different, readable layout rather than a squeezed grid.

I defined all colours as CSS variables on :root and override them under html[data-theme="dark"], so flipping one data-theme attribute updates the entire page’s background, text, borders, accent, and status colours.

I kept typography simple and consistent — 32px for h1, 24px for h2, 18px for h3, with h1 growing to 40px on desktop — and applied one shared :focus-visible outline to links, buttons, inputs, and textareas for consistent keyboard accessibility in both themes.