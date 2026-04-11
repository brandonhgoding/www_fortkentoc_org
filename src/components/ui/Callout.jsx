import './Callout.css';
import Eyebrow from './Eyebrow';

function Callout({
  eyebrow,
  title,
  children,
  media,
  buttons,
  reverse = false,
  className = '',
  ...rest
}) {
  const classes = ['callout-ui', reverse ? 'callout-ui--reverse' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      <div className="callout-ui__content">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {title && <h2>{title}</h2>}
        {children}
        {buttons && <div className="callout-ui__buttons">{buttons}</div>}
      </div>
      <div className="callout-ui__media">{media}</div>
    </div>
  );
}

export default Callout;
