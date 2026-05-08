function StatBand() {
  const stats = [
    { num: '8,000+', lbl: 'Global Delegates' },
    { num: '60+',    lbl: 'Nations Represented' },
    { num: '3',      lbl: 'Full Days' },
    { num: '6',      lbl: 'Pavilion Tiers' },
  ];
  return (
    <section className="stats">
      <div className="grid">
        {stats.map(s => (
          <div className="stat" key={s.lbl}>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.StatBand = StatBand;
