import Eyebrow from './ui/Eyebrow';
import Coordinates from './graphics/Coordinates';
import LodgeMark from './graphics/LodgeMark';
import './Hero.css';

function Hero({ eyebrow, title, lede, buttons, media }) {
  return (
    <section className="hero-ui">
      <Coordinates className="hero-ui__coord" />
      <div className="hero-ui__inner">
        <div className="hero-ui__grid">
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="hero-ui__title">{title}</h1>
            {lede && <p className="hero-ui__lede">{lede}</p>}
            {buttons && <div className="hero-ui__buttons">{buttons}</div>}
          </div>
          <div className="hero-ui__media">
            <span className="hero-ui__media-label">· HERO SLOT</span>
            <div className="hero-ui__media-art">{media || <LodgeMark size={160} />}</div>
            <span className="hero-ui__media-label">FORT KENT · MAINE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
