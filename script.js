// ===== Data =====
const products = [
  { name:"Artisan Sourdough", desc:"36-hour cold-fermented, stone-baked.", price:8.5, img:"assets/product-bread.jpg", tag:"Signature" },
  { name:"Butter Croissants", desc:"French butter, 81 flaky layers.", price:4.2, img:"assets/product-croissant.jpg", tag:"Daily" },
  { name:"Cinnamon Rolls", desc:"Madagascar cinnamon, vanilla glaze.", price:5.0, img:"assets/product-cinnamon.jpg", tag:"Best Seller" },
  { name:"Chocolate Cake", desc:"Single-origin dark chocolate ganache.", price:38.0, img:"assets/product-cake.jpg", tag:"Made to Order" },
  { name:"French Macarons", desc:"Six seasonal flavours, hand-piped.", price:18.0, img:"assets/product-macarons.jpg", tag:"Box of 12" },
  { name:"Specialty Coffee", desc:"Slow-roasted single origin espresso.", price:4.5, img:"assets/product-coffee.jpg", tag:"Cafe" },
];

const steps = [
  { icon:"wheat", title:"Fresh Ingredients", desc:"Stone-milled flours and seasonal produce sourced from local farms." },
  { icon:"heart", title:"Handmade Dough", desc:"Slow-fermented overnight by hand. No shortcuts, no machines." },
  { icon:"flame", title:"Stone Oven Baking", desc:"Wood-fired hearth ovens at 480°C for a crisp, blistered crust." },
  { icon:"sparkles", title:"Served Fresh Daily", desc:"Out of the oven at sunrise, on your table by breakfast." },
];

const reviews = [
  { name:"Elena M.", role:"Regular customer", text:"The sourdough has ruined every other bread for me. There's nothing else like it in the city.", initial:"E" },
  { name:"Marco D.", role:"Pastry chef", text:"I drive across town for the croissants. The lamination is textbook — flaky, buttery, perfect.", initial:"M" },
  { name:"Sophia L.", role:"Food writer", text:"Crumb Story is what every neighbourhood bakery aspires to be. Warm, generous, deeply skilled.", initial:"S" },
];

const gallery = [
  { src:"assets/gallery-1.jpg", h:420, alt:"Bakery interior with bread shelves" },
  { src:"assets/gallery-2.jpg", h:320, alt:"Sourdough crumb close-up" },
  { src:"assets/product-macarons.jpg", h:360, alt:"Macarons" },
  { src:"assets/gallery-4.jpg", h:440, alt:"Baker at the stone oven" },
  { src:"assets/gallery-3.jpg", h:340, alt:"Pastry display case" },
  { src:"assets/product-cake.jpg", h:380, alt:"Chocolate cake" },
];

// ===== Render =====
const $ = sel => document.querySelector(sel);

$('#products').innerHTML = products.map(p => `
  <article class="card reveal">
    <div class="card-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy" width="800" height="800">
      <span class="tag">${p.tag}</span>
    </div>
    <div class="card-body">
      <div class="card-row">
        <h3>${p.name}</h3>
        <span class="price">$${p.price.toFixed(2)}</span>
      </div>
      <p>${p.desc}</p>
      <button class="add-btn">Add to Cart</button>
    </div>
  </article>
`).join('');

$('#carousel-track').innerHTML = [...products, ...products.slice(0,2)].map(p => `
  <div class="slide">
    <div class="slide-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
    <div class="slide-body"><h3>${p.name}</h3><span class="price">$${p.price.toFixed(2)}</span></div>
  </div>
`).join('');

const iconSvg = {
  wheat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
};

$('#steps').innerHTML = steps.map((s,i) => `
  <div class="step reveal">
    <div class="step-head">
      <div class="step-icon">${iconSvg[s.icon]}</div>
      <span class="step-num">0${i+1}</span>
    </div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
  </div>
`).join('');

const starSvg = '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
$('#reviews').innerHTML = reviews.map(r => `
  <figure class="review reveal">
    <div class="stars">${starSvg.repeat(5)}</div>
    <blockquote class="quote">“${r.text}”</blockquote>
    <figcaption>
      <div class="avatar">${r.initial}</div>
      <div>
        <div class="name">${r.name}</div>
        <div class="role">${r.role}</div>
      </div>
    </figcaption>
  </figure>
`).join('');

$('#gallery-grid').innerHTML = gallery.map(g => `
  <div class="reveal" style="height:${g.h}px">
    <img src="${g.src}" alt="${g.alt}" loading="lazy">
  </div>
`).join('');

// ===== Marquee =====
const words = ["Sourdough","Croissants","Stone-baked","Cakes","Coffee","Pastries","Macarons","Tradition"];
const marqueeHTML = words.map(w => `<span>${w} <i>·</i></span>`).join('');
$('#marquee-track').innerHTML = marqueeHTML + marqueeHTML;

// ===== Year =====
$('#year').textContent = new Date().getFullYear();

// ===== Nav scroll state =====
const nav = $('#nav');
const progress = $('#progress');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${window.scrollY / h})`;
}, { passive:true });

// ===== Hero parallax =====
const heroBg = $('#hero-bg');
const hero = $('#hero');
window.addEventListener('scroll', () => {
  const r = hero.getBoundingClientRect();
  if (r.bottom < 0 || r.top > window.innerHeight) return;
  const p = Math.min(1, Math.max(0, -r.top / r.height));
  heroBg.style.transform = `translateY(${p*30}%) scale(${1 + p*0.15})`;
}, { passive:true });

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold:0.12, rootMargin:"0px 0px -60px 0px" });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Mobile menu =====
const mm = $('#mobile-menu');
$('#menu-btn').addEventListener('click', () => mm.classList.toggle('open'));
mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')));

// ===== Newsletter =====
$('#news-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Subscribed ✓';
  btn.disabled = true;
});
