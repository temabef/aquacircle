(function () {
  // ── Intersection Observer for Reveal ──
  const revealIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealIo.observe(el));

  // ── Dot Navigation Logic ──
  const dots = document.querySelectorAll('.dot');
  const sections = document.querySelectorAll('section');
  const appWrap = document.getElementById('app-wrap');

  const dotIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id;
          dots.forEach(dot => {
            dot.classList.toggle('active', dot.dataset.target === id);
          });
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach(s => dotIo.observe(s));

  // ── Click to Scroll ──
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = document.getElementById(dot.dataset.target);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ── Mouse Move Parallax for Hero Visual ──
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual) {
    document.addEventListener('mousemove', (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      heroVisual.style.transform = `translateY(-45%) translate(${x}px, ${y}px)`;
    });
  }
})();
