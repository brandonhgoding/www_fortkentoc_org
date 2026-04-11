import './Card.css';

function Card({ number, title, children, meta, className = '', ...rest }) {
  const classes = ['card-ui', className].filter(Boolean).join(' ');
  return (
    <article className={classes} {...rest}>
      {number && <div className="card-ui__num">{number}</div>}
      {title && <h3 className="card-ui__title">{title}</h3>}
      {children && <div className="card-ui__body">{children}</div>}
      {meta && <div className="card-ui__meta">{meta}</div>}
    </article>
  );
}

export default Card;
