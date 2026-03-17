import React, { useEffect, useRef, useState } from 'react';
import './BentoSection.css';

/* ─── Animated counter ─── */
const Num = ({ end, suffix = '' }) => {
  const [v, setV] = useState(0);
  const ref = useRef();
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started.current) return;
      started.current = true;
      let cur = 0;
      const step = Math.max(1, Math.ceil(end / 60));
      const t = setInterval(() => {
        cur = Math.min(cur + step, end);
        setV(cur);
        if (cur >= end) clearInterval(t);
      }, 22);
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{v}{suffix}</span>;
};

/* ─── Integration Hub ─── */
const integrations = [
  { name: 'APIs', color: '#E8B600', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg> },
  {
    name: 'Odoo',
    color: '#a24689',
    svg: (
      <img src="/odoo_logo_d.png" alt="Odoo" style={{ width: 15, height: 18 }} />
    )
  },
  { name: 'Agentic AI', color: '#ff5f57', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" /><circle cx="12" cy="12" r="3" /><path d="M12 7v2m0 6v2m-5-5H5m14 0h-2" /></svg> },
  { name: 'Automation', color: '#febc2e', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg> },
  { name: 'AWS', color: '#FF9900', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 15.3c-2.3 1.7-5.5 2.6-8.5 2.6-3.8 0-7.2-1.5-9.8-4-.2-.2-.1-.5.1-.4 2.8 1.6 6.3 2.6 9.8 2.6 2.4 0 5-1.2 7-2.6.3-.3.6.1.4.2zm1-1.1c-.3-.4-1.8-.2-2.5-.1-.2 0-.2-.1 0-.3 1.2-1 3.2-.8 3.5-.4.2.3-.1 2.4-1.2 3.4-.2.1-.3 0-.3-.1.2-.7.8-2.1.5-2.5zM7.2 12.1v-6.9h1.7v5.5c.3 0 .7.1 1.2.1.8 0 1.2-.4 1.2-1.1V5.2h1.8v5.6c0 1.6-1 2.3-2.6 2.3-1 0-2.3-.1-3.3-1z" /></svg> },
  { name: 'MCP Servers', color: '#28c840', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6" y2="6" /><line x1="6" y1="18" x2="6" y2="18" /></svg> },
  { name: 'AI Tools', color: '#3178C6', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" /></svg> },
  { name: 'PostgreSQL', color: '#336791', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.253.395 3.007.754 2.06 1.58 1.11 2.409.556 3.633.594 5.276c.03 1.295.346 2.689 1.152 3.77a3.071 3.071 0 001.955 1.355c.068.015.137.023.206.024a2.1 2.1 0 001.07-.258c.114-.076.225-.164.326-.262.2.134.412.24.635.322.138 1.922.65 3.809 1.52 5.36a8.56 8.56 0 001.014 1.532c.164.184.345.37.553.522.115.084.244.16.387.218.143.059.301.092.465.093.131 0 .261-.022.384-.06.372-.123.68-.367.966-.62.098.284.234.55.407.794.214.304.494.57.837.736.344.167.72.249 1.107.249.382 0 .778-.087 1.102-.27.337-.19.577-.45.787-.728a4.72 4.72 0 00.293-.453c.184.106.382.188.59.24.117.03.235.043.354.043.51.013.996-.152 1.367-.478.371-.326.572-.792.587-1.315.013-.464-.102-.959-.354-1.474a6.016 6.016 0 00-.305-.546c.28-.302.487-.67.601-1.077.14-.485.175-.994.128-1.5-.046-.505-.183-.996-.403-1.448-.22-.452-.52-.851-.877-1.168a3.516 3.516 0 00-.868-.537c.33-.372.597-.791.792-1.244.303-.703.416-1.476.322-2.226-.094-.75-.37-1.461-.8-2.026z" /></svg> },
];

const IntegrationHub = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const CX = 200, CY = 200, R = 140;
  const nodes = integrations.map((item, i) => {
    const angle = (i / integrations.length) * 2 * Math.PI - Math.PI / 2;
    return { ...item, x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle) };
  });

  return (
    <div className="hub-wrap" ref={ref}>
      {/* Container enforces a 1:1 Aspect Ratio to keep SVG lines and Nodes perfectly aligned on all screens */}
      <div className="hub-container-square">
        {/* SVG for rings + lines only */}
        <svg className="hub-bg-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx={CX} cy={CY} r={R} stroke="rgba(232,182,0,0.10)" strokeWidth="1" strokeDasharray="5 7" />
          <circle cx={CX} cy={CY} r={R * 0.55} stroke="rgba(232,182,0,0.06)" strokeWidth="1" strokeDasharray="3 9" />

          {/* Base dashed lines */}
          {nodes.map((n, i) => (
            <line key={`base-${i}`} x1={CX} y1={CY} x2={n.x} y2={n.y}
              stroke="rgba(232,182,0,0.2)" strokeWidth="1" strokeDasharray="4 5"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease' }}
            />
          ))}

          {/* Continuous Glowing lines (No delays) */}
          {nodes.map((n, i) => (
            <line key={`glow-${i}`} x1={CX} y1={CY} x2={n.x} y2={n.y}
              className="hub-line-glow"
              style={{ stroke: n.color }}
            />
          ))}
        </svg>

        {/* Node icons positioned via CSS */}
        <div className="hub-nodes-layer">
          {nodes.map((n, i) => {
            const px = (n.x / 400) * 100;
            const py = (n.y / 400) * 100;
            return (
              <div key={n.name} className="hub-node"
                style={{
                  left: `${px}%`,
                  top: `${py}%`,
                  color: n.color,
                  opacity: visible ? 1 : 0,
                  transform: `translate(-50%,-50%) scale(${visible ? 1 : 0.8})`,
                  transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                }}>
                <div className="hub-node-bg" style={{ borderColor: n.color + '55' }}>
                  {n.svg}
                </div>
                <span className="hub-node-lbl">{n.name}</span>
              </div>
            );
          })}

          {/* Center */}
          <div className="hub-center"
            style={{
              left: `${(CX / 400) * 100}%`,
              top: `${(CY / 400) * 100}%`,
              opacity: visible ? 1 : 0,
              transform: `translate(-50%,-50%) scale(${visible ? 1 : 0.8})`,
              transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            }}>
            <div className="hub-center-glow" />
            <svg viewBox="0 0 32 32" fill="none" className="hub-center-grid">
              <rect x="3" y="3" width="11" height="11" rx="2.5" fill="#E8B600" opacity="0.95" />
              <rect x="18" y="3" width="11" height="11" rx="2.5" fill="#E8B600" opacity="0.6" />
              <rect x="3" y="18" width="11" height="11" rx="2.5" fill="#E8B600" opacity="0.6" />
              <rect x="18" y="18" width="11" height="11" rx="2.5" fill="#E8B600" opacity="0.25" />
            </svg>
            <span>Atya<br />Inno</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Donut Chart ─── */
const DonutChart = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef();
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started.current) return;
      started.current = true;
      setAnimated(true);
      obs.disconnect();
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const segments = [
    { pct: 25, color: '#E8B600', label: 'AI Solutions' },
    { pct: 20, color: '#FFD000', label: 'Software Development' },
    { pct: 15, color: '#C49A00', label: 'Web Development' },
    { pct: 14, color: '#383838', label: 'App Development' },
    { pct: 13, color: '#272727', label: 'Odoo ERP' },
    { pct: 13, color: '#1A1A1A', label: 'Staff Augmentation' },
  ];

  const r = 80, cx = 100, cy = 100, sw = 24;
  const circ = 2 * Math.PI * r;
  let cumulative = 0;

  return (
    <div className="bento-donut" ref={ref}>
      <div className="donut-header-row">
        <span className="bento-tag">Projects</span>
        <div className="donut-big-stat">
          <span>▲ 12% monthly</span>
        </div>
      </div>
      <p className="donut-sub-text">50+ projects delivered</p>

      <div className="donut-main-body">
        <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: 'visible', flexShrink: 0 }}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1C1C1C" strokeWidth={sw + 4} />
          {segments.map((seg, i) => {
            const arc = animated ? (circ * seg.pct) / 100 : 0;
            const rotate = (cumulative / 100) * 360 - 90;
            cumulative += seg.pct;
            return (
              <circle key={i} cx={cx} cy={cy} r={r}
                fill="none"
                stroke={seg.color}
                strokeWidth={sw}
                strokeDasharray={`${arc} ${circ}`}
                transform={`rotate(${rotate} ${cx} ${cy})`}
                style={{ transition: `stroke-dasharray 1s cubic-bezier(0.4,0,0.2,1)` }}
              />
            );
          })}
          <text x={cx} y={cy - 9} textAnchor="middle" fill="#E8B600" fontSize="22" fontWeight="800" fontFamily="inherit">50+</text>
          <text x={cx} y={cy + 10} textAnchor="middle" fill="#555" fontSize="10" fontFamily="inherit">Projects</text>
        </svg>

        <div className="donut-legend-list">
          {segments.map(s => (
            <div key={s.label} className="dl-row">
              <span className="dl-dot" style={{ background: s.color }} />
              <span className="dl-name">{s.label}</span>
              <span className="dl-pct">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Stats Cell ─── */
// const StatsCell = () => {
//   const [visible, setVisible] = useState(false);
//   const ref = useRef();
//   const started = useRef(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => {
//       if (!e.isIntersecting || started.current) return;
//       started.current = true;
//       setVisible(true);
//       obs.disconnect();
//     }, { threshold: 0.3 });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   const bars = [90, 75, 85, 60, 95, 70, 88];

//   return (
//     <div className="bento-stats" ref={ref}>
//       <span className="bento-tag">Track Record</span>
//       <div className="bstats-grid">
//         {[
//           { n: 50, s: '+', label: 'Projects' },
//           { n: 30, s: '+', label: 'Clients' },
//           { n: 98, s: '%', label: 'Satisfaction' },
//           { n: 8,  s: '+', label: 'Yrs Exp.' },
//         ].map(({ n, s, label }) => (
//           <div key={label} className="bstat-box">
//             <strong><Num end={n} suffix={s} /></strong>
//             <span>{label}</span>
//           </div>
//         ))}
//       </div>
//       <div className="bstats-bar-row">
//         {bars.map((h, i) => (
//           <div key={i} className="bsbar-track">
//             <div className="bsbar-fill"
//               style={{
//                 height: visible ? `${h}%` : '2px',
//                 transition: `height 0.8s cubic-bezier(0.4,0,0.2,1)`,
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

/* ─── Metrics Chart ─── */
const MetricsChart = ({ onNavigate }) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef();
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started.current) return;
      started.current = true;
      setAnimated(true);
      obs.disconnect();
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const bars = [45, 60, 55, 70, 65, 85, 72, 90, 80, 95, 88, 100];
  const line = [30, 35, 40, 42, 50, 55, 52, 60, 65, 70, 72, 80];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const W = 320, H = 110;
  const pts = line.map((v, i) => `${(i / (line.length - 1)) * W},${H - (v / 100) * H}`).join(' ');

  return (
    <div className="bento-metrics" ref={ref}>
      <div className="metrics-col-left">
        <h3 className="metrics-title">Instant ROI on the <span>metrics that matter</span></h3>
        <p className="metrics-subtitle">Turn your technology investment into measurable growth.</p>
        <div className="metrics-legend-row">
          <span><i style={{ background: 'rgba(232,182,0,0.45)' }} /> Projects Delivered</span>
          <span><i style={{ background: '#E8B600' }} /> Satisfaction Score</span>
        </div>
        <div className="metrics-chart-box">
          <svg width="100%" viewBox={`0 0 ${W} ${H + 4}`} preserveAspectRatio="none">
            {bars.map((b, i) => (
              <rect key={i}
                x={(i / bars.length) * W + 2}
                width={W / bars.length - 5}
                y={animated ? H - (b / 100) * H : H}
                height={animated ? (b / 100) * H : 0}
                fill={i === 7 ? 'rgba(232,182,0,0.65)' : 'rgba(255,255,255,0.07)'}
                rx="2"
                style={{ transition: 'y 0.6s ease, height 0.6s ease' }}
              />
            ))}
            <polyline points={pts} fill="none" stroke="#E8B600" strokeWidth="2.5"
              strokeDasharray="1000" strokeDashoffset={animated ? '0' : '1000'}
              style={{ transition: 'stroke-dashoffset 1.2s ease' }}
            />
            {line.map((v, i) => (
              <circle key={i}
                cx={(i / (line.length - 1)) * W}
                cy={H - (v / 100) * H}
                r={i === 7 ? 4.5 : 3}
                fill={i === 7 ? '#E8B600' : '#C49A00'}
                opacity={animated ? 1 : 0}
                style={{ transition: 'opacity 0.4s ease' }}
              />
            ))}
          </svg>
          <div className="chart-months">
            {months.map(m => <span key={m}>{m}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Odoo Cell ─── */

const OdooCell = ({ onNavigate }) => (
  <div className="bento-odoo">
    <div className="odoo-pill-row">
      <div className="odoo-cert-pill">
        <span className="odoo-star">★</span>
        <div>
          <strong>Authorised Implementation</strong>
          <span>Partner</span>
        </div>
      </div>
    </div>
    <h3 className="odoo-cell-title">Odoo ERP <span>Solutions</span></h3>
    <p className="odoo-cell-desc">Full-stack implementation, custom modules &amp; ongoing support.</p>
    <div className="odoo-highlights-grid" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px 0' }}>
      {[
        { t: 'Custom Development', s: 'Tailored specifically to your business logic.' },
        { t: 'Seamless Migration', s: 'Zero-downtime transition from legacy systems.' },
        { t: 'Real-time Insights', s: 'Unified dashboards for instant analytics.' },
      ].map((m, i) => (
        <div key={m.t} style={{ background: '#181818', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }} className="fade-up">
          <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '2px' }}>{m.t}</strong>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{m.s}</span>
        </div>
      ))}
    </div>
    <button className="odoo-cta-btn" onClick={() => onNavigate('odoo')}>
      Explore Solutions
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </button>
  </div>
);

/* ─── Root ─── */
const BentoSection = ({ onNavigate }) => (
  <section className="bento-section">
    <div className="container">
      <div className="section-header centered">
        <div className="section-label">Platform Overview</div>
        <h2 className="section-title">
          Everything You Need to<br /><span>Scale Your Business</span>
        </h2>
        <p className="section-desc">
          Seamless integrations, data-driven insights, and enterprise-grade solutions — all in one place.
        </p>
      </div>

      <div className="bento-grid">
        <div className="bento-cell bc-hub">
          <div className="bc-top-label">
            <span className="bento-tag">Seamless Integrations</span>
            <p>Zero-lift integrations with your existing tools and data sources.</p>
          </div>
          <IntegrationHub />
        </div>

        <div className="bento-cell bc-donut"><DonutChart /></div>
        <div className="bento-cell bc-metrics"><MetricsChart onNavigate={onNavigate} /></div>
        <div className="bento-cell bc-odoo"><OdooCell onNavigate={onNavigate} /></div>
      </div>
    </div>
  </section>
);

export default BentoSection;