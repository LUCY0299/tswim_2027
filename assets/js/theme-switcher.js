/**
 * Color theme preview switcher.
 * Shown only when the page was opened with ?theme=a|b|c, so regular visitors never see it.
 * Switching updates <html data-theme> and the ?theme= parameter in the address bar,
 * so the current URL can be copied and shared as-is.
 */
(function () {
  var themes = [
    { id: 'a', label: '中大象徵紫金', colors: ['#56008d', '#ffec5c'] },
    { id: 'b', label: '資管系系旗', colors: ['#17348a', '#1e6fd9'] },
    { id: 'c', label: '資管系官網', colors: ['#3b7d78', '#b1dddd'] }
  ];

  var root = document.documentElement;
  if (!root.hasAttribute('data-theme')) return;

  var bar = document.createElement('div');
  bar.className = 'theme-switcher';
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', '配色預覽');

  var title = document.createElement('span');
  title.className = 'theme-switcher-title';
  title.textContent = '配色預覽';
  bar.appendChild(title);

  themes.forEach(function (theme) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-switcher-btn';
    btn.dataset.theme = theme.id;
    btn.style.setProperty('--swatch-main', theme.colors[0]);
    btn.style.setProperty('--swatch-accent', theme.colors[1]);
    btn.innerHTML =
      '<span class="theme-switcher-swatch" aria-hidden="true"></span>' +
      '<span class="theme-switcher-id">' + theme.id.toUpperCase() + '</span>' +
      '<span class="theme-switcher-label">' + theme.label + '</span>';
    btn.addEventListener('click', function () { setTheme(theme.id); });
    bar.appendChild(btn);
  });

  function setTheme(id) {
    root.setAttribute('data-theme', id);
    var url = new URL(location.href);
    url.searchParams.set('theme', id);
    history.replaceState(null, '', url);
    bar.querySelectorAll('.theme-switcher-btn').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.theme === id));
    });
  }

  document.body.appendChild(bar);
  setTheme(root.getAttribute('data-theme'));
})();
