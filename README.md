# chaild-ai.github.io

Website for the CHAILD project, hosted at chaild.org

Site published from gh-pages branch, no Jekyll

### To publish changes:

Install gh-pages

``npm install gh-pages --save-dev``

Deploy to gh-pages

``npm run deploy``

**Remember to push local changes to main**

### To add news items:

Create markdown file under public/content/blog

Add information on title, description, tags, and date to start of file (cf other entries, description shown as subtitle on news card on homepage but not on expanded view)

Add slug to list of blogSlugs in portfolio.js

Save and publish changes