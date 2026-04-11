import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const VARIANTS = ['primary', 'secondary', 'support', 'ghost', 'on-dark-outline'];
const SIZES = ['sm', 'md', 'lg'];

const Button = forwardRef(function Button(
  {
    as,
    to,
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    icon,
    iconPosition = 'start',
    type,
    ...rest
  },
  ref,
) {
  const variantClass = VARIANTS.includes(variant) ? `btn-ui--${variant}` : 'btn-ui--primary';
  const sizeClass = SIZES.includes(size) && size !== 'md' ? `btn-ui--${size}` : '';
  const classes = ['btn-ui', variantClass, sizeClass, className].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && iconPosition === 'start' && <span className="btn-ui__icon">{icon}</span>}
      {children}
      {icon && iconPosition === 'end' && <span className="btn-ui__icon">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    const safeRel = rest.target === '_blank' ? rest.rel ?? 'noreferrer noopener' : rest.rel;
    return (
      <a ref={ref} href={href} className={classes} {...rest} rel={safeRel}>
        {content}
      </a>
    );
  }
  const Tag = as || 'button';
  return (
    <Tag
      ref={ref}
      type={Tag === 'button' ? type || 'button' : undefined}
      className={classes}
      {...rest}
    >
      {content}
    </Tag>
  );
});

export default Button;
