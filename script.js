/* ════════════════════════════════════════════════════════
   MUSEO DE NUESTRA HISTORIA — script.js
   Edita la sección CONFIG para personalizar todo el contenido
════════════════════════════════════════════════════════ */

"use strict";

/* ══════════════════════════════════════════════════════
   ██████████████████████████████████████████████████
   ██                                              ██
   ██           CONFIGURACIÓN EDITABLE             ██
   ██                                              ██
   ██████████████████████████████████████████████████
   ════════════════════════════════════════════════ */

const CONFIG = {

  /* ── Nombre de tu novia ───────────────────────── */
  nombre: "Lucia",                          // ← CAMBIA AQUÍ

  /* ── Firma al final de la carta ──────────────── */
  firma: "Con todo mi amor, Tu Gatito",        // ← CAMBIA AQUÍ

  /* ── Mensaje secreto (botón oculto) ──────────── */
  secretMessage:
`Encontraste mi pequeño secreto... 🌙

Desde que llegaste a mi vida todo brilla diferente.
No hay día que no piense en lo afortunado que soy
de tenerte. Eres mi lugar favorito.

Hoy y siempre. ✦`,                          // ← CAMBIA AQUÍ

  /* ════════════════════════════════════════════════
     SALA 1 — LÍNEA DE TIEMPO
     Agrega, quita o edita los eventos.
     image: ruta relativa a assets/images/ (opcional)
  ════════════════════════════════════════════════ */
  timeline: [
    {
      date: "14 Feb 2023",
      title: "El día que nos conocimos",
      desc: "Una mañana que no olvidaré. Apareciste frente a mi y algo cambió para siempre.",
      image: ""  // ejemplo: "assets/images/foto1.jpg"
    },
    {
      date: "21 Feb 2023",
      title: "Nuestra primera conversación",
      desc: "Hablamos durante horas. El tiempo se detuvo y yo no quería que terminara.",
      image: ""
    },
    {
      date: "12 Mar 2022",
      title: "La primera salida",
      desc: "Nerviosos, emocionados y completamente felices. Así empezó nuestra historia viendo la playa y las olas del mar .",
      image: ""
    },
    {
      date: "8 Ago 2025",
      title: "Nuestro primer viaje",
      desc: "El mundo se veía diferente cuando lo exploré contigo por primera vez y me encanto q me enseñaras Bogota-Zipaquira.",
      image: ""
    },
    {
      date: "21 Oct 2025",
      title: "Un año juntos",
      desc: "365 días de risas, complicidad y amor. Y quiero muchos más.",
      image: ""
    },
    {
      date: "Hoy",
      title: "Tu cumpleaños especial",
      desc: "Hoy celebramos lo mejor que le ha pasado a mi vida: tú.",
      image: ""
    }
  ],

  /* ════════════════════════════════════════════════
     SALA 2 — GALERÍA
     src: ruta a la imagen en assets/images/
     Si no tienes imagen, deja src vacío y aparecerá
     un placeholder elegante.
  ════════════════════════════════════════════════ */
  gallery: [
    { src: "assets/images/1.webp", title: "Ese viaje especial",     desc: "El horizonte se ve mejor desde tu mano." },
    { src: "assets/images/4.webp", title: "Tu sonrisa",             desc: "Lo más bonito que conozco." },
    { src: "assets/images/5.webp", title: "Cumpleaños pasado",      desc: "Cada año más feliz, cada año más nuestro." },
    { src: "assets/images/fotoat.avif", title: "Tarde de sol",           desc: "Los domingos son perfectos a tu lado." },
    { src: "assets/images/3.webp", title: "Nuestro lugar favorito", desc: "Ese rincón que ya es solo nuestro." },
    { src: "assets/images/2.webp", title: "volar cometa juntos", desc: "Ese momento tan especialen el que solo estubimos tu y yo." }
  ],

  /* ════════════════════════════════════════════════
     SALA 3 — LO QUE ADMIRO
  ════════════════════════════════════════════════ */
  admiro: [
    {
      icon: "✨",
      name: "Tu sonrisa",
      tagline: "Ilumina cualquier habitación",
      detail: `Tu sonrisa es la primera cosa que noté de ti y sigue siendo mi favorita.\n\nCuando sonríes, todo lo complicado del mundo se vuelve simple. Es tu superpoder, y ni siquiera lo sabes.`
    },
    {
      icon: "🧠",
      name: "Tu inteligencia",
      tagline: "Siempre tienes la perspectiva perfecta",
      detail: `Me encanta cómo piensas. La forma en que conectas ideas, cómo ves las cosas desde ángulos que yo nunca había considerado.\n\nEres la persona más brillante que conozco.`
    },
    {
      icon: "💛",
      name: "Tu bondad",
      tagline: "Cuidas a todos a tu alrededor",
      detail: `Hay una generosidad en ti que es genuina y rara.\n\nSiempre piensas en los demás, siempre das más de lo que recibes. Eso me enamora cada día más.`
    },
    {
      icon: "🎨",
      name: "Tu creatividad",
      tagline: "Ves belleza donde otros no la ven",
      detail: `La manera en que percibes el mundo, los pequeños detalles que notas, la sensibilidad con que te mueves.\n\nHaces de todo algo más bello.`
    },
    {
      icon: "🌙",
      name: "Tu presencia",
      tagline: "Contigo cualquier lugar es hogar",
      detail: `No importa dónde estemos ni qué hagamos.\n\nCuando estás tú, todo tiene más sabor, más color, más sentido. Eres mi lugar favorito en el mundo.`
    }
  ],

  /* ════════════════════════════════════════════════
     SALA 4 — LAS ESTRELLAS
     Estas estrellas son interactivas.
     image: ruta a assets/images/ (opcional)
  ════════════════════════════════════════════════ */
  stars: [
    {
      icon: "⭐",
      title: "El día que me enamoré",
      image: "",
      text: "Hubo un momento exacto en que supe que tú eras especial. No lo dije, pero lo guardé aquí, en mi corazón."
    },
    {
      icon: "🌟",
      title: "La primera vez que reímos juntos",
      image: "",
      text: "Tu risa es contagiosa y perfecta. Ese día supe que quería escucharla el resto de mi vida."
    },
    {
      icon: "✨",
      title: "Cuando me apoyaste sin pedirlo",
      image: "",
      text: "No tuve que decirte nada. Simplemente estuviste ahí. Ese gesto lo recuerdo cada vez que necesito recordar lo afortunado que soy."
    },
    {
      icon: "💫",
      title: "Nuestra canción",
      image: "",
      text: "Hay canciones que ahora son tuyas. Que ya no puedo escuchar sin pensar en nosotros."
    },
    {
      icon: "🌠",
      title: "El mejor abrazo del mundo",
      image: "",
      text: "No hay lugar más tranquilo que entre tus brazos. Ahí el mundo no puede con nosotros."
    },
    {
      icon: "⭐",
      title: "Cuando hablamos toda la noche",
      image: "",
      text: "No recuerdo de qué hablamos."
    },
    {
      icon: "🌟",
      title: "Tu cumpleaños",
      image: "",
      text: "Hoy quiero que sepas cuánto significas para mí. Gracias por existir y por estar en mi vida."
    },
    {
      icon: "💫",
      title: "Los planes que tenemos",
      image: "",
      text: "Pensar en todo lo que nos falta vivir juntos me pone muy feliz. El futuro contigo es lo que más me emociona."
    }
  ],

  /* ════════════════════════════════════════════════
     SALA 5 — NUESTROS SUEÑOS
  ════════════════════════════════════════════════ */
  dreams: [
    {
      icon: "✈️",
      title: "Viajar",
      desc: "Caminar por las calles de París, perdernos en Lisboa, ver el amanecer en Santorini. Contigo todo destino vale la pena.",
      tag: "Próximo capítulo"
    },
    {
      icon: "🏠",
      title: "Nuestro propio espacio",
      desc: "Un lugar donde colgar fotos nuestras, donde el café con leche de la mañana sepa a hogar y donde todo sea nuestro.",
      tag: "Nuestro rincón"
    },

    {
      icon: "🎭",
      title: "Vivir aventuras juntos",
      desc: "No importa qué sean: grandes o pequeñas, planeadas o espontáneas. Todas las aventuras contigo son perfectas.",
      tag: "A descubrir"
    },
    {
      icon: "🌅",
      title: "Envejecer juntos",
      desc: "Quiero que dentro de muchos años sigamos siendo nosotros. Algo que comenzó así de especial merece no terminar nunca.",
      tag: "El mejor sueño"
    },
    {
      icon: "🌕",
      title: "Crear una familia",
      desc: "Quiero que dentro de muchos años sigamos siendo nosotros junto a nuestros hijos. Algo que comenzó así de especial merece no terminar nunca.",
      tag: "El mejor sueño"
    }
  ],

  /* ════════════════════════════════════════════════
     SALA FINAL — CARTA
     Usa \n para saltos de línea.
     La carta se escribe con efecto typewriter.
  ════════════════════════════════════════════════ */
  carta: `Hoy es tu cumpleaños y quiero que sepas que no hay regalo más grande que poder celebrarlo a tu lado.

Desde que llegaste a mi vida, todo tiene más color. Las cosas simples se volvieron especiales, los días grises se llenaron de luz y yo me convertí en una versión mejor de mí mismo, porque tú me inspiras a serlo.

Admiro tu fuerza, tu bondad, la forma en que te ríes y cómo haces que todo sea más fácil cuando estás cerca. No hay nadie como tú en este mundo, y que estés aquí, en mi vida, es algo que nunca dejaré de agradecer y apesar de las pelas tontas,los desacuerdos pendejos y que te haga enogar mientras tu solo quieres dormir te agredesco que te quedes a mi lado.

Quiero seguir construyendo recuerdos contigo. Quiero más aventuras, más risas, más de esos momentos donde el tiempo se detiene y solo importamos tú y yo.

Gracias por ser exactamente como eres.
Gracias por elegirme cada día.
Gracias por existir.

Feliz cumpleaños, amor. ❤️`,            // ← CAMBIA AQUÍ

  /* ════════════════════════════════════════════════
     MÚSICA
     Archivos en assets/music/
     Si no tienes música, deja la lista vacía: []
  ════════════════════════════════════════════════ */
  music: [
    { title: "Nuestra Canción",   artist: "Artista Especial",    file: "assets/music/song1.mp3" },
    { title: "TE AMO MI LUNA 🌕",   artist: "Melodía del Corazón",    file: "assets/music/song5.mp3" },
    { title: "Recuerdo Especial", artist: "Tacones rojos", file: "assets/music/song2.mp3" },
    { title: "Música Romántica",  artist: "Notas de Amor",       file: "assets/music/song4.mp3" }
  ]

}; /* ── FIN CONFIG ── */


/* ════════════════════════════════════════════════════════
   MOTOR DE LA APLICACIÓN — no necesitas editar esto
════════════════════════════════════════════════════════ */

/* ── DOM refs ─────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const introScreen      = $("introScreen");
const introName        = $("introName");
const btnEnter         = $("btnEnter");
const mainContent      = $("mainContent");
const mainNav          = $("mainNav");
const musicPlayer      = $("musicPlayer");
const musicToggle      = $("musicToggle");
const musicPanel       = $("musicPanel");
const playBtn          = $("playBtn");
const prevBtn          = $("prevBtn");
const nextBtn          = $("nextBtn");
const musicTitle       = $("musicTitle");
const musicArtist      = $("musicArtist");
const volSlider        = $("volSlider");
const audioEl          = $("audioEl");
const secretBtn        = $("secretBtn");
const secretModal      = $("secretModal");
const secretClose      = $("secretClose");
const secretText       = $("secretText");
const particleCanvas   = $("particleCanvas");

/* ════════════════════════════════════════════════════════
   INTRO SEQUENCE
════════════════════════════════════════════════════════ */
(function initIntro() {
  introName.textContent = CONFIG.nombre;

  const lines    = document.querySelectorAll(".intro-line");
  const delays   = [400, 1000, 1900];
  lines.forEach((el, i) => {
    setTimeout(() => el.classList.add("show"), delays[i]);
  });
  setTimeout(() => {
    btnEnter.classList.add("show");
    btnEnter.style.display = "block";
  }, 2800);
})();

btnEnter.addEventListener("click", () => {
  introScreen.classList.add("fade-out");
  setTimeout(() => {
    introScreen.style.display = "none";
    mainContent.classList.remove("hidden");
    mainNav.classList.remove("hidden");
    musicPlayer.classList.remove("hidden");
    setTimeout(() => mainNav.classList.add("show"), 200);
    initAllSections();
  }, 1200);
});

/* ════════════════════════════════════════════════════════
   PARTÍCULAS DE FONDO
════════════════════════════════════════════════════════ */
(function initParticles() {
  const canvas = particleCanvas;
  const ctx    = canvas.getContext("2d");
  let   W, H;
  const PARTICLES = [];
  const COUNT = 60;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x:    Math.random() * (W || window.innerWidth),
      y:    Math.random() * (H || window.innerHeight),
      r:    0.4 + Math.random() * 1.2,
      vx:   (Math.random() - 0.5) * 0.12,
      vy:   -0.08 - Math.random() * 0.12,
      alpha:0.1 + Math.random() * 0.35,
      hue:  Math.random() < 0.4 ? "201,169,110" : "245,238,248"
    };
  }

  function init() {
    resize();
    for (let i = 0; i < COUNT; i++) PARTICLES.push(makeParticle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    PARTICLES.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue},${p.alpha})`;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -4 || p.x < -4 || p.x > W + 4) {
        p.x = Math.random() * W;
        p.y = H + 4;
      }
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  init();
  draw();
})();

/* ════════════════════════════════════════════════════════
   NAVEGACIÓN LATERAL / SCROLL
════════════════════════════════════════════════════════ */
const SALAS = [];
let currentSala = 0;

function initNavigation() {
  document.querySelectorAll(".sala").forEach((el, i) => SALAS.push(el));

  const navDots = document.querySelectorAll(".nav-dot");
  navDots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.dataset.section);
      SALAS[idx].scrollIntoView({ behavior: "smooth" });
    });
  });

  const navHint = $("navHint");
  const labels  = ["I","II","III","IV","V","✉"];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio > 0.5) {
        const idx = SALAS.indexOf(e.target);
        if (idx === -1) return;
        currentSala = idx;
        navDots.forEach((d, i) => d.classList.toggle("active", i === idx));
        if (navHint) navHint.textContent = labels[idx] || "";
      }
    });
  }, { threshold: 0.5 });

  SALAS.forEach(s => observer.observe(s));
}

/* ════════════════════════════════════════════════════════
   SCROLL REVEAL GENÉRICO
════════════════════════════════════════════════════════ */
function revealOnScroll(selector, staggerMs = 80) {
  const els = document.querySelectorAll(selector);
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), idx * staggerMs);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════════════════════
   SALA 1 — LÍNEA DE TIEMPO
════════════════════════════════════════════════════════ */
function buildTimeline() {
  const container = $("timelineContainer");
  container.innerHTML = "";

  CONFIG.timeline.forEach((ev, i) => {
    const item  = document.createElement("div");
    item.className = `timeline-item ${i % 2 === 0 ? "tl-left" : "tl-right"}`;

    const imgHtml = ev.image
      ? `<div class="tl-img-wrap"><img src="${ev.image}" alt="${ev.title}" loading="lazy" /></div>`
      : "";

    const card = `
      <div class="tl-card">
        <span class="tl-date">${ev.date}</span>
        <div class="tl-title">${ev.title}</div>
        <p class="tl-desc">${ev.desc}</p>
        ${imgHtml}
      </div>`;

    const dot   = `<div class="tl-dot"><div class="tl-dot-inner"></div></div>`;
    const empty = `<div class="tl-empty"></div>`;

    item.innerHTML = i % 2 === 0
      ? card + dot + empty
      : empty + dot + card;

    container.appendChild(item);
  });

  revealOnScroll(".timeline-item", 120);
}

/* ════════════════════════════════════════════════════════
   SALA 2 — GALERÍA
════════════════════════════════════════════════════════ */
let galleryIndex = 0;

function buildGallery() {
  const grid = $("galleryGrid");
  grid.innerHTML = "";

  CONFIG.gallery.forEach((photo, i) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.dataset.index = i;

    if (photo.src) {
      item.innerHTML = `
        <img src="${photo.src}" alt="${photo.title}" loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-overlay-text">${photo.title}</span>
        </div>`;
    } else {
      item.innerHTML = `
        <div class="gallery-placeholder">
          <div class="gallery-placeholder-icon">🖼</div>
          <div class="gallery-placeholder-text">${photo.title}</div>
        </div>
        <div class="gallery-overlay">
          <span class="gallery-overlay-text">${photo.title}</span>
        </div>`;
    }

    item.addEventListener("click", () => openGalleryModal(i));
    grid.appendChild(item);
  });

  revealOnScroll(".gallery-item", 60);
  initGalleryModal();
}

function initGalleryModal() {
  $("galleryClose").addEventListener("click", closeGalleryModal);
  $("galleryBackdrop").addEventListener("click", closeGalleryModal);
  $("galleryPrev").addEventListener("click", () => navigateGallery(-1));
  $("galleryNext").addEventListener("click", () => navigateGallery(1));
  $("galleryTotal").textContent = CONFIG.gallery.length;

  document.addEventListener("keydown", e => {
    if ($("galleryModal").classList.contains("hidden")) return;
    if (e.key === "ArrowLeft")  navigateGallery(-1);
    if (e.key === "ArrowRight") navigateGallery(1);
    if (e.key === "Escape")     closeGalleryModal();
  });
}

function openGalleryModal(idx) {
  galleryIndex = idx;
  renderGalleryModal();
  $("galleryModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function renderGalleryModal() {
  const photo = CONFIG.gallery[galleryIndex];
  const img   = $("galleryModalImg");

  if (photo.src) {
    img.src = photo.src;
    img.style.display = "block";
  } else {
    img.src = "";
    img.style.display = "none";
  }

  $("galleryCapTitle").textContent  = photo.title;
  $("galleryCapDesc").textContent   = photo.desc || "";
  $("galleryCurrent").textContent   = galleryIndex + 1;
}

function navigateGallery(dir) {
  galleryIndex = (galleryIndex + dir + CONFIG.gallery.length) % CONFIG.gallery.length;
  renderGalleryModal();
}

function closeGalleryModal() {
  $("galleryModal").classList.add("hidden");
  document.body.style.overflow = "";
}

/* ════════════════════════════════════════════════════════
   SALA 3 — LO QUE ADMIRO
════════════════════════════════════════════════════════ */
function buildAdmiro() {
  const grid = $("admiroGrid");
  grid.innerHTML = "";

  CONFIG.admiro.forEach(item => {
    const card = document.createElement("div");
    card.className = "admiro-card";
    card.innerHTML = `
      <span class="admiro-icon">${item.icon}</span>
      <div class="admiro-name">${item.name}</div>
      <div class="admiro-tagline">${item.tagline}</div>
      <div class="admiro-hint">Ver más</div>`;

    card.addEventListener("click", () => {
      $("admiroModalIcon").textContent  = item.icon;
      $("admiroModalTitle").textContent = item.name;
      $("admiroModalText").textContent  = item.detail;
      $("admiroModal").classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });

    grid.appendChild(card);
  });

  $("admiroModalBg").addEventListener("click", () => {
    $("admiroModal").classList.add("hidden");
    document.body.style.overflow = "";
  });
  $("admiroClose").addEventListener("click", () => {
    $("admiroModal").classList.add("hidden");
    document.body.style.overflow = "";
  });

  revealOnScroll(".admiro-card", 80);
}

/* ════════════════════════════════════════════════════════
   SALA 4 — ESTRELLAS INTERACTIVAS
════════════════════════════════════════════════════════ */
function buildStars() {
  const canvas = $("starCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let W, H;
  const bgStars      = [];  // estrellas de fondo (decorativas)
  const interactive  = [];  // estrellas con recuerdos

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    placeBgStars();
    placeInteractiveStars();
  }

  /* Estrellas de fondo */
  function placeBgStars() {
    bgStars.length = 0;
    for (let i = 0; i < 220; i++) {
      bgStars.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        r:    0.3 + Math.random() * 1.1,
        alpha:0.1 + Math.random() * 0.5,
        twinkle: Math.random() * Math.PI * 2,
        speed:   0.008 + Math.random() * 0.016
      });
    }
  }

  /* Estrellas interactivas (de CONFIG.stars) */
  function placeInteractiveStars() {
    interactive.length = 0;
    const margin = 60;
    CONFIG.stars.forEach((data, i) => {
      // distribuir evitando bordes y la cabecera superior
      const gridCols = Math.ceil(Math.sqrt(CONFIG.stars.length * (W / H)));
      const col      = i % gridCols;
      const row      = Math.floor(i / gridCols);
      const cols     = gridCols;
      const rows     = Math.ceil(CONFIG.stars.length / gridCols);
      interactive.push({
        x:    margin + (col + 0.5) * ((W - margin * 2) / cols) + (Math.random() - 0.5) * 40,
        y:    220 + (row + 0.5) * ((H - 280) / rows) + (Math.random() - 0.5) * 30,
        r:    4 + Math.random() * 3,
        glow: 12 + Math.random() * 8,
        phase:Math.random() * Math.PI * 2,
        data
      });
    });
  }

  /* Dibujo */
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Fondo degradado
    const grad = ctx.createRadialGradient(W/2, H*0.3, 0, W/2, H/2, Math.max(W, H) * 0.7);
    grad.addColorStop(0, "rgba(20,10,40,0.6)");
    grad.addColorStop(1, "rgba(5,5,15,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Bg stars
    bgStars.forEach(s => {
      s.twinkle += s.speed;
      const a = s.alpha * (0.5 + 0.5 * Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245,238,248,${a})`;
      ctx.fill();
    });

    // Interactive stars
    interactive.forEach(s => {
      s.phase += 0.025;
      const pulse = 1 + 0.35 * Math.sin(s.phase);
      const r     = s.r * pulse;
      const glow  = s.glow * pulse;

      // glow halo
      const g2 = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glow);
      g2.addColorStop(0, "rgba(201,169,110,0.55)");
      g2.addColorStop(1, "rgba(201,169,110,0)");
      ctx.beginPath();
      ctx.arc(s.x, s.y, glow, 0, Math.PI * 2);
      ctx.fillStyle = g2;
      ctx.fill();

      // core
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,240,210,0.95)`;
      ctx.fill();

      // cross sparkle
      ctx.strokeStyle = "rgba(255,240,210,0.4)";
      ctx.lineWidth = 0.7;
      const sp = r * 2.4;
      ctx.beginPath();
      ctx.moveTo(s.x - sp, s.y); ctx.lineTo(s.x + sp, s.y);
      ctx.moveTo(s.x, s.y - sp); ctx.lineTo(s.x, s.y + sp);
      ctx.stroke();
    });

    frame++;
    requestAnimationFrame(draw);
  }

  /* Click en estrellas interactivas */
  canvas.addEventListener("click", e => {
    const rect = canvas.getBoundingClientRect();
    const mx   = e.clientX - rect.left;
    const my   = e.clientY - rect.top;

    for (const s of interactive) {
      const dist = Math.hypot(mx - s.x, my - s.y);
      if (dist <= s.r * 3 + 8) {
        openStarModal(s.data);
        return;
      }
    }
  });

  canvas.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    const mx   = e.clientX - rect.left;
    const my   = e.clientY - rect.top;
    let hovering = false;
    for (const s of interactive) {
      if (Math.hypot(mx - s.x, my - s.y) <= s.r * 3 + 8) { hovering = true; break; }
    }
    canvas.style.cursor = hovering ? "pointer" : "crosshair";
  });

  function openStarModal(data) {
    $("starModalIcon").textContent  = data.icon;
    $("starModalTitle").textContent = data.title;
    $("starModalText").textContent  = data.text;

    const imgWrap = $("starModalImgWrap");
    imgWrap.innerHTML = "";
    if (data.image) {
      const img = document.createElement("img");
      img.src = data.image; img.alt = data.title;
      imgWrap.appendChild(img);
      imgWrap.style.display = "block";
    } else {
      imgWrap.style.display = "none";
    }

    $("starModal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  $("starClose").addEventListener("click", () => {
    $("starModal").classList.add("hidden");
    document.body.style.overflow = "";
  });
  $("starModal").addEventListener("click", e => {
    if (e.target === $("starModal")) {
      $("starModal").classList.add("hidden");
      document.body.style.overflow = "";
    }
  });

  // Touch support
  canvas.addEventListener("touchend", e => {
    e.preventDefault();
    const rect  = canvas.getBoundingClientRect();
    const touch = e.changedTouches[0];
    const mx    = touch.clientX - rect.left;
    const my    = touch.clientY - rect.top;
    for (const s of interactive) {
      if (Math.hypot(mx - s.x, my - s.y) <= s.r * 4 + 14) {
        openStarModal(s.data);
        return;
      }
    }
  }, { passive: false });

  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement);
  resize();
  draw();
}

/* ════════════════════════════════════════════════════════
   SALA 5 — SUEÑOS
════════════════════════════════════════════════════════ */
function buildDreams() {
  const grid = $("dreamsGrid");
  grid.innerHTML = "";
  CONFIG.dreams.forEach((dream, i) => {
    const card = document.createElement("div");
    card.className = "dream-card";
    card.style.transitionDelay = `${i * 60}ms`;
    card.innerHTML = `
      <span class="dream-icon">${dream.icon}</span>
      <div class="dream-title">${dream.title}</div>
      <p class="dream-desc">${dream.desc}</p>
      <span class="dream-tag">${dream.tag}</span>`;
    grid.appendChild(card);
  });
  revealOnScroll(".dream-card", 70);
}

/* ════════════════════════════════════════════════════════
   SALA FINAL — CARTA CON TYPEWRITER
════════════════════════════════════════════════════════ */
let cartaStarted = false;

function buildCarta() {
  const body = $("cartaBody");
  body.innerHTML = "";
  $("firmaText").textContent  = CONFIG.firma;

  /* Activar typewriter cuando la sala es visible */
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !cartaStarted) {
      cartaStarted = true;
      typewriterEffect(body, CONFIG.carta, 22, () => {
        setTimeout(() => {
          $("cartaFirma").classList.remove("hidden");
          setTimeout(() => {
            $("felizCumple").classList.remove("hidden");
            launchConfetti();
          }, 1200);
        }, 600);
      });
    }
  }, { threshold: 0.3 });

  const sala = $("sala5");
  if (sala) observer.observe(sala);
}

function typewriterEffect(el, text, speed, onDone) {
  el.innerHTML = "";
  const cursor = document.createElement("span");
  cursor.className = "carta-cursor";
  el.appendChild(cursor);

  let i = 0;
  function type() {
    if (i < text.length) {
      const char = document.createTextNode(text.charAt(i));
      el.insertBefore(char, cursor);
      i++;
      const delay = text.charAt(i) === "\n" ? speed * 8 : speed + Math.random() * 12;
      setTimeout(type, delay);
    } else {
      cursor.remove();
      if (onDone) onDone();
    }
  }
  type();
}

/* ════════════════════════════════════════════════════════
   CONFETTI
════════════════════════════════════════════════════════ */
function launchConfetti() {
  const container = $("confettiContainer");
  const colors    = ["#C9A96E","#E8A0B4","#F5EEF8","#9B8EC4","#FFDD88","#FF9EBB"];
  const count     = 80;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size  = 4 + Math.random() * 8;
    const tx    = (Math.random() - 0.5) * 600;
    const rot   = Math.random() * 720;
    const delay = Math.random() * 1.5;
    const dur   = 2.5 + Math.random() * 2;

    Object.assign(piece.style, {
      position:        "absolute",
      top:             "0",
      left:            "50%",
      width:           `${size}px`,
      height:          `${size}px`,
      background:      color,
      borderRadius:    Math.random() > 0.5 ? "50%" : "2px",
      opacity:         "1",
      "--tx":          `${tx}px`,
      "--rot":         `${rot}deg`,
      animation:       `confettiFall ${dur}s ${delay}s ease-in forwards`,
      transform:       `translateX(${(Math.random()-0.5)*40}px)`
    });

    container.appendChild(piece);
  }
}

/* ════════════════════════════════════════════════════════
   BOTÓN SECRETO
════════════════════════════════════════════════════════ */
function initSecret() {
  secretText.textContent = CONFIG.secretMessage;

  secretBtn.addEventListener("click", () => {
    secretModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
  secretClose.addEventListener("click", () => {
    secretModal.classList.add("hidden");
    document.body.style.overflow = "";
  });
  secretModal.addEventListener("click", e => {
    if (e.target === secretModal) {
      secretModal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });
}

/* ════════════════════════════════════════════════════════
   REPRODUCTOR DE MÚSICA
════════════════════════════════════════════════════════ */
(function initMusic() {
  if (!CONFIG.music.length) {
    musicPlayer.style.display = "none";
    return;
  }

  let trackIdx  = 0;
  let isPlaying = false;
  let panelOpen = false;

  function loadTrack(idx, autoPlay = false) {
    const track = CONFIG.music[idx];
    audioEl.src = track.file;
    musicTitle.textContent  = track.title;
    musicArtist.textContent = track.artist || "—";
    audioEl.load();
    if (autoPlay) play();
  }

  function play() {
    audioEl.play().then(() => {
      isPlaying = true;
      playBtn.textContent = "⏸";
      musicPlayer.classList.add("playing");
      musicToggle.classList.add("playing");
    }).catch(() => {});
  }

  function pause() {
    audioEl.pause();
    isPlaying = false;
    playBtn.textContent = "▶";
    musicPlayer.classList.remove("playing");
    musicToggle.classList.remove("playing");
  }

  playBtn.addEventListener("click", () => {
    if (!audioEl.src) { loadTrack(trackIdx, true); return; }
    isPlaying ? pause() : play();
  });

  nextBtn.addEventListener("click", () => {
    trackIdx = (trackIdx + 1) % CONFIG.music.length;
    loadTrack(trackIdx, isPlaying);
  });

  prevBtn.addEventListener("click", () => {
    if (audioEl.currentTime > 3) { audioEl.currentTime = 0; return; }
    trackIdx = (trackIdx - 1 + CONFIG.music.length) % CONFIG.music.length;
    loadTrack(trackIdx, isPlaying);
  });

  audioEl.addEventListener("ended", () => {
    trackIdx = (trackIdx + 1) % CONFIG.music.length;
    loadTrack(trackIdx, true);
  });

  volSlider.addEventListener("input", () => {
    audioEl.volume = parseFloat(volSlider.value);
  });

  musicToggle.addEventListener("click", () => {
    panelOpen = !panelOpen;
    musicPanel.classList.toggle("open", panelOpen);
    if (!audioEl.src && panelOpen) loadTrack(trackIdx, false);
  });

  // Cerrar panel si click fuera
  document.addEventListener("click", e => {
    if (!musicPlayer.contains(e.target)) {
      panelOpen = false;
      musicPanel.classList.remove("open");
    }
  });

  audioEl.volume = parseFloat(volSlider.value);
  loadTrack(0, false);
})();

/* ════════════════════════════════════════════════════════
   INIT TODAS LAS SECCIONES
════════════════════════════════════════════════════════ */
function initAllSections() {
  buildTimeline();
  buildGallery();
  buildAdmiro();
  buildDreams();
  buildCarta();
  buildStars();
  initNavigation();
  initSecret();
}
