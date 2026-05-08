const PACKAGES = [
  { tier: 'emerald',  name: 'Emerald Business Suite',  price: '3,500,000', size: '3m × 3m', features: ['Branded printed booth with custom signage', 'Premium pavilion location', 'Concierge support · directory listing', 'Headline sponsor mention'] },
  { tier: 'sapphire', name: 'Sapphire Suite',          price: '2,500,000', size: '3m × 3m', features: ['Branded printed booth', 'Prime aisle location', 'Concierge support · directory listing', 'Branded exhibitor badge'] },
  { tier: 'ruby',     name: 'Ruby Showcase Space',     price: '1,750,000', size: '3m × 3m', features: ['Custom-built showcase area', 'Inside pavilion floor', 'Directory listing', 'Exhibitor badge'] },
  { tier: 'amber',    name: 'Amber Standard Space',    price: '1,250,000', size: '3m × 3m', features: ['Branded shell scheme booth', 'Pavilion floor placement', 'Directory listing', 'Standard exhibitor pass'] },
  { tier: 'opal',     name: 'Opal Display Suite',      price: '950,000',   size: '3m × 3m', features: ['Display table + chairs', 'Pavilion floor placement', 'Directory listing'] },
  { tier: 'topaz',    name: 'Topaz Pavilion Space',    price: '750,000',   size: '3m × 3m', features: ['Branded tabletop space', 'Shared pavilion area', 'Directory listing'] },
];

function PackageCard({ pkg, onEnquire }) {
  return (
    <article className={`pkg pkg-${pkg.tier}`} onClick={() => onEnquire && onEnquire(pkg)}>
      <div className="tier">{pkg.tier}</div>
      <div className="name">{pkg.name}</div>
      <div className="price-row">
        <span className="naira">₦</span>
        <span className="price">{pkg.price}</span>
        <span className="size">{pkg.size}</span>
      </div>
      <ul>{pkg.features.map(f => <li key={f}>{f}</li>)}</ul>
      <button className="cta" onClick={(e) => { e.stopPropagation(); onEnquire && onEnquire(pkg); }}>Enquire Now &nbsp;→</button>
    </article>
  );
}

function PackagesGrid({ onEnquire }) {
  return (
    <section className="module" id="packages">
      <div className="inner">
        <SectionHead
          eyebrow="Exhibition Packages"
          titlePre="Choose Your"
          titleEm="Tier"
          lede="Six gem-tiered packages — from the headline Emerald Business Suite to the entry-level Topaz Pavilion Space. Companies and organisations may select more than one booth, depending on availability."
        />
        <div className="pkg-grid">
          {PACKAGES.map(p => <PackageCard key={p.tier} pkg={p} onEnquire={onEnquire} />)}
        </div>
      </div>
    </section>
  );
}
window.PackagesGrid = PackagesGrid;
window.PACKAGES = PACKAGES;
