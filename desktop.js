(() => {
  const windows = [...document.querySelectorAll('.desktop-window')];
  const shortcuts = [...document.querySelectorAll('.desktop-shortcuts a')];
  function showWindow() {
    const requested = location.hash.slice(1) || 'home';
    const selected = requested === 'desktop' ? undefined : (windows.find(window => window.id === requested) || windows[0]);
    windows.forEach(window => { window.hidden = window !== selected; });
    shortcuts.forEach(link => {
      if (link.hash === '#' + requested) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.body.classList.toggle('no-window', !selected);
    if (selected) {
      selected.setAttribute('tabindex', '-1');
      selected.focus({ preventScroll: true });
    }
  }
  addEventListener('hashchange', showWindow);
  showWindow();
})();
