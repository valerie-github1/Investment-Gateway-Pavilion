// Floor plan layout — derived from the standalone pavilion HTML.
// Each booth has an id, tier, and gem name. Two rows separated by central aisle.
const FLOOR_TOP = [
  { id: 'E1', tier: 'emerald'  }, { id: 'E2', tier: 'emerald'  },
  { id: 'S1', tier: 'sapphire' }, { id: 'S2', tier: 'sapphire' },
  { id: 'R1', tier: 'ruby'     }, { id: 'R2', tier: 'ruby'     },
  { id: 'A1', tier: 'amber'    }, { id: 'O1', tier: 'opal'     },
];
const FLOOR_BOTTOM = [
  { id: 'T1', tier: 'topaz' },   { id: 'T2', tier: 'topaz' },
  { id: 'O2', tier: 'opal'  },   { id: 'A2', tier: 'amber' },
  { id: 'R3', tier: 'ruby'  },   { id: 'S3', tier: 'sapphire' },
  { id: 'E3', tier: 'emerald' }, { id: 'E4', tier: 'emerald' },
];

const TIER_META = {
  emerald:  { name: 'Emerald Business Suite',  price: '3,500,000', size: '3m × 3m · 3 days' },
  sapphire: { name: 'Sapphire Suite',          price: '2,500,000', size: '3m × 3m · 3 days' },
  ruby:     { name: 'Ruby Showcase Space',     price: '1,750,000', size: '3m × 3m · 3 days' },
  amber:    { name: 'Amber Standard Space',    price: '1,250,000', size: '3m × 3m · 3 days' },
  opal:     { name: 'Opal Display Suite',      price: '950,000',   size: '3m × 3m · 3 days' },
  topaz:    { name: 'Topaz Pavilion Space',    price: '750,000',   size: '3m × 3m · 3 days' },
};
const TIER_HEX = { emerald: '#0d6b45', sapphire: '#1a4fa0', ruby: '#8f1a2e', amber: '#b85e0a', opal: '#5a2a8a', topaz: '#0a7a7a' };

function Booth({ booth, selected, onSelect, onHover, onLeave }) {
  return (
    <div
      className={`booth t-${booth.tier}${selected ? ' selected' : ''}`}
      onClick={() => onSelect(booth)}
      onMouseEnter={(e) => onHover(booth, e)}
      onMouseMove={(e) => onHover(booth, e)}
      onMouseLeave={onLeave}
    >
      <div className="id">{booth.id}</div>
      <div className="ti">{booth.tier}</div>
    </div>
  );
}

function Tooltip({ data }) {
  if (!data) return null;
  const m = TIER_META[data.booth.tier];
  return (
    <div className="tooltip show" style={{ left: data.x, top: data.y }}>
      <div className="h">
        <div className="dot" style={{ background: TIER_HEX[data.booth.tier] }} />
        <div className="t" style={{ color: TIER_HEX[data.booth.tier] }}>
          {data.booth.tier} · Booth {data.booth.id}
        </div>
      </div>
      <div className="n">{m.name}</div>
      <div className="s">{m.size}</div>
      <div className="p" style={{ color: TIER_HEX[data.booth.tier] }}>₦{m.price}</div>
    </div>
  );
}

function Legend() {
  const tiers = ['emerald', 'sapphire', 'ruby', 'amber', 'opal', 'topaz'];
  return (
    <div className="legend">
      {tiers.map(t => (
        <div className="item" key={t}>
          <div className="sw" style={{ background: TIER_HEX[t] + '20', borderColor: TIER_HEX[t] }} />
          <span style={{ color: TIER_HEX[t] }}>{t}</span>
        </div>
      ))}
    </div>
  );
}

function FloorPlan({ selected, onSelect }) {
  const [tip, setTip] = React.useState(null);
  const onHover = (booth, e) => setTip({ booth, x: e.clientX, y: e.clientY });
  const onLeave = () => setTip(null);
  return (
    <section className="module floor" id="floor">
      <div className="inner">
        <SectionHead
          eyebrow="Exhibition Layout"
          titlePre="Pavilion"
          titleEm="Floor"
          titlePost="Plan"
          lede="An interactive layout of the Investment Gateway Pavilion. Hover over any booth for tier and pricing — click to begin an enquiry."
        />
        <div className="canvas">
          <div className="entrance"><span>Main Pavilion Entrance</span></div>
          <div className="grid-row">
            {FLOOR_TOP.map(b => (
              <Booth key={b.id} booth={b} selected={selected && selected.id === b.id} onSelect={onSelect} onHover={onHover} onLeave={onLeave} />
            ))}
          </div>
          <div className="aisle"><span>Central Networking Aisle</span></div>
          <div className="grid-row">
            {FLOOR_BOTTOM.map(b => (
              <Booth key={b.id} booth={b} selected={selected && selected.id === b.id} onSelect={onSelect} onHover={onHover} onLeave={onLeave} />
            ))}
          </div>
          <Legend />
        </div>
      </div>
      <Tooltip data={tip} />
    </section>
  );
}
window.FloorPlan = FloorPlan;
