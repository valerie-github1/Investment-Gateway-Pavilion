const DAYS = [
  {
    num: '01', label: 'Day One', titlePre: 'Opening', titleEm: 'Ceremony', date: '24 June 2026',
    items: [
      { time: '09:00', ampm: 'WAT', title: 'Arrival & |Accreditation|', desc: 'Delegates arrive at the Bola Ahmed Tinubu International Conference Centre. Press accreditation desk opens.' },
      { time: '10:30', ampm: 'WAT', title: 'Opening |Address|', desc: 'Welcome by the convener and chairperson of the World Investment Summit Abuja 2026.', speaker: 'Federal Government of Nigeria' },
      { time: '11:30', ampm: 'WAT', title: 'Keynote · |State of the Investment Climate|', desc: 'A landscape view of foreign direct investment, sovereign-fund participation, and the path forward for West Africa.' },
      { time: '13:00', ampm: 'WAT', title: 'Working |Luncheon|', desc: 'Hosted in the Pavilion · Investment Gateway · for delegates and exhibitors.' },
      { time: '15:00', ampm: 'WAT', title: 'Pavilion |Walkthrough|', desc: 'Guided tour of the six-tier exhibition pavilion. Concierge support available throughout.' },
    ],
  },
  {
    num: '02', label: 'Day Two', titlePre: 'World Press', titleEm: 'Conference', date: '25 June 2026',
    items: [
      { time: '09:30', ampm: 'WAT', title: 'Press |Briefing|', desc: 'Opening press conference with the Office of the President and Ministry of Finance.' },
      { time: '11:00', ampm: 'WAT', title: 'Panel · |Sovereign Capital, Sovereign Strategy|', desc: 'A roundtable of sovereign-fund LPs and state investment authorities.', speaker: '5 panellists · 60 minutes · Q&A' },
      { time: '14:00', ampm: 'WAT', title: 'Bilateral |Sessions|', desc: 'Closed-door bilateral meetings between delegations. By appointment only.' },
      { time: '17:30', ampm: 'WAT', title: 'Cultural |Reception|', desc: 'Evening reception hosted by the Federal Capital Territory.' },
    ],
  },
  {
    num: '03', label: 'Day Three', titlePre: 'Closing &', titleEm: 'Communiqué', date: '26 June 2026',
    items: [
      { time: '10:00', ampm: 'WAT', title: 'Closing |Plenary|', desc: 'Synthesis of the summit and announcement of headline commitments.' },
      { time: '12:30', ampm: 'WAT', title: 'Communiqué |Signing|', desc: 'Formal signing of the Abuja Investment Communiqué.' },
      { time: '15:00', ampm: 'WAT', title: 'Press |Roundtable|', desc: 'Final press roundtable with the convener and partner ministers.' },
    ],
  },
];

function App() {
  const [active, setActive] = React.useState(0);
  return (
    <div className="stage">
      <div className="doc">
        <ProgrammeHero />
        <VenueCard />
        <div className="tabs">
          {DAYS.map((d, i) => (
            <button key={i} className={i === active ? 'active' : ''} onClick={() => setActive(i)}>
              {d.label} · {d.date.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>
        <DaySection {...DAYS[active]} />
        <div className="divider"><span>End of Day {DAYS[active].num}</span></div>
        <ProgrammeFooter />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
