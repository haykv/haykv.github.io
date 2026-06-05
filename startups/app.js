/* ══════════════════════════════════════
   SHARED DATA & CONSTANTS
   ══════════════════════════════════════ */
const RAW     = 'https://raw.githubusercontent.com/aolofsson/awesome-semiconductor-startups/main/startups.csv';
const GH_API  = 'https://api.github.com/repos/aolofsson/awesome-semiconductor-startups/commits?path=startups.csv&per_page=1';
const CACHE_KEY = 'chip-scout-data-v2';
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24h

const FLAG_CDN = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/';

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
    return `<span style="font-size:${size}px;color:var(--text3);display:inline-flex;align-items:center;justify-content:center;width:1.33em;height:1em;background:var(--surface2);border-radius:2px;flex-shrink:0">
      <svg width="0.8em" height="0.8em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12 15.3 15.3 0 0 1 12 2z"/></svg>
    </span>`;
  }
  return `<span class="fi fi-${cc} fis" style="font-size:${size}px;border-radius:2px;flex-shrink:0"></span>`;
}

function dcToFlag(displayCC) {
  const e = Object.entries(CC_MAP).find(([,v]) => v.toUpperCase() === displayCC);
  return e ? e[1] : displayCC.toLowerCase();
}

let all=[], dVisible=[], mVisible=[];
let dSelCC=new Set(), dSelTech=new Set(), dSortCol='name', dSortDir=1, dYearFilter='';
let mSelCC=new Set(), mSelTech=new Set(), mSortCol='name', mSortDir=1, mYearFilter='';
let ccFreq={}, techFreq={}, ccItems=[], techItems=[];
let mSheetType=null, charts={};

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

/* ── STATE & EXPORT ── */
function syncStateToURL() {
  const params = new URLSearchParams();
  const activeTab = document.getElementById('d-tab-stats').classList.contains('active') ? 'stats' : 'list';
  if (activeTab === 'stats') params.set('tab', 'stats');
  if (dSelCC.size) params.set('cc', [...dSelCC].join(','));
  if (dSelTech.size) params.set('tech', [...dSelTech].join(','));
  if (dYearFilter) params.set('year', dYearFilter);
  const q = document.getElementById('d-search').value || document.getElementById('m-search').value;
  if (q) params.set('q', q);
  if (dSortCol !== 'name' || dSortDir !== 1) { params.set('sort', dSortCol); params.set('dir', dSortDir); }
  const newURL = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
  window.history.replaceState({}, '', newURL);
}

function loadStateFromURL() {
  const params = new URLSearchParams(window.location.search);
  const cc = params.get('cc'), tech = params.get('tech'), year = params.get('year'), q = params.get('q'), sort = params.get('sort'), dir = params.get('dir'), tab = params.get('tab');
  if (cc) cc.split(',').forEach(v => { dSelCC.add(v); mSelCC.add(v); });
  if (tech) tech.split(',').forEach(v => { dSelTech.add(v); mSelTech.add(v); });
  if (year) { dYearFilter = year; mYearFilter = year; document.getElementById('d-f-year').value = year; }
  if (q) { document.getElementById('d-search').value = q; document.getElementById('m-search').value = q; }
  if (sort) { dSortCol = sort; mSortCol = sort; if (dir) { dSortDir = parseInt(dir); mSortDir = parseInt(dir); } }
  if (tab === 'stats') {
    if (window.innerWidth > 767) dSwitchTab('stats');
    else mSwitchTab('stats', document.getElementById('m-nav-stats'));
  }
  updateMSLabel('d', 'cc'); updateMSLabel('d', 'tech');
}

function exportCSV() {
  const visible = window.innerWidth > 767 ? dVisible : mVisible;
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

function renderCharts(ctx) {
  const data = ctx === 'd' ? dVisible : mVisible;
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

  const colors = [
    '#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', 
    '#ff9f40', '#4ade80', '#f472b6', '#2dd4bf', '#fb923c'
  ];

  ['tech', 'age', 'cc'].forEach(type => {
    if (charts[type+pfx]) charts[type+pfx].destroy();
  });

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const labelColor = isDark ? '#b0b0c0' : '#5a5a66';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)';

  charts['tech'+pfx] = new Chart(document.getElementById('chart-tech'+pfx), {
    type: 'pie',
    data: {
      labels: topTech.map(e => getTechEmoji(e[0]) + ' ' + e[0]),
      datasets: [{ data: topTech.map(e=>e[1]), backgroundColor: colors, borderWidth: isDark ? 2 : 1, borderColor: isDark ? '#18181c' : '#fff' }]
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

  charts['age'+pfx] = new Chart(document.getElementById('chart-age'+pfx), {
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

  const flagCache = {};
  const flagPlugin = {
    id: 'flagPlugin',
    afterDraw: (chart) => {
      const { ctx, scales: { x } } = chart;
      if (!x || !x.ticks) return;
      x.ticks.forEach((tick, i) => {
        const countryName = topCC[i] ? topCC[i][0] : null;
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

  charts['cc'+pfx] = new Chart(document.getElementById('chart-cc'+pfx), {
    type: 'bar',
    data: {
      labels: topCC.map(e => e[0]),
      datasets: topCC.map((e, i) => ({
        label: e[0],
        data: topCC.map((_, idx) => idx === i ? e[1] : null),
        backgroundColor: colors[i % colors.length],
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
}

function dSwitchTab(tab) {
  document.querySelectorAll('.d-tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('d-tab-'+tab).classList.add('active');
  document.getElementById('d-list-view').style.display = tab==='list' ? '' : 'none';
  document.getElementById('d-stats-view').style.display = tab==='stats' ? '' : 'none';
  if (tab==='stats') renderCharts('d');
}

/* ══════════════════════════════════════
   DESKTOP LOGIC
   ══════════════════════════════════════ */
function dFilter() {
  const q  = (document.getElementById('d-search').value||'').toLowerCase();
  const fy = document.getElementById('d-f-year').value;
  dVisible = all.filter(r => {
    if (q) {
      const name = r.name.toLowerCase(), tech = (r.technology||'').toLowerCase(), desc = (r.description||'').toLowerCase(), cc = (r.displayCC||'').toLowerCase();
      if (name.includes(q)) r.score = 10;
      else if ((tech+' '+desc+' '+cc).includes(q)) r.score = 1;
      else return false;
    } else r.score = 0;
    if (dSelCC.size   && !dSelCC.has(r.displayCC))  return false;
    if (dSelTech.size && !dSelTech.has(r.technology)) return false;
    const y = parseInt(r.founded);
    if (fy==='2020' && (isNaN(y)||y<2020)) return false;
    if (fy==='2015' && (isNaN(y)||y<2015||y>=2020)) return false;
    if (fy==='old'  && (isNaN(y)||y>=2015)) return false;
    return true;
  });
  dVisible.sort((a,b) => {
    if (q && b.score !== a.score) return b.score - a.score;
    let va = a[dSortCol]||'', vb = b[dSortCol]||'';
    if (dSortCol==='founded') { va=parseInt(va)||0; vb=parseInt(vb)||0; return (va-vb)*dSortDir; }
    if (dSortCol==='cc') { va=a.displayCC||''; vb=b.displayCC||''; }
    return va.toString().toLowerCase() < vb.toString().toLowerCase() ? -dSortDir : dSortDir;
  });
  dRenderTable(); dUpdateStats(); syncStateToURL();
}

function applyFilters(ctx) { if(ctx==='d') dFilter(); else mFilter(); }

function dRenderTable() {
  const tb = document.getElementById('d-tbody');
  if (!dVisible.length) { tb.innerHTML=`<tr><td colspan="6" class="d-empty">No matches.</td></tr>`; return; }
  tb.innerHTML = dVisible.map(r => `<tr>
    <td title="${r.name}" style="font-weight:600">${r.name}</td>
    <td>${r.domain ? `<a class="td-link" href="${r.website}" target="_blank">${r.domain}</a>` : '–'}</td>
    <td class="td-muted">${r.technology||'–'}</td>
    <td><div class="cc-cell">${flagHTML(r.cc,15)}<span>${r.displayCC}</span></div></td>
    <td class="td-muted">${r.founded||'–'}</td>
    <td title="${r.description}" class="td-muted">${r.description||'–'}</td>
  </tr>`).join('');
}

function dUpdateStats() {
  const nw = all.filter(r=>{const y=parseInt(r.founded);return !isNaN(y)&&y>=2020;}).length;
  document.getElementById('d-s-total').textContent   = all.length;
  document.getElementById('d-s-showing').textContent = dVisible.length;
  document.getElementById('d-s-cc').textContent      = new Set(dVisible.map(r=>r.displayCC).filter(c=>c&&c!=='N/A')).size;
  document.getElementById('d-s-new').textContent     = nw;
}

function sortBy(ctx, col, th) {
  if (dSortCol===col) dSortDir=-dSortDir; else { dSortCol=col; dSortDir=1; }
  document.querySelectorAll('#desktop-app th:not(.nosort)').forEach(t=>t.classList.remove('asc','desc'));
  th.classList.add(dSortDir===1?'asc':'desc');
  dFilter();
}

/* DESKTOP MULTI-SELECT */
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
  const sel   = type==='cc' ? dSelCC  : dSelTech;
  const el    = document.getElementById(pfx+'ml-'+type+'-items');
  const fq    = q.toLowerCase();
  const list  = fq ? items.filter(i=>i.v.toLowerCase().includes(fq)) : items;
  if (type==='cc') {
    el.innerHTML = list.map(({v,n}) => {
      const fc = dcToFlag(v);
      return `<div class="ms-item${sel.has(v)?' sel':''}" onclick="toggleMSItem('${ctx}','cc','${v}',this)">
        <div class="ms-cb"></div>
        <div class="ms-flag">${flagHTML(fc,15)}</div>
        <span>${v}</span>
        <span class="ms-freq">${n}</span>
      </div>`;
    }).join('');
  } else {
    el.innerHTML = list.map(({v,n}) => `<div class="ms-item${sel.has(v)?' sel':''}" onclick="toggleMSItem('${ctx}','tech','${v.replace(/'/g,"\\'")}',this)">
      <div class="ms-cb"></div>
      <span>${v}</span>
      <span class="ms-freq">${n}</span>
    </div>`).join('');
  }
}

function toggleMSItem(ctx, type, val, el) {
  const sel = type==='cc' ? dSelCC : dSelTech;
  if (sel.has(val)) sel.delete(val); else sel.add(val);
  el.classList.toggle('sel');
  updateMSLabel(ctx, type);
  dFilter();
}

function updateMSLabel(ctx, type) {
  const pfx  = ctx+'-';
  const sel  = type==='cc' ? dSelCC : dSelTech;
  const base = type==='cc' ? 'Country' : 'Technology';
  const lbl  = document.getElementById(pfx+'ml-'+type);
  if (sel.size===0) {
    lbl.textContent = base;
  } else if (sel.size===1) {
    const v = [...sel][0];
    if (type==='cc') {
      const fc = dcToFlag(v);
      lbl.innerHTML = `<span style="display:inline-flex;align-items:center;gap:5px">${flagHTML(fc,14)}<span>${v}</span></span>`;
    } else {
      lbl.textContent = v.length>18 ? v.slice(0,16)+'…' : v;
    }
  } else {
    lbl.innerHTML = base+' <span class="ms-badge">'+sel.size+'</span>';
  }
}

function clearMS(ctx, type) {
  const sel = type==='cc' ? dSelCC : dSelTech;
  sel.clear();
  renderMSList(ctx, type, document.getElementById(ctx+'-ms-'+type+'-q').value);
  updateMSLabel(ctx, type);
  dFilter();
}

document.addEventListener('click', e => {
  if (!e.target.closest('.ms-wrap')) {
    document.querySelectorAll('.ms-dd').forEach(d=>d.classList.remove('open'));
    document.querySelectorAll('.ms-trigger').forEach(t=>t.classList.remove('open'));
  }
});
document.getElementById('d-search').addEventListener('input', () => dFilter());

/* ══════════════════════════════════════
   MOBILE LOGIC
   ══════════════════════════════════════ */
function mFilter() {
  const q  = (document.getElementById('m-search').value||'').toLowerCase();
  mVisible = all.filter(r => {
    if (q) {
      const name = r.name.toLowerCase(), tech = (r.technology||'').toLowerCase(), desc = (r.description||'').toLowerCase(), cc = (r.displayCC||'').toLowerCase();
      if (name.includes(q)) r.score = 10;
      else if ((tech+' '+desc+' '+cc).includes(q)) r.score = 1;
      else return false;
    } else r.score = 0;
    if (mSelCC.size   && !mSelCC.has(r.displayCC))    return false;
    if (mSelTech.size && !mSelTech.has(r.technology)) return false;
    const y = parseInt(r.founded);
    if (mYearFilter==='2020' && (isNaN(y)||y<2020)) return false;
    if (mYearFilter==='2015' && (isNaN(y)||y<2015||y>=2020)) return false;
    if (mYearFilter==='old'  && (isNaN(y)||y>=2015)) return false;
    return true;
  });
  mVisible.sort((a,b) => {
    if (q && b.score !== a.score) return b.score - a.score;
    let va = a[mSortCol]||'', vb = b[mSortCol]||'';
    if (mSortCol==='founded') { va=parseInt(va)||0; vb=parseInt(vb)||0; return (va-vb)*mSortDir; }
    if (mSortCol==='cc') { va=a.displayCC||''; vb=b.displayCC||''; }
    return va.toString().toLowerCase() < vb.toString().toLowerCase() ? -mSortDir : mSortDir;
  });
  mRenderCards(); mUpdateStats(); mUpdateChips(); syncStateToURL();
}

function mRenderCards() {
  const el = document.getElementById('m-cards');
  if (!mVisible.length) {
    el.innerHTML = `<div class="m-empty"><div class="m-empty-icon">🔍</div>No companies match your filters.</div>`;
    return;
  }
  el.innerHTML = mVisible.map(r => {
    const flagBadge = r.cc ? `<span class="m-badge m-badge-cc">${flagHTML(r.cc,12)}<span>${r.displayCC}</span></span>` : '';
    const yrBadge   = r.founded ? `<span class="m-badge m-badge-yr">${r.founded}</span>` : '';
    const techBadge = r.technology ? `<span class="m-badge m-badge-tech">${r.technology}</span>` : '';
    return `<div class="m-card">
      <div class="m-card-head">
        <div class="m-card-name">${r.name}</div>
        <div class="m-card-row">${flagBadge}${yrBadge}${techBadge}</div>
      </div>
      ${r.description ? `<div class="m-card-desc">${r.description}</div>` : ''}
      ${r.domain ? `<div class="m-card-div"></div><a class="m-card-url" href="${r.website}" target="_blank">🔗 ${r.domain}</a>` : ''}
    </div>`;
  }).join('');
}

function mUpdateStats() {
  const nw = all.filter(r=>{const y=parseInt(r.founded);return !isNaN(y)&&y>=2020;}).length;
  document.getElementById('m-s-total').textContent   = all.length;
  document.getElementById('m-s-showing').textContent = mVisible.length;
  document.getElementById('m-s-cc').textContent      = new Set(mVisible.map(r=>r.displayCC).filter(c=>c&&c!=='N/A')).size;
  document.getElementById('m-s-new').textContent     = nw;
}

function mUpdateChips() {
  const cc   = document.getElementById('m-chip-cc');
  const tech = document.getElementById('m-chip-tech');
  if (mSelCC.size===0)   cc.innerHTML   = `<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12 15.3 15.3 0 0 1 12 2z"/></svg> Country`;
  else cc.innerHTML = `Country <span class="chip-badge">${mSelCC.size}</span>`;
  cc.className = 'm-chip'+(mSelCC.size?' active':'');
  if (mSelTech.size===0) tech.innerHTML = `<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4M12 17v4"/></svg> Technology`;
  else tech.innerHTML = `Technology <span class="chip-badge">${mSelTech.size}</span>`;
  tech.className = 'm-chip'+(mSelTech.size?' active':'');
  ['2020','2015','old'].forEach(k => {
    document.getElementById('m-chip-y'+k).className = 'm-chip'+(mYearFilter===k?' active':'');
  });
}

function toggleYearChip(val) { mYearFilter = mYearFilter===val?'':val; mFilter(); }

function mSetSort(col, btn) {
  if (mSortCol===col) mSortDir=-mSortDir; else { mSortCol=col; mSortDir=1; }
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

document.getElementById('m-search').addEventListener('input', () => mFilter());

/* MOBILE SHEET */
function openSheet(type) {
  mSheetType = type;
  document.getElementById('m-sheet-title').textContent = type==='cc' ? 'Filter by Country' : 'Filter by Technology';
  document.getElementById('m-sheet-sec').textContent   = type==='cc' ? 'Countries' : 'Technologies';
  document.getElementById('m-sheet-q').value = '';
  renderSheetItems('');
  document.getElementById('m-sheet-overlay').classList.add('open');
}

function renderSheetItems(q) {
  const items = mSheetType==='cc' ? ccItems : techItems;
  const sel   = mSheetType==='cc' ? mSelCC  : mSelTech;
  const fq = q.toLowerCase();
  const list = fq ? items.filter(i=>i.v.toLowerCase().includes(fq)) : items;
  const el = document.getElementById('m-sheet-items');
  if (mSheetType==='cc') {
    el.innerHTML = list.map(({v,n}) => {
      const fc = dcToFlag(v);
      return `<div class="m-sheet-item${sel.has(v)?' sel':''}" onclick="toggleSheetItem('${v}')">
        <div class="m-sheet-check"></div>
        ${flagHTML(fc,18)}
        <span class="m-sheet-item-label">${v}</span>
        <span class="m-sheet-item-freq">${n}</span>
      </div>`;
    }).join('');
  } else {
    el.innerHTML = list.map(({v,n}) => `<div class="m-sheet-item${sel.has(v)?' sel':''}" onclick="toggleSheetItem('${v.replace(/'/g,"\\'")}')">
      <div class="m-sheet-check"></div>
      <span class="m-sheet-item-label">${v}</span>
      <span class="m-sheet-item-freq">${n}</span>
    </div>`).join('');
  }
}

function toggleSheetItem(val) {
  const sel = mSheetType==='cc' ? mSelCC : mSelTech;
  if (sel.has(val)) sel.delete(val); else sel.add(val);
  renderSheetItems(document.getElementById('m-sheet-q').value);
  mFilter();
}

function clearMobileFilter() {
  const sel = mSheetType==='cc' ? mSelCC : mSelTech;
  sel.clear();
  renderSheetItems(document.getElementById('m-sheet-q').value);
  mFilter();
}

function closeSheet()               { document.getElementById('m-sheet-overlay').classList.remove('open'); mSheetType=null; }
function closeSheetOutside(e)       { if (e.target===document.getElementById('m-sheet-overlay')) closeSheet(); }

function toggleNav() {
  const nav    = document.getElementById('m-bottomnav');
  const toggle = document.getElementById('m-nav-toggle');
  const hidden = nav.classList.toggle('hidden');
  toggle.classList.toggle('collapsed', hidden);
}

/* ══════════════════════════════════════
   THEME  (shared)
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

  // Update Mobile
  const mIcon = document.getElementById('theme-icon');
  const mLabel = document.getElementById('theme-label');
  if (mIcon) mIcon.innerHTML = icons[themeMode];
  if (mLabel) mLabel.textContent = labels[themeMode];

  // Update Desktop
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
