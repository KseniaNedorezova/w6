const DATA = [{"code":"01-01","week":1,"day":"Пн","dayNum":1,"type":"Разминка","trainer":"Анна","duration":9.4,"views":66,"uniqueUsers":66,"avgDepth":0.995,"avgRating":4.7},{"code":"01-02","week":1,"day":"Пн","dayNum":1,"type":"Кардио","trainer":"Анна","duration":10.5,"views":76,"uniqueUsers":76,"avgDepth":0.997,"avgRating":4.65},{"code":"01-03","week":1,"day":"Ср","dayNum":2,"type":"Разминка","trainer":"Анна","duration":8.6,"views":66,"uniqueUsers":66,"avgDepth":0.995,"avgRating":4.67},{"code":"01-04","week":1,"day":"Ср","dayNum":2,"type":"Силовая","trainer":"Богдана","duration":15.3,"views":64,"uniqueUsers":64,"avgDepth":0.995,"avgRating":4.56},{"code":"01-05","week":1,"day":"Пт","dayNum":3,"type":"Разминка","trainer":"Анна","duration":11.0,"views":69,"uniqueUsers":69,"avgDepth":0.996,"avgRating":4.59},{"code":"01-06","week":1,"day":"Пт","dayNum":3,"type":"Интенсив","trainer":"Виталия","duration":18.0,"views":38,"uniqueUsers":38,"avgDepth":0.997,"avgRating":3.9},{"code":"01-07","week":1,"day":"Сб","dayNum":4,"type":"Дэнс","trainer":"Галина","duration":22.4,"views":56,"uniqueUsers":56,"avgDepth":0.995,"avgRating":4.63},{"code":"01-08","week":1,"day":"Вс","dayNum":5,"type":"Йога","trainer":"Диана","duration":28.2,"views":49,"uniqueUsers":49,"avgDepth":0.995,"avgRating":4.96},{"code":"02-01","week":2,"day":"Пн","dayNum":1,"type":"Разминка","trainer":"Богдана","duration":11.1,"views":74,"uniqueUsers":74,"avgDepth":0.998,"avgRating":4.64},{"code":"02-02","week":2,"day":"Пн","dayNum":1,"type":"Кардио","trainer":"Богдана","duration":13.7,"views":69,"uniqueUsers":69,"avgDepth":0.996,"avgRating":4.28},{"code":"02-03","week":2,"day":"Ср","dayNum":2,"type":"Разминка","trainer":"Богдана","duration":9.3,"views":61,"uniqueUsers":61,"avgDepth":0.998,"avgRating":4.5},{"code":"02-04","week":2,"day":"Ср","dayNum":2,"type":"Силовая","trainer":"Виталия","duration":15.0,"views":61,"uniqueUsers":61,"avgDepth":0.997,"avgRating":4.27},{"code":"02-05","week":2,"day":"Пт","dayNum":3,"type":"Разминка","trainer":"Богдана","duration":9.6,"views":48,"uniqueUsers":48,"avgDepth":0.995,"avgRating":4.62},{"code":"02-06","week":2,"day":"Пт","dayNum":3,"type":"Интенсив","trainer":"Анна","duration":18.2,"views":35,"uniqueUsers":35,"avgDepth":0.672,"avgRating":3.0},{"code":"02-07","week":2,"day":"Сб","dayNum":4,"type":"Дэнс","trainer":"Богдана","duration":25.6,"views":53,"uniqueUsers":53,"avgDepth":0.995,"avgRating":4.23},{"code":"02-08","week":2,"day":"Вс","dayNum":5,"type":"Йога","trainer":"Диана","duration":26.2,"views":54,"uniqueUsers":54,"avgDepth":0.998,"avgRating":4.83},{"code":"03-01","week":3,"day":"Пн","dayNum":1,"type":"Разминка","trainer":"Виталия","duration":11.0,"views":56,"uniqueUsers":56,"avgDepth":0.997,"avgRating":4.07},{"code":"03-02","week":3,"day":"Пн","dayNum":1,"type":"Кардио","trainer":"Виталия","duration":12.6,"views":64,"uniqueUsers":64,"avgDepth":0.999,"avgRating":4.13},{"code":"03-03","week":3,"day":"Ср","dayNum":2,"type":"Разминка","trainer":"Виталия","duration":9.5,"views":57,"uniqueUsers":57,"avgDepth":0.996,"avgRating":4.16},{"code":"03-04","week":3,"day":"Ср","dayNum":2,"type":"Силовая","trainer":"Галина","duration":16.2,"views":67,"uniqueUsers":67,"avgDepth":0.995,"avgRating":4.5},{"code":"03-05","week":3,"day":"Пт","dayNum":3,"type":"Разминка","trainer":"Виталия","duration":10.5,"views":48,"uniqueUsers":48,"avgDepth":0.998,"avgRating":4.07},{"code":"03-06","week":3,"day":"Пт","dayNum":3,"type":"Интенсив","trainer":"Галина","duration":15.4,"views":31,"uniqueUsers":31,"avgDepth":0.992,"avgRating":4.53},{"code":"03-07","week":3,"day":"Сб","dayNum":4,"type":"Дэнс","trainer":"Анна","duration":20.3,"views":54,"uniqueUsers":54,"avgDepth":0.997,"avgRating":4.64},{"code":"03-08","week":3,"day":"Вс","dayNum":5,"type":"Йога","trainer":"Галина","duration":28.4,"views":54,"uniqueUsers":54,"avgDepth":0.695,"avgRating":3.0},{"code":"04-01","week":4,"day":"Пн","dayNum":1,"type":"Разминка","trainer":"Галина","duration":10.7,"views":35,"uniqueUsers":35,"avgDepth":0.997,"avgRating":4.59},{"code":"04-02","week":4,"day":"Пн","dayNum":1,"type":"Кардио","trainer":"Галина","duration":14.6,"views":49,"uniqueUsers":49,"avgDepth":0.997,"avgRating":4.7},{"code":"04-03","week":4,"day":"Ср","dayNum":2,"type":"Разминка","trainer":"Галина","duration":9.5,"views":39,"uniqueUsers":39,"avgDepth":0.993,"avgRating":4.43},{"code":"04-04","week":4,"day":"Ср","dayNum":2,"type":"Силовая","trainer":"Анна","duration":16.9,"views":55,"uniqueUsers":55,"avgDepth":0.998,"avgRating":4.78},{"code":"04-05","week":4,"day":"Пт","dayNum":3,"type":"Разминка","trainer":"Галина","duration":9.2,"views":31,"uniqueUsers":31,"avgDepth":0.998,"avgRating":4.38},{"code":"04-06","week":4,"day":"Пт","dayNum":3,"type":"Интенсив","trainer":"Виталия","duration":18.8,"views":35,"uniqueUsers":35,"avgDepth":0.995,"avgRating":4.15},{"code":"04-07","week":4,"day":"Сб","dayNum":4,"type":"Дэнс","trainer":"Галина","duration":21.6,"views":36,"uniqueUsers":36,"avgDepth":0.999,"avgRating":4.67},{"code":"04-08","week":4,"day":"Вс","dayNum":5,"type":"Йога","trainer":"Диана","duration":25.1,"views":50,"uniqueUsers":50,"avgDepth":0.996,"avgRating":4.67},{"code":"05-01","week":5,"day":"Пн","dayNum":1,"type":"Разминка","trainer":"Диана","duration":9.2,"views":54,"uniqueUsers":54,"avgDepth":0.996,"avgRating":4.75},{"code":"05-02","week":5,"day":"Пн","dayNum":1,"type":"Кардио","trainer":"Диана","duration":12.1,"views":68,"uniqueUsers":68,"avgDepth":0.993,"avgRating":4.59},{"code":"05-03","week":5,"day":"Ср","dayNum":2,"type":"Разминка","trainer":"Диана","duration":8.7,"views":55,"uniqueUsers":55,"avgDepth":0.996,"avgRating":4.79},{"code":"05-04","week":5,"day":"Ср","dayNum":2,"type":"Силовая","trainer":"Анна","duration":17.4,"views":58,"uniqueUsers":58,"avgDepth":0.993,"avgRating":4.72},{"code":"05-05","week":5,"day":"Пт","dayNum":3,"type":"Разминка","trainer":"Диана","duration":10.7,"views":45,"uniqueUsers":45,"avgDepth":0.997,"avgRating":4.92},{"code":"05-06","week":5,"day":"Пт","dayNum":3,"type":"Интенсив","trainer":"Анна","duration":18.5,"views":31,"uniqueUsers":31,"avgDepth":0.999,"avgRating":4.73},{"code":"05-07","week":5,"day":"Сб","dayNum":4,"type":"Дэнс","trainer":"Галина","duration":26.2,"views":47,"uniqueUsers":47,"avgDepth":0.995,"avgRating":4.71},{"code":"05-08","week":5,"day":"Вс","dayNum":5,"type":"Йога","trainer":"Диана","duration":25.4,"views":45,"uniqueUsers":45,"avgDepth":0.994,"avgRating":4.84},{"code":"06-01","week":6,"day":"Пн","dayNum":1,"type":"Разминка","trainer":"Анна","duration":8.5,"views":44,"uniqueUsers":44,"avgDepth":0.997,"avgRating":4.54},{"code":"06-02","week":6,"day":"Пн","dayNum":1,"type":"Кардио","trainer":"Анна","duration":11.3,"views":62,"uniqueUsers":62,"avgDepth":0.997,"avgRating":4.68},{"code":"06-03","week":6,"day":"Ср","dayNum":2,"type":"Разминка","trainer":"Анна","duration":8.3,"views":46,"uniqueUsers":46,"avgDepth":0.997,"avgRating":4.59},{"code":"06-04","week":6,"day":"Ср","dayNum":2,"type":"Силовая","trainer":"Богдана","duration":15.5,"views":53,"uniqueUsers":53,"avgDepth":0.683,"avgRating":4.5},{"code":"06-05","week":6,"day":"Пт","dayNum":3,"type":"Разминка","trainer":"Анна","duration":8.5,"views":22,"uniqueUsers":22,"avgDepth":0.997,"avgRating":4.57},{"code":"06-06","week":6,"day":"Пт","dayNum":3,"type":"Интенсив","trainer":"Галина","duration":19.3,"views":18,"uniqueUsers":18,"avgDepth":0.998,"avgRating":5.0},{"code":"06-07","week":6,"day":"Сб","dayNum":4,"type":"Дэнс","trainer":"Богдана","duration":26.6,"views":29,"uniqueUsers":29,"avgDepth":0.998,"avgRating":4.27},{"code":"06-08","week":6,"day":"Вс","dayNum":5,"type":"Йога","trainer":"Диана","duration":26.1,"views":37,"uniqueUsers":37,"avgDepth":0.995,"avgRating":4.86},{"code":"07-01","week":7,"day":"Пн","dayNum":1,"type":"Разминка","trainer":"Богдана","duration":11.9,"views":42,"uniqueUsers":42,"avgDepth":0.995,"avgRating":4.8},{"code":"07-02","week":7,"day":"Пн","dayNum":1,"type":"Кардио","trainer":"Богдана","duration":14.5,"views":52,"uniqueUsers":52,"avgDepth":0.994,"avgRating":4.62},{"code":"07-03","week":7,"day":"Ср","dayNum":2,"type":"Разминка","trainer":"Богдана","duration":11.8,"views":46,"uniqueUsers":46,"avgDepth":0.996,"avgRating":4.44},{"code":"07-04","week":7,"day":"Ср","dayNum":2,"type":"Силовая","trainer":"Виталия","duration":17.5,"views":53,"uniqueUsers":53,"avgDepth":0.995,"avgRating":4.1},{"code":"07-05","week":7,"day":"Пт","dayNum":3,"type":"Разминка","trainer":"Богдана","duration":11.3,"views":37,"uniqueUsers":37,"avgDepth":0.998,"avgRating":4.4},{"code":"07-06","week":7,"day":"Пт","dayNum":3,"type":"Интенсив","trainer":"Виталия","duration":18.7,"views":35,"uniqueUsers":35,"avgDepth":0.998,"avgRating":4.33},{"code":"07-07","week":7,"day":"Сб","dayNum":4,"type":"Дэнс","trainer":"Анна","duration":23.7,"views":43,"uniqueUsers":43,"avgDepth":0.998,"avgRating":4.45},{"code":"07-08","week":7,"day":"Вс","dayNum":5,"type":"Йога","trainer":"Диана","duration":25.2,"views":48,"uniqueUsers":48,"avgDepth":0.996,"avgRating":4.9},{"code":"08-01","week":8,"day":"Пн","dayNum":1,"type":"Разминка","trainer":"Анна","duration":8.6,"views":45,"uniqueUsers":45,"avgDepth":0.995,"avgRating":4.73},{"code":"08-02","week":8,"day":"Пн","dayNum":1,"type":"Кардио","trainer":"Анна","duration":11.9,"views":56,"uniqueUsers":56,"avgDepth":0.997,"avgRating":4.73},{"code":"08-03","week":8,"day":"Ср","dayNum":2,"type":"Разминка","trainer":"Анна","duration":8.6,"views":40,"uniqueUsers":40,"avgDepth":0.998,"avgRating":4.67},{"code":"08-04","week":8,"day":"Ср","dayNum":2,"type":"Силовая","trainer":"Галина","duration":15.7,"views":44,"uniqueUsers":44,"avgDepth":0.996,"avgRating":4.62},{"code":"08-05","week":8,"day":"Пт","dayNum":3,"type":"Разминка","trainer":"Анна","duration":11.4,"views":40,"uniqueUsers":40,"avgDepth":0.998,"avgRating":4.75},{"code":"08-06","week":8,"day":"Пт","dayNum":3,"type":"Интенсив","trainer":"Виталия","duration":18.0,"views":34,"uniqueUsers":34,"avgDepth":0.997,"avgRating":4.04},{"code":"08-07","week":8,"day":"Сб","dayNum":4,"type":"Дэнс","trainer":"Богдана","duration":28.7,"views":41,"uniqueUsers":41,"avgDepth":0.737,"avgRating":3.0},{"code":"08-08","week":8,"day":"Вс","dayNum":5,"type":"Йога","trainer":"Диана","duration":25.4,"views":47,"uniqueUsers":47,"avgDepth":0.997,"avgRating":4.7},{"code":"09-01","week":9,"day":"Пн","dayNum":1,"type":"Разминка","trainer":"Галина","duration":8.5,"views":44,"uniqueUsers":44,"avgDepth":0.997,"avgRating":4.45},{"code":"09-02","week":9,"day":"Пн","dayNum":1,"type":"Кардио","trainer":"Галина","duration":14.8,"views":46,"uniqueUsers":46,"avgDepth":0.998,"avgRating":4.65},{"code":"09-03","week":9,"day":"Ср","dayNum":2,"type":"Разминка","trainer":"Галина","duration":8.2,"views":42,"uniqueUsers":42,"avgDepth":0.995,"avgRating":4.57},{"code":"09-04","week":9,"day":"Ср","dayNum":2,"type":"Силовая","trainer":"Анна","duration":17.8,"views":40,"uniqueUsers":40,"avgDepth":0.997,"avgRating":4.73},{"code":"09-05","week":9,"day":"Пт","dayNum":3,"type":"Разминка","trainer":"Галина","duration":9.4,"views":37,"uniqueUsers":37,"avgDepth":0.996,"avgRating":4.79},{"code":"09-06","week":9,"day":"Пт","dayNum":3,"type":"Интенсив","trainer":"Виталия","duration":15.5,"views":34,"uniqueUsers":34,"avgDepth":0.995,"avgRating":4.32},{"code":"09-07","week":9,"day":"Сб","dayNum":4,"type":"Дэнс","trainer":"Галина","duration":25.9,"views":33,"uniqueUsers":33,"avgDepth":0.996,"avgRating":4.61},{"code":"09-08","week":9,"day":"Вс","dayNum":5,"type":"Йога","trainer":"Диана","duration":28.4,"views":38,"uniqueUsers":38,"avgDepth":0.998,"avgRating":4.8},{"code":"10-01","week":10,"day":"Пн","dayNum":1,"type":"Разминка","trainer":"Диана","duration":11.4,"views":37,"uniqueUsers":37,"avgDepth":0.996,"avgRating":4.84},{"code":"10-02","week":10,"day":"Пн","dayNum":1,"type":"Кардио","trainer":"Диана","duration":14.8,"views":45,"uniqueUsers":45,"avgDepth":0.997,"avgRating":4.77},{"code":"10-03","week":10,"day":"Ср","dayNum":2,"type":"Разминка","trainer":"Диана","duration":11.1,"views":42,"uniqueUsers":42,"avgDepth":0.994,"avgRating":4.88},{"code":"10-04","week":10,"day":"Ср","dayNum":2,"type":"Силовая","trainer":"Виталия","duration":16.6,"views":46,"uniqueUsers":46,"avgDepth":0.997,"avgRating":4.07},{"code":"10-05","week":10,"day":"Пт","dayNum":3,"type":"Разминка","trainer":"Диана","duration":8.2,"views":40,"uniqueUsers":40,"avgDepth":0.998,"avgRating":4.8},{"code":"10-06","week":10,"day":"Пт","dayNum":3,"type":"Интенсив","trainer":"Галина","duration":19.8,"views":41,"uniqueUsers":41,"avgDepth":0.998,"avgRating":4.5},{"code":"10-07","week":10,"day":"Сб","dayNum":4,"type":"Дэнс","trainer":"Богдана","duration":24.8,"views":41,"uniqueUsers":41,"avgDepth":0.997,"avgRating":4.56},{"code":"10-08","week":10,"day":"Вс","dayNum":5,"type":"Йога","trainer":"Диана","duration":28.4,"views":32,"uniqueUsers":32,"avgDepth":0.995,"avgRating":4.84}];

const COLORS = {
  'Разминка': 'var(--razm)',
  'Кардио':   'var(--kardio)',
  'Силовая':  'var(--sil)',
  'Интенсив': 'var(--intens)',
  'Дэнс':     'var(--dance)',
  'Йога':     'var(--yoga)',
};
const COLOR_HEX = {
  'Разминка': '#2a78d6',
  'Кардио':   '#eb6834',
  'Силовая':  '#1baf7a',
  'Интенсив': '#eda100',
  'Дэнс':     '#e87ba4',
  'Йога':     '#008300',
};
const TYPE_ORDER = ['Разминка', 'Кардио', 'Силовая', 'Интенсив', 'Дэнс', 'Йога'];

function ensureTooltip() {
  let t = document.querySelector('.d3-tooltip');
  if (!t) { t = document.createElement('div'); t.className = 'd3-tooltip'; t.style.opacity = 0; document.body.appendChild(t); }
  return t;
}
function showTip(evt, html) {
  const t = ensureTooltip();
  t.innerHTML = html;
  t.style.opacity = 1;
  const r = t.getBoundingClientRect();
  let lx = evt.clientX + 14, ly = evt.clientY - 10;
  if (lx + r.width > window.innerWidth - 8) lx = evt.clientX - r.width - 14;
  if (ly + r.height > window.innerHeight - 8) ly = window.innerHeight - r.height - 8;
  if (ly < 8) ly = 8;
  t.style.left = lx + 'px';
  t.style.top = ly + 'px';
}
function hideTip() { const t = document.querySelector('.d3-tooltip'); if (t) t.style.opacity = 0; }

function starsStr(rating) {
  if (rating == null) return '—';
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

/* ============ LEGEND ============ */
(function buildLegend() {
  const el = document.getElementById('legend');
  TYPE_ORDER.forEach(t => {
    el.innerHTML += `<div class="legend-item"><div class="legend-dot" style="background:${COLOR_HEX[t]}"></div>${t}</div>`;
  });
  el.innerHTML += '<div class="legend-sep"></div>';
  el.innerHTML += `<div class="legend-item legend-size">
    <span class="legend-circle" style="width:10px;height:10px"></span>
    <span class="legend-circle" style="width:18px;height:18px"></span>
    Длительность
  </div>`;
  el.innerHTML += '<div class="legend-sep"></div>';
  el.innerHTML += `<div class="legend-item legend-depth">
    <span class="legend-depth-swatch" style="opacity:0.4"></span>
    <span class="legend-depth-swatch" style="opacity:1"></span>
    Глубина просмотра
  </div>`;
})();

/* ============ PULSE CHART ============ */
(function drawPulse() {
  const svg = d3.select('#pulse-chart');
  const margin = { top: 32, right: 20, bottom: 56, left: 48 };
  const W = 1100, H = 460;
  svg.attr('viewBox', `0 0 ${W} ${H}`).style('width', '100%').style('height', 'auto');

  const data = DATA.slice();
  data.forEach((d, i) => { d.idx = i; });

  const x = d3.scaleLinear().domain([-0.5, data.length - 0.5]).range([margin.left, W - margin.right]);
  const y = d3.scaleLinear().domain([0, 82]).range([H - margin.bottom, margin.top]);
  const rScale = d3.scaleSqrt().domain([8, 29]).range([5, 14]);

  const weekStarts = [];
  let prevW = 0;
  data.forEach((d, i) => { if (d.week !== prevW) { weekStarts.push({ idx: i, week: d.week }); prevW = d.week; } });

  weekStarts.forEach((ws, wi) => {
    const nextIdx = wi < weekStarts.length - 1 ? weekStarts[wi + 1].idx : data.length;
    if (ws.week % 2 === 0) {
      svg.append('rect')
        .attr('x', x(ws.idx - 0.5))
        .attr('y', margin.top - 8)
        .attr('width', x(nextIdx - 0.5) - x(ws.idx - 0.5))
        .attr('height', H - margin.top - margin.bottom + 16)
        .attr('fill', 'var(--band-even)')
        .attr('rx', 4);
    }
    const mid = (ws.idx + (nextIdx - 1)) / 2;
    svg.append('text')
      .attr('x', x(mid))
      .attr('y', H - margin.bottom + 40)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-weight', '600')
      .attr('fill', 'var(--text-secondary)')
      .text('Неделя ' + ws.week);

    if (wi > 0) {
      svg.append('line')
        .attr('x1', x(ws.idx - 0.5)).attr('x2', x(ws.idx - 0.5))
        .attr('y1', margin.top - 8).attr('y2', H - margin.bottom + 8)
        .attr('stroke', 'var(--gridline)')
        .attr('stroke-dasharray', '3,3');
    }
  });

  const yTicks = [0, 20, 40, 60, 80];
  yTicks.forEach(v => {
    svg.append('line')
      .attr('x1', margin.left).attr('x2', W - margin.right)
      .attr('y1', y(v)).attr('y2', y(v))
      .attr('stroke', v === 0 ? 'var(--baseline)' : 'var(--gridline)')
      .attr('stroke-width', v === 0 ? 1 : 0.5);
    svg.append('text')
      .attr('x', margin.left - 8).attr('y', y(v) + 4)
      .attr('text-anchor', 'end')
      .attr('font-size', '11px')
      .attr('fill', 'var(--text-muted)')
      .text(v);
  });

  svg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -(margin.top + (H - margin.bottom - margin.top) / 2))
    .attr('y', 14)
    .attr('text-anchor', 'middle')
    .attr('font-size', '11px')
    .attr('fill', 'var(--text-muted)')
    .text('Просмотры');

  const trendLine = d3.line()
    .x(d => x(d.idx))
    .y(d => y(d.views))
    .curve(d3.curveBasis);

  svg.append('path')
    .datum(data)
    .attr('d', trendLine)
    .attr('fill', 'none')
    .attr('stroke', 'var(--text-muted)')
    .attr('stroke-width', 1.5)
    .attr('stroke-dasharray', '6,4')
    .attr('opacity', 0.5);

  const g = svg.selectAll('.stem').data(data).enter().append('g').attr('class', 'stem');

  g.append('line')
    .attr('x1', d => x(d.idx)).attr('x2', d => x(d.idx))
    .attr('y1', y(0)).attr('y2', d => y(d.views))
    .attr('stroke', d => COLORS[d.type])
    .attr('stroke-width', 2)
    .attr('opacity', d => 0.3 + d.avgDepth * 0.5);

  g.append('circle')
    .attr('cx', d => x(d.idx))
    .attr('cy', d => y(d.views))
    .attr('r', d => rScale(d.duration))
    .attr('fill', d => COLORS[d.type])
    .attr('opacity', d => 0.35 + d.avgDepth * 0.6)
    .attr('stroke', d => d.avgDepth < 0.8 ? 'var(--text-primary)' : 'var(--surface-card)')
    .attr('stroke-width', d => d.avgDepth < 0.8 ? 2 : 1.5)
    .style('cursor', 'pointer')
    .on('mouseenter', function (evt, d) {
      d3.select(this).attr('stroke', 'var(--text-primary)').attr('stroke-width', 2.5);
      showTip(evt,
        `<div class="tt-title">${d.type} · ${d.code}</div>` +
        `<div class="tt-row"><span class="tt-label">Тренер</span><span class="tt-val">${d.trainer}</span></div>` +
        `<div class="tt-row"><span class="tt-label">Просмотры</span><span class="tt-val">${d.views}</span></div>` +
        `<div class="tt-row"><span class="tt-label">Длительность</span><span class="tt-val">${d.duration} мин</span></div>` +
        `<div class="tt-row"><span class="tt-label">Глубина</span><span class="tt-val">${Math.round(d.avgDepth * 100)}%</span></div>` +
        `<div class="tt-row"><span class="tt-label">Оценка</span><span class="tt-val"><span class="tt-stars">${starsStr(d.avgRating)}</span> ${d.avgRating != null ? d.avgRating.toFixed(1) : '—'}</span></div>` +
        `<div class="tt-row"><span class="tt-label">Неделя ${d.week}, ${d.day}</span><span class="tt-val">${d.uniqueUsers} чел.</span></div>`
      );
    })
    .on('mousemove', function (evt) { showTip(evt, ensureTooltip().innerHTML); })
    .on('mouseleave', function (evt, d) {
      d3.select(this)
        .attr('stroke', d.avgDepth < 0.8 ? 'var(--text-primary)' : 'var(--surface-card)')
        .attr('stroke-width', d.avgDepth < 0.8 ? 2 : 1.5);
      hideTip();
    });

  const dayLabels = [];
  data.forEach(d => {
    if (!dayLabels.length || dayLabels[dayLabels.length - 1].day !== d.day || dayLabels[dayLabels.length - 1].week !== d.week) {
      dayLabels.push({ day: d.day, week: d.week, startIdx: d.idx, endIdx: d.idx });
    } else {
      dayLabels[dayLabels.length - 1].endIdx = d.idx;
    }
  });
  dayLabels.forEach(dl => {
    const mid = (dl.startIdx + dl.endIdx) / 2;
    svg.append('text')
      .attr('x', x(mid))
      .attr('y', H - margin.bottom + 16)
      .attr('text-anchor', 'middle')
      .attr('font-size', '9px')
      .attr('fill', 'var(--text-muted)')
      .text(dl.day);
  });
})();

