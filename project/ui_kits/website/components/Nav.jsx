function Nav({ active, onNav }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'packages', label: 'Packages' },
    { id: 'floor', label: 'Floor Plan' },
    { id: 'programme', label: 'Programme' },
    { id: 'press', label: 'Press' },
  ];
  return (
    <nav className="nav">
      <div className="brand">
        <div className="lock"><img src="../../assets/wis-logo.jpg" alt="WIS" /></div>
        <div className="name">WIS · <em>Abuja</em> · 2026</div>
      </div>
      <div className="links">
        {links.map(l => (
          <a key={l.id} className={active === l.id ? 'active' : ''} onClick={() => onNav && onNav(l.id)}>
            {l.label}
          </a>
        ))}
      </div>
      <button className="cta" onClick={() => onNav && onNav('packages')}>Enquire Now</button>
    </nav>
  );
}
window.Nav = Nav;
