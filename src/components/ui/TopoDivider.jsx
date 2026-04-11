import './TopoDivider.css';

function TopoDivider({ variant, onDark = false, className = '', ...rest }) {
  const classes = [
    'topo-divider',
    variant === 'tall' ? 'topo-divider--tall' : '',
    onDark ? 'topo-divider--on-dark' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const stroke = onDark ? 'var(--color-gold)' : 'var(--color-ink-soft)';

  return (
    <div className={classes} role="presentation" {...rest}>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
      >
        <path d="M0 20 Q 150 4 300 20 T 600 20 T 900 20 T 1200 20" />
        <path d="M0 28 Q 150 12 300 28 T 600 28 T 900 28 T 1200 28" opacity="0.5" />
        <path d="M0 12 Q 150 28 300 12 T 600 12 T 900 12 T 1200 12" opacity="0.5" />
        <path d="M0 34 Q 150 20 300 34 T 600 34 T 900 34 T 1200 34" opacity="0.25" />
        <path d="M0 6 Q 150 22 300 6 T 600 6 T 900 6 T 1200 6" opacity="0.25" />
      </svg>
    </div>
  );
}

export default TopoDivider;
