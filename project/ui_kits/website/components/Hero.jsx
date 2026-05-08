function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="hero">
      <div className="bg" />
      <div className="inner">
        <div>
          <div className="eb">★ The Premier Investment Event of 2026</div>
          <h1>Investment <em>Gateway</em><br/>Pavilion</h1>
          <p className="lede">
            Showcase your brand at the most prestigious investment summit in West Africa.
            Three days, 8,000+ delegates, 60+ nations — and a single pavilion designed for serious deal-making.
          </p>
          <div className="meta">
            <span>24 – 26 June 2026</span>
            <span>Bola Ahmed Tinubu ICC</span>
            <span>Abuja, Nigeria</span>
          </div>
          <div className="actions">
            <button className="btn-primary" onClick={onPrimary}>Reserve Your Booth &nbsp;→</button>
            <button className="btn-ghost" onClick={onSecondary}>Explore the Pavilion</button>
          </div>
        </div>
        <div className="badge-side">
          <div className="logo-circle"><img src="../../assets/wis-logo.jpg" alt="WIS" /></div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
