import { Link } from 'react-router-dom';
import Coordinates from '../graphics/Coordinates';
import './PageHeader.css';

function PageHeader({ crumb, title, lede, children }) {
  return (
    <header className="page-header">
      <Coordinates onDark className="page-header__coord" />
      <div className="page-header__inner">
        {crumb && (
          <div className="page-header__crumb">
            <Link to="/">Home</Link>
            {crumb.map((c, i) => (
              <span key={i}>
                <span>→</span>
                {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}
              </span>
            ))}
          </div>
        )}
        {title && <h1 className="page-header__title">{title}</h1>}
        {lede && <p className="page-header__lede">{lede}</p>}
        {children}
      </div>
    </header>
  );
}

export default PageHeader;
