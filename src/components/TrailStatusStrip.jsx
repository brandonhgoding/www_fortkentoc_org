import './TrailStatusStrip.css';

// Placeholder values. Wave 12 / future work wires these to a real source.
const DEFAULTS = {
  trailsOpen: 14,
  trailsTotal: 22,
  temperature: '-4°F',
  sinceGroomed: '6h',
  webcam: 'LIVE',
};

function TrailStatusStrip({ data = DEFAULTS }) {
  return (
    <div className="trail-status-strip" aria-label="Current conditions">
      <div className="trail-status-strip__cell">
        <div className="trail-status-strip__num">
          {data.trailsOpen}
          <small>/{data.trailsTotal}</small>
        </div>
        <div className="trail-status-strip__label">Trails open</div>
      </div>
      <div className="trail-status-strip__cell">
        <div className="trail-status-strip__num">{data.temperature}</div>
        <div className="trail-status-strip__label">Current temp</div>
      </div>
      <div className="trail-status-strip__cell">
        <div className="trail-status-strip__num">{data.sinceGroomed}</div>
        <div className="trail-status-strip__label">Since grooming</div>
      </div>
      <div className="trail-status-strip__cell">
        <div className="trail-status-strip__num">{data.webcam}</div>
        <div className="trail-status-strip__label">Stadium webcam</div>
      </div>
    </div>
  );
}

export default TrailStatusStrip;
