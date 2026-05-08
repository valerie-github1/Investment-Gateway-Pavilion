import { useEffect, useRef } from 'react';

const CONTACT_EMAIL = 'topeomojayogbe@ukald.com';

const PACKAGES = [
  {
    tier: 'emerald',
    gem: 'Emerald',
    name: 'Emerald Business Suite',
    size: '3m × 3m',
    sizeDays: '3m × 3m · 3 Full Days',
    price: '₦2,000,000',
    limited: true,
    amenities: [
      { icon: '▪', label: 'Branded Tent' },
      { icon: '▫', label: 'Custom Space' },
      { icon: '⌂', label: 'Table + 2 Chairs' },
      { icon: '✓', label: 'Meals Incl.' },
    ],
    features: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Breakfast & lunch for 2 people (all 3 days)',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas & sessions',
      'Brand visibility across the full pavilion',
      'Exposure to media & international delegates',
    ],
  },
  {
    tier: 'sapphire',
    gem: 'Sapphire',
    name: 'Sapphire Business Suite',
    size: '2m × 2m',
    sizeDays: '2m × 2m · 3 Full Days',
    price: '₦1,500,000',
    amenities: [
      { icon: '▪', label: 'Branded Tent' },
      { icon: '▫', label: 'Custom Space' },
      { icon: '⌂', label: 'Table + 2 Chairs' },
      { icon: '✓', label: 'Meals Incl.' },
    ],
    features: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Breakfast & lunch for 2 people (all 3 days)',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas & sessions',
      'Brand visibility across the full pavilion',
      'Exposure to media & international delegates',
    ],
  },
  {
    tier: 'ruby',
    gem: 'Ruby',
    name: 'Ruby Showcase Space',
    size: '3m × 3m',
    sizeDays: '3m × 3m · 3 Full Days',
    price: '₦1,700,000',
    amenities: [
      { icon: '▪', label: 'Branded Tent' },
      { icon: '▫', label: 'Custom Space' },
      { icon: '⌂', label: 'Table + 2 Chairs' },
      { icon: '✓', label: 'Meals Incl.' },
    ],
    features: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Breakfast & lunch for 2 people (all 3 days)',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas & sessions',
      'Brand visibility across the full pavilion',
      'Exposure to media & international delegates',
    ],
  },
  {
    tier: 'amber',
    gem: 'Amber',
    name: 'Amber Showcase Space',
    size: '2m × 2m',
    sizeDays: '2m × 2m · 3 Full Days',
    price: '₦1,200,000',
    amenities: [
      { icon: '▪', label: 'Branded Tent' },
      { icon: '▫', label: 'Custom Space' },
      { icon: '⌂', label: 'Table + 2 Chairs' },
      { icon: '✓', label: 'Meals Incl.' },
    ],
    features: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Breakfast & lunch for 2 people (all 3 days)',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas & sessions',
      'Brand visibility across the full pavilion',
      'Exposure to media & international delegates',
    ],
  },
  {
    tier: 'opal',
    gem: 'Opal',
    name: 'Opal Display Suite',
    size: '3m × 3m',
    sizeDays: '3m × 3m · 3 Full Days',
    price: '₦1,950,000',
    amenities: [
      { icon: '▪', label: 'Branded Tent' },
      { icon: '▫', label: 'Custom Space' },
      { icon: '⌂', label: 'Table + 2 Chairs' },
      { icon: '—', label: 'No Meals', dim: true },
    ],
    features: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas & sessions',
      'Brand visibility across the full pavilion',
      'Exposure to media & international delegates',
    ],
    noMeals: true,
  },
  {
    tier: 'topaz',
    gem: 'Topaz',
    name: 'Topaz Display Suite',
    size: '2m × 2m',
    sizeDays: '2m × 2m · 3 Full Days',
    price: '₦1,450,000',
    amenities: [
      { icon: '▪', label: 'Branded Tent' },
      { icon: '▫', label: 'Custom Space' },
      { icon: '⌂', label: 'Table + 2 Chairs' },
      { icon: '—', label: 'No Meals', dim: true },
    ],
    features: [
      'Premium branded tent structure',
      'Fully customised branded space',
      '1 display table + 2 chairs',
      'Official WIS exhibitor directory listing',
      'Access to all networking areas & sessions',
      'Brand visibility across the full pavilion',
      'Exposure to media & international delegates',
    ],
    noMeals: true,
  },
];

function PackageCard({ pkg }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.07 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(pkg.gem + ' Booth Enquiry — WIS Abuja 2026')}`;

  return (
    <div ref={cardRef} className={`pkg-card pkg-${pkg.tier} reveal`}>
      <div className="pkg-accent-bar" />
      <div className="pkg-body">
        <div className="pkg-header">
          <div className="pkg-title-group">
            <div className="pkg-gem-label">{pkg.gem}</div>
            <div className="pkg-name">{pkg.name}</div>
            <span className="pkg-size-badge">{pkg.sizeDays}</span>
          </div>
          <div className="pkg-price-block">
            <span className="pkg-price">{pkg.price}</span>
            <span className="pkg-price-note">Total investment</span>
          </div>
        </div>

        {pkg.limited && (
          <div className="pkg-limited">· Limited Availability</div>
        )}

        <div className="pkg-divider" />
        <p className="pkg-includes-label">What&rsquo;s Included</p>

        <div className="pkg-amenities-grid">
          {pkg.amenities.map((a) => (
            <div key={a.label} className="pkg-amenity" style={a.dim ? { opacity: 0.4 } : {}}>
              <span className="a-icon">{a.icon}</span>
              <span className="a-label">{a.label}</span>
            </div>
          ))}
        </div>

        <ul className="pkg-checklist">
          {pkg.features.map((f) => (
            <li key={f}>
              <span className="check-icon">✓</span>
              {f}
            </li>
          ))}
          {pkg.noMeals && (
            <li style={{ opacity: 0.45 }}>
              <span style={{ color: '#999' }}>✗</span>
              &nbsp; Meals not included
            </li>
          )}
        </ul>

        <a href={href} className="pkg-cta">Enquire Now →</a>
      </div>
    </div>
  );
}

export default function PackagesGrid() {
  const noteRef = useRef(null);

  useEffect(() => {
    const el = noteRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.07 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="packages" className="packages-bg">
      <div className="section-wrap">
        <p className="section-eyebrow">Full Package Details</p>
        <h2 className="section-title">Exhibition <em>Packages</em></h2>
        <div className="packages-grid">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.tier} pkg={pkg} />
          ))}
        </div>

        <div ref={noteRef} className="note-box reveal" id="contact">
          <p className="note-title">Important Note</p>
          <p>
            All booths are booked for <strong>3 full days</strong> of the Summit (24–26 June 2026).
            Meal allocations are per the 2 named representatives per booth, for all 3 days.
            Additional staff passes available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
