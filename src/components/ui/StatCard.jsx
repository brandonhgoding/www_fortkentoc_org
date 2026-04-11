import './StatCard.css';

function StatCard({ value, suffix, label, className = '', ...rest }) {
  const classes = ['stat-card', className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      <div className="stat-card__num">
        {value}
        {suffix && <small>{suffix}</small>}
      </div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

export default StatCard;
