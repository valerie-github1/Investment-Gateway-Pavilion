function App() {
  const [active, setActive] = React.useState('home');
  const [selectedBooth, setSelectedBooth] = React.useState(null);

  const onNav = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onEnquire = (pkg) => {
    alert(`Enquiry started · ${pkg.name} · ₦${pkg.price}\n\n(Mock — would open the contact concierge form)`);
  };

  const onSelectBooth = (booth) => {
    setSelectedBooth(booth);
    setActive('floor');
  };

  return (
    <main>
      <Nav active={active} onNav={onNav} />
      <div id="home">
        <Hero
          onPrimary={() => onNav('packages')}
          onSecondary={() => onNav('floor')}
        />
      </div>
      <StatBand />
      <PackagesGrid onEnquire={onEnquire} />
      <FloorPlan selected={selectedBooth} onSelect={onSelectBooth} />
      <Footer />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
