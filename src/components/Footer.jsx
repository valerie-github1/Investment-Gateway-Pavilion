const CONTACT_EMAIL = 'topeomojayogbe@ukald.com';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">WORLD INVESTMENT SUMMIT · ABUJA 2026</div>
      <p>
        <span className="footer-eyebrow">Exhibitions &amp; Sponsorship — Point of Contact</span>
        <span className="footer-contact-name">Tope Omojayogbe</span>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p style={{ marginTop: '20px' }}>
        Bola Ahmed Tinubu International Conference Centre · Abuja, Nigeria
        <br />
        24 – 26 June 2026
      </p>
      <p style={{ marginTop: '16px', opacity: 0.5, fontSize: '11px', letterSpacing: '1px' }}>
        © World Investment Summit · Abuja 2026 · Federal Government of Nigeria
      </p>
    </footer>
  );
}
