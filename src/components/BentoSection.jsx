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
  { name: 'APIs',       color: '#E8B600', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { name: 'Salesforce', color: '#00A1E0', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.065 5.615a4.252 4.252 0 014.25-4.252 4.252 4.252 0 013.918 2.598 2.83 2.83 0 011.125-.232 2.84 2.84 0 012.84 2.84c0 .115-.007.23-.02.342A3.115 3.115 0 0124 9.999a3.115 3.115 0 01-3.115 3.115H3.115A3.115 3.115 0 010 9.999a3.115 3.115 0 012.688-3.09 2.52 2.52 0 01-.045-.477 2.52 2.52 0 012.52-2.52 2.52 2.52 0 011.912.88A4.24 4.24 0 0110.065 5.615z"/></svg> },
  { name: 'Slack',      color: '#E01E5A', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.527 2.527 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 012.521 2.521 2.527 2.527 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.527 2.527 0 01-2.522 2.521h-2.522V8.834zM17.688 8.834a2.527 2.527 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 01-2.52-2.523 2.527 2.527 0 012.52-2.52h6.313A2.528 2.528 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z"/></svg> },
  { name: 'Stripe',     color: '#6772E5', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/></svg> },
  { name: 'AWS',        color: '#FF9900', svg: <svg viewBox="0 0 32 20" fill="currentColor"><path d="M9.3 8.4c0 .4 0 .7.1 1 .1.2.2.5.4.8 0 .1.1.2.1.2 0 .1-.1.2-.2.3l-.7.5a.5.5 0 01-.3.1c-.1 0-.2-.1-.3-.2-.2-.2-.3-.4-.4-.5l-.3-.6c-.9 1-1.9 1.5-3.2 1.5-.9 0-1.7-.3-2.2-.8C1.7 10.2 1.4 9.5 1.4 8.6c0-.9.3-1.7 1-2.3.7-.6 1.6-.9 2.7-.9.4 0 .8 0 1.2.1l1.3.2v-.8c0-.8-.2-1.4-.5-1.8-.4-.3-1-.5-1.8-.5-.4 0-.8 0-1.2.1s-.8.2-1.2.4a2 2 0 01-.4.1c-.1 0-.2-.1-.2-.3v-.5c0-.2 0-.3.1-.4.1-.1.2-.2.3-.2.4-.2.9-.4 1.4-.5C4.7 1 5.3.9 6 .9c1.3 0 2.3.3 2.9.9.6.6.9 1.5.9 2.7v3.9zm-4.5 1.7c.4 0 .7-.1 1.1-.2.4-.1.8-.4 1.1-.7.2-.2.3-.5.4-.7.1-.3.1-.6.1-1v-.5c-.3 0-.7-.1-1-.1s-.7-.1-1-.1c-.8 0-1.3.1-1.7.4-.4.3-.5.7-.5 1.3 0 .5.1.9.4 1.2.3.2.6.4 1.1.4zm8.8 1.2c-.2 0-.3 0-.4-.1-.1-.1-.2-.2-.2-.4l-2.3-8.3a2 2 0 01-.1-.5c0-.2.1-.3.3-.3h1.1c.2 0 .4 0 .4.1.1.1.2.2.2.4l1.6 7.2 1.5-7.2c.1-.2.1-.4.2-.4.1-.1.2-.1.4-.1h.9c.2 0 .3 0 .4.1.1.1.2.2.2.4l1.5 7.3 1.7-7.3c.1-.2.2-.3.2-.4.1-.1.2-.1.4-.1h1c.2 0 .2.1.2.3 0 .1 0 .1 0 .2l-2.3 8.3c-.1.2-.1.3-.2.4-.1.1-.2.1-.4.1h-.9c-.2 0-.4 0-.4-.1-.1-.1-.2-.2-.2-.4l-1.5-7-1.5 7c-.1.2-.1.3-.2.4-.1.1-.2.1-.4.1h-.9zm14 .2c-.6 0-1.1-.1-1.7-.2-.6-.1-1-.3-1.3-.4-.2-.1-.3-.2-.3-.3 0-.1-.1-.2-.1-.3v-.6c0-.2.1-.3.3-.3l.2.1c.1 0 .2.1.3.1.4.2.8.3 1.2.4.5.1.9.1 1.3.1.7 0 1.2-.1 1.6-.4a1.2 1.2 0 00.3-1.7c-.2-.2-.6-.4-1.1-.6l-1.6-.5c-.8-.3-1.4-.6-1.7-1.1-.4-.5-.6-1-.6-1.6 0-.5.1-.9.3-1.3.2-.4.5-.7.8-.9.3-.3.7-.5 1.2-.6.4-.1.9-.2 1.4-.2.2 0 .5 0 .7.1.3 0 .5.1.7.1.2.1.4.1.6.2.2.1.4.1.5.2.1.1.2.2.3.3 0 .1.1.2.1.4v.5c0 .2-.1.3-.3.3l-.4-.1c-.6-.3-1.4-.4-2.1-.4-.6 0-1.1.1-1.5.3-.3.2-.5.5-.5 1 0 .3.1.6.3.8.2.2.6.4 1.2.6l1.6.5c.8.3 1.4.6 1.7 1 .4.5.5 1 .5 1.5 0 .5-.1.9-.3 1.3-.2.4-.5.7-.8 1-.3.3-.8.5-1.2.6-.6.1-1 .2-1.6.2z" fill="#FF9900"/></svg> },
  { name: 'GitHub',     color: '#e6e6e6', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
  { name: 'Docker',     color: '#2496ED', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg> },
  { name: 'PostgreSQL', color: '#336791', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.253.395 3.007.754 2.06 1.58 1.11 2.409.556 3.633.594 5.276c.03 1.295.346 2.689 1.152 3.77a3.071 3.071 0 001.955 1.355c.068.015.137.023.206.024a2.1 2.1 0 001.07-.258c.114-.076.225-.164.326-.262.2.134.412.24.635.322.138 1.922.65 3.809 1.52 5.36a8.56 8.56 0 001.014 1.532c.164.184.345.37.553.522.115.084.244.16.387.218.143.059.301.092.465.093.131 0 .261-.022.384-.06.372-.123.68-.367.966-.62.098.284.234.55.407.794.214.304.494.57.837.736.344.167.72.249 1.107.249.382 0 .778-.087 1.102-.27.337-.19.577-.45.787-.728a4.72 4.72 0 00.293-.453c.184.106.382.188.59.24.117.03.235.043.354.043.51.013.996-.152 1.367-.478.371-.326.572-.792.587-1.315.013-.464-.102-.959-.354-1.474a6.016 6.016 0 00-.305-.546c.28-.302.487-.67.601-1.077.14-.485.175-.994.128-1.5-.046-.505-.183-.996-.403-1.448-.22-.452-.52-.851-.877-1.168a3.516 3.516 0 00-.868-.537c.33-.372.597-.791.792-1.244.303-.703.416-1.476.322-2.226-.094-.75-.37-1.461-.8-2.026z"/></svg> },
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
      {/* SVG for rings + lines only */}
      <svg className="hub-bg-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={CX} cy={CY} r={R}       stroke="rgba(232,182,0,0.10)" strokeWidth="1" strokeDasharray="5 7"/>
        <circle cx={CX} cy={CY} r={R * 0.55} stroke="rgba(232,182,0,0.06)" strokeWidth="1" strokeDasharray="3 9"/>
        {nodes.map((n, i) => (
          <line key={i} x1={CX} y1={CY} x2={n.x} y2={n.y}
            stroke="rgba(232,182,0,0.2)" strokeWidth="1" strokeDasharray="4 5"
            style={{ opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${i * 0.07}s` }}
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
                transform: `translate(-50%,-50%) scale(${visible ? 1 : 0.4})`,
                transition: `opacity 0.55s ease ${0.15 + i * 0.07}s, transform 0.55s cubic-bezier(0.34,1.56,0.64,1) ${0.15 + i * 0.07}s`,
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
            top:  `${(CY / 400) * 100}%`,
            opacity: visible ? 1 : 0,
            transform: `translate(-50%,-50%) scale(${visible ? 1 : 0.5})`,
            transition: 'opacity 0.5s ease 0s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0s',
          }}>
          <div className="hub-center-glow" />
          <svg viewBox="0 0 32 32" fill="none" className="hub-center-grid">
            <rect x="3"  y="3"  width="11" height="11" rx="2.5" fill="#E8B600" opacity="0.95"/>
            <rect x="18" y="3"  width="11" height="11" rx="2.5" fill="#E8B600" opacity="0.6"/>
            <rect x="3"  y="18" width="11" height="11" rx="2.5" fill="#E8B600" opacity="0.6"/>
            <rect x="18" y="18" width="11" height="11" rx="2.5" fill="#E8B600" opacity="0.25"/>
          </svg>
          <span>Atya<br/>Inno</span>
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
    { pct: 22, color: '#E8B600', label: 'Software Dev' },
    { pct: 18, color: '#FFD000', label: 'Web Dev' },
    { pct: 15, color: '#C49A00', label: 'Odoo ERP' },
    { pct: 25, color: '#383838', label: 'Mobile' },
    { pct: 20, color: '#272727', label: 'Cloud' },
  ];

  const r = 80, cx = 100, cy = 100, sw = 24;
  const circ = 2 * Math.PI * r;
  let cumulative = 0;

  return (
    <div className="bento-donut" ref={ref}>
      <div className="donut-header-row">
        <span className="bento-tag">Project Mix</span>
        <div className="donut-big-stat">
          <strong>22%</strong>
          <span>▲ 12% monthly</span>
        </div>
      </div>
      <p className="donut-sub-text">16,843 projects delivered</p>

      <div className="donut-main-body">
        <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1C1C1C" strokeWidth={sw + 4}/>
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
                style={{ transition: `stroke-dasharray 1.3s cubic-bezier(0.4,0,0.2,1) ${i * 0.2}s` }}
              />
            );
          })}
          <text x={cx} y={cy - 9}  textAnchor="middle" fill="#E8B600" fontSize="22" fontWeight="800" fontFamily="inherit">50+</text>
          <text x={cx} y={cy + 10} textAnchor="middle" fill="#555" fontSize="10" fontFamily="inherit">Projects</text>
        </svg>

        <div className="donut-legend-list">
          {segments.map(s => (
            <div key={s.label} className="dl-row">
              <span className="dl-dot" style={{ background: s.color }}/>
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
const StatsCell = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started.current) return;
      started.current = true;
      setVisible(true);
      obs.disconnect();
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const bars = [90, 75, 85, 60, 95, 70, 88];

  return (
    <div className="bento-stats" ref={ref}>
      <span className="bento-tag">Track Record</span>
      <div className="bstats-grid">
        {[
          { n: 50, s: '+', label: 'Projects' },
          { n: 30, s: '+', label: 'Clients' },
          { n: 98, s: '%', label: 'Satisfaction' },
          { n: 8,  s: '+', label: 'Yrs Exp.' },
        ].map(({ n, s, label }) => (
          <div key={label} className="bstat-box">
            <strong><Num end={n} suffix={s} /></strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="bstats-bar-row">
        {bars.map((h, i) => (
          <div key={i} className="bsbar-track">
            <div className="bsbar-fill"
              style={{
                height: visible ? `${h}%` : '2px',
                transition: `height 1s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

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

  const bars   = [45, 60, 55, 70, 65, 85, 72, 90, 80, 95, 88, 100];
  const line   = [30, 35, 40, 42, 50, 55, 52, 60, 65, 70, 72, 80];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const W = 320, H = 110;
  const pts = line.map((v, i) => `${(i / (line.length - 1)) * W},${H - (v / 100) * H}`).join(' ');

  return (
    <div className="bento-metrics" ref={ref}>
      <div className="metrics-col-left">
        <h3 className="metrics-title">Instant ROI on the <span>metrics that matter</span></h3>
        <p className="metrics-subtitle">Turn your technology investment into measurable growth.</p>
        <div className="metrics-legend-row">
          <span><i style={{ background: 'rgba(232,182,0,0.45)' }}/> Projects Delivered</span>
          <span><i style={{ background: '#E8B600' }}/> Satisfaction Score</span>
        </div>
        <span className="metrics-month-chip">December 2024</span>
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
                style={{ transition: `y 0.9s ease ${i * 0.06}s, height 0.9s ease ${i * 0.06}s` }}
              />
            ))}
            <polyline points={pts} fill="none" stroke="#E8B600" strokeWidth="2.5"
              strokeDasharray="1000" strokeDashoffset={animated ? '0' : '1000'}
              style={{ transition: 'stroke-dashoffset 1.8s ease 0.35s' }}
            />
            {line.map((v, i) => (
              <circle key={i}
                cx={(i / (line.length - 1)) * W}
                cy={H - (v / 100) * H}
                r={i === 7 ? 4.5 : 3}
                fill={i === 7 ? '#E8B600' : '#C49A00'}
                opacity={animated ? 1 : 0}
                style={{ transition: `opacity 0.4s ease ${0.4 + i * 0.1}s` }}
              />
            ))}
          </svg>
          <div className="chart-months">
            {months.map(m => <span key={m}>{m}</span>)}
          </div>
        </div>
      </div>

      <div className="metrics-col-right">
        <div className="metrics-testimonial">
          <div className="mt-stars">★★★★★</div>
          <p>"They took a big idea and made it a reality. Team literally set us up for the next stage of growth. Definite rehire."</p>
          <div className="mt-author">
            <div className="mt-avatar">M</div>
            <div>
              <strong>Michael Marcus</strong>
              <span>Founder, AdenaData · USA</span>
            </div>
          </div>
        </div>
        <button className="metrics-start-btn" onClick={() => onNavigate('contact')}>
          Start Your Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
};

/* ─── Odoo Cell ─── */
const odooMods = [
  { e: '📊', n: 'Accounting' }, { e: '📦', n: 'Inventory' },
  { e: '🛒', n: 'Sales' },      { e: '👥', n: 'CRM' },
  { e: '🏭', n: 'MRP' },        { e: '⏰', n: 'HR' },
  { e: '🌐', n: 'Website' },    { e: '📈', n: 'Analytics' },
  { e: '🚚', n: 'Purchase' },
];

const OdooCell = ({ onNavigate }) => (
  <div className="bento-odoo">
    <div className="odoo-pill-row">
      <div className="odoo-cert-pill">
        <span className="odoo-star">★</span>
        <div>
          <strong>Certified Partner</strong>
          <span>Since 2020</span>
        </div>
      </div>
    </div>
    <h3 className="odoo-cell-title">Odoo ERP <span>Solutions</span></h3>
    <p className="odoo-cell-desc">Full-stack implementation, custom modules &amp; ongoing support.</p>
    <div className="odoo-mods-grid">
      {odooMods.map((m, i) => (
        <div key={m.n} className="odoo-mod-tile" style={{ animationDelay: `${i * 0.07}s` }}>
          <span>{m.e}</span>
          <small>{m.n}</small>
        </div>
      ))}
    </div>
    <button className="odoo-cta-btn" onClick={() => onNavigate('odoo')}>
      Explore Solutions
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
        <div className="bento-cell bc-stats"><StatsCell /></div>
        <div className="bento-cell bc-metrics"><MetricsChart onNavigate={onNavigate} /></div>
        <div className="bento-cell bc-odoo"><OdooCell onNavigate={onNavigate} /></div>
      </div>
    </div>
  </section>
);

export default BentoSection;