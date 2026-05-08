const STATS = [
  { num: '8,000+', label: 'Global Delegates' },
  { num: '60+',    label: 'Nations Represented' },
  { num: '3',      label: 'Full Days' },
  { num: '6',      label: 'Pavilion Tiers' },
];

export default function StatBand() {
  return (
    <div className="stats-band">
      <div className="stats-inner">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
