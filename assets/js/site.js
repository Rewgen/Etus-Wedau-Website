/* ETuS Wedau 1929 e.V. – Seitenlogik */
(function () {
  'use strict';

  const P = {
    handball: '<circle cx="12" cy="12" r="9"/><path d="M5.6 6.2c3 1.6 4.4 4 4.4 6.8s-1.2 5-3.2 7"/><path d="M18.4 6.2c-3 1.6-4.4 4-4.4 6.8s1.2 5 3.2 7"/><path d="M3.2 11h17.6"/>',
    run: '<circle cx="15" cy="4.5" r="2"/><path d="M8 21l3-6 3 2v5"/><path d="M6.5 11.5l2.5-3.5 4 1 2.5 3 3 1"/><path d="M11 15l2-6"/>',
    tennis: '<ellipse cx="9.5" cy="9.5" rx="5.5" ry="6.5" transform="rotate(-45 9.5 9.5)"/><path d="M13.5 13.5l6.5 6.5"/><path d="M6 8l5.5 5.5M8 6l5.5 5.5"/><circle cx="19" cy="5" r="2"/>',
    tabletennis: '<circle cx="10" cy="10" r="6.5"/><path d="M14.6 14.6l5.4 5.4"/><circle cx="19" cy="5" r="1.8"/>',
    gym: '<circle cx="12" cy="4.5" r="2"/><path d="M5 3l4 5h6l4-5"/><path d="M12 8v6"/><path d="M8.5 21l3.5-7 3.5 7"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2"/>',
    football: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5l3.8 2.8-1.5 4.4H9.7l-1.5-4.4z"/><path d="M12 3v4.5M15.8 10.3l4.5-1.5M14.3 14.7l2.7 3.8M9.7 14.7L7 18.5M8.2 10.3L3.7 8.8"/>',
    sail: '<path d="M12 3v14"/><path d="M12 4l7 11h-7"/><path d="M10 6L5 15h5"/><path d="M3 18.5c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0"/>',
    cornhole: '<path d="M4 18l4-12h8l4 12z"/><circle cx="12" cy="10" r="2"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chevron: '<path d="M6 9l6 6 6-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>',
    facebook: '<path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 01.5-.5z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><path d="M16 4.5a3.5 3.5 0 010 7M18 14a6.5 6.5 0 013.5 6"/>',
    heart: '<path d="M12 20s-8-4.8-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 9c0 6.2-8 11-8 11z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
    alert: '<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4M12 17v.5"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    food: '<path d="M7 3v8M5 3v5a2 2 0 004 0V3M7 11v10"/><path d="M17 3c-2 2-3 4-3 7h3v11"/>',
    grill: '<path d="M4 10h16a8 8 0 01-16 0z"/><path d="M8 18l-2 4M16 18l2 4M9 3c0 2 2 2 2 4M14 3c0 2 2 2 2 4"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    medal: '<circle cx="12" cy="15" r="5"/><path d="M8.5 11L6 3h4l2 5 2-5h4l-2.5 8"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
    baby: '<circle cx="12" cy="7" r="3"/><path d="M7 21v-5a5 5 0 0110 0v5"/><path d="M9 21v-3M15 21v-3"/>',
    whistle: '<circle cx="8" cy="14" r="5"/><path d="M11 10l9-4v5l-7 2"/>',
    file: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    handshake: '<path d="M2 12l4-4 4 2 3-2 4 1 5 3"/><path d="M6 8v6l5 5c1 1 2 1 3 0l5-5"/><path d="M10 15l2 2M12 13l2.5 2.5"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    bow: '<path d="M5 3c6 2 10 6 12 12"/><path d="M5 3l12 12"/><path d="M3 21L19 5"/><path d="M15 5h4v4"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    play: '<path d="M7 4l13 8-13 8z" fill="currentColor"/>',
    euro: '<path d="M17 6.5A7 7 0 007 12a7 7 0 0010 5.5"/><path d="M4 10h9M4 14h8"/>',
  };
  const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.info}</svg>`;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const tel = (p) => 'tel:' + p.replace(/[^\d+]/g, '').replace(/^0/, '+49');
  const initials = (n) => n.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* nicht verfügbar */ } },
  };
  const DAYS = ['', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
  const DAYS_SHORT = ['', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  const AGE = { kinder: 'Kinder', jugend: 'Jugend', erwachsene: 'Erwachsene', senioren: 'Senioren', alle: 'Alle Altersgruppen' };
  const toMin = (t) => (t ? +t.slice(0, 2) * 60 + +t.slice(3, 5) : null);
  const timeStr = (s) => (s.from ? (s.to ? `${s.from} – ${s.to}` : `ab ${s.from}`) : '');
  const todayIso = () => ((new Date().getDay() + 6) % 7) + 1;
  const deptById = (id) => DEPARTMENTS.find((d) => d.id === id);
  const page = document.body.dataset.page || '';

  function allSessions() {
    const out = [];
    DEPARTMENTS.forEach((d) =>
      (d.training || []).forEach((g) => {
        if (!g.sessions.length) out.push({ dept: d.id, deptName: d.name, icon: d.icon, ...g, day: 0 });
        g.sessions.forEach((s) => out.push({ dept: d.id, deptName: d.name, icon: d.icon, ...g, ...s }));
      })
    );
    EXTRA_SESSIONS.forEach((g) => g.sessions.forEach((s) => out.push({ icon: 'cornhole', ...g, ...s })));
    return out;
  }
  const sortSessions = (a, b) => (a.day || 9) - (b.day || 9) || (toMin(a.from) ?? 9999) - (toMin(b.from) ?? 9999);
  const deptLink = (id) => (deptById(id) ? `abteilung.html?a=${id}` : 'aktuelles.html#cornhole');
  const venueName = (v) => (VENUES[v] ? VENUES[v].name : '');
  const mapsUrl = (v) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(VENUES[v]?.address || CLUB.mapQuery);

  /* ---------- Kopf- und Fußzeile ---------- */
  // [Titel, Link, Seitenschlüssel, Unterpunkte?]
  const NAV = [
    ['Verein', 'verein.html', 'verein', [
      ['Über uns', 'verein.html', 'heart', 'Werte und Gemeinschaft'],
      ['Vorstand', 'verein.html#vorstand', 'users', 'Ansprechpartner im Verein'],
      ['Geschichte', 'verein.html#geschichte', 'calendar', 'Von 1929 bis heute'],
      ['Mitmachen & Ehrenamt', 'verein.html#mitmachen', 'star', 'Hilf mit im Verein'],
      ['Partner & Förderer', 'partner.html', 'handshake', 'Unterstützer des ETuS'],
      ['Satzung', 'verein.html#satzung', 'file', 'Unser Regelwerk'],
    ]],
    ['Abteilungen', 'abteilungen.html', 'abteilungen', 'depts'],
    ['Jugend', 'jugend.html', 'jugend'],
    ['Training', 'training.html', 'training'],
    ['Aktuelles', 'aktuelles.html', 'aktuelles'],
    ['Anlage', 'anlage.html', 'anlage', [
      ['Vereinsanlage', 'anlage.html', 'home', 'Sportstätten im Überblick'],
      ['Feiern & Vermietung', 'anlage.html#vermietung', 'grill', 'Grillecke, Jugendraum, Platz'],
      ['Ninja Parcours', 'anlage.html#ninja', 'sparkle', 'Öffentlich für jeden'],
      ['Vereinsgaststätte', 'gaststaette.html', 'food', 'Biergarten & Kegelbahn'],
      ['Anfahrt', 'anlage.html#anfahrt', 'pin', 'So findet ihr uns'],
    ]],
    ['Kontakt', 'kontakt.html', 'kontakt'],
  ];
  const subItems = (sub) => (sub === 'depts' ? DEPARTMENTS.map((d) => [d.name, `abteilung.html?a=${d.id}`, d.icon, d.tagline]) : sub);

  function renderHeader() {
    const mount = $('#site-header');
    if (!mount) return;
    const gs = gastroStatus();
    const alertOff = store.get('etus-hinweis') === '1';
    mount.innerHTML = `
      <a class="skip-link" href="#main">Zum Inhalt springen</a>
      ${alertOff ? '' : `<div class="alertbar"><div class="container">${icon('alert')}<p><strong>Geänderte Zufahrt:</strong> <span class="hide-sm">PKW fahren hinter dem Vereinsgelände entlang (links am Seniorenwohnheim). </span><a href="anlage.html#anfahrt">Zur Anfahrt</a></p><button class="alertbar__close" aria-label="Hinweis schließen">${icon('close')}</button></div></div>`}
      <div class="utility"><div class="container">
        <div class="utility__group"><a href="${CLUB.phoneHref}">${icon('phone')} ${CLUB.phone}</a><a href="mailto:${CLUB.email}" class="u-hide">${icon('mail')} ${CLUB.email}</a><a href="anlage.html#anfahrt" class="u-hide2">${icon('pin')} ${CLUB.street}</a></div>
        <div class="utility__group"><a href="gaststaette.html"><span class="dot ${gs.open ? 'on' : ''}"></span> Gaststätte: ${gs.text}</a><a href="${CLUB.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon('instagram')}</a><a href="#" data-intern>${icon('lock')} Intern</a></div>
      </div></div>
      <header class="header"><div class="container">
        <a class="brand" href="index.html"><img src="assets/img/logo.png" alt="" width="48" height="52"><span><b>ETuS Wedau</b><small>Eisenbahner Turn- &amp; Sportverein 1929 e.V.</small></span></a>
        <nav class="nav" aria-label="Hauptnavigation">
          ${NAV.map(([label, href, key, sub]) => {
            const cur = key === page ? ' aria-current="page"' : '';
            if (!sub) return `<div class="nav__item"><a class="nav__link" href="${href}"${cur}>${label}</a></div>`;
            const items = subItems(sub);
            const cls = sub === 'depts' ? 'dropdown dropdown--wide' : 'dropdown';
            const all = sub === 'depts' ? `<a class="all" href="abteilungen.html">Alle Abteilungen im Überblick</a>` : '';
            return `<div class="nav__item"><a class="nav__link" href="${href}"${cur} aria-haspopup="true">${label}${icon('chevron')}</a><div class="${cls}">${items.map(([t, h, ic, s]) => `<a href="${h}"><span class="ico">${icon(ic)}</span><span>${esc(t)}<small>${esc(s)}</small></span></a>`).join('')}${all}</div></div>`;
          }).join('')}
        </nav>
        <div class="header__cta"><a class="btn btn--yellow btn--sm" href="mitglied.html">Mitglied werden</a>
          <button class="burger" aria-label="Menü öffnen" aria-expanded="false">${icon('menu')}</button></div>
      </div></header>
      <div class="mnav" aria-hidden="true">
        <div class="mnav__top"><a class="brand" href="index.html"><img src="assets/img/logo.png" alt="" width="44"><span><b>ETuS Wedau</b></span></a><button class="burger" style="display:grid" aria-label="Menü schließen" data-close>${icon('close')}</button></div>
        <div class="mnav__body">
          ${NAV.map(([label, href, , sub]) => sub
            ? `<details><summary>${label}${icon('chevron')}</summary><div class="mnav__sub">${subItems(sub).map(([t, h, ic]) => `<a href="${h}"><span class="ico">${icon(ic)}</span>${esc(t)}</a>`).join('')}<a href="${href}">Übersicht →</a></div></details>`
            : `<a href="${href}">${label}</a>`).join('')}
          <div class="btn-row" style="margin-top:24px"><a class="btn btn--yellow" href="mitglied.html">Mitglied werden</a><a class="btn btn--line" href="${CLUB.phoneHref}">${icon('phone')} ${CLUB.phone}</a></div>
          <p style="margin-top:18px;color:#b4b3ab;font-size:.9rem"><span class="dot ${gs.open ? 'on' : ''}" style="display:inline-block"></span> Gaststätte: ${gs.text}</p>
        </div>
      </div>`;
  }

  function renderFooter() {
    const mount = $('#site-footer');
    if (!mount) return;
    mount.innerHTML = `
      <footer class="footer"><div class="container">
        <div class="footer__grid">
          <div>
            <div class="footer__brand"><img src="assets/img/logo.png" alt="">ETuS Wedau 1929 e.V.</div>
            <address>${CLUB.street}<br>${CLUB.city}<br><a href="${CLUB.phoneHref}">${CLUB.phone}</a><br><a href="mailto:${CLUB.email}">${CLUB.email}</a></address>
            <div class="socials"><a href="${CLUB.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon('instagram')}</a><a href="https://www.facebook.com/etuswedauhandball/" target="_blank" rel="noopener" aria-label="Facebook (Handball)">${icon('facebook')}</a><a href="https://www.youtube.com/watch?v=${CLUB.youtube}" target="_blank" rel="noopener" aria-label="Vereinsfilm auf YouTube">${icon('play')}</a></div>
          </div>
          <div><h4>Abteilungen</h4><ul>${DEPARTMENTS.map((d) => `<li><a href="abteilung.html?a=${d.id}">${esc(d.name)}</a></li>`).join('')}</ul></div>
          <div><h4>Verein</h4><ul><li><a href="verein.html">Über uns</a></li><li><a href="verein.html#vorstand">Vorstand</a></li><li><a href="jugend.html">Kinder &amp; Jugend</a></li><li><a href="aktuelles.html">Aktuelles</a></li><li><a href="verein.html#mitmachen">Ehrenamt</a></li><li><a href="partner.html">Partner werden</a></li></ul></div>
          <div><h4>Anlage &amp; Service</h4><ul><li><a href="training.html">Trainingszeiten</a></li><li><a href="mitglied.html">Mitglied werden</a></li><li><a href="mitglied.html#downloads">Downloads &amp; Anträge</a></li><li><a href="anlage.html#vermietung">Feiern &amp; Vermietung</a></li><li><a href="gaststaette.html">Vereinsgaststätte</a></li><li><a href="anlage.html#anfahrt">Anfahrt</a></li><li><a href="#" data-intern>Interner Bereich</a></li></ul></div>
        </div>
        <div class="footer__bottom"><span>© ${new Date().getFullYear()} ETuS Wedau 1929 e.V. · Seit 1929 in Bewegung</span><nav><a href="impressum.html">Impressum</a><a href="datenschutz.html">Datenschutz</a></nav></div>
      </div></footer>
      <nav class="mbar" aria-label="Schnellzugriff">
        <a href="index.html">${icon('home')}Start</a><a href="training.html">${icon('clock')}Training</a><a href="${CLUB.phoneHref}">${icon('phone')}Anrufen</a><a class="is-primary" href="mitglied.html">${icon('check')}Mitglied</a>
      </nav>
      <div class="draft">Entwurf</div>
      <div class="toast" role="status" aria-live="polite"></div>`;
  }

  function initNav() {
    $$('.nav__item').forEach((item) => {
      if (!$('.dropdown', item)) return;
      let t;
      item.addEventListener('mouseenter', () => { clearTimeout(t); item.classList.add('is-open'); });
      item.addEventListener('mouseleave', () => { t = setTimeout(() => item.classList.remove('is-open'), 150); });
      item.addEventListener('focusin', () => item.classList.add('is-open'));
      item.addEventListener('focusout', (e) => { if (!item.contains(e.relatedTarget)) item.classList.remove('is-open'); });
    });
    const m = $('.mnav');
    const open = (v) => { m.classList.toggle('is-open', v); m.setAttribute('aria-hidden', String(!v)); document.body.style.overflow = v ? 'hidden' : ''; };
    $('.header .burger')?.addEventListener('click', () => open(true));
    $('[data-close]', m)?.addEventListener('click', () => open(false));
    $$('a', m).forEach((a) => a.addEventListener('click', () => open(false)));
    $('.alertbar__close')?.addEventListener('click', (e) => { e.currentTarget.closest('.alertbar').remove(); store.set('etus-hinweis', '1'); });
    $$('[data-intern]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); toast('Interner Bereich für Vorstand und Übungsleiter – im Livebetrieb mit Login.'); }));
  }

  /* ---------- Toast & Modal ---------- */
  let tT;
  function toast(msg) {
    const el = $('.toast');
    el.innerHTML = msg;
    el.classList.add('is-show');
    clearTimeout(tT);
    tT = setTimeout(() => el.classList.remove('is-show'), 4200);
  }
  function openModal(html) {
    let m = $('#modal');
    if (!m) {
      m = document.createElement('div');
      m.id = 'modal';
      m.className = 'modal';
      m.setAttribute('role', 'dialog');
      m.setAttribute('aria-modal', 'true');
      document.body.appendChild(m);
      m.addEventListener('click', (e) => e.target === m && closeModal());
    }
    m.innerHTML = `<div class="modal__panel"><button class="modal__close" aria-label="Schließen">${icon('close')}</button>${html}</div>`;
    $('.modal__close', m).addEventListener('click', closeModal);
    m.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    $('.modal__close', m).focus();
  }
  function closeModal() {
    const m = $('#modal');
    if (!m) return;
    m.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  document.addEventListener('keydown', (e) => e.key === 'Escape' && closeModal());

  function openNews(id) {
    const n = NEWS.find((x) => x.id === id);
    if (!n) return;
    const d = deptById(n.dept);
    openModal(`${n.img ? `<div class="modal__img"><img src="${n.img}" alt="" class="${n.contain ? 'contain' : ''}" style="object-position:${n.imgPos || 'center'}"></div>` : ''}
      <div class="modal__body"><div class="news__meta">${esc(n.dateLabel)} <span class="chip">${esc(n.tag)}</span></div><h2>${esc(n.title)}</h2>
      ${n.body.map((p) => `<p>${esc(p)}</p>`).join('')}
      <div class="btn-row">${n.link ? `<a class="btn btn--yellow btn--sm" href="${n.link.url}" ${/^http/.test(n.link.url) ? 'target="_blank" rel="noopener"' : ''}>${esc(n.link.label)}</a>` : ''}${d ? `<a class="btn btn--line btn--sm" href="abteilung.html?a=${d.id}">Zur Abteilung ${esc(d.name)}</a>` : ''}</div></div>`);
  }

  /* ---------- Bausteine ---------- */
  const deptTile = (d) => {
    const n = (d.training || []).length;
    const youth = (d.training || []).some((t) => t.age === 'kinder' || t.age === 'jugend');
    const thumb = d.image ? `<img src="${d.image}" alt="" loading="lazy" style="object-position:${d.imagePos || 'center 30%'}">` : `<span class="dept__ph">${icon(d.icon)}</span>`;
    return `<a class="dept dept--photo" href="abteilung.html?a=${d.id}"><span class="dept__thumb">${thumb}</span>${youth ? '<span class="chip dept__youth">Jugend</span>' : ''}<span class="ico">${icon(d.icon)}</span>
      <span class="dept__body"><h3>${esc(d.name)}</h3><p>${esc(d.tagline)}</p><span class="meta">${n} ${n === 1 ? 'Gruppe' : 'Gruppen'}${icon('arrow')}</span></span></a>`;
  };
  const newsCard = (n) => `<button class="news ${n.img ? '' : 'news--text'}" data-news="${n.id}">
      ${n.img ? `<div class="news__img"><img src="${n.img}" alt="" loading="lazy" class="${n.contain ? 'contain' : ''}" style="object-position:${n.imgPos || 'center'}"></div>` : ''}
      <div class="news__body"><div class="news__meta">${esc(n.dateLabel)} <span class="chip ${n.tag === 'Wichtig' ? '' : 'chip--soft'}">${esc(n.tag)}</span></div><h3>${esc(n.title)}</h3><p>${esc(n.excerpt)}</p></div></button>`;
  const contactCard = (c) => `<div class="card contact"><span class="avatar" aria-hidden="true">${initials(c.name)}</span><div>
      <div class="contact__role">${esc(c.role)}</div><div class="contact__name">${esc(c.name)}</div>
      <div class="contact__links">${c.phone ? `<a href="${tel(c.phone)}">${icon('phone')} ${esc(c.phone)}</a>` : ''}${c.phone2 ? `<a href="${tel(c.phone2)}">${icon('phone')} ${esc(c.phone2)}</a>` : ''}${c.email ? `<a href="mailto:${esc(c.email)}">${icon('mail')} ${esc(c.email)}</a>` : ''}${!c.phone && !c.email ? '<span class="muted">Kontakt über die Abteilung</span>' : ''}</div></div></div>`;
  const coachText = (s) => (s.coaches || []).map((c) => `<div>${esc(c.name)}${c.phone ? ` · <a href="${tel(c.phone)}">${esc(c.phone)}</a>` : c.email ? ` · <a href="mailto:${esc(c.email)}">E-Mail</a>` : ''}</div>`).join('');
  const sessionTable = (list, withDept) => `<table class="ttable"><thead><tr>${withDept ? '<th>Abteilung</th>' : ''}<th>Tag</th><th>Zeit</th><th>Gruppe</th><th>Ort</th><th>Ansprechpartner</th></tr></thead><tbody>
    ${list.map((s) => `<tr class="${s.day && s.day === todayIso() ? 'is-today' : ''}">
      ${withDept ? `<td class="wide"><a class="t-dept" href="${deptLink(s.dept)}"><span class="ico">${icon(s.icon)}</span>${esc(s.deptName)}</a></td>` : ''}
      <td class="t-day">${s.day ? DAYS[s.day] : '–'}${s.day && s.day === todayIso() ? '<span class="today">Heute</span>' : ''}</td>
      <td class="t-time">${s.from ? timeStr(s) : '<span class="muted">nach Absprache</span>'}</td>
      <td class="wide"><strong>${esc(s.group)}</strong><br><span class="age">${AGE[s.age] || ''}</span>${s.note ? `<small>${esc(s.note)}</small>` : ''}${s.monthly ? '<small>Nur an den Sportabzeichen-Terminen</small>' : ''}
        ${s.day && s.from && !s.monthly ? `<button class="cal" data-ics data-day="${s.day}" data-from="${s.from}" data-to="${s.to || ''}" data-title="${esc((s.deptName || '') + ': ' + s.group)}" data-loc="${esc(VENUES[s.venue]?.address || CLUB.mapQuery)}">${icon('calendar')} In meinen Kalender</button>` : ''}</td>
      <td class="wide">${s.venue ? `<a href="${mapsUrl(s.venue)}" target="_blank" rel="noopener">${esc(venueName(s.venue))}</a><small>${esc(VENUES[s.venue].address)}</small>` : '–'}</td>
      <td class="wide">${coachText(s) || '<span class="muted">–</span>'}</td></tr>`).join('')}
    </tbody></table>`;

  function gastroStatus(now = new Date()) {
    const h = GASTRO.hours[now.getDay()];
    const hr = now.getHours() + now.getMinutes() / 60;
    if (!h) return { open: false, text: 'Heute Ruhetag' };
    if (hr >= h[0] && hr < h[1]) return { open: true, text: `Jetzt geöffnet bis ${h[1]} Uhr` };
    if (hr < h[0]) return { open: false, text: `Öffnet heute um ${h[0]} Uhr` };
    return { open: false, text: 'Heute geschlossen' };
  }

  /* ---------- Seiten ---------- */
  /* Zielgruppen für „Was passt zu mir?“ */
  const AUDIENCES = [
    { id: 'kinder', label: 'Kinder', age: '3–9 Jahre', intro: 'Spielerisch bewegen, toben und erste Teamerfahrungen sammeln – mit erfahrenen Übungsleitern.', match: (s) => s.age === 'kinder' },
    { id: 'jugend', label: 'Jugendliche', age: '10–17 Jahre', intro: 'Im Team trainieren, Wettkämpfe erleben oder einfach mit Freunden Sport machen.', match: (s) => s.age === 'jugend' },
    { id: 'erwachsene', label: 'Erwachsene', age: 'ab 18', intro: 'Ob Wettkampf, Hobbyrunde oder Ausgleich nach der Arbeit – such dir aus, was zu dir passt.', match: (s) => s.age === 'erwachsene' || s.age === 'alle' },
    { id: 'senioren', label: 'Senior*innen', age: '60+', intro: 'Fit und beweglich bleiben in netter Gemeinschaft – sanft, präventiv und gesellig.', match: (s) => s.age === 'senioren' || (s.age === 'alle' && s.dept !== 'segeln') },
  ];

  function groupSessions(list) {
    const map = {};
    list.forEach((s) => {
      const k = (s.dept || 'x') + '|' + s.group;
      (map[k] = map[k] || { ...s, days: [] }).days.push(s.day ? `${DAYS_SHORT[s.day]}${s.from ? ' ' + s.from : ''}` : 'Zeit nach Absprache');
    });
    return Object.values(map);
  }

  function home() {
    const g = $('#home-depts');
    if (!g) return;
    g.innerHTML = DEPARTMENTS.map(deptTile).join('');

    const all = allSessions().sort(sortSessions);
    const tabs = $('#finder-tabs');
    const out = $('#finder-out');
    const intro = $('#finder-intro');
    tabs.innerHTML = AUDIENCES.map((a, i) => `<button role="tab" aria-selected="${i === 0}" data-a="${a.id}">${a.label} <span style="opacity:.6;font-weight:600">${a.age}</span></button>`).join('');
    const show = (id) => {
      const a = AUDIENCES.find((x) => x.id === id);
      const groups = groupSessions(all.filter(a.match)).sort((x, y) => (x.age === a.id ? 0 : 1) - (y.age === a.id ? 0 : 1));
      const max = 8;
      intro.textContent = a.intro;
      out.innerHTML = groups.slice(0, max).map((s) => `<a class="offer" href="${deptLink(s.dept)}#training"><span class="ico">${icon(s.icon)}</span><span><strong>${esc(s.group)}</strong><span>${esc(s.deptName)}</span><span class="when">${esc(s.days.join(' · '))}</span></span></a>`).join('') +
        `<a class="offer offer--more" href="${a.id === 'kinder' || a.id === 'jugend' ? 'jugend.html' : 'training.html?alter=' + a.id}">${groups.length > max ? `Alle ${groups.length} Angebote` : `Alles für ${a.label}`} ${icon('arrow')}</a>`;
    };
    tabs.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      $$('button', tabs).forEach((x) => x.setAttribute('aria-selected', String(x === b)));
      show(b.dataset.a);
    });
    show('kinder');

    const news = [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
    $('#newsline').innerHTML = news.map((n) => `<li><button data-news="${n.id}"><small>${esc(n.dateLabel)}</small>${esc(n.title)}</button></li>`).join('');
  }

  function partners() {
    const ext = (p) => (/^http/.test(p.url) ? 'target="_blank" rel="noopener sponsored"' : '');
    const el = $('#partners');
    if (el) el.innerHTML = PARTNERS.map((p) => `<a href="${p.url}" ${ext(p)} title="${esc(p.name)} – ${esc(p.branch)}"><img src="${p.logo}" alt="${esc(p.name)}" loading="lazy"></a>`).join('');
    const mq = $('#marquee');
    if (mq) {
      const tiles = PARTNERS.map((p) => `<a href="${p.url}" ${ext(p)} title="${esc(p.name)}"><img src="${p.logo}" alt="${esc(p.name)}" loading="lazy"></a>`).join('');
      mq.innerHTML = `<div class="marquee__track">${tiles}${tiles.replace(/<a /g, '<a aria-hidden="true" tabindex="-1" ')}</div>`;
    }
    const pg = $('#partner-grid');
    if (pg) pg.innerHTML = PARTNERS.map((p) => `<a class="pcard" href="${p.url}" ${ext(p)}><span class="pcard__logo"><img src="${p.logo}" alt="${esc(p.name)}" loading="lazy"></span><span class="pcard__body"><strong>${esc(p.name)}</strong><small>${esc(p.branch)}</small></span></a>`).join('') +
      `<a class="pcard pcard--new" href="#anfrage"><span class="pcard__logo">${icon('handshake')}<b>Ihr Logo hier?</b></span><span class="pcard__body"><strong>Partner werden</strong><small>Jetzt Kontakt aufnehmen</small></span></a>`;
  }

  function departments() {
    const g = $('#all-depts');
    if (!g) return;
    const order = Object.keys(AGE);
    const ages = (d) => [...new Set((d.training || []).map((t) => t.age))].sort((a, b) => order.indexOf(a) - order.indexOf(b)).map((a) => AGE[a]);
    const days = (d) => [...new Set(allSessions().filter((s) => s.dept === d.id && s.day).sort(sortSessions).map((s) => DAYS_SHORT[s.day]))].join(' · ') || 'nach Absprache';
    g.innerHTML = DEPARTMENTS.map((d) => `<article class="drow" id="${d.id}">
        <a class="drow__img" href="abteilung.html?a=${d.id}">${d.image ? `<img src="${d.image}" alt="" loading="lazy" style="object-position:${d.imagePos || 'center 30%'}">` : `<span class="dept__ph">${icon(d.icon)}</span>`}<span class="ico">${icon(d.icon)}</span></a>
        <div class="drow__body"><h3><a href="abteilung.html?a=${d.id}" style="text-decoration:none">${esc(d.name)}</a></h3><p class="muted small">${esc(d.short)}</p>
          <div class="drow__tags">${ages(d).map((a) => `<span class="chip chip--soft">${a}</span>`).join('')}</div></div>
        <dl class="drow__meta"><dt>Trainingstage</dt><dd>${days(d)}</dd><dt>Ansprechpartner</dt><dd>${esc(d.contacts[0].name)}</dd><dt>Gruppen</dt><dd>${d.training.length}</dd></dl>
        <div class="drow__cta"><a class="btn btn--sm" href="abteilung.html?a=${d.id}">Zur Abteilung</a><a class="link small" href="abteilung.html?a=${d.id}#training">Zeiten ${icon('arrow')}</a></div>
      </article>`).join('');
    $('#offers').innerHTML = OPEN_OFFERS.map((o) => `<a class="card card--link" href="${o.link}"><span class="chip" style="align-self:flex-start">${esc(o.badge)}</span><h3>${esc(o.title)}</h3><p class="muted small" style="margin:0">${esc(o.text)}</p><span class="link">Mehr erfahren ${icon('arrow')}</span></a>`).join('');
  }

  /* Fotos einer Abteilung: eigene Galerie + Bilder aus den News der Abteilung */
  function photos(d) {
    const list = (d.gallery || []).map((g) => ({ src: UP + g, cap: d.name }));
    NEWS.filter((n) => n.dept === d.id && n.img && !n.contain).forEach((n) => list.push({ src: n.img, cap: n.title }));
    return list.filter((p, i, a) => a.findIndex((x) => x.src === p.src) === i).slice(0, 9);
  }

  function department() {
    const root = $('#dept');
    if (!root) return;
    const d = deptById(new URLSearchParams(location.search).get('a')) || DEPARTMENTS[0];
    document.title = `${d.name} – ETuS Wedau 1929 e.V.`;
    const sessions = allSessions().filter((s) => s.dept === d.id).sort(sortSessions);
    const news = NEWS.filter((n) => n.dept === d.id).sort((a, b) => b.date.localeCompare(a.date));
    const youth = sessions.some((s) => s.age === 'kinder' || s.age === 'jugend');
    const nav = [['training', 'Training'], d.teams && ['teams', 'Teams'], photos(d).length && ['fotos', 'Fotos'], d.extra === 'sportabzeichen' && ['sportabzeichen', 'Sportabzeichen'], d.extra === 'schuetzen' && ['gaeste', 'Gastschützen'], d.history && ['historie', 'Geschichte'], news.length && ['aktuelles', 'Aktuelles'], ['kontakt', 'Ansprechpartner'], d.faq && ['faq', 'Fragen']].filter(Boolean);

    root.innerHTML = `
      <section class="page-head page-head--img"><div class="container split">
        <div>
          <ol class="crumbs"><li><a href="index.html">Start</a></li><li><a href="abteilungen.html">Abteilungen</a></li><li aria-current="page">${esc(d.name)}</li></ol>
          <span class="kicker">Abteilung</span>
          <h1>${esc(d.name)}</h1>
          <p class="lead">${esc(d.short)}</p>
          <div class="btn-row" style="margin-top:22px"><a class="btn btn--yellow" href="#training">Trainingszeiten</a><a class="btn btn--line" href="#kontakt">Kontakt</a>
            ${d.social?.instagram ? `<a class="btn btn--line" href="${d.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon('instagram')}</a>` : ''}</div>
          <div class="facts">${(d.facts || []).map((f) => `<div><b>${esc(f.v)}</b><span>${esc(f.l)}</span></div>`).join('')}${youth ? '<div><b>Jugend</b><span>Angebote für Kinder</span></div>' : ''}</div>
        </div>
        ${d.image ? `<div class="page-head__img"><img src="${d.image}" alt="${esc(d.name)} beim ETuS Wedau" style="object-position:${d.imagePos || 'center 30%'}"><span class="ico ico--lg">${icon(d.icon)}</span></div>` : `<div class="page-head__sign" aria-hidden="true">${icon(d.icon)}</div>`}
      </div></section>
      <nav class="subnav" aria-label="Bereiche"><div class="container">${nav.map(([id, l]) => `<a href="#${id}">${l}</a>`).join('')}</div></nav>

      <section class="section section--white"><div class="container split split--top">
        <div><span class="kicker">Über die Abteilung</span><h2>${esc(d.tagline)}</h2>${d.intro.map((p) => `<p class="muted">${esc(p)}</p>`).join('')}</div>
        <div class="stack">
          ${d.disciplines ? `<div class="grid g2">${d.disciplines.map((x) => `<div class="card"><h3 style="font-size:1.05rem">${esc(x.title)}</h3><p class="small muted" style="margin:0">${esc(x.text)}</p></div>`).join('')}</div>` : ''}
          <div class="card card--yellow"><h3>Einfach ausprobieren</h3><p style="margin-bottom:14px">Das erste Training ist kostenlos und unverbindlich. Melde dich kurz bei den Ansprechpartnern oder komm direkt vorbei.</p>
            <div class="btn-row">${d.email ? `<a class="btn btn--sm" href="mailto:${d.email}?subject=Probetraining%20${encodeURIComponent(d.name)}">${icon('mail')} ${d.email}</a>` : `<a class="btn btn--sm" href="#kontakt">Ansprechpartner</a>`}</div></div>
        </div>
      </div></section>

      <section class="section" id="training"><div class="container">
        <div class="section-head"><div><span class="kicker">Trainingszeiten</span><h2>Wann &amp; wo</h2></div><a class="link" href="training.html?a=${d.id}">Alle Zeiten im Verein ${icon('arrow')}</a></div>
        ${sessionTable(sessions, false)}
        ${d.facilities ? `<div class="grid g4" style="margin-top:20px">${d.facilities.map((f) => `<div class="card"><h3 style="font-size:1rem">${esc(f.t)}</h3><p class="small muted" style="margin:0">${esc(f.d)}</p></div>`).join('')}</div>` : ''}
      </div></section>

      ${d.teams ? `<section class="section section--white" id="teams"><div class="container">
        <div class="section-head"><div><span class="kicker">Mannschaften</span><h2>Teams</h2></div></div>
        <div class="grid g3">${d.teams.map((t) => `<div class="card" style="padding:0;overflow:hidden;${t.img ? '' : 'border-top:5px solid var(--yellow)'}">${t.img ? `<img src="${t.img}" alt="${esc(t.name)}" loading="lazy" style="width:100%;aspect-ratio:16/9;object-fit:cover">` : ''}<div style="padding:16px 18px"><h3 style="margin-bottom:2px">${esc(t.name)}</h3><p class="small muted" style="margin:0">${esc(t.league)}</p>${t.link ? `<a class="link small" style="margin-top:8px" href="${t.link}" target="_blank" rel="noopener">Spielplan &amp; Tabelle ${icon('external')}</a>` : ''}</div></div>`).join('')}</div>
      </div></section>` : ''}

      ${photos(d).length ? `<section class="section" id="fotos"><div class="container">
        <div class="section-head"><div><span class="kicker">Eindrücke</span><h2>Fotos</h2></div></div>
        <div class="gallery">${photos(d).map((p) => `<button data-lightbox="${p.src}" aria-label="Foto vergrößern: ${esc(p.cap)}"><img src="${p.src}" alt="${esc(p.cap)}" loading="lazy"><span>${esc(p.cap)}</span></button>`).join('')}</div>
      </div></section>` : ''}

      ${d.extra === 'sportabzeichen' ? sportabzeichen() : ''}
      ${d.extra === 'schuetzen' ? gastschuetzen() : ''}
      ${d.history ? `<section class="section section--white" id="historie"><div class="container split split--top"><div><span class="kicker">Seit 1975</span><h2>Unsere Geschichte</h2><p class="muted">Steganlage, Winterlager und Jugendarbeit sind fast vollständig in Eigenleistung entstanden.</p></div>
        <ul class="timeline">${d.history.map((h) => `<li><b>${h.y}</b>${esc(h.t)}</li>`).join('')}</ul></div></section>` : ''}

      ${news.length ? `<section class="section" id="aktuelles"><div class="container"><div class="section-head"><div><span class="kicker">Aus der Abteilung</span><h2>Aktuelles</h2></div></div><div class="grid g3">${news.slice(0, 3).map(newsCard).join('')}</div></div></section>` : ''}

      <section class="section section--white" id="kontakt"><div class="container">
        <div class="section-head"><div><span class="kicker">Abteilungsleitung</span><h2>Ansprechpartner</h2></div>${d.email ? `<a class="link" href="mailto:${d.email}">${d.email} ${icon('arrow')}</a>` : ''}</div>
        <div class="grid g3">${d.contacts.map(contactCard).join('')}</div>
        <h3 style="margin-top:36px">Sportstätten</h3>
        <div class="grid g3">${d.venues.map((v) => `<a class="card card--link" href="${mapsUrl(v)}" target="_blank" rel="noopener"><span style="display:flex;gap:12px;align-items:center"><span class="ico">${icon('pin')}</span><span><strong>${esc(VENUES[v].name)}</strong><br><small class="muted">${esc(VENUES[v].address)}</small></span></span></a>`).join('')}</div>
      </div></section>

      ${d.faq ? `<section class="section" id="faq"><div class="container split split--top"><div><span class="kicker">Gut zu wissen</span><h2>Häufige Fragen</h2></div><div class="acc">${d.faq.map((f, i) => `<details ${i ? '' : 'open'}><summary>${esc(f.q)}</summary><div class="acc-body">${esc(f.a)}</div></details>`).join('')}</div></div></section>` : ''}`;

    if (location.hash) setTimeout(() => $(location.hash)?.scrollIntoView(), 50);
  }

  function sportabzeichen() {
    const today = new Date().toISOString().slice(0, 10);
    const fmt = (d) => new Date(d).toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });
    const next = SPORTABZEICHEN.dates.filter((d) => d >= today);
    return `<section class="section section--soft" id="sportabzeichen"><div class="container split split--top">
      <div><span class="kicker">Deutsches Sportabzeichen</span><h2>Für alle ab 6 Jahren</h2>
        <p class="muted">Aus den Disziplingruppen Ausdauer, Kraft, Schnelligkeit und Koordination wird je eine Bedingung erfüllt, dazu der Nachweis der Schwimmfertigkeit.</p>
        <dl class="kv"><dt>Wann</dt><dd>${SPORTABZEICHEN.time}</dd><dt>Wo</dt><dd>${SPORTABZEICHEN.place}</dd><dt>Kinder/Jugend</dt><dd>1,50 € (Urkunde + Nadel)</dd><dt>Erwachsene</dt><dd>Urkunde 3,50 €, Nadel 5,00 €</dd><dt>Kontakt</dt><dd><a href="mailto:${SPORTABZEICHEN.contact}">${SPORTABZEICHEN.contact}</a></dd></dl></div>
      <div class="card"><h3>Termine ${SPORTABZEICHEN.year}</h3><ul class="hours">${SPORTABZEICHEN.dates.map((d) => `<li style="${d < today ? 'opacity:.45' : ''}"><span>Montag, ${fmt(d)}</span><span>17 – 19 Uhr</span></li>`).join('')}</ul>
        ${next.length ? '' : `<p class="small muted" style="margin:0">Die Saison ${SPORTABZEICHEN.year} ist beendet. Die Termine für ${SPORTABZEICHEN.year + 1} folgen im Frühjahr.</p>`}</div>
    </div></section>`;
  }

  function gastschuetzen() {
    return `<section class="section section--soft" id="gaeste"><div class="container split split--top">
      <div><span class="kicker">Gastschützen willkommen</span><h2>Reinschnuppern für 10 € pro Trainingstag</h2><p class="muted">Gastschützen sind zu den Trainingszeiten nach vorheriger Absprache mit den Trainern immer willkommen. Vereinsausrüstung steht zur Verfügung. Mitglieder leisten fünf Arbeitsstunden pro Jahr für die Abteilung.</p></div>
      <div class="acc">
        <details open><summary>Versicherung &amp; Erlaubnisse</summary><div class="acc-body">Gastschützen ohne Verbandszugehörigkeit (RSB, DSB, BDMP etc.) weisen vor dem ersten Schießen eine Haftpflichtversicherung nach. Bei mitgebrachten erlaubnispflichtigen Waffen ist die Besitzerlaubnis (WBK bzw. Sprengstofferlaubnis) unaufgefordert vorzulegen.</div></details>
        <details><summary>Leihwaffen, Leihbögen &amp; Munition</summary><div class="acc-body">Leihbögen und Leihwaffen nach Absprache. Munition für Nichtinhaber einer WBK kann zum sofortigen Verbrauch auf dem Stand erworben werden.</div></details>
        <details><summary>Ohne Erfahrung?</summary><div class="acc-body">Bitte zuerst an die Luftpistolen- und Luftgewehrgruppe wenden, dort wird der sichere Umgang gelernt. Beim Bogenschießen gibt es keine Einschränkungen.</div></details>
        <details><summary>Bogen im Sommer &amp; Winter</summary><div class="acc-body">Oktober bis März in der Halle, April bis September auf dem Außengelände. Die Zeiten variieren je nach Witterung.</div></details>
      </div></div></section>`;
  }

  function youth() {
    const root = $('#stages');
    if (!root) return;
    const all = allSessions();
    root.innerHTML = YOUTH_STAGES.map((s) => {
      const groups = all.filter((x) => s.test(x)).sort(sortSessions);
      const byGroup = {};
      groups.forEach((g) => { const k = g.deptName + '|' + g.group; (byGroup[k] = byGroup[k] || { ...g, days: [] }).days.push(g.day ? `${DAYS_SHORT[g.day]} ${g.from || ''}`.trim() : 'n. Absprache'); });
      return `<div class="stage" id="${s.id}"><span class="stage__age">${s.age}</span><h3>${s.title}</h3><p>${s.text}</p>
        <ul>${Object.values(byGroup).map((g) => `<li><a href="${deptLink(g.dept)}#training">${icon(g.icon)}<span>${esc(g.group)}<br><small style="margin:0">${esc(g.deptName)}</small></span><small>${g.days.join(' · ')}</small></a></li>`).join('')}</ul></div>`;
    }).join('');
  }

  function training() {
    const root = $('#finder');
    if (!root) return;
    const all = allSessions();
    const st = { dept: new URLSearchParams(location.search).get('a') || 'alle', day: 'alle', age: new URLSearchParams(location.search).get('alter') || 'alle' };
    const sel = $('#f-dept');
    sel.insertAdjacentHTML('beforeend', DEPARTMENTS.map((d) => `<option value="${d.id}">${esc(d.name)}</option>`).join('') + '<option value="verein">Cornhole</option>');
    sel.value = st.dept;
    $$('#f-age button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === st.age)));
    const draw = () => {
      const list = all
        .filter((s) => st.dept === 'alle' || s.dept === st.dept)
        .filter((s) => st.day === 'alle' || String(s.day) === st.day)
        .filter((s) => st.age === 'alle' || s.age === st.age || (st.age !== 'alle' && s.age === 'alle'))
        .sort(sortSessions);
      $('#f-count').textContent = `${list.length} Einträge`;
      $('#f-results').innerHTML = list.length ? sessionTable(list, true) : '<div class="card">Keine passenden Zeiten. Ruf uns gerne an, wir helfen weiter.</div>';
    };
    sel.addEventListener('change', () => { st.dept = sel.value; draw(); });
    [['#f-day', 'day'], ['#f-age', 'age']].forEach(([s, k]) => $$(s + ' button').forEach((b) => b.addEventListener('click', () => {
      $$(s + ' button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      st[k] = b.dataset.v;
      draw();
    })));
    draw();
  }

  function newsPage() {
    const root = $('#news-list');
    if (!root) return;
    const tags = [['alle', 'Alle'], ['verein', 'Verein'], ...DEPARTMENTS.filter((d) => NEWS.some((n) => n.dept === d.id)).map((d) => [d.id, d.name])];
    $('#news-filter').innerHTML = tags.map(([v, l], i) => `<button data-v="${v}" aria-pressed="${i === 0}">${esc(l)}</button>`).join('');
    const draw = (f) => (root.innerHTML = [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).filter((n) => f === 'alle' || n.dept === f).map(newsCard).join(''));
    $$('#news-filter button').forEach((b) => b.addEventListener('click', () => { $$('#news-filter button').forEach((x) => x.setAttribute('aria-pressed', String(x === b))); draw(b.dataset.v); }));
    draw('alle');
    if (location.hash && NEWS.some((n) => n.id === location.hash.slice(1))) openNews(location.hash.slice(1));
  }

  function club() {
    const b = $('#board');
    if (b) b.innerHTML = BOARD.map((m) => `<div>${contactCard(m)}${m.tasks?.length ? `<details class="tasks"><summary>Aufgaben anzeigen</summary><ul>${m.tasks.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></details>` : ''}</div>`).join('');
    const h = $('#heads');
    if (h) h.innerHTML = DEPARTMENTS.map((d) => `<a class="card card--link" href="abteilung.html?a=${d.id}#kontakt" style="flex-direction:row;align-items:center;padding:16px"><span class="ico">${icon(d.icon)}</span><span><small class="muted">${esc(d.name)}</small><br><strong>${esc(d.contacts[0].name)}</strong></span></a>`).join('');
  }

  function downloads() {
    const el = $('#downloads-list');
    if (!el) return;
    el.innerHTML = DOWNLOADS.map((d) => `<a class="dl" href="${d.url}" target="_blank" rel="noopener"><span class="dl__ico">${d.ext ? icon('external') : 'PDF'}</span><span><strong>${esc(d.t)}</strong><small>${esc(d.d)}</small></span>${icon(d.ext ? 'external' : 'download')}</a>`).join('');
  }

  function gastro() {
    const gs = gastroStatus();
    $$('[data-gastro-status]').forEach((el) => (el.innerHTML = `<span class="dot ${gs.open ? 'on' : ''}"></span>${gs.text}`));
    $$('[data-gastro-hours]').forEach((el) => {
      const d = new Date().getDay();
      const ti = d === 3 ? 2 : d === 0 ? 1 : 0;
      el.innerHTML = GASTRO.hoursText.map((x, i) => `<li class="${i === ti ? 'is-today' : ''}"><span>${x[0]}</span><span>${x[1]}</span></li>`).join('');
    });
  }

  function embeds() {
    $$('[data-yt]').forEach((box) => $('button', box)?.addEventListener('click', () => {
      box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${box.dataset.yt}?autoplay=1&rel=0" title="Vereinsfilm ETuS Wedau" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    }));
    $$('[data-map]').forEach((box) => {
      const load = () => (box.innerHTML = `<iframe src="https://maps.google.com/maps?q=${encodeURIComponent(CLUB.mapQuery)}&z=15&output=embed" title="Karte" loading="lazy"></iframe>`);
      if (store.get('etus-map') === '1') return load();
      $('button', box)?.addEventListener('click', () => { store.set('etus-map', '1'); load(); });
    });
  }

  /* Sprungleiste: aktiven Abschnitt beim Scrollen markieren */
  function subnavSpy() {
    const links = $$('.subnav a[href^="#"]');
    if (!links.length) return;
    const spy = () => {
      let cur = -1;
      links.forEach((l, i) => { const t = $(l.getAttribute('href')); if (t && t.getBoundingClientRect().top < 200) cur = i; });
      links.forEach((l, i) => l.classList.toggle('is-active', i === cur));
    };
    window.addEventListener('scroll', spy, { passive: true });
    spy();
  }

  function forms() {
    $$('[data-multi] button').forEach((b) => b.addEventListener('click', () => b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'))));
    $$('select[data-depts]').forEach((s) => s.insertAdjacentHTML('beforeend', DEPARTMENTS.map((d) => `<option>${esc(d.name)}</option>`).join('')));
    $$('form[data-demo]').forEach((f) => f.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!f.checkValidity()) return f.reportValidity();
      f.reset();
      toast(`Danke, deine Nachricht ist angekommen. <span style="opacity:.7">(Entwurf: live geht sie an ${esc(f.dataset.demo)})</span>`);
    }));
  }

  /* Trainingstermin als wöchentlicher Kalendereintrag (.ics) */
  function downloadIcs(b) {
    const d = new Date();
    d.setDate(d.getDate() + ((+b.dataset.day - todayIso() + 7) % 7));
    const pad = (n) => String(n).padStart(2, '0');
    const stamp = (t) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${t.replace(':', '')}00`;
    const to = b.dataset.to || `${pad(+b.dataset.from.slice(0, 2) + 2)}:${b.dataset.from.slice(3)}`;
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//ETuS Wedau//Training//DE', 'BEGIN:VEVENT',
      `UID:${Date.now()}@etus-wedau.de`, `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').slice(0, 15)}Z`,
      `DTSTART;TZID=Europe/Berlin:${stamp(b.dataset.from)}`, `DTEND;TZID=Europe/Berlin:${stamp(to)}`,
      'RRULE:FREQ=WEEKLY', `SUMMARY:${b.dataset.title} (ETuS Wedau)`, `LOCATION:${b.dataset.loc}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = 'etus-training.ics';
    a.click();
    URL.revokeObjectURL(a.href);
    toast('Termin als wöchentlicher Kalendereintrag gespeichert.');
  }
  document.addEventListener('click', (e) => { const b = e.target.closest('[data-ics]'); if (b) downloadIcs(b); });
  document.addEventListener('click', (e) => { const b = e.target.closest('[data-lightbox]'); if (b) openModal(`<img src="${b.dataset.lightbox}" alt="" style="width:100%;display:block">`); });

  /* ---------- Start ---------- */
  renderHeader();
  renderFooter();
  $$('i[data-icon]').forEach((i) => (i.outerHTML = icon(i.dataset.icon)));
  initNav();
  home();
  partners();
  departments();
  department();
  youth();
  training();
  newsPage();
  club();
  downloads();
  gastro();
  embeds();
  forms();
  subnavSpy();
  document.addEventListener('click', (e) => { const n = e.target.closest('[data-news]'); if (n) openNews(n.dataset.news); });
})();
