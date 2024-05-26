# What is this?

This is a repository that (I hope) contains some small quality of life improvements. It is setup to use for developing an MPA (Multi Page Application).

In the root directory, you will find several important files:

- `vite.config.js` - We need to tell Vite where to find the HTML files that make up our Multi Page Application. In this repo, all of the HTML files are in the root directory.
- `{name}.html` - several HTML files that all have unique content and most importantly/interestingly, they all contain a reference to a corresponding JS file. For example: `<script type="module" src="/src/index.js"></script>` within the `index.html` file.
- `src/*` - our source files. These include our JS files (page specific JS and other functions that can be used across pages) as well as our CSS files. Each 'specific' JS file can be viewed as the 'entry point' for our program. We can import supporting functions and any styles our page depends on here.

## How do I use this?

Edit the HTML files as you wish. If you want a new one, create it and add it to the `vite.config.js` along with the others. The only thing you need to worry about is that the HTML file includes a reference to the 'main' JS file for that page and that the 'main' JS file for each page imports everything it depends on.

When we want to view our page in the browser we can enter the command: `npm run dev`

This will start a local dev server where we can see our changes in real time.

When we want to build our application for production: `npm run build`

This will build everything and spit it out into the 'dist' directory.
