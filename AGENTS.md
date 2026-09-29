# AGENTS.md

Static bilingual folktale landing page. No build, no framework, no tests.

## Run
- No `package.json`, no install. Open `index.html` directly or serve: `python -m http.server` in `web/` then open `http://localhost:8000`.
- No lint/typecheck/test configured — verify by opening in browser + DevTools console (CDN failures are the main risk).

## Source of truth
- `PRD.md` defines the contract. `script.js:storyData` (5 entries, keys `title.{id,jv}`, `text.{id,jv}`) must stay byte-identical to PRD copywriting.

## Conventions (differ from defaults)
- Tailwind via CDN (`cdn.tailwindcss.com`); `style.css` is keyframes/overrides only — put layout in utility classes.
- Montserrat (single family, 400–800) is the only webfont. Palette is strictly B&W (`ink #0a0a0a`, white); photos get `grayscale(35%) contrast(1.05)` in CSS to match. No gold/maroon/cream.
- CDN pin: GSAP 3.12.5 + ScrollTrigger + ScrollToPlugin (cdnjs), Three.js r128 global (cdnjs), Lenis 1.1.14 (unpkg). Every lib is guarded with `typeof` fallback — page must stay readable if any CDN fails. Lenis only on `(pointer:fine)`; particles off on `deviceMemory<=4`/save-data/reduced-motion.
- OFFLINE RULE (learned): JS/CSS libs load from `vendor/` (local copies of the pins above), NOT from CDN — localhost must animate with zero internet. Only Google Fonts stays remote (graceful `system-ui` fallback). Cache-bust with `?v=YYYYMMDD` on vendor/script/style tags after any change, or users will run stale cached JS.
- Text sits directly on photos (no cards): `.scene-body` bottom-left, white + `text-shadow`, `.scene-scrim` is a bottom-only black gradient. Never reintroduce `.step-inner` card boxes.
- ANTI-BUG RULE (learned): ONE scrubbed timeline per pinned scene — never two tweens on the same property. Positioning/pinning is GSAP's job (`pin:true, anticipatePin:1`); CSS has no `position:sticky`, no `-100svh` margin hacks, no `scroll-behavior:smooth` (nav uses Lenis→ScrollTo→fallback chain via `[data-scrollto]`).
- Three.js transition (`#gl-transition`, fixed, z between scrim and text) has NO time-based animation — it only reads `glState` (see the `glState` two-field rule below). Deterministic under scrub.
- Navbar is a centered floating pill (no logo, title text + `#lang-toggle` only).
- Language toggle (`#lang-toggle`, `currentLang='id'|'jv'`): update `.story-title`/`.story-text` textContent in place. Do NOT re-render `#story-container` — it breaks ScrollTrigger. Static bilingual strings use `data-id`/`data-jv` attributes.
- Keep `id="hero"`, `#bg-canvas`, `#story-container`, `#lang-toggle` names — JS/CSS anchor to them.
- Cursor cerita (Selendang & Sumur Ajaib): `#cursor-ring`/`#cursor-dot`/`#cursor-label` = wrapper posisi milik GSAP (x/y + xPercent); visual milik span dalam via CSS — jangan tulis transform ke wrapper dari CSS. `html.has-cursor` satu-satunya saklar tampil + `cursor:none` (mencegah cursor ngestuck saat bail out). Kanvas `#cursor-trail` (pita + percikan) hanya MEMBACA `glState`, tidak menulis. Label hover bilingual via `data-cursor-id`/`data-cursor-jv` (BUKAN `data-id`/`data-jv`, agar `applyLanguage()` tidak menimpa isi tombol); refresh label saat toggle di `toggleLang()` → `cursorRefresh()`.
- Images: short names in `assets/` (`hero-joglo.jfif`, `bab1..bab5*.jfif`, `penutup-putih.jfif`) are web copies of the original long-named files (originals kept). `storyData` has 5 PRD entries but renders **6 scenes**: Bab 3 carries `parts[]` (3a "Memohon Selendang Kembali" = 2 layers, 3b "Hadiah Labu Kecil" = 1 layer); sentences are PRD byte-identical, only redistributed. Scene order/keys come from `buildSceneList()`; Bab 5 (key 6) = 2 layers. `onerror` hides broken `<img>`; don't delete the guard.
- Hero-sequence: `.scene` is a plain 100svh frame; GSAP pins it (`+=200%`, multi-layer `+=300%`) and runs ONE scrubbed timeline (enter → hold → [crossfade] → exit + `glState.energy` burst). Caption stack (`.cap-stack`, grid overlay) fades inside the same timeline.
- Hero has a start GATE (`initPrelude`): `.hero-veil` (black, `z-index:6`) covers the photo until `#hero-start` is pressed, then a time-based intro lifts it and hands control to scroll. Scroll is locked via event guard (`setScrollGuard`), **never** `overflow:hidden` — that would change ScrollTrigger's scroller detection and break the pins. `unlockPrelude` runs on timeline `onComplete` AND on a 4s `setTimeout` so the page can never stay locked. Gate is one-shot: it never re-arms (so "Baca dari Awal" in `#pesan` scrolls back freely). No gate at all when `reduceMotion` or GSAP is missing.
- Hero property partition (the hero carries TWO timelines, so this split is load-bearing — don't merge them): hero **scrub** owns `.scene-media` (scale, opacity), `.scene-body` (y, yPercent, opacity), `.scroll-hint` (opacity, restored on `onUpdate` when `progress < 0.02` so scrolling back to the hero restores the affordance). **Intro** owns `.hero-veil` (opacity), `.hero-line` (y), `#hero-kicker`/`#hero-subtitle` (y), `#hero-start` (scale, opacity, y), and `glState.prelude`. Intro never touches the scrub's properties.
- `glState` has TWO fields on purpose: `energy` (scrub timelines) and `prelude` (intro timeline). The Three.js tick reads `Math.max(energy, prelude)`. Never tween `glState.energy` from the intro — that property is owned by the hero scrub.
- `SCENE_DETAIL` adds one subtle per-scene move on top of the uniform zoom (in 1.18→1, out →1.12): 1 exposure `brightness(0.75→1)`, 2 lateral drift `xPercent -2.4`, 3 scrim `1→0.82`, 4 particle peak `0.75`, 5 exit `yPercent -20`, 6 exit `brightness(0.7)`. Each uses a property/timing window no other tween in that timeline touches. Closes the chapter with none.
- Headless Chrome always reports `prefers-reduced-motion: reduce` AND that flag cannot be overridden from JS (`matchMedia` stub does not affect CSS media queries). To test motion in headless you must inject a `<style>` that re-enables the rule, or you will only ever test the no-motion path.

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, load the antislop skill for the task:
- Core filter, always on: `antislop`
- UI / visual: `antislop-ui`
- Copy & text: `antislop-copywriting`
- People: `antislop-human`
- Mobile / responsive: `antislop-layoutmobile`
- Code comments: `antislop-code`
Before starting, ask the user when antislop applies: during the work, or after it is done.
To update antislop later: `npx antislop-ai --update`, or run `npx antislop-ai` and pick Overwrite them.
<!-- antislop:end -->
