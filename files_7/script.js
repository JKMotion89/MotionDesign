/* ============================================================
   JK MOTION — SHARED BEHAVIOUR
   ============================================================ */

/* ---- scroll progress -> "timecode" + playhead track ---- */
function initScrubber() {
  const track = document.querySelector(".scrubber__track");
  const code = document.querySelector(".scrubber__code");
  const kfButtons = document.querySelectorAll(".scrubber__kf[data-target]");
  const menuBtn = document.querySelector(".scrubber__menu-btn");
  const nav = document.querySelector(".scrubber__nav");

  function frames(n) { return String(n).padStart(2, "0"); }

  function update() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? window.scrollY / max : 0;
    if (track) track.style.width = (pct * 100).toFixed(1) + "%";

    if (code) {
      const totalFrames = Math.round(pct * 24 * 60); // pretend 60s timeline @24fps
      const s = Math.floor(totalFrames / 24);
      const f = totalFrames % 24;
      const m = Math.floor(s / 60);
      code.textContent = `${frames(m)}:${frames(s % 60)}:${frames(f)}`;
    }

    let current = null;
    document.querySelectorAll("[data-section]").forEach((sec) => {
      const r = sec.getBoundingClientRect();
      if (r.top <= 120 && r.bottom > 120) current = sec.dataset.section;
    });
    kfButtons.forEach((b) => b.classList.toggle("is-active", b.dataset.target === current));
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("is-open"));
    kfButtons.forEach((b) => b.addEventListener("click", () => nav.classList.remove("is-open")));
  }
}

/* ---- marquee of tools, built from config ---- */
function initMarquee() {
  const el = document.querySelector(".marquee__track");
  if (!el || typeof SITE === "undefined") return;
  const items = SITE.tools.concat(SITE.tools); // duplicate for seamless loop
  el.innerHTML = items.map((t) => `<span>${t}</span>`).join("");
}

/* ---- work grid, built from config ---- */
function initWorkGrid(limit) {
  const grid = document.querySelector("[data-work-grid]");
  if (!grid || typeof PROJECTS === "undefined") return;
  const list = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  grid.innerHTML = list.map((p) => `
    <a class="card" data-accent="${p.accent}" href="project.html?p=${encodeURIComponent(p.slug)}">
      <div class="card__ph" style="${p.image ? `background:center/cover no-repeat url('${p.image}');opacity:1` : ""}"></div>
      <div class="card__top"><span>${p.category}</span><span>${p.year}</span></div>
      <div>
        <div class="card__title">${p.title}</div>
        <div class="card__cat">${p.summary}</div>
      </div>
      <div class="card__play">&#9654;</div>
    </a>
  `).join("");
}

/* ---- individual project page ---- */
function initProjectPage() {
  const root = document.querySelector("[data-project-root]");
  if (!root || typeof PROJECTS === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("p");
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const p = idx >= 0 ? PROJECTS[idx] : PROJECTS[0];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  document.title = `${p.title} — ${SITE.brand}`;

  root.innerHTML = `
    <section class="project-hero wrap">
      <div class="project-hero__meta">
        <span>${p.category}</span><span>${p.year}</span><span>${p.tools.join(" \u00b7 ")}</span>
      </div>
      <h1>${p.title}</h1>
    </section>
    <div class="wrap">
      <div class="project-media" data-accent="${p.accent}" style="background:${p.image ? `center/cover no-repeat url('${p.image}')` : "var(--paper-dim)"}">
        ${p.embed ? `<div class="video-embed" style="position:absolute;inset:0;border:none;border-radius:0;"><iframe src="${p.embed}" title="${p.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : (p.video ? `
          <div class="video-player">
            <video class="project-media__video" src="${p.video}" playsinline></video>
            <button class="video-player__play" type="button" aria-label="Play video">
              <span class="video-player__ring"><span class="video-player__tri"></span></span>
            </button>
          </div>
        ` : (!p.image ? `<div class="project-media__ph">Add an image or video in config.js \u2192 image / video field</div>` : ""))}
      </div>
      <p class="project-body">${p.description}</p>
      ${p.gallery && p.gallery.length ? `
        <div class="section__tag" style="margin:56px 0 16px;">Gallery</div>
        <div class="project-gallery">
          ${p.gallery.map((src, i) => `
            <figure class="project-gallery__item${i === 0 ? " project-gallery__item--feature" : ""}">
              <img src="${src}" alt="${p.title} — image ${i + 1}" loading="lazy">
              <span class="project-gallery__index">${String(i + 1).padStart(2, "0")} / ${String(p.gallery.length).padStart(2, "0")}</span>
            </figure>
          `).join("")}
        </div>
      ` : ""}
      <div class="project-nav">
        <a href="project.html?p=${prev.slug}">&larr; ${prev.title}</a>
        <a href="work.html">All work</a>
        <a href="project.html?p=${next.slug}">${next.title} &rarr;</a>
      </div>
    </div>
  `;

  const player = root.querySelector(".video-player");
  if (player) {
    const vid = player.querySelector("video");
    const btn = player.querySelector(".video-player__play");
    btn.addEventListener("click", () => { vid.setAttribute("controls", ""); vid.play(); });
    vid.addEventListener("play", () => player.classList.add("is-playing"));
    vid.addEventListener("pause", () => { if (vid.currentTime === 0) player.classList.remove("is-playing"); });
    vid.addEventListener("ended", () => { vid.removeAttribute("controls"); player.classList.remove("is-playing"); });
  }
}

/* ---- fill in text from SITE config wherever a data-site attribute is present ---- */
function applySiteText() {
  if (typeof SITE === "undefined") return;
  document.querySelectorAll("[data-site]").forEach((el) => {
    const path = el.dataset.site.split(".");
    let val = SITE;
    path.forEach((k) => { val = val ? val[k] : undefined; });
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll("[data-site-href]").forEach((el) => {
    el.href = el.dataset.siteHref === "email" ? `mailto:${SITE.email}` : SITE[el.dataset.siteHref];
  });
  const socialList = document.querySelector("[data-social-list]");
  if (socialList) {
    socialList.innerHTML = SITE.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join("");
  }
  const toolList = document.querySelector("[data-tool-list]");
  if (toolList) {
    toolList.innerHTML = SITE.tools.map((t) => `<li>${t}</li>`).join("");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initScrubber();
  applySiteText();
  initMarquee();
  initWorkGrid(document.body.dataset.workLimit ? Number(document.body.dataset.workLimit) : null);
  initProjectPage();
});
