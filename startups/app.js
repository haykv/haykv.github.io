/* ══════════════════════════════════════
   SHARED DATA & CONSTANTS
   ══════════════════════════════════════ */
// const RAW     = 'https://raw.githubusercontent.com/aolofsson/awesome-semiconductor-startups/main/startups.csv';
const RAW = 'https://raw.githubusercontent.com/haykv/awesome-semiconductor-startups/refs/heads/add-missing-startups-and-filter-inactive/startups.csv';
const GH_API  = (() => { const u = new URL(RAW); const p = u.pathname.split('/'); const filePath = p.slice(-1)[0]; const ref = p.slice(3, -1).join('/'); return `https://api.github.com/repos/${p[1]}/${p[2]}/commits?sha=${encodeURIComponent(ref)}&path=${encodeURIComponent(filePath)}&per_page=1`; })();
const CACHE_KEY = 'chip-scout-data-v2';
const CACHE_TTL = 24 * 60 * 60 * 1000;

const CC_MAP = {
  'United States':'us','USA':'us','US':'us',
  'United Kingdom':'gb','UK':'gb','Britain':'gb','Great Britain':'gb',
  'England':'gb','Scotland':'gb','Wales':'gb','Northern Ireland':'gb',
  'Germany':'de','France':'fr','Netherlands':'nl','Switzerland':'ch',
  'Canada':'ca','Israel':'il','China':'cn','South Korea':'kr','Korea':'kr',
  'India':'in','Australia':'au','Belgium':'be','Norway':'no','Finland':'fi',
  'Spain':'es','Italy':'it','Denmark':'dk','Singapore':'sg','Romania':'ro',
  'Ireland':'ie','Portugal':'pt','Austria':'at','Sweden':'se','Japan':'jp',
  'Taiwan':'tw','Brazil':'br','Mexico':'mx','Poland':'pl','Greece':'gr',
  'Czech Republic':'cz','Hungary':'hu','Ukraine':'ua','Russia':'ru',
  'New Zealand':'nz','South Africa':'za','UAE':'ae','United Arab Emirates':'ae',
  'Turkey':'tr','Argentina':'ar','Chile':'cl','Colombia':'co',
  'Estonia':'ee','Latvia':'lv','Lithuania':'lt','Slovakia':'sk',
  'Bulgaria':'bg','Croatia':'hr','Serbia':'rs','Slovenia':'si',
  'Luxembourg':'lu','Iceland':'is','Sweden':'se',
};

const ICON = {
  globe: `<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12 15.3 15.3 0 0 1 12 2z"/></svg>`,
  chip: `<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4M12 17v4"/></svg>`,
  globeFlag: `<svg width="0.8em" height="0.8em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12 15.3 15.3 0 0 1 12 2z"/></svg>`
};

const CHART_COLORS = [
  '#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff',
  '#ff9f40', '#4ade80', '#f472b6', '#2dd4bf', '#fb923c'
];

/* ── UTILITY ── */
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function debounce(fn, ms) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}

function resolveCountry(raw) {
  if (!raw || raw === 'N/A') return { cc: null, displayCC: 'N/A' };
  const t = raw.trim();
  if (/^[A-Za-z]{2}$/.test(t)) {
    const lo = t.toLowerCase() === 'uk' ? 'gb' : t.toLowerCase();
    return { cc: lo, displayCC: lo.toUpperCase() };
  }
  const m = CC_MAP[t];
  if (m) return { cc: m, displayCC: m.toUpperCase() };
  return { cc: null, displayCC: t.slice(0,2).toUpperCase() };
}

function flagHTML(cc, size=15) {
  if (!cc) {
    return `<span style="font-size:${size}px;color:var(--text3);display:inline-flex;align-items:center;justify-content:center;width:1.33em;height:1em;background:var(--surface2);border-radius:2px;flex-shrink:0">${ICON.globeFlag}</span>`;
  }
  return `<span class="fi fi-${cc} fis" style="font-size:${size}px;border-radius:2px;flex-shrink:0"></span>`;
}

function dcToFlag(displayCC) {
  const e = Object.entries(CC_MAP).find(([,v]) => v.toUpperCase() === displayCC);
  return e ? e[1] : displayCC.toLowerCase();
}

function getEmojiFlag(cc) {
  if (!cc || cc.length !== 2) return '';
  return String.fromCodePoint(...[...cc.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
}

function getTechEmoji(tech) {
  const t = tech.toLowerCase();
  if (t.includes('ai') || t.includes('intelligence') || t.includes('neural')) return '🧠';
  if (t.includes('photonics') || t.includes('optical') || t.includes('laser')) return '🌈';
  if (t.includes('risc') || t.includes('cpu') || t.includes('processor')) return '💻';
  if (t.includes('rf') || t.includes('wireless') || t.includes('radar')) return '📡';
  if (t.includes('power') || t.includes('battery') || t.includes('energy')) return '⚡';
  if (t.includes('analog') || t.includes('mixed-signal')) return '〰️';
  if (t.includes('memory') || t.includes('storage')) return '💾';
  if (t.includes('sensor') || t.includes('mems') || t.includes('imaging')) return '👁️';
  if (t.includes('quantum')) return '⚛️';
  if (t.includes('eda') || t.includes('design tool')) return '🏗️';
  if (t.includes('auto') || t.includes('vehicle')) return '🚗';
  if (t.includes('security') || t.includes('crypto')) return '🔒';
  return '🔌';
}

/* ── STATE ── */
let all = [], visible = [];
let selCC = new Set(), selTech = new Set(), sortCol = 'name', sortDir = 1, yearFilter = '';
let ccFreq = {}, techFreq = {}, ccItems = [], techItems = [];
let sheetType = null, charts = {};

/* ── PARSE ── */
function parseCSV(txt) {
  const rows = [];
  let curRow = [], curVal = '', inQuotes = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i], next = txt[i+1];
    if (inQuotes) {
      if (c === '"' && next === '"') { curVal += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else curVal += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { curRow.push(curVal.trim()); curVal = ''; }
      else if (c === '\r' || c === '\n') {
        curRow.push(curVal.trim());
        if (curRow.length > 1) processRow(curRow, rows);
        curRow = []; curVal = '';
        if (c === '\r' && next === '\n') i++;
      } else curVal += c;
    }
  }
  if (curRow.length > 0 || curVal.length > 0) {
    curRow.push(curVal.trim());
    if (curRow.length > 1) processRow(curRow, rows);
  }
  return rows;
}

function processRow(vals, rows) {
  let [name='',website='',technology='',country='',founded='',description=''] = vals;
  if (!name || name.toLowerCase() === 'name' || name.toLowerCase() === 'company') return;
  if (website.toLowerCase() === 'website') return;
  if (/^\d{4}$/.test(country)) { founded=country; country='N/A'; }
  if (!country) country='N/A';
  const {cc, displayCC} = resolveCountry(country);
  if (website && !website.startsWith('http')) website = 'https://'+website;
  website = website.toLowerCase();
  const domain = website ? website.replace(/https?:\/\//,'').replace(/\/.*$/,'') : '';
  rows.push({name, website, domain, technology, country, cc, displayCC, founded: founded.trim(), description});
}

function buildFreq() {
  ccFreq={}; techFreq={};
  all.forEach(r => {
    if (r.displayCC && r.displayCC !== 'N/A') ccFreq[r.displayCC] = (ccFreq[r.displayCC]||0)+1;
    if (r.technology) techFreq[r.technology] = (techFreq[r.technology]||0)+1;
  });
  ccItems   = Object.entries(ccFreq).sort((a,b)=>b[1]-a[1]).map(([v,n])=>({v,n}));
  techItems = Object.entries(techFreq).sort((a,b)=>b[1]-a[1]).map(([v,n])=>({v,n}));
}

/* ── FILTER ── */
function filterData(searchQuery) {
  const q = (searchQuery || '').toLowerCase();
  const scores = new Map();

  const result = all.filter(r => {
    let score = 0;
    if (q) {
      const name = r.name.toLowerCase(), tech = (r.technology||'').toLowerCase(), desc = (r.description||'').toLowerCase(), cc = (r.displayCC||'').toLowerCase();
      if (name.includes(q)) score = 10;
      else if ((tech+' '+desc+' '+cc).includes(q)) score = 1;
      else return false;
    }
    if (selCC.size   && !selCC.has(r.displayCC))  return false;
    if (selTech.size && !selTech.has(r.technology)) return false;
    const y = parseInt(r.founded);
    if (yearFilter==='2020' && (isNaN(y)||y<2020)) return false;
    if (yearFilter==='2015' && (isNaN(y)||y<2015||y>=2020)) return false;
    if (yearFilter==='old'  && (isNaN(y)||y>=2015)) return false;
    scores.set(r, score);
    return true;
  });

  result.sort((a,b) => {
    if (q) {
      const sa = scores.get(a)||0, sb = scores.get(b)||0;
      if (sa !== sb) return sb - sa;
    }
    let va = a[sortCol]||'', vb = b[sortCol]||'';
    if (sortCol==='founded') { va=parseInt(va)||0; vb=parseInt(vb)||0; return (va-vb)*sortDir; }
    if (sortCol==='cc') { va=a.displayCC||''; vb=b.displayCC||''; }
    return va.toString().toLowerCase() < vb.toString().toLowerCase() ? -sortDir : sortDir;
  });

  return result;
}

function dFilter() {
  visible = filterData(document.getElementById('d-search').value);
  dRenderTable(); dUpdateStats(); syncStateToURL();
  if (!document.getElementById('d-stats-view').style.display) renderCharts('d');
}

function mFilter() {
  visible = filterData(document.getElementById('m-search').value);
  mRenderCards(); mUpdateStats(); mUpdateChips(); syncStateToURL();
  if (!document.getElementById('m-stats-panel').style.display) renderCharts('m');
}

function setYearFilter(val) {
  yearFilter = val;
  dFilter();
}

/* ── RENDER: Desktop ── */
function dRenderTable() {
  const tb = document.getElementById('d-tbody');
  if (!visible.length) { tb.innerHTML=`<tr><td colspan="6" class="d-empty">No matches.</td></tr>`; return; }
  tb.innerHTML = visible.map(r => `<tr>
    <td title="${escapeHtml(r.name)}" style="font-weight:600">${escapeHtml(r.name)}</td>
    <td>${r.domain ? `<a class="td-link" href="${escapeHtml(r.website)}" target="_blank">${escapeHtml(r.domain)}</a>` : '–'}</td>
    <td>${r.technology ? `<span class="td-tag td-tag-tech" onclick="dFilterTag('tech','${escapeHtml(r.technology)}')">${escapeHtml(r.technology)}</span>` : '–'}</td>
    <td>${r.cc && r.cc !== 'N/A' ? `<div class="td-tag td-tag-cc" onclick="dFilterTag('cc','${escapeHtml(r.displayCC)}')">${flagHTML(r.cc,15)}<span>${escapeHtml(r.displayCC)}</span></div>` : `<div class="td-tag td-tag-cc td-tag-unknown">${flagHTML('',15)}<span>N/A</span></div>`}</td>
    <td class="td-muted">${escapeHtml(r.founded)||'–'}</td>
    <td title="${escapeHtml(r.description)}" class="td-muted">${escapeHtml(r.description)||'–'}</td>
  </tr>`).join('');
}

function dFilterTag(type, val) {
  const sel = type === 'cc' ? selCC : selTech;
  sel.clear();
  sel.add(val);
  updateMSLabel('d', type);
  dFilter();
}

function dUpdateStats() {
  document.getElementById('d-s-total').textContent   = all.length;
  document.getElementById('d-s-showing').textContent = visible.length;
  document.getElementById('d-s-cc').textContent      = new Set(visible.map(r=>r.displayCC).filter(c=>c&&c!=='N/A')).size;
  document.getElementById('d-s-new').textContent     = visible.filter(r => { const y = parseInt(r.founded); return !isNaN(y) && y >= 2020; }).length;
}

function sortBy(col, th) {
  if (sortCol===col) sortDir=-sortDir; else { sortCol=col; sortDir=1; }
  document.querySelectorAll('#desktop-app th:not(.nosort)').forEach(t=>t.classList.remove('asc','desc'));
  th.classList.add(sortDir===1?'asc':'desc');
  dFilter();
}

function dSwitchTab(tab) {
  document.querySelectorAll('.d-tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('d-tab-'+tab).classList.add('active');
  document.getElementById('d-list-view').style.display = tab==='list' ? '' : 'none';
  document.getElementById('d-stats-view').style.display = tab==='stats' ? '' : 'none';
  if (tab==='stats') renderCharts('d');
}

/* ── RENDER: Mobile ── */
function mRenderCards() {
  const el = document.getElementById('m-cards');
  if (!visible.length) {
    el.innerHTML = `<div class="m-empty"><div class="m-empty-icon">🔍</div>No companies match your filters.</div>`;
    return;
  }
  el.innerHTML = visible.map(r => {
    const flagBadge = r.cc && r.cc !== 'N/A' ? `<span class="m-badge m-badge-cc" onclick="mFilterTag('cc','${escapeHtml(r.displayCC)}')">${flagHTML(r.cc,12)}<span>${escapeHtml(r.displayCC)}</span></span>` : `<span class="m-badge m-badge-cc m-badge-unknown">${flagHTML('',12)}<span>N/A</span></span>`;
    const yrBadge   = r.founded ? `<span class="m-badge m-badge-yr">${escapeHtml(r.founded)}</span>` : '';
    const techBadge = r.technology ? `<span class="m-badge m-badge-tech" onclick="mFilterTag('tech','${escapeHtml(r.technology)}')">${getTechEmoji(r.technology)} ${escapeHtml(r.technology)}</span>` : '';
    return `<div class="m-card">
      <div class="m-card-head">
        <div class="m-card-name">${escapeHtml(r.name)}</div>
        <div class="m-card-row">${flagBadge}${yrBadge}${techBadge}</div>
      </div>
      ${r.description ? `<div class="m-card-desc">${escapeHtml(r.description)}</div>` : ''}
      ${r.domain ? `<div class="m-card-div"></div><a class="m-card-url" href="${escapeHtml(r.website)}" target="_blank">🔗 ${escapeHtml(r.domain)}</a>` : ''}
    </div>`;
  }).join('');
}

function mUpdateStats() {
  document.getElementById('m-s-total').textContent   = all.length;
  document.getElementById('m-s-showing').textContent = visible.length;
  document.getElementById('m-s-cc').textContent      = new Set(visible.map(r=>r.displayCC).filter(c=>c&&c!=='N/A')).size;
  document.getElementById('m-s-new').textContent     = visible.filter(r => { const y = parseInt(r.founded); return !isNaN(y) && y >= 2020; }).length;
}

function updateChip(el, type, active, count) {
  if (!el) return;
  el.innerHTML = type === 'cc'
    ? (active ? `Country <span class="chip-badge">${count}</span>` : `${ICON.globe} Country`)
    : (active ? `Technology <span class="chip-badge">${count}</span>` : `${ICON.chip} Technology`);
  el.className = 'm-chip' + (active ? ' active' : '');
}

function mUpdateChips() {
  updateChip(document.getElementById('m-chip-cc'), 'cc', selCC.size > 0, selCC.size);
  updateChip(document.getElementById('m-chip-tech'), 'tech', selTech.size > 0, selTech.size);
  updateChip(document.getElementById('m-s-chip-cc'), 'cc', selCC.size > 0, selCC.size);
  updateChip(document.getElementById('m-s-chip-tech'), 'tech', selTech.size > 0, selTech.size);
  ['2020','2015','old'].forEach(k => {
    const el = document.getElementById('m-chip-y'+k);
    if (el) el.className = 'm-chip' + (yearFilter === k ? ' active' : '');
    const el2 = document.getElementById('m-s-chip-y'+k);
    if (el2) el2.className = 'm-chip' + (yearFilter === k ? ' active' : '');
  });
}

function toggleYearChip(val) {
  yearFilter = yearFilter === val ? '' : val;
  const sel = document.getElementById('d-f-year');
  if (sel) sel.value = yearFilter;
  mFilter();
}

function mFilterTag(type, val) {
  const sel = type === 'cc' ? selCC : selTech;
  sel.clear();
  sel.add(val);
  mUpdateChips();
  mFilter();
}

function mSetSort(col, btn) {
  if (sortCol===col) sortDir=-sortDir; else { sortCol=col; sortDir=1; }
  document.querySelectorAll('.m-sort-chip').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  mFilter();
}

function mSwitchTab(tab, btn) {
  document.querySelectorAll('.m-nav-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('m-explore-panel').style.display = tab==='explore' ? '' : 'none';
  document.getElementById('m-stats-panel').style.display   = tab==='stats'   ? '' : 'none';
  document.getElementById('m-about-panel').style.display   = tab==='about'   ? '' : 'none';
  if (tab==='stats') renderCharts('m');
}

/* ── MULTI-SELECT ── */
function toggleMS(ctx, type) {
  const pfx = ctx+'-';
  const dd = document.getElementById(pfx+'md-'+type);
  const tr = document.getElementById(pfx+'mt-'+type);
  const wasOpen = dd.classList.contains('open');
  document.querySelectorAll('.ms-dd').forEach(d=>d.classList.remove('open'));
  document.querySelectorAll('.ms-trigger').forEach(t=>{
    t.classList.remove('open');
    t.setAttribute('aria-expanded', 'false');
  });
  if (!wasOpen) {
    dd.classList.add('open'); tr.classList.add('open');
    tr.setAttribute('aria-expanded', 'true');
    renderMSList(ctx, type);
    setTimeout(()=>document.getElementById(pfx+'ms-'+type+'-q').focus(), 40);
  }
}

function renderMSList(ctx, type, q='') {
  const pfx   = ctx+'-';
  const items = type==='cc' ? ccItems : techItems;
  const sel   = type==='cc' ? selCC  : selTech;
  const el    = document.getElementById(pfx+'ml-'+type+'-items');
  const fq    = q.toLowerCase();
  const list  = fq ? items.filter(i=>i.v.toLowerCase().includes(fq)) : items;
  if (type==='cc') {
    el.innerHTML = list.map(({v,n}) => {
      const fc = dcToFlag(v);
      return `<div class="ms-item${sel.has(v)?' sel':''}" data-ctx="${ctx}" data-type="cc" data-value="${escapeHtml(v)}">
        <div class="ms-cb"></div>
        <div class="ms-flag">${flagHTML(fc,15)}</div>
        <span>${escapeHtml(v)}</span>
        <span class="ms-freq">${n}</span>
      </div>`;
    }).join('');
  } else {
    el.innerHTML = list.map(({v,n}) => `<div class="ms-item${sel.has(v)?' sel':''}" data-ctx="${ctx}" data-type="tech" data-value="${escapeHtml(v)}">
      <div class="ms-cb"></div>
      <div class="ms-flag" style="font-size:14px">${getTechEmoji(v)}</div>
      <span>${escapeHtml(v)}</span>
      <span class="ms-freq">${n}</span>
    </div>`).join('');
  }
}

function toggleMSItem(ctx, type, val, el) {
  const sel = type==='cc' ? selCC : selTech;
  if (sel.has(val)) sel.delete(val); else sel.add(val);
  el.classList.toggle('sel');
  updateMSLabel(ctx, type);
  dFilter();
}

function updateMSLabel(ctx, type) {
  const pfx  = ctx+'-';
  const sel  = type==='cc' ? selCC : selTech;
  const base = type==='cc' ? 'Country' : 'Technology';
  const lbl  = document.getElementById(pfx+'ml-'+type);
  if (sel.size===0) {
    lbl.textContent = base;
  } else if (sel.size===1) {
    const v = [...sel][0];
    if (type==='cc') {
      const fc = dcToFlag(v);
      lbl.innerHTML = `<span style="display:inline-flex;align-items:center;gap:5px">${flagHTML(fc,14)}<span>${escapeHtml(v)}</span></span>`;
    } else {
      lbl.innerHTML = `<span style="display:inline-flex;align-items:center;gap:5px"><span>${getTechEmoji(v)}</span> <span>${escapeHtml(v.length>18 ? v.slice(0,16)+'…' : v)}</span></span>`;
    }
  } else {
    lbl.textContent = base + ' (' + sel.size + ')';
  }
}

function clearMS(ctx, type) {
  const sel = type==='cc' ? selCC : selTech;
  sel.clear();
  renderMSList(ctx, type, document.getElementById(ctx+'-ms-'+type+'-q').value);
  updateMSLabel(ctx, type);
  dFilter();
}

/* ── MOBILE SHEET ── */
function openSheet(type) {
  sheetType = type;
  document.getElementById('m-sheet-title').textContent = type==='cc' ? 'Filter by Country' : 'Filter by Technology';
  document.getElementById('m-sheet-sec').textContent   = type==='cc' ? 'Countries' : 'Technologies';
  document.getElementById('m-sheet-q').value = '';
  renderSheetItems('');
  document.getElementById('m-sheet-overlay').classList.add('open');
}

function renderSheetItems(q='') {
  const items = sheetType==='cc' ? ccItems : techItems;
  const sel   = sheetType==='cc' ? selCC  : selTech;
  const fq = q.toLowerCase();
  const list = fq ? items.filter(i=>i.v.toLowerCase().includes(fq)) : items;
  const el = document.getElementById('m-sheet-items');
  if (sheetType==='cc') {
    el.innerHTML = list.map(({v,n}) => {
      const fc = dcToFlag(v);
      return `<div class="m-sheet-item${sel.has(v)?' sel':''}" data-value="${escapeHtml(v)}">
        <div class="m-sheet-check"></div>
        ${flagHTML(fc,18)}
        <span class="m-sheet-item-label">${escapeHtml(v)}</span>
        <span class="m-sheet-item-freq">${n}</span>
      </div>`;
    }).join('');
  } else {
    el.innerHTML = list.map(({v,n}) => `<div class="m-sheet-item${sel.has(v)?' sel':''}" data-value="${escapeHtml(v)}">
      <div class="m-sheet-check"></div>
      <span style="font-size:18px;margin-right:8px">${getTechEmoji(v)}</span>
      <span class="m-sheet-item-label">${escapeHtml(v)}</span>
      <span class="m-sheet-item-freq">${n}</span>
    </div>`).join('');
  }
}

function toggleSheetItem(val) {
  const sel = sheetType==='cc' ? selCC : selTech;
  if (sel.has(val)) sel.delete(val); else sel.add(val);
  renderSheetItems(document.getElementById('m-sheet-q').value);
  mFilter();
}

function clearMobileFilter() {
  const sel = sheetType==='cc' ? selCC : selTech;
  sel.clear();
  renderSheetItems(document.getElementById('m-sheet-q').value);
  mFilter();
}

function closeSheet()               { document.getElementById('m-sheet-overlay').classList.remove('open'); sheetType=null; }
function closeSheetOutside(e)       { if (e.target===document.getElementById('m-sheet-overlay')) closeSheet(); }

/* ── STATE & EXPORT ── */
function syncStateToURL() {
  const params = new URLSearchParams();
  const activeTab = document.getElementById('d-tab-stats').classList.contains('active') ? 'stats' : 'list';
  if (activeTab === 'stats') params.set('tab', 'stats');
  if (selCC.size) params.set('cc', [...selCC].join(','));
  if (selTech.size) params.set('tech', [...selTech].join(','));
  if (yearFilter) params.set('year', yearFilter);
  const q = document.getElementById('d-search').value || document.getElementById('m-search').value;
  if (q) params.set('q', q);
  if (sortCol !== 'name' || sortDir !== 1) { params.set('sort', sortCol); params.set('dir', sortDir); }
  const newURL = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
  window.history.replaceState({}, '', newURL);
}

function loadStateFromURL() {
  const params = new URLSearchParams(window.location.search);
  const cc = params.get('cc'), tech = params.get('tech'), year = params.get('year'), q = params.get('q'), sort = params.get('sort'), dir = params.get('dir'), tab = params.get('tab');
  if (cc) cc.split(',').forEach(v => selCC.add(v));
  if (tech) tech.split(',').forEach(v => selTech.add(v));
  if (year) { yearFilter = year; document.getElementById('d-f-year').value = year; }
  if (q) { document.getElementById('d-search').value = q; document.getElementById('m-search').value = q; }
  if (sort) { sortCol = sort; if (dir) sortDir = parseInt(dir); }
  if (tab === 'stats') {
    if (window.innerWidth > 767) dSwitchTab('stats');
    else mSwitchTab('stats', document.getElementById('m-nav-stats'));
  }
  updateMSLabel('d', 'cc'); updateMSLabel('d', 'tech');
}

function exportCSV() {
  if (!visible.length) return alert('No data to export');
  const headers = ['Name', 'Website', 'Technology', 'Country', 'Founded', 'Description'];
  const csvContent = [headers.join(','), ...visible.map(r => [
    `"${(r.name||'').replace(/"/g,'""')}"`,
    `"${(r.website||'').replace(/"/g,'""')}"`,
    `"${(r.technology||'').replace(/"/g,'""')}"`,
    `"${(r.country||'').replace(/"/g,'""')}"`,
    `"${(r.founded||'').replace(/"/g,'""')}"`,
    `"${(r.description||'').replace(/"/g,'""')}"`
  ].join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', `chip-scout-export-${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ── CHARTS ── */
const flagCache = {};
const flagPlugin = {
  id: 'flagPlugin',
  afterDraw: (chart) => {
    const { ctx, scales: { x } } = chart;
    if (!x || !x.ticks) return;
    x.ticks.forEach((tick, i) => {
      const countryName = chart.data.labels[i];
      if (!countryName) return;
      const cc = dcToFlag(countryName);
      if (!cc) return;
      const url = `https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/${cc}.svg`;
      let img = flagCache[url];
      if (!img) {
        img = new Image();
        img.src = url;
        img.onload = () => chart.draw();
        flagCache[url] = img;
      }
      if (img.complete) {
        const xPos = x.getPixelForTick(i);
        ctx.drawImage(img, xPos - 10, x.bottom + 2, 20, 14);
      }
    });
  }
};

function updateChart(id, config) {
  if (charts[id]) {
    const c = charts[id];
    c.data = config.data;
    c.options = config.options;
    c.update('none');
  } else {
    const el = document.getElementById(id);
    if (!el) return;
    charts[id] = new Chart(el, config);
  }
}

function renderCharts(ctx) {
  const data = visible;
  const pfx = ctx === 'd' ? '' : '-m';

  const techData = {};
  const ageData = {};
  const ccData = {};

  data.forEach(r => {
    if (r.technology) techData[r.technology] = (techData[r.technology]||0) + 1;
    if (r.founded && /^\d{4}$/.test(r.founded)) ageData[r.founded] = (ageData[r.founded]||0) + 1;
    if (r.displayCC && r.displayCC !== 'N/A') ccData[r.displayCC] = (ccData[r.displayCC]||0) + 1;
  });

  const topTech = Object.entries(techData).sort((a,b)=>b[1]-a[1]).slice(0, 10);
  const sortedYears = Object.keys(ageData).sort();
  const topCC = Object.entries(ccData).sort((a,b)=>b[1]-a[1]).slice(0, 10);

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const labelColor = isDark ? '#b0b0c0' : '#5a5a66';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)';

  updateChart('chart-tech'+pfx, {
    type: 'pie',
    data: {
      labels: topTech.map(e => getTechEmoji(e[0]) + ' ' + e[0]),
      datasets: [{ data: topTech.map(e=>e[1]), backgroundColor: CHART_COLORS, borderWidth: isDark ? 2 : 1, borderColor: isDark ? '#18181c' : '#fff' }]
    },
    options: {
      plugins: {
        legend: {
          position: window.innerWidth > 1200 ? 'right' : 'bottom',
          labels: { boxWidth: 12, font: { size: 11, weight: '500' }, color: labelColor, padding: 15 }
        }
      }
    }
  });

  updateChart('chart-age'+pfx, {
    type: 'bar',
    data: {
      labels: sortedYears,
      datasets: [{
        label: 'Startups',
        data: sortedYears.map(y=>ageData[y]),
        backgroundColor: '#3b82f6',
        borderRadius: 6
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, grid: { color: gridColor }, ticks: { stepSize: 1, color: labelColor } },
        x: { grid: { display: false }, ticks: { color: labelColor } }
      },
      plugins: { legend: { display: false } }
    }
  });

  updateChart('chart-cc'+pfx, {
    type: 'bar',
    data: {
      labels: topCC.map(e => e[0]),
      datasets: topCC.map((e, i) => ({
        label: e[0],
        data: topCC.map((_, idx) => idx === i ? e[1] : null),
        backgroundColor: CHART_COLORS[i % CHART_COLORS.length],
        borderRadius: 6,
        barPercentage: 0.8,
        categoryPercentage: 0.9
      }))
    },
    options: {
      indexAxis: 'x',
      layout: { padding: { bottom: 20 } },
      scales: {
        y: { beginAtZero: true, grid: { color: gridColor }, ticks: { stepSize: 1, color: labelColor }, stacked: true },
        x: { grid: { display: false }, ticks: { color: labelColor, font: { size: 11, weight: '600' } }, stacked: true }
      },
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
          labels: { boxWidth: 12, font: { size: 11 }, color: labelColor, padding: 10 }
        }
      }
    },
    plugins: [flagPlugin]
  });

  /* ── Startup Age Distribution ── */
  const ageRanges = { '0–2 yr': 0, '3–5 yr': 0, '6–10 yr': 0, '10+ yr': 0 };
  const currentYear = new Date().getFullYear();
  data.forEach(r => {
    if (!r.founded || !/^\d{4}$/.test(r.founded)) return;
    const age = currentYear - parseInt(r.founded);
    if (age <= 2) ageRanges['0–2 yr']++;
    else if (age <= 5) ageRanges['3–5 yr']++;
    else if (age <= 10) ageRanges['6–10 yr']++;
    else ageRanges['10+ yr']++;
  });

  updateChart('chart-age-dist'+pfx, {
    type: 'bar',
    data: {
      labels: Object.keys(ageRanges),
      datasets: [{ data: Object.values(ageRanges), backgroundColor: ['#4ade80','#3b82f6','#f59e0b','#ef4444'], borderRadius: 6 }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, grid: { color: gridColor }, ticks: { stepSize: 1, color: labelColor } },
        x: { grid: { display: false }, ticks: { color: labelColor } }
      },
      plugins: { legend: { display: false } }
    }
  });

  /* ── New vs Established ── */
  let newCount = 0, oldCount = 0;
  data.forEach(r => {
    if (!r.founded || !/^\d{4}$/.test(r.founded)) return;
    if (parseInt(r.founded) >= 2020) newCount++; else oldCount++;
  });

  updateChart('chart-new-old'+pfx, {
    type: 'doughnut',
    data: {
      labels: ['Founded 2020+', 'Founded before 2020'],
      datasets: [{ data: [newCount, oldCount], backgroundColor: ['#3b82f6', '#94a3b8'], borderWidth: isDark ? 2 : 1, borderColor: isDark ? '#18181c' : '#fff' }]
    },
    options: {
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11, weight: '500' }, color: labelColor, padding: 15 } }
      }
    }
  });

  /* ── Top Tech per Country ── */
  const topCNames = topCC.slice(0, 8).map(e => e[0]);
  const techPerCC = {};
  topCNames.forEach(cc => { techPerCC[cc] = {}; });
  data.forEach(r => {
    if (!r.displayCC || r.displayCC === 'N/A' || !r.technology) return;
    if (!topCNames.includes(r.displayCC)) return;
    techPerCC[r.displayCC][r.technology] = (techPerCC[r.displayCC][r.technology] || 0) + 1;
  });
  const topTechGlobal = topTech.map(e => e[0]).slice(0, 6);

  updateChart('chart-tech-cc'+pfx, {
    type: 'bar',
    data: {
      labels: topCNames,
      datasets: topTechGlobal.map((tech, i) => ({
        label: tech,
        data: topCNames.map(cc => (techPerCC[cc] && techPerCC[cc][tech]) || 0),
        backgroundColor: CHART_COLORS[i % CHART_COLORS.length],
        borderRadius: 4
      }))
    },
    options: {
      indexAxis: 'x',
      layout: { padding: { bottom: 20 } },
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: { color: labelColor, font: { size: 11, weight: '600' } } },
        y: { beginAtZero: true, stacked: true, grid: { color: gridColor }, ticks: { stepSize: 1, color: labelColor } }
      },
      plugins: {
        legend: { position: 'top', labels: { boxWidth: 10, font: { size: 10 }, color: labelColor, padding: 10 } }
      }
    },
    plugins: [flagPlugin]
  });
}

/* ══════════════════════════════════════
    THEME
   ══════════════════════════════════════ */
let themeMode = localStorage.getItem('theme-mode') || 'auto';

function applyTheme() {
  const h = new Date().getHours();
  const resolved = themeMode==='auto' ? (h>=7&&h<19?'light':'dark') : themeMode;

  const icons = {
    light: '<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
    dark:  '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    auto:  '<path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21h6"/>'
  };
  const labels = {light:'Light', dark:'Dark', auto:'Auto'};

  document.documentElement.setAttribute('data-theme', resolved);

  const mIcon = document.getElementById('theme-icon');
  const mLabel = document.getElementById('theme-label');
  if (mIcon) mIcon.innerHTML = icons[themeMode];
  if (mLabel) mLabel.textContent = labels[themeMode];

  const dIcon = document.getElementById('d-theme-icon');
  const dLabel = document.getElementById('d-theme-label');
  if (dIcon) dIcon.innerHTML = icons[themeMode];
  if (dLabel) dLabel.textContent = labels[themeMode];

  document.getElementById('theme-color-meta').content = resolved==='dark' ? '#18181c' : '#ffffff';
}

function cycleTheme() {
  themeMode = themeMode==='light' ? 'dark' : themeMode==='dark' ? 'auto' : 'light';
  localStorage.setItem('theme-mode', themeMode);
  applyTheme();
}
applyTheme();

/* ══════════════════════════════════════
   LOAD
   ══════════════════════════════════════ */
async function init() {
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    try {
      const { data, commits, ts } = JSON.parse(cached);
      if (Date.now() - ts < CACHE_TTL) {
        all = data; buildFreq(); loadStateFromURL(); dFilter(); mFilter(); updateMeta(commits);
        return;
      }
    } catch(e) { localStorage.removeItem(CACHE_KEY); }
  }

  try {
    const [csv, commits] = await Promise.all([
      fetch(RAW).then(r => r.text()),
      fetch(GH_API, {headers:{'Accept':'application/vnd.github.v3+json'}}).then(r=>r.ok?r.json():null).catch(()=>null)
    ]);
    all = parseCSV(csv);
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: all, commits, ts: Date.now() }));
    buildFreq(); loadStateFromURL(); dFilter(); mFilter(); updateMeta(commits);
  } catch (err) {
    console.error(err);
    if (cached) {
      const { data, commits } = JSON.parse(cached);
      all = data; buildFreq(); loadStateFromURL(); dFilter(); mFilter(); updateMeta(commits);
    } else {
      const msg = `<tr><td colspan="6" class="d-empty">Could not load data (${err.message})</td></tr>`;
      document.getElementById('d-tbody').innerHTML = msg;
      document.getElementById('m-cards').innerHTML = `<div class="m-empty"><div class="m-empty-icon">⚠️</div>Could not load data.<br>${err.message}</div>`;
    }
  }
}

function updateMeta(commits) {
  let dateStr = '';
  if (commits && commits[0]) {
    const iso = commits[0]?.commit?.committer?.date || commits[0]?.commit?.author?.date;
    if (iso) dateStr = 'Data updated: '+new Date(iso).toLocaleDateString('en-CA',{year:'numeric',month:'short',day:'numeric'});
  }
  document.getElementById('d-meta').textContent = dateStr || 'Source: github.com/aolofsson/awesome-semiconductor-startups';
  document.getElementById('m-meta').textContent = dateStr || '';
}

init();

/* ══════════════════════════════════════
   EVENT LISTENERS
   ══════════════════════════════════════ */
document.addEventListener('click', e => {
  const item = e.target.closest('.ms-item');
  if (item && item.dataset.ctx) {
    toggleMSItem(item.dataset.ctx, item.dataset.type, item.dataset.value, item);
    return;
  }
  if (!e.target.closest('.ms-wrap')) {
    document.querySelectorAll('.ms-dd').forEach(d=>d.classList.remove('open'));
    document.querySelectorAll('.ms-trigger').forEach(t=>t.classList.remove('open'));
  }
});

document.getElementById('d-search').addEventListener('input', debounce(dFilter, 200));
document.getElementById('m-search').addEventListener('input', debounce(mFilter, 200));
document.getElementById('m-sheet-items').addEventListener('click', e => {
  const item = e.target.closest('.m-sheet-item');
  if (item) toggleSheetItem(item.dataset.value);
});
