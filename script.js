/* script.js — Pinned hero-sequence: GSAP + ScrollTrigger + ScrollToPlugin + Three.js + Lenis.
   SATU timeline scrub per scene (tidak ada tween ganda per properti).
   storyData title/text wajib persis PRD; field `images` menunjuk aset lokal. */
(function () {
  'use strict';

  /* ================= 1. DATA (title/text persis PRD) ================= */
  const storyData = [
    {
      id: 1,
      images: ["./assets/bab1-joglo-cerah.jfif"],
      alt: "Rumah joglo yang cerah di tengah taman",
      title: { id: "Pengenalan Tokoh", jv: "Pambuka" },
      text: {
        id: "Pada zaman dahulu, hiduplah seorang gadis cantik dan baik hati bernama Bawang Putih. Ia tinggal bersama ibu tiri dan saudara tirinya, Bawang Merah, yang memiliki sifat pemalas, sombong, dan pendengki. Setiap hari, Bawang Putih disuruh mengerjakan seluruh pekerjaan rumah sendirian tanpa kenal lelah, sementara Bawang Merah hanya bersolek dan bermalas-malasan.",
        jv: "Ing jaman rumiyin, wonten lare estri ingkang ayu lan sae manahipun asma Bawang Putih. Piyambakipun gesang kaliyan ibu tiri lan sedherek tirinipun, Bawang Merah, ingkang gadhah watek kesed, gumedhe, lan drengki. Saben dinten, Bawang Putih dipun utus nglampahi sedaya padamelan griya piyambakan tanpa keraos sayah, dene Bawang Merah namung macak lan kesed-kesedan."
      }
    },
    {
      id: 2,
      images: ["./assets/bab2-sungai.jfif"],
      alt: "Selendang merah hanyut di sungai hutan",
      title: { id: "Insiden Selendang di Sungai", jv: "Insiden Lepen" },
      text: {
        id: "Suatu hari, saat Bawang Putih mencuci pakaian di sungai, selendang kesayangan ibu tirinya hanyut terbawa arus. Dengan rasa takut dimarahi, ia menyusuri aliran sungai untuk mencarinya, hingga akhirnya ia tiba di sebuah gubuk milik seorang nenek tua misterius yang menyimpan selendang tersebut.",
        jv: "Satunggaling dinten, nalika Bawang Putih mangumbah rasukan ing lepen, selendang katresnanipun ibu tiri kintir kabekta ilining toya. Kanthi raos ajrih badhe dipun duka, piyambakipun nyusuri ilining lepen kagem madosi, ngantos pungkasanipun dumugi ing satunggaling gubug kagunganipun simbah putri ingkang nyimpen selendang wau."
      }
    },
    {
      id: 3,
      images: [
        "./assets/bab3a-memohon.jfif",
        "./assets/bab3b-taman.jfif",
        "./assets/bab3c-labu-emas.jfif"
      ],
      alt: "Bawang Putih memohon selendang kepada nenek",
      title: { id: "Hadiah Labu Kecil", jv: "Bebungah Waluh Alit" },
      text: {
        id: "Nenek itu bersedia mengembalikan selendangnya asalkan Bawang Putih mau membantunya membersihkan rumah. Karena sifatnya yang rajin, Bawang Putih menyelesaikannya dengan sangat baik. Sebagai upah, sang nenek menghadiahinya sebuah labu kecil. Saat dibelah di rumah, labu itu ternyata berisi emas dan permata yang berkilauan.",
        jv: "Simbah wau kersa mangsulaken selendangipun manawi Bawang Putih purun mbiyantu ngresiki griyanipun. Amargi watekipun ingkang sregep, Bawang Putih ngrampungaken padamelan kanthi sae sanget. Minangka opah, simbah paring bebungah wujud waluh alit. Nalika dipun sigar ing griya, waluh menika jebul isinipun emas lan permata ingkang sumunar."
      },
      /* Bab 3 dipecah jadi 2 scene; kalimatnya sama persis, hanya didistribusikan */
      parts: [
        {
          title: { id: "Memohon Selendang Kembali", jv: "Nyuwun Selendang Wangsul" },
          text: {
            id: "Nenek itu bersedia mengembalikan selendangnya asalkan Bawang Putih mau membantunya membersihkan rumah. Karena sifatnya yang rajin, Bawang Putih menyelesaikannya dengan sangat baik.",
            jv: "Simbah wau kersa mangsulaken selendangipun manawi Bawang Putih purun mbiyantu ngresiki griyanipun. Amargi watekipun ingkang sregep, Bawang Putih ngrampungaken padamelan kanthi sae sanget."
          },
          images: [
            "./assets/bab3a-memohon.jfif",
            "./assets/bab3b-taman.jfif"
          ],
          captions: [
            null,
            { id: "Taman dibersihkan dengan rajin dan ikhlas.", jv: "Taman dipun resiki kanthi sregep lan ikhlas." }
          ]
        },
        {
          title: { id: "Hadiah Labu Kecil", jv: "Bebungah Waluh Alit" },
          text: {
            id: "Sebagai upah, sang nenek menghadiahinya sebuah labu kecil. Saat dibelah di rumah, labu itu ternyata berisi emas dan permata yang berkilauan.",
            jv: "Minangka opah, simbah paring bebungah wujud waluh alit. Nalika dipun sigar ing griya, waluh menika jebul isinipun emas lan permata ingkang sumunar."
          },
          images: ["./assets/bab3c-labu-emas.jfif"],
          captions: []
        }
      ]
    },
    {
      id: 4,
      images: ["./assets/bab4-gubuk.jfif"],
      alt: "Gubuk dengan sisi kehancuran dan kebahagiaan",
      title: { id: "Siasat Serakah", jv: "Siasat Srakah" },
      text: {
        id: "Mengetahui hal itu, Bawang Merah dan ibunya merasa iri dan serakah. Keesokan harinya, mereka sengaja menghanyutkan selendang dan mendatangi gubuk nenek tersebut. Namun, Bawang Merah menolak membantu pekerjaan rumah dan langsung menuntut diberikan labu yang paling besar dengan sikap yang angkuh.",
        jv: "Mangertosi babagan menika, Bawang Merah lan ibunipun rumaos iri lan srakah. Ing dinten candhakipun, tiyang kalih wau sengaja ngintiraken selendang lan murugi gubugipun simbah wau. Nanging, Bawang Merah mboten purun mbiyantu padamelan griya lan langsung nyuwun waluh ingkang paling ageng kanthi watek ingkang gumedhe."
      }
    },
    {
      id: 5,
      images: ["./assets/bab5-labu-mengerikan.jfif"],
      alt: "Labu besar yang menyeramkan",
      title: { id: "Hukuman Keserakahan", jv: "Piwalesing Srakah" },
      text: {
        id: "Sesampainya di rumah, Bawang Merah dan ibunya mengunci pintu dan segera membelah labu besar itu dengan harapan mendapatkan emas yang lebih banyak. Namun malang, bukannya perhiasan, yang keluar justru hewan-hewan berbisa seperti ular dan kalajengking yang menyerang dan menghukum keserakahan mereka.",
        jv: "Dumugi ing griya, Bawang Merah lan ibunipun ngunci lawang lan enggal-enggal nyigar waluh ageng menika kanthi pangajeng-ajeng pikantuk emas ingkang langkung kathah. Nanging cilaka, sanes emas emas perhiasan, ingkang medal kepara kewan-kewan mawa bisa kadosta ula lan kalajengking ingkang nyerang lan ngukum tumindak srakahipun."
      }
    }
  ];

  /* Caption pendek dwibasa untuk lapis gambar tambahan (bukan isi cerita) */
  const STEP_CAPTIONS = {};

  const PHASE = [
    { id: "Pambuka", jv: "Pambuka" },
    { id: "Konflik", jv: "Konflik" },
    { id: "Panyuwunan", jv: "Panyuwunan" },
    { id: "Mukjijat", jv: "Mukjijat" },
    { id: "Godaan", jv: "Godaan" },
    { id: "Pungkasan", jv: "Pungkasan" }
  ];

  /* Daftar scene tampil: entri ber-`parts` (Bab 3) mekar jadi 2 scene → total 6 */
  function buildSceneList() {
    const list = [];
    storyData.forEach(function (d) {
      if (d.parts) {
        d.parts.forEach(function (p) {
          list.push({
            dataId: d.id, alt: d.alt,
            title: p.title, text: p.text,
            images: p.images, captions: p.captions || []
          });
        });
      } else {
        list.push({
          dataId: d.id, alt: d.alt,
          title: d.title, text: d.text,
          images: d.images, captions: STEP_CAPTIONS[d.id] || []
        });
      }
    });
    return list;
  }
  const sceneList = buildSceneList();

  /* ================= 2. STATE ================= */
  let currentLang = 'id';
  let lenis = null;
  /* Diisi initCursor bila cursor cerita jalan; dipanggil toggleLang supaya
     label hover ikut berganti bahasa tanpa perlu gerak mouse. */
  let cursorRefresh = null;

  const container = document.getElementById('story-container');
  const toggleBtn = document.getElementById('lang-toggle');
  const heroLangBtn = document.getElementById('hero-lang-btn');
  const optId = document.getElementById('lang-opt-id');
  const optJv = document.getElementById('lang-opt-jv');
  const langBadge = document.getElementById('lang-badge');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  /* `min` = mode motion paling minimal. Pin dan pergantian babak tetap hidup
     (itu tata letak, bukan gerak); yang dimatikan hanya zoom, drift, partikel,
     dan naik-turun teks. `reduceMotion` tidak boleh mematikan seluruh situs. */
  const min = reduceMotion;

  /* Status energi partikel transisi — HANYA di-tween oleh timeline GSAP.
     `energy` dimiliki timeline scrub tiap scene/hero, `prelude` dimiliki
     timeline intro (waktu nyata). Dipisah supaya tidak ada dua tween pada
     field yang sama. */
  const glState = { energy: 0, prelude: 0 };

  /* ScrollTrigger pin per scene, dipakai navigasi dot (landing 35% pin). */
  const pinST = {};

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ================= 3. RENDER — teks polos, tanpa kartu ================= */
  function renderScenes() {
    const total = String(sceneList.length).padStart(2, '0');
    container.innerHTML = sceneList.map((d, i) => {
      const key = i + 1;
      const num = String(key).padStart(2, '0');
      const phase = PHASE[i] || PHASE[0];
      const captions = d.captions || [];

      const media = d.images.map((src, k) =>
        `<img src="${esc(src)}" alt="${esc(d.alt || d.title[currentLang])}" loading="lazy" decoding="async" class="scene-img${k === 0 ? ' is-active' : ''}" data-layer="${k}" onerror="this.style.display='none'" />`
      ).join('');

      // Caption ditumpuk (grid stack), difade bergantian di dalam timeline
      let capStack = '';
      if (d.images.length > 1) {
        capStack = '<div class="cap-stack" aria-hidden="true">' + d.images.map((_, k) => {
          const c = captions[k];
          if (!c) return `<p class="beat-cap" data-cap="${k}"></p>`;
          return `<p class="beat-cap" data-cap="${k}" data-id="${esc(c.id)}" data-jv="${esc(c.jv)}">${esc(c[currentLang])}</p>`;
        }).join('') + '</div>';
      }

      return `
      <section class="scene" id="bab-${key}" data-scene="${key}" aria-label="Bab ${num}: ${esc(d.title[currentLang])}">
        <div class="scene-pin">
          <div class="scene-media">${media}</div>
          <div class="scene-scrim"></div>
          ${capStack}
          <div class="scene-body">
            <p class="step-kicker"><span class="reveal-mask"><span class="reveal-line" data-reveal="kicker"><span class="kicker-num">${num}</span> / ${total} &nbsp;·&nbsp; <span data-id="${esc(phase.id)}" data-jv="${esc(phase.jv)}">${esc(phase[currentLang])}</span></span></span></p>
            <h2 class="story-title"><span class="reveal-mask"><span class="reveal-line" data-reveal="title">${esc(d.title[currentLang])}</span></span></h2>
            <p class="story-text"><span class="reveal-mask"><span class="reveal-line" data-reveal="body">${esc(d.text[currentLang])}</span></span></p>
          </div>
        </div>
      </section>`;
    }).join('');
  }

  /* ============ 4. TOGGLE — update teks saja (tanpa re-render) ============ */
  function paintToggle() {
    const isId = currentLang === 'id';
    optId.className = 'px-3 py-1.5 rounded-full transition-all ' + (isId ? 'bg-black text-white' : 'text-black/50');
    optJv.className = 'px-3 py-1.5 rounded-full transition-all ' + (!isId ? 'bg-black text-white' : 'text-black/50');
    toggleBtn.setAttribute('aria-pressed', String(!isId));
    if (langBadge) langBadge.textContent = isId ? 'Bahasa: Indonesia' : 'Basa: Jawa';
  }

  function applyLanguage() {
    container.querySelectorAll('.scene').forEach((scene) => {
      const key = Number(scene.getAttribute('data-scene'));
      const d = sceneList[key - 1];
      if (!d) return;
      // Tulis ke .reveal-line, bukan ke .story-title/.story-text, supaya struktur
      // mask yang jadi target timeline GSAP tidak ikut hancur.
      const t = scene.querySelector('[data-reveal="title"]');
      const p = scene.querySelector('[data-reveal="body"]');
      if (t) t.textContent = d.title[currentLang];
      if (p) p.textContent = d.text[currentLang];
      scene.setAttribute('aria-label', 'Bab ' + String(key).padStart(2, '0') + ': ' + d.title[currentLang]);
    });
    document.querySelectorAll('[data-id]').forEach((el) => {
      const v = el.getAttribute('data-' + currentLang);
      if (v != null) el.textContent = v;
    });
    document.documentElement.lang = currentLang === 'id' ? 'id' : 'jv';
    paintToggle();
    scheduleRefresh();
  }

  function toggleLang() {
    currentLang = currentLang === 'id' ? 'jv' : 'id';
    applyLanguage();
    if (typeof cursorRefresh === 'function') cursorRefresh();
  }

  if (toggleBtn) toggleBtn.addEventListener('click', toggleLang);
  if (heroLangBtn) heroLangBtn.addEventListener('click', toggleLang);

  function refreshTriggers() {
    try {
      if (typeof ScrollTrigger === 'undefined') return;
      ScrollTrigger.refresh();
      // Panjang scroll Lenis di-cache saat dibuat. Pin ScrollTrigger mengubah
      // tinggi dokumen, jadi Lenis harus diukur ulang setelah refresh, kalau tidak
      // ia thinks halaman hanya setinggi dokumen yang belum di-pin.
      if (lenis && typeof lenis.resize === 'function') lenis.resize();
    } catch (e) { /* abaikan */ }
  }

  /* Refresh itu mahal (8 pin diukur ulang) dan bisa membuat latch belakang saat
     dipakai di tengah scroll. Semua pemicu dikumpulkan ke satu call per frame. */
  let refreshQueued = false;
  function scheduleRefresh() {
    if (refreshQueued) return;
    refreshQueued = true;
    requestAnimationFrame(function () { refreshQueued = false; refreshTriggers(); });
  }

  /* ================= 5. LENIS smooth scroll (guard + fallback) ================= */
  function initSmooth() {
    try {
      if (typeof Lenis === 'undefined' || !finePointer) return;
      // Lerp tinggi = hampir seperti scroll native, untuk prefers-reduced-motion.
      lenis = new Lenis({ lerp: reduceMotion ? 0.28 : 0.11, smoothWheel: true });
      if (typeof ScrollTrigger !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);
      } else {
        const raf = function (t) { lenis.raf(t); requestAnimationFrame(raf); };
        requestAnimationFrame(raf);
      }
    } catch (e) { lenis = null; }
  }

  function scrollToTarget(sel) {
    // Navigasi bab mendarat 35% ke dalam pin (teks sudah terlihat), bukan awal pin.
    const m = /^#bab-(\d+)$/.exec(sel || '');
    const st = m && pinST[m[1]];
    try {
      if (st) {
        const y = st.start + (st.end - st.start) * 0.35;
        if (lenis) { lenis.scrollTo(y, { duration: 1.6 }); return; }
        if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
          gsap.to(window, { duration: 1.2, ease: 'power2.inOut', scrollTo: y });
          return;
        }
        window.scrollTo(0, y);
        return;
      }
    } catch (e) { /* jatuh ke path elemen */ }
    const el = document.querySelector(sel);
    if (!el) return;
    try {
      if (lenis) { lenis.scrollTo(el, { duration: 1.6 }); return; }
      if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
        gsap.to(window, { duration: 1.2, ease: 'power2.inOut', scrollTo: sel });
        return;
      }
    } catch (e) { /* jatuh ke default */ }
    el.scrollIntoView();
  }

  function initNav() {
    document.querySelectorAll('[data-scrollto]').forEach((a) => {
      a.addEventListener('click', function (ev) {
        ev.preventDefault();
        scrollToTarget(a.getAttribute('data-scrollto'));
      });
    });
  }

  /* ================= 6. THREE.JS — partikel transisi antar hero =================
     Tidak punya animasi waktu sendiri; hanya membaca glState.energy
     yang di-tween oleh timeline GSAP (scrub) → deterministik. */
  function initGL() {
    const canvas = document.getElementById('gl-transition');
    try {
      if (!canvas || typeof THREE === 'undefined' || reduceMotion) {
        if (canvas) canvas.style.display = 'none';
        return;
      }
      if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
        canvas.style.display = 'none';
        return;
      }
      if (navigator.connection && navigator.connection.saveData) {
        canvas.style.display = 'none';
        return;
      }
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 8;

      const COUNT = 800;
      const base = new Float32Array(COUNT * 3);
      const seed = new Float32Array(COUNT * 2);
      const pos = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        base[i * 3] = (Math.random() - 0.5) * 16;
        base[i * 3 + 1] = (Math.random() - 0.5) * 10;
        base[i * 3 + 2] = (Math.random() - 0.5) * 4;
        seed[i * 2] = Math.random() * Math.PI * 2;
        seed[i * 2 + 1] = 0.3 + Math.random() * 0.9;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color: 0xffffff, size: 0.055, transparent: true, opacity: 0, depthWrite: false
      });
      const points = new THREE.Points(geo, mat);
      scene.add(points);

      const clock = new THREE.Clock();
      (function tick() {
        requestAnimationFrame(tick);
        if (document.hidden) return;
        const t = clock.getElapsedTime();
        const e = Math.max(glState.energy, glState.prelude);
        if (e <= 0.001 && mat.opacity <= 0.001) return; // hemat GPU saat idle
        mat.opacity = e * 0.85;
        mat.size = 0.055 + e * 0.05;
        points.rotation.y = t * 0.02 * (1 + e * 6);
        const arr = geo.attributes.position.array;
        for (let i = 0; i < COUNT; i++) {
          const s1 = seed[i * 2], s2 = seed[i * 2 + 1];
          arr[i * 3] = base[i * 3] + Math.sin(t * s2 + s1) * e * 1.6;
          arr[i * 3 + 1] = base[i * 3 + 1] + Math.cos(t * s2 * 0.8 + s1) * e * 1.2 + e * 0.6;
          arr[i * 3 + 2] = base[i * 3 + 2];
        }
        geo.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      })();

      window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight, false);
      });
    } catch (e) {
      if (canvas) canvas.style.display = 'none';
    }
  }

  /* ================= 7. GSAP — SATU pinned timeline per scene ================= */
  /* Status dot HANYA dari timeline pin (️tanpa trigger terpisah → tanpa zona mati). */
  function setActiveDot(key) {
    document.querySelectorAll('.chapter-dot').forEach(function (d) {
      const on = d.getAttribute('data-target') === 'bab-' + key;
      d.classList.toggle('is-active', on);
      if (!on) setDotFill(d, 0);
    });
  }
  function clearDots() {
    document.querySelectorAll('.chapter-dot').forEach(function (d) {
      d.classList.remove('is-active');
      setDotFill(d, 0);
    });
  }
  function setDotFill(dot, p) {
    const fill = dot.querySelector('.dot-fill');
    if (!fill || typeof gsap === 'undefined') return;
    gsap.set(fill, { scaleY: Math.max(0, Math.min(1, p)) });
  }
  function paintDotProgress(key, p) {
    const dot = document.querySelector('.chapter-dot[data-target="bab-' + key + '"]');
    if (dot) setDotFill(dot, p);
  }

  /* Detail halus per babak. Zoom tetap seragam di semua babak; yang membedakan
     cuma satu gerak tambahan, masing-masing pada properti yang tidak dipakai
     tween lain (lihat catatan partisi di AGENTS.md).
     1 Pambuka   exposure naik          cahaya masuk, halaman dibuka
     2 Konflik   meluncur ke kiri       air sungai mengalir
     3 Panyuwunan scrim mengembes        fokus ditarik ke teks
     4 Mukjijat  partikel lebih kecil   hadiah lebih kecil dari permintaan
     5 Godaan    teks lebih tinggi      keserakahan naik lebih cepat
     6 Pungkasan exposure turun         horor meredupkan dunia */
  const SCENE_DETAIL = {
    1: { exposureIn: 0.75 },
    2: { drift: -2.4 },
    3: { scrimIn: 1, scrimOut: 0.82 },
    4: { peak: 0.75 },
    5: { exitLift: -20 },
    6: { exposureOut: 0.7 }
  };

  function buildSceneTimeline(section, key, holdPct) {
    const media = section.querySelector('.scene-media');
    const body = section.querySelector('.scene-body');
    const scrim = section.querySelector('.scene-scrim');
    const layers = section.querySelectorAll('.scene-img');
    const caps = section.querySelectorAll('.beat-cap');
    const kicker = section.querySelector('[data-reveal="kicker"]');
    const title = section.querySelector('[data-reveal="title"]');
    const prose = section.querySelector('[data-reveal="body"]');
    const lines = [kicker, title, prose].filter(Boolean);
    const D = min ? {} : (SCENE_DETAIL[Number(key)] || {});

    if (min) {
      // Tanpa gerak: foto hanya muncul, teks muncul dengan fade pendek berurutan
      // seperti urutan baca. Tidak ada zoom, drift, partikel, atau naik-turun.
      gsap.set(media, { opacity: 1, scale: 1 });
      gsap.set(body, { opacity: 1 });
      gsap.set(lines, { opacity: 0 });
    } else {
      gsap.set(media, { scale: 1.18, opacity: 1 });
      gsap.set(body, { opacity: 1 });
      // Tiap baris teks tersembunyi di balik .reveal-mask, lalu naik ke tempatnya.
      gsap.set(lines, { yPercent: 118 });
      if (title) gsap.set(title, { letterSpacing: '0.055em' });
      if (D.exposureIn != null) gsap.set(media, { filter: 'brightness(' + D.exposureIn + ')' });
      if (D.drift != null) gsap.set(media, { xPercent: 0 });
      if (D.scrimIn != null && scrim) gsap.set(scrim, { opacity: D.scrimIn });
    }
    layers.forEach(function (l, k) { gsap.set(l, { opacity: k === 0 ? 1 : 0 }); });
    caps.forEach(function (c, k) { gsap.set(c, { opacity: k === 0 ? 1 : 0, y: k === 0 ? 0 : 24 }); });

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=' + holdPct + '%',
        pin: true,
        anticipatePin: 1,
        scrub: min ? true : 0.3,
        invalidateOnRefresh: true,
        onToggle: function (self) { if (self.isActive) setActiveDot(key); },
        onUpdate: function (self) { paintDotProgress(key, self.progress); }
      }
    });

    const peak = D.peak != null ? D.peak : 1;

    if (min) {
      tl.to(media, { opacity: 1, duration: 0.3 }, 0);
      tl.to(kicker, { opacity: 1, duration: 0.3 }, 0.1);
      tl.to(title, { opacity: 1, duration: 0.3 }, 0.3);
      tl.to(prose, { opacity: 1, duration: 0.3 }, 0.5);
      if (caps[0]) tl.to(caps[0], { opacity: 1, y: 0, duration: 0.3 }, 0.6);
    } else {
      // Masuk: foto zoom-in, lalu teks naik dari balik mask dalam urutan baca
      // (kicker -> judul -> cerita) supaya mata diarahkan berurutan.
      tl.to(media, { scale: 1, duration: 1 }, 0);
      if (D.exposureIn != null) tl.to(media, { filter: 'brightness(1)', duration: 1 }, 0);
      if (D.scrimOut != null && scrim) tl.to(scrim, { opacity: D.scrimOut, duration: 1 }, 0);
      tl.to(kicker, { yPercent: 0, duration: 0.5 }, 0.15);
      tl.to(title, { yPercent: 0, duration: 0.7 }, 0.32);
      // Judul rapatkan jaraknya ke lebar akhir: satu properti (letterSpacing)
      // pada target yang sama, jadi tidak menabrak tween lain.
      if (title) tl.to(title, { letterSpacing: '-0.01em', duration: 0.7 }, 0.32);
      tl.to(prose, { yPercent: 0, duration: 0.9 }, 0.55);
      if (caps[0]) tl.to(caps[0], { opacity: 1, y: 0, duration: 0.5 }, 0.6);
    }

    // Tahan: satu gerak meluncur per babak, di luar jendela tween zoom
    if (D.drift != null) tl.to(media, { xPercent: D.drift, duration: 0.6 }, 1.0);

    let at = min ? 1.1 : 1.6;
    // Crossfade lapis + caption + semburan partikel (Bab 3 & 5)
    layers.forEach(function (layer, k) {
      if (k === 0) return;
      tl.to(layers[k - 1], { opacity: 0, duration: 0.6 }, at);
      tl.to(layer, { opacity: 1, duration: 0.6 }, at);
      if (caps[k - 1]) tl.to(caps[k - 1], { opacity: 0, duration: 0.4 }, at);
      if (caps[k]) tl.to(caps[k], { opacity: 1, y: 0, duration: 0.5 }, at + 0.1);
      if (!min) {
        tl.to(glState, { energy: peak, duration: 0.3 }, at);
        tl.to(glState, { energy: 0, duration: 0.3 }, at + 0.3);
      }
      at += 1.0;
    });

    // Keluar: semburan partikel + zoom-out + redup (ditahan 0.45 agar handoff mulus)
    if (!min) tl.to(glState, { energy: peak, duration: 0.35 }, at);
    if (min) {
      tl.to(media, { opacity: 0.3, duration: 0.4 }, at);
      tl.to(body, { opacity: 0, duration: 0.4 }, at);
    } else {
      tl.to(media, { scale: 1.12, opacity: 0.45, duration: 0.9 }, at);
      if (D.exposureOut != null) tl.to(media, { filter: 'brightness(' + D.exposureOut + ')', duration: 0.9 }, at);
      tl.to(body, { yPercent: D.exitLift != null ? D.exitLift : -14, opacity: 0, duration: 0.7 }, at + 0.1);
    }
    if (caps.length) tl.to(caps, { opacity: 0, duration: 0.5 }, at + 0.1);
    if (!min) tl.to(glState, { energy: 0, duration: 0.35 }, at + 0.45);
    return tl;
  }

  function initGsap() {
    try {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return false;
      gsap.registerPlugin(ScrollTrigger);
      if (typeof ScrollToPlugin !== 'undefined') gsap.registerPlugin(ScrollToPlugin);
      ScrollTrigger.config({ ignoreMobileResize: true });

      // — Hero: pin + zoom-in, keluar dengan semburan —
      // Teks hero TIDAK memakai reveal berbasis scrub: hero sudah tampil di
      // progress 0, jadi teks yang disembunyikan akan tetap tersembunyi sampai
      // user scroll. Reveal teks hero jadi milik timeline intro (prelude).
      // Partisi: scrub = media/body/scroll-hint, intro = veil + teks + tombol.
      (function () {
        const hero = document.getElementById('hero');
        const media = hero.querySelector('.scene-media');
        const body = hero.querySelector('.scene-body');
        const hint = hero.querySelector('.scroll-hint');

        gsap.set(media, { scale: min ? 1 : 1.25, opacity: 1 });
        gsap.set(body, { y: 0, opacity: 1 });

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: hero, start: 'top top', end: '+=' + (min ? '110' : '150') + '%',
            pin: true, anticipatePin: 1, scrub: min ? true : 0.3, invalidateOnRefresh: true,
            onToggle: function (self) { if (self.isActive) clearDots(); },
            // Kembali ke atas: affordance scroll dipulihkan, bukan dibiarkan mati.
            onUpdate: function (self) { if (self.progress < 0.02 && hint) gsap.set(hint, { opacity: 1 }); }
          }
        });

        if (min) {
          tl.to({}, { duration: 0.6 }, 0);
        } else {
          tl.to(media, { scale: 1, duration: 1 }, 0);
          tl.to({}, { duration: 0.8 }, 1); // tahan sinematik
          tl.to(glState, { energy: 1, duration: 0.35 }, 1.8);
          tl.to(media, { scale: 1.12, opacity: 0.45, duration: 0.9 }, 1.8);
          tl.to(body, { yPercent: -14, opacity: 0, duration: 0.7 }, 1.9);
          if (hint) tl.to(hint, { opacity: 0, duration: 0.4 }, 1.8);
          tl.to(glState, { energy: 0, duration: 0.35 }, 2.25);
        }
      })();

      // — 6 scene: pin tahan lama sinematik —
      gsap.utils.toArray('.scene[data-scene]').forEach(function (section) {
        const key = section.getAttribute('data-scene');
        const layers = section.querySelectorAll('.scene-img').length;
        const hold = min ? (layers > 1 ? '170' : '120') : (layers > 1 ? '300' : '200');
        const tl = buildSceneTimeline(section, key, hold);
        pinST[key] = tl.scrollTrigger;
      });

      // — Penutup: pin + zoom-in, tanpa exit —
      (function () {
        const pesan = document.getElementById('pesan');
        const media = pesan.querySelector('.scene-media');
        const body = pesan.querySelector('.scene-body');
        const quote = pesan.querySelector('.scene-body blockquote');
        const kicker = pesan.querySelector('.step-kicker');
        gsap.set(media, { scale: min ? 1 : 1.25, opacity: 1 });
        gsap.set(body, { opacity: 1 });
        if (min) {
          gsap.set([kicker, quote].filter(Boolean), { opacity: 0 });
        } else {
          gsap.set([kicker, quote].filter(Boolean), { yPercent: 118 });
          if (quote) gsap.set(quote, { letterSpacing: '0.04em' });
        }
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: pesan, start: 'top top', end: '+=' + (min ? '110' : '150') + '%',
            pin: true, anticipatePin: 1, scrub: min ? true : 0.3, invalidateOnRefresh: true,
            onToggle: function (self) { if (self.isActive) setActiveDot('6'); }
          }
        });
        if (min) {
          tl.to(media, { opacity: 1, duration: 0.3 }, 0);
          tl.to(kicker, { opacity: 1, duration: 0.3 }, 0.1);
          tl.to(quote, { opacity: 1, duration: 0.3 }, 0.3);
          tl.to({}, { duration: 0.8 }, 0.6);
        } else {
          tl.to(media, { scale: 1, duration: 1 }, 0);
          tl.to(kicker, { yPercent: 0, duration: 0.5 }, 0.15);
          tl.to(quote, { yPercent: 0, duration: 0.8 }, 0.3);
          tl.to(quote, { letterSpacing: '-0.01em', duration: 0.8 }, 0.3);
          tl.to(glState, { energy: 0.7, duration: 0.4 }, 0.4);
          tl.to(glState, { energy: 0, duration: 0.4 }, 0.8);
          tl.to({}, { duration: 1.0 }, 1); // tahan akhir
        }
      })();

      initNavAutohide();

      // — Progress bar —
      const bar = document.getElementById('progress-bar');
      if (bar) {
        gsap.to(bar, {
          width: '100%', ease: 'none',
          scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 }
        });
      }
      return true;
    } catch (e) { return false; }
  }

  /* ================= 8. NAVBAR — hilang saat turun, muncul saat naik =================
     Arah scroll dibaca dari satu trigger penuh halaman, lalu navbar hanya reacting
     saat arah benar-benar berubah supaya tidak berkedip. autoAlpha dipakai, bukan
     yPercent saja, supaya navbar yang tersembunyi benar-benar keluar dari tab order. */
  function initNavAutohide() {
    const nav = document.getElementById('nav-pill');
    if (!nav || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    let dir = 0;
    let hidden = null;
    // GSAP menulis ulang `transform` penuh, jadi pemusatan pill ikut dipegang
    // GSAP lewat xPercent. Kalau dipusatkan lewat utility Tailwind, transform
    // itu akan hilang begitu yPercent pertama kali dianimasikan.
    gsap.set(nav, { xPercent: -50 });
    const hideVars = min
      ? { xPercent: -50, autoAlpha: 0, duration: 0.2 }
      : { xPercent: -50, yPercent: -150, autoAlpha: 0, duration: 0.35, ease: 'power2.out' };
    const showVars = min
      ? { xPercent: -50, autoAlpha: 1, duration: 0.2 }
      : { xPercent: -50, yPercent: 0, autoAlpha: 1, duration: 0.35, ease: 'power2.out' };

    function apply(next) {
      if (next === hidden) return;
      hidden = next;
      gsap.to(nav, next ? hideVars : showVars);
    }

    ScrollTrigger.create({
      trigger: document.body,
      start: 0,
      end: 'max',
      onUpdate: function (self) {
        if (self.scroll() < 40) { apply(false); return; }
        if (self.direction === dir) return;
        dir = self.direction;
        apply(dir === 1);
      }
    });
  }

  /* ================= 9. PRELUDE — gerbang "Mulai Cerita" =================
     Scroll terkunci sampai tombol ditekan, lalu intro diputar sekali dan
     kontrol diserahkan ke scroll. Properti yang disentuh intro TIDAK boleh
     dipakai timeline scrub hero (partisi properti: AGENTS.md).
     Scroll dikunci lewat event guard, BUKAN overflow, supaya ScrollTrigger
     tetap menghitung pin dengan benar. */
  const prelude = { armed: false, playing: false };
  let scrollGuarded = false;
  let snapping = false;
  const SCROLL_KEYS = [' ', 'PageDown', 'PageUp', 'ArrowDown', 'ArrowUp', 'Home', 'End'];

  function blockScroll(e) {
    if (scrollGuarded) {
      e.preventDefault();
      playPrelude();
    }
  }

  function blockScrollKeys(e) {
    if (!scrollGuarded) return;
    const t = e.target;
    if (t && t.closest && t.closest('button, a, input, select, textarea')) return;
    if (SCROLL_KEYS.indexOf(e.key) !== -1) {
      e.preventDefault();
      playPrelude();
    }
  }

  function snapBack() {
    if (!scrollGuarded || snapping) return;
    if (window.scrollY > 0) {
      snapping = true;
      window.scrollTo(0, 0);
      requestAnimationFrame(function () { snapping = false; });
    }
  }

  function setScrollGuard(on) {
    if (on === scrollGuarded) return;
    scrollGuarded = on;
    if (on) {
      document.addEventListener('wheel', blockScroll, { passive: false });
      document.addEventListener('touchmove', blockScroll, { passive: false });
      document.addEventListener('keydown', blockScrollKeys, { passive: false });
      window.addEventListener('scroll', snapBack, { passive: true });
      if (lenis) lenis.stop();
    } else {
      document.removeEventListener('wheel', blockScroll);
      document.removeEventListener('touchmove', blockScroll);
      document.removeEventListener('keydown', blockScrollKeys);
      window.removeEventListener('scroll', snapBack);
      if (lenis) lenis.start();
    }
  }

  function unlockPrelude() {
    if (!prelude.armed) return;
    prelude.armed = false;
    setScrollGuard(false);
    document.body.classList.remove('is-locked');
    const nav = document.getElementById('chapter-nav');
    if (nav) nav.inert = false;
    refreshTriggers();
  }

  function playPrelude() {
    if (prelude.playing || !prelude.armed) return;
    prelude.playing = true;
    unlockPrelude(); // Buka kunci scroll secara langsung agar pengalaman scroll instan dan mulus
    const hero = document.getElementById('hero');
    const startBtn = document.getElementById('hero-start');
    if (startBtn) startBtn.removeEventListener('click', playPrelude);

    try {
      const veil = document.getElementById('hero-veil');
      const kicker = hero.querySelector('.step-kicker');
      const prose = hero.querySelector('#hero-subtitle');
      const lines = hero.querySelectorAll('.hero-line');

      const tl = gsap.timeline();
      if (min) {
        if (veil) tl.to(veil, { opacity: 0, duration: 0.35, ease: 'none' }, 0);
        if (startBtn) tl.to(startBtn, { opacity: 0, duration: 0.2, ease: 'none' }, 0.15);
        tl.call(function () { if (startBtn) startBtn.hidden = true; }, null, 0.4);
        return;
      }
      if (startBtn) tl.to(startBtn, { scale: 0.96, duration: 0.12, yoyo: true, repeat: 1, ease: 'power2.out' }, 0);
      if (veil) tl.to(veil, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 0.1);
      tl.to(glState, { prelude: 1, duration: 0.5, ease: 'none' }, 0.1);
      tl.to(glState, { prelude: 0, duration: 0.6, ease: 'none' }, 0.6);
      if (kicker) tl.fromTo(kicker, { y: 16 }, { y: 0, duration: 0.6, ease: 'power2.out' }, 0.2);
      lines.forEach(function (l, i) {
        tl.fromTo(l, { y: 30 }, { y: 0, duration: 0.7, ease: 'power3.out' }, 0.3 + i * 0.12);
      });
      if (prose) tl.fromTo(prose, { y: 20 }, { y: 0, duration: 0.7, ease: 'power2.out' }, 0.62);
      if (startBtn) {
        tl.to(startBtn, { opacity: 0, y: -8, duration: 0.4, ease: 'power1.in' }, 0.9);
        tl.call(function () { startBtn.hidden = true; }, null, 1.35);
      }
    } catch (e) {
      unlockPrelude();
    }
  }

  function initPrelude() {
    const veil = document.getElementById('hero-veil');
    const startBtn = document.getElementById('hero-start');
    if (!veil || !startBtn || typeof gsap === 'undefined') return;
    prelude.armed = true;
    document.body.classList.add('is-locked');
    const nav = document.getElementById('chapter-nav');
    if (nav) nav.inert = true;
    // Setel tirai transparan tipis agar foto hero langsung terlihat indah pada awal muat
    gsap.set(veil, { opacity: 0.35 });
    setScrollGuard(true);
    startBtn.addEventListener('click', playPrelude);
  }

  /* ================= 9.5. AUDIO BACKSOUND ================= */
  let audioPlaying = false;
  function initAudio() {
    const audio = document.getElementById('bg-audio');
    const audioBtn = document.getElementById('audio-toggle');
    const audioIcon = document.getElementById('audio-icon');
    if (!audio || !audioBtn) return;

    function updateAudioUI(playing) {
      audioPlaying = playing;
      if (audioIcon) audioIcon.textContent = playing ? '🔊' : '🔇';
      audioBtn.setAttribute('aria-label', playing ? 'Matikan musik backsound' : 'Putar musik backsound');
    }

    function toggleAudio() {
      if (audio.paused) {
        audio.play().then(function () {
          updateAudioUI(true);
        }).catch(function () {
          updateAudioUI(false);
        });
      } else {
        audio.pause();
        updateAudioUI(false);
      }
    }

    audioBtn.addEventListener('click', toggleAudio);

    // Saat tombol "Mulai Cerita" ditekan, coba jalankan audio jika belum bermain
    const startBtn = document.getElementById('hero-start');
    if (startBtn) {
      startBtn.addEventListener('click', function () {
        if (audio.paused && !audioPlaying) {
          audio.play().then(function () {
            updateAudioUI(true);
          }).catch(function () { /* abaikan jika audio belum ada atau diblokir browser */ });
        }
      });
    }
  }

  /* ================= 9.6. CURSOR CERITA: SELENDANG & SUMUR AJAIB ==========
     Inti = cahaya sumur ajaib, ring = lingkaran sihir berputar (CSS),
     ekor = pita selendang hidup (kanvas 2D), klik = percikan labu emas
     (kilau putih, palet tetap B&W). Hover tombol = label pil bilingual.
     Class `has-cursor` di <html> jadi satu-satunya saklar tampil: CSS baru
     menampilkan elemen DAN mematikan kursor bawaan bila class ini ada,
     yaitu hanya bila init di bawah ini sukses penuh. Kalau bail out
     (reduced-motion, GSAP/canvas gagal, layar < lg) kursor bawaan tetap
     dipakai — tidak ada lagi cursor ngestuck di pojok kiri atas.
     Partisi properti: GSAP hanya menulis x/y (+xPercent) pada WRAPPER;
     semua visual (scale, opacity, rotasi) milik span dalam via CSS.
     Kanvas hanya MEMBACA glState (flare), tidak pernah menulisnya. */
  function initCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    const label = document.getElementById('cursor-label');
    const trail = document.getElementById('cursor-trail');
    const pill = label ? label.querySelector('.cursor-label-pill') : null;
    if (!dot || !ring || !label || !pill || !trail || !finePointer || reduceMotion) return;
    if (typeof gsap === 'undefined') return;
    const ctx = trail.getContext('2d');
    if (!ctx) return;

    const mqDesktop = window.matchMedia('(min-width: 1024px)');
    const MAX_POINTS = 26;
    const MAX_SPARKS = 60;
    const points = []; // riwayat posisi pita selendang [{x, y}]
    const sparks = []; // percikan labu [{x, y, vx, vy, life}]
    let enabled = false;
    let px = -100, py = -100; // posisi pointer terakhir
    let lastMove = 0;
    let hoverTarget = null;

    function sizeTrail() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      trail.width = Math.max(1, Math.floor(window.innerWidth * dpr));
      trail.height = Math.max(1, Math.floor(window.innerHeight * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function hideLabel() { label.classList.remove('show'); }

    function pickLabel(t) {
      const id = t.getAttribute('data-cursor-id');
      if (!id) return null;
      return currentLang === 'jv' ? (t.getAttribute('data-cursor-jv') || id) : id;
    }

    function showLabel(t) {
      const s = pickLabel(t);
      if (!s) { hideLabel(); return; }
      if (pill.textContent !== s) pill.textContent = s;
      label.classList.add('show');
    }

    // Dipanggil toggleLang (diisi ulang di bawah setelah sukses init):
    // label hover ikut ganti bahasa tanpa gerak mouse.

    function setEnabled(on) {
      if (on === enabled) return;
      enabled = on;
      document.documentElement.classList.toggle('has-cursor', on);
      if (!on) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        points.length = 0;
        sparks.length = 0;
        hoverTarget = null;
        ring.classList.remove('is-hover', 'is-active');
        hideLabel();
      }
    }

    function burst(x, y) {
      for (let i = 0; i < 12; i++) {
        if (sparks.length >= MAX_SPARKS) sparks.shift();
        const a = Math.random() * Math.PI * 2;
        const sp = 1.5 + Math.random() * 4;
        sparks.push({ x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1, life: 1 });
      }
    }

    function strokePass(maxW, baseA) {
      const n = points.length;
      for (let i = 1; i < n; i++) {
        const t = i / n;
        ctx.strokeStyle = 'rgba(255,255,255,' + (baseA * t).toFixed(3) + ')';
        ctx.lineWidth = Math.max(0.6, maxW * t);
        ctx.beginPath();
        ctx.moveTo(points[i - 1].x, points[i - 1].y);
        ctx.lineTo(points[i].x, points[i].y);
        ctx.stroke();
      }
    }

    function frame(now) {
      requestAnimationFrame(frame);
      if (!enabled || document.hidden) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Flare halo mengikuti energi transisi antar-babak (baca saja).
      const e = Math.max(glState.energy || 0, glState.prelude || 0);
      dot.style.setProperty('--flare', e.toFixed(3));

      // Selendang: rekam titik tiap jarak 4px; surut bila diam > 0.9 dtk.
      const last = points[points.length - 1];
      if (px >= 0 && (!last || Math.hypot(px - last.x, py - last.y) > 4)) {
        points.push({ x: px, y: py });
        if (points.length > MAX_POINTS) points.shift();
      }
      if (now - lastMove > 900 && points.length) points.shift();

      // Pita dua lapis: bayangan sutra lembut + inti terang.
      if (points.length > 1) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        strokePass(7, 0.1);
        strokePass(2.2, 0.5);
      }

      // Percikan labu: radial + gravitasi ringan, redup ±0.5 dtk.
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.96;
        s.vy = s.vy * 0.96 + 0.03;
        s.life -= 0.033;
        if (s.life <= 0) { sparks.splice(i, 1); continue; }
        ctx.fillStyle = 'rgba(255,255,255,' + (s.life * 0.9).toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1 + s.life * 1.6, 0, 6.2832);
        ctx.fill();
      }
    }

    try {
      // Parkir di luar layar dulu supaya tidak nongol di (0,0) sebelum
      // mousemove pertama. xPercent = pemusatan (ganti translate CSS).
      gsap.set([dot, ring, label], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

      const xDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
      const yDot = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });
      const xRing = gsap.quickTo(ring, 'x', { duration: 0.22, ease: 'power3.out' });
      const yRing = gsap.quickTo(ring, 'y', { duration: 0.22, ease: 'power3.out' });
      const xLabel = gsap.quickTo(label, 'x', { duration: 0.16, ease: 'power3.out' });
      const yLabel = gsap.quickTo(label, 'y', { duration: 0.16, ease: 'power3.out' });

      window.addEventListener('mousemove', function (ev) {
        px = ev.clientX;
        py = ev.clientY;
        lastMove = performance.now();
        if (!enabled) return;
        xDot(px); yDot(py);
        xRing(px); yRing(py);
        xLabel(px); yLabel(py);
        // Pil label menepi ke kiri bila terlalu dekat tepi kanan.
        label.classList.toggle('flip', px > window.innerWidth - 190);
      }, { passive: true });

      // Hover: ring mengembang + label bilingual (bila ada data-cursor-*).
      // Guard relatedTarget: pindah antar anak elemen yang sama tidak
      // boleh melepas class (mencegah ring berkedip).
      const HOVER_SEL = 'button, a, [data-scrollto], .chapter-dot, input, select';
      document.body.addEventListener('mouseover', function (ev) {
        if (!ev.target || !ev.target.closest) return;
        const target = ev.target.closest(HOVER_SEL);
        if (!target) return;
        hoverTarget = target;
        ring.classList.add('is-hover');
        showLabel(target);
      });

      document.body.addEventListener('mouseout', function (ev) {
        if (!ev.target || !ev.target.closest) return;
        const target = ev.target.closest(HOVER_SEL);
        if (target && (!ev.relatedTarget || !target.contains(ev.relatedTarget))) {
          if (hoverTarget === target) hoverTarget = null;
          ring.classList.remove('is-hover');
          hideLabel();
        }
      });

      window.addEventListener('mousedown', function (ev) {
        ring.classList.add('is-active');
        if (enabled && ev.clientX >= 0) burst(ev.clientX, ev.clientY);
      });
      window.addEventListener('mouseup', function () { ring.classList.remove('is-active'); });

      cursorRefresh = function () { if (hoverTarget) showLabel(hoverTarget); };
      sizeTrail();
      if (mqDesktop.addEventListener) mqDesktop.addEventListener('change', function () {
        setEnabled(mqDesktop.matches);
      });
      window.addEventListener('resize', sizeTrail);
      setEnabled(mqDesktop.matches);
      requestAnimationFrame(frame);
    } catch (err) {
      // Gagal di tengah jalan: kembalikan ke kursor bawaan.
      cursorRefresh = null;
      setEnabled(false);
    }
  }

  /* ================= 10. BOOT =================
     Urutan penting: pin dibuat dulu (initGsap) supaya Lenis mengukur tinggi
     dokumen yang sudah benar, baru Lenis dinyalakan, baru gerbang armed. */
  renderScenes();
  paintToggle();
  initNav();
  initAudio();
  initCursor();
  initGL();
  const gsapReady = initGsap();
  initSmooth();
  initPrelude();
  if (!gsapReady) unlockPrelude();
  window.addEventListener('load', scheduleRefresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleRefresh);
})();
