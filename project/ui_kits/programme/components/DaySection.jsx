function DaySection({ num, label, titlePre, titleEm, date, items }) {
  return (
    <section className="day">
      <header className="day-head">
        <div className="num">{num}</div>
        <div className="col">
          <div className="lbl">{label}</div>
          <h2>{titlePre} <em>{titleEm}</em></h2>
        </div>
        <div className="date">{date}</div>
      </header>
      {items.map((it, i) => (
        <div className="row" key={i}>
          <div className="time">{it.time}<span className="ampm">{it.ampm}</span></div>
          <div className="body">
            <div className="ttl">{it.title.split('|').map((p, j) => j === 1 ? <em key={j}>{p}</em> : p)}</div>
            {it.desc && <div className="desc">{it.desc}</div>}
            {it.speaker && <div className="speaker">{it.speaker}</div>}
          </div>
        </div>
      ))}
    </section>
  );
}
window.DaySection = DaySection;
