# JK Motion — Portfolio Site

A fast, dependency-free static site (plain HTML/CSS/JS — no build step,
no framework). Everything you'll want to change lives in **one file**.

## Files

- `config.js` — **edit this.** Your name, bio, tools, socials, and every
  project (title, category, description, image/video, etc).
- `styles.css` — design tokens (colors, fonts) at the top of the file.
- `index.html` / `work.html` / `project.html` — page structure. You
  shouldn't need to touch these unless you want to change layout.
- `script.js` — renders the work grid / project pages from `config.js`
  and drives the scroll "timecode" bar at the top. No edits needed.

## Adding or editing a project

Open `config.js`, find the `PROJECTS` array, and either edit an existing
entry or copy/paste a new object into the array:

```js
{
  slug: "my-new-project",     // used in the URL: project.html?p=my-new-project
  title: "My New Project",
  category: "Brand Film",
  year: "2026",
  tools: ["After Effects", "Cinema 4D"],
  summary: "One line shown on the work grid card.",
  description: "A longer paragraph shown on the project page.",
  image: "images/my-new-project.jpg",  // leave "" for a placeholder
  video: "",                            // optional mp4 path or embed url
  accent: ""                            // "pink" | "yellow" | "blue" | "mint", or "" to auto-rotate
}
```

Delete an entry to remove a project — nothing else needs to change, the
grid and navigation both update automatically.

## Adding real images/video

Create an `images/` folder next to `index.html`, drop your thumbnails
in, and point each project's `image` field at it (e.g.
`images/kt-leather.jpg`). Until you do, projects show a generated
placeholder pattern instead — nothing breaks.

## Changing colors or fonts

Open `styles.css` and edit the `:root` block at the very top:

```css
--pink: #FF3B5C;
--yellow: #FFD23F;
--blue: #3D5AFE;
--mint: #17D7A0;
```

Change any hex value and it updates everywhere that color is used —
cards, links, the scroll bar, hover states, everything.

## Editing your bio, email, or social links

Also in `config.js`, at the top — the `SITE` object.

## Previewing locally

Just open `index.html` in a browser. For live-reload while editing, any
simple local server works, e.g. from this folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying

This is a static site, so any of these work and are free:

- **Netlify / Vercel** — drag the whole folder onto their dashboard, or
  connect a GitHub repo for auto-deploys.
- **GitHub Pages** — push this folder to a repo, enable Pages in repo
  settings.
- Point your existing `jkmotion.org` domain at whichever host you pick
  (each has simple custom-domain instructions).
