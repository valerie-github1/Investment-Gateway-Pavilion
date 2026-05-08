import wisLogo from '../assets/wis-logo.jpg';

export default function Hero() {
  return (
    <header className="hero">
      <div className="logo-circle-wrap">
        <div className="logo-circle">
          <img src={wisLogo} alt="WIS Abuja 2026" />
          <div className="logo-ring" />
        </div>
      </div>

      <p className="hero-kicker">★ THE PREMIER INVESTMENT EVENT OF 2026</p>

      <h1>
        Investment <em>Gateway</em><br />Pavilion
      </h1>

      <p className="hero-sub">World Investment Summit · Abuja · Nigeria</p>

      <div className="hero-chips">
        <span className="chip"><span className="chip-icon">📅</span>24 – 26 June 2026</span>
        <span className="chip"><span className="chip-icon">📍</span>Bola Ahmed Tinubu ICC, Abuja</span>
        <span className="chip"><span className="chip-icon">🌍</span>8,000+ Global Delegates</span>
        <span className="chip"><span className="chip-icon">🌐</span>60+ Nations</span>
      </div>

      <div className="multi-note">
        <span className="multi-note-icon">ℹ</span>
        <p>
          Companies and organisations may select <strong>more than one booth</strong>, depending on availability.
          Each package is booked for the <strong>full 3 days</strong> of the Summit. Contact us to discuss
          custom arrangements or sponsorship tiers.
        </p>
      </div>
    </header>
  );
}
