import { useState, useEffect, useRef } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    const next = !open;
    setOpen(next);
    document.body.classList.toggle('nav-open', next);
  };

  const closeDrawer = () => {
    setOpen(false);
    document.body.classList.remove('nav-open');
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeDrawer(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    return () => document.body.classList.remove('nav-open');
  }, []);

  const scrollTo = (id) => {
    closeDrawer();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav>
        <div className="nav-brand">WIS · ABUJA · 2026</div>
        <ul className="nav-links">
          <li><a onClick={() => scrollTo('floor-plan')}>Floor Plan</a></li>
          <li><a onClick={() => scrollTo('packages')}>Packages</a></li>
          <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
        </ul>
        <a href="mailto:topeomojayogbe@ukald.com" className="nav-cta">Enquire Now</a>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="navDrawer"
          onClick={toggleDrawer}
        >
          <span />
        </button>
      </nav>

      <div
        id="navDrawer"
        ref={drawerRef}
        className={`nav-drawer${open ? ' open' : ''}`}
        role="menu"
      >
        <a role="menuitem" onClick={() => scrollTo('floor-plan')}>Floor Plan</a>
        <a role="menuitem" onClick={() => scrollTo('packages')}>Packages</a>
        <a role="menuitem" onClick={() => scrollTo('contact')}>Contact</a>
        <a
          href="mailto:topeomojayogbe@ukald.com"
          className="drawer-cta"
          role="menuitem"
          onClick={closeDrawer}
        >
          Enquire Now
        </a>
      </div>
    </>
  );
}
