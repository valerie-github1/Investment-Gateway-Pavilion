function SectionHead({ eyebrow, titlePre, titleEm, titlePost, lede }) {
  return (
    <div className="section-head">
      <div className="eb">{eyebrow}</div>
      <h2>
        {titlePre} {titleEm && <em>{titleEm}</em>} {titlePost}
      </h2>
      <div className="div" />
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}
window.SectionHead = SectionHead;
