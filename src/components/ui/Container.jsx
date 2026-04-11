import './Container.css';

function Container({ children, variant, className = '', as: Component = 'div', ...rest }) {
  const Tag = Component;
  const classes = [
    'container-ui',
    variant === 'narrow' ? 'container-ui--narrow' : '',
    variant === 'wide' ? 'container-ui--wide' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;
