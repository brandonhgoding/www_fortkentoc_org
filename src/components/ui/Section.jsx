import './Section.css';

function Section({ children, variant = 'default', className = '', id, ...rest }) {
  const classes = [
    'section-ui',
    variant === 'soft' ? 'section-ui--soft' : '',
    variant === 'dark' ? 'section-ui--dark' : '',
    variant === 'flush' ? 'section-ui--flush' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes} {...rest}>
      {children}
    </section>
  );
}

export default Section;
