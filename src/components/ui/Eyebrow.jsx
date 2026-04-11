import './Eyebrow.css';

function Eyebrow({ children, variant = 'default', dot = true, className = '', ...rest }) {
  const classes = [
    'eyebrow',
    variant === 'on-dark' ? 'eyebrow--on-dark' : '',
    variant === 'muted' ? 'eyebrow--muted' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...rest}>
      {dot && <span className="eyebrow__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}

export default Eyebrow;
