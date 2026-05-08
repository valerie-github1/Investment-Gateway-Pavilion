import { useState, useEffect, useRef, useCallback } from 'react';

const CONTACT_EMAIL = 'topeomojayogbe@ukald.com';

const ROW_A = [
  {
    gem: 'Emerald', tier: 'emerald', cls: 'booth-3x3',
    name: 'Emerald Business Suite', size: '3m × 3m', price: '₦2,000,000',
    limited: true,
    items: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Breakfast & lunch for 2 (all 3 days)',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas',
      'Brand visibility across pavilion',
      'Media & international delegate exposure',
    ],
  },
  {
    gem: 'Ruby', tier: 'ruby', cls: 'booth-3x3',
    name: 'Ruby Showcase Space', size: '3m × 3m', price: '₦1,700,000',
    items: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Breakfast & lunch for 2 (all 3 days)',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas',
      'Brand visibility across pavilion',
      'Media & international delegate exposure',
    ],
  },
  {
    gem: 'Opal', tier: 'opal', cls: 'booth-3x3',
    name: 'Opal Display Suite', size: '3m × 3m', price: '₦1,950,000',
    items: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas',
      'Brand visibility across pavilion',
      'Media & international delegate exposure',
      'Meals not included in this package',
    ],
  },
];

const ROW_B = [
  {
    gem: 'Sapphire', tier: 'sapphire', cls: 'booth-2x2',
    name: 'Sapphire Business Suite', size: '2m × 2m', price: '₦1,500,000',
    items: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Breakfast & lunch for 2 (all 3 days)',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas',
      'Brand visibility across pavilion',
      'Media & international delegate exposure',
    ],
  },
  {
    gem: 'Amber', tier: 'amber', cls: 'booth-2x2',
    name: 'Amber Showcase Space', size: '2m × 2m', price: '₦1,200,000',
    items: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Breakfast & lunch for 2 (all 3 days)',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas',
      'Brand visibility across pavilion',
      'Media & international delegate exposure',
    ],
  },
  {
    gem: 'Topaz', tier: 'topaz', cls: 'booth-2x2',
    name: 'Topaz Display Suite', size: '2m × 2m', price: '₦1,450,000',
    items: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas',
      'Brand visibility across pavilion',
      'Media & international delegate exposure',
      'Meals not included in this package',
    ],
  },
];

function isTouchSize() {
  return window.matchMedia('(max-width: 900px)').matches;
}

function positionTooltip(tooltipEl, e) {
  if (isTouchSize()) {
    tooltipEl.style.left = '';
    tooltipEl.style.top = '';
    return;
  }
  const tw = 340, th = 320;
  let x = e.clientX + 16;
  let y = e.clientY - 60;
  if (x + tw > window.innerWidth - 20) x = e.clientX - tw - 16;
  if (y < 10) y = 10;
  if (y + th > window.innerHeight - 10) y = window.innerHeight - th - 10;
  tooltipEl.style.left = x + 'px';
  tooltipEl.style.top = y + 'px';
}

function centerTooltip(tooltipEl, boothEl) {
  if (isTouchSize()) {
    tooltipEl.style.left = '';
    tooltipEl.style.top = '';
    return;
  }
  const r = boothEl.getBoundingClientRect();
  const fakeEvent = { clientX: r.left + r.width / 2, clientY: r.top };
  positionTooltip(tooltipEl, fakeEvent);
}

export default function FloorPlan() {
  const [pinned, setPinned] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef(null);
  const boothRefs = useRef({});
  const isTouch = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(hover: none) and (pointer: coarse)').matches
  );

  const active = pinned || hovered;

  useEffect(() => {
    if (!tooltipRef.current || !active) return;
    if (pinned) {
      const boothEl = boothRefs.current[pinned.gem];
      if (boothEl) centerTooltip(tooltipRef.current, boothEl);
    } else if (hovered) {
      positionTooltip(tooltipRef.current, mousePos);
    }
  }, [active, pinned, hovered, mousePos]);

  useEffect(() => {
    const onResize = () => {
      if (pinned && tooltipRef.current) {
        const boothEl = boothRefs.current[pinned.gem];
        if (boothEl) centerTooltip(tooltipRef.current, boothEl);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [pinned]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && pinned) setPinned(null); };
    const onDoc = (e) => {
      if (!pinned) return;
      if (tooltipRef.current?.contains(e.target)) return;
      if (e.target.closest?.('.booth[data-gem]')) return;
      setPinned(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onDoc);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onDoc);
    };
  }, [pinned]);

  const handleMouseEnter = useCallback((booth, e) => {
    if (isTouch.current || pinned) return;
    setMousePos({ x: e.clientX, y: e.clientY });
    setHovered(booth);
  }, [pinned]);

  const handleMouseMove = useCallback((e) => {
    if (isTouch.current || pinned) return;
    setMousePos({ x: e.clientX, y: e.clientY });
  }, [pinned]);

  const handleMouseLeave = useCallback(() => {
    if (!pinned) setHovered(null);
  }, [pinned]);

  const handleClick = useCallback((booth, e) => {
    e.stopPropagation();
    if (pinned?.gem === booth.gem) {
      setPinned(null);
      setHovered(null);
    } else {
      setPinned(booth);
      setHovered(null);
    }
  }, [pinned]);

  const unpin = () => {
    setPinned(null);
    setHovered(null);
  };

  const enquireHref = active
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(active.gem + ' Booth Enquiry — WIS Abuja 2026')}`
    : '#';

  function renderBooth(booth) {
    const isPinned = pinned?.gem === booth.gem;
    return (
      <div
        key={booth.gem}
        className={`booth b-${booth.tier} ${booth.cls}${isPinned ? ' selected' : ''}`}
        data-gem={booth.gem}
        ref={(el) => { if (el) boothRefs.current[booth.gem] = el; }}
        onClick={(e) => handleClick(booth, e)}
        onMouseEnter={(e) => handleMouseEnter(booth, e)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="booth-inner">
          <div className="booth-tag">
            <span className="booth-gem-dot" />
            {booth.gem}
          </div>
          <div className="booth-name">{booth.name}</div>
          <div className="booth-size">{booth.size}</div>
          <div className="booth-price">{booth.price}</div>
          {booth.limited && <span className="booth-limited">LIMITED</span>}
        </div>
      </div>
    );
  }

  const tooltipHidden = !active;
  const tooltipPinned = !!pinned;

  return (
    <section id="floor-plan">
      <div className="section-wrap">
        <p className="section-eyebrow">Pavilion Layout</p>
        <h2 className="section-title">Exhibition <em>Floor Plan</em></h2>

        <div className="floor-plan-box">
          <div className="fp-header">
            <h3>INVESTMENT GATEWAY PAVILION</h3>
            <p>
              <span className="desktop-hint">Hover over any booth for details · </span>
              <span className="touch-hint">Tap any booth for details · </span>
              Click to select and enquire
            </p>
          </div>

          {/* ROW A */}
          <div className="floor-grid">
            {ROW_A.map(renderBooth)}
          </div>

          {/* AISLE */}
          <div className="floor-grid">
            <div className="aisle">
              <div className="aisle-line" />
              <span className="aisle-label">CENTRAL NETWORKING AISLE</span>
              <div className="aisle-line" />
            </div>
          </div>

          {/* ROW B */}
          <div className="floor-grid">
            {ROW_B.map(renderBooth)}
            <div className="booth-available"><span>AVAILABLE</span></div>
            <div className="booth-available"><span>AVAILABLE</span></div>
            <div className="booth-available"><span>AVAILABLE</span></div>
          </div>

          {/* Entrance */}
          <div className="entrance-row">
            <div className="e-line" />
            <span className="entrance-label">MAIN PAVILION ENTRANCE</span>
            <div className="e-line" />
          </div>

          {/* Legend */}
          <div className="fp-legend">
            <div className="fp-legend-item"><span className="fp-legend-icon">▪</span> Branded Tent Included</div>
            <div className="fp-legend-item"><span className="fp-legend-icon">▪</span> Table + 2 Chairs</div>
            <div className="fp-legend-item"><span className="fp-legend-icon">▪</span> Breakfast &amp; Lunch (3 days)</div>
            <div className="fp-legend-item" style={{ color: '#DC2626', fontWeight: 600 }}>LIMITED = High Demand</div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className={`booth-tooltip${tooltipHidden ? ' hidden' : ''}${tooltipPinned ? ' pinned' : ''}`}
      >
        <button className="tooltip-close" onClick={unpin} aria-label="Close">×</button>
        {active && (
          <>
            <div className="tooltip-gem">
              {active.gem} Package{active.limited ? ' — LIMITED' : ''}
            </div>
            <div className="tooltip-title">{active.name}</div>
            <div className="tooltip-size">{active.size} · 3 Full Days</div>
            <div className="tooltip-price">{active.price}</div>
            <div className="tooltip-divider" />
            <ul className="tooltip-list">
              {active.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="tooltip-hint">Click again or press Esc to release</p>
            <a href={enquireHref} className="tooltip-cta">
              Enquire About This Booth →
            </a>
          </>
        )}
      </div>
    </section>
  );
}
