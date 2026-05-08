function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-brand">
          <div className="lock"><img src="../../assets/wis-logo.jpg" alt="WIS" /></div>
          <div className="ttl">World Investment Summit · Abuja 2026</div>
        </div>
        <div className="foot-cols">
          <div>
            <div className="lbl">Venue</div>
            <p>Bola Ahmed Tinubu International Conference Centre · Abuja, Nigeria</p>
          </div>
          <div>
            <div className="lbl">Dates</div>
            <p>24 – 26 June 2026<br/>Three full days</p>
          </div>
          <div>
            <div className="lbl">Exhibitions</div>
            <a href="mailto:topeomojayogbe@ukald.com">exhibitions@<br/>wisabuja2026.gov.ng</a>
          </div>
          <div>
            <div className="lbl">Press</div>
            <a href="mailto:press@wisabuja2026.gov.ng">press@<br/>wisabuja2026.gov.ng</a>
          </div>
        </div>
        <div className="foot-fine">
          <span>© World Investment Summit · Abuja 2026 · Federal Government of Nigeria</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
