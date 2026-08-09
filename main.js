// Dishant Bamotra — Mechanical Design Portfolio
// Nav toggle, scroll-spy, reveal-on-scroll, service card details.

// Mark JS as active immediately (progressive enhancement gate — see style.css .reveal rules)
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll-spy for nav active state
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
  if (sections.length && navAnchors.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navAnchors.forEach((a) => {
              a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => reveal.observe(el));
  }

  // Service card "View Details" toggles
  document.querySelectorAll(".sv-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const detail = btn.nextElementSibling;
      const isOpen = detail.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.textContent = isOpen ? "− Hide Details" : "+ View Details";
    });
  });
});


// Mechanical blueprint ambient light — visual only.
(function(){
  const bg=document.querySelector('.cad-blueprint-bg');
  if(!bg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let raf=0;
  window.addEventListener('pointermove', function(e){
    if(raf) return;
    raf=requestAnimationFrame(function(){
      const x=(e.clientX/window.innerWidth-.5)*18;
      const y=(e.clientY/window.innerHeight-.5)*12;
      bg.style.transform=`translate3d(${x}px,${y}px,0)`;
      raf=0;
    });
  }, {passive:true});
})();
