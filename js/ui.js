/* DepthWizard — UI behaviors: tabs, documentation scroll-spy */
document.addEventListener('DOMContentLoaded', () => {
  // Keep each tab group's selected control and visible panel in sync.
  document.querySelectorAll('[data-tabs]').forEach(root => {
    const btns = root.querySelectorAll('.tab-btn');
    const panels = root.querySelectorAll('.tab-panel');
    btns.forEach(btn => btn.addEventListener('click', () => {
      btns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const target = root.querySelector('#' + btn.dataset.tab);
      if (target) target.classList.add('active');
    }));
  });

  // Highlight the documentation link for the section currently in view.
  const links = document.querySelectorAll('.doc-sidebar-link[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    const map = new Map();
    links.forEach(l => { const t = document.getElementById(l.getAttribute('href').slice(1)); if (t) map.set(t, l); });
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          map.get(e.target).classList.add('active');
        }
      });
    }, { rootMargin: '-15% 0px -70% 0px' });
    map.forEach((_, t) => io.observe(t));
  }
});
