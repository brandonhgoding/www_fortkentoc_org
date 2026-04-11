import './Badge.css';

const VARIANTS = ['open', 'caution', 'closed', 'info', 'live'];

function Badge({ variant = 'info', dot = true, children, className = '', ...rest }) {
  const variantClass = VARIANTS.includes(variant) ? `badge-ui--${variant}` : 'badge-ui--info';
  const classes = ['badge-ui', variantClass, className].filter(Boolean).join(' ');

  return (
    <span className={classes} {...rest}>
      {dot && <span className="badge-ui__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}

export default Badge;
