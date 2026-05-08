function VenueCard() {
  return (
    <div className="venue">
      <div className="cell">
        <div className="lbl">Venue</div>
        <div className="v"><em>Bola Ahmed Tinubu</em><br/>International Conference Centre</div>
        <div className="s">Central Business District · Abuja, Federal Capital Territory · Nigeria</div>
      </div>
      <div className="cell">
        <div className="lbl">Convened by</div>
        <div className="v">Federal <em>Government</em><br/>of Nigeria</div>
        <div className="s">Under the auspices of the Office of the President · in partnership with State Investment Authorities</div>
      </div>
    </div>
  );
}
window.VenueCard = VenueCard;
