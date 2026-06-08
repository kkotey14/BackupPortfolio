(() => {
  const clearPreloader = () => {
    const island = document.querySelector('astro-island[component-url*="Preloader"]');
    if (!island) return;

    const blocker = island.querySelector('div[style*="z-index:9999"], div[style*="z-index: 9999"]');
    if (!blocker) return;

    blocker.style.transition = "opacity 320ms ease";
    blocker.style.opacity = "0";
    blocker.style.pointerEvents = "none";
    window.setTimeout(() => island.remove(), 360);
  };

  window.setTimeout(clearPreloader, 3600);
  window.addEventListener("load", () => window.setTimeout(clearPreloader, 2600), { once: true });
})();
