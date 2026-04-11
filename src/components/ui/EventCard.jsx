import './EventCard.css';

function EventCard({ month, day, title, description, onDark = false, className = '', ...rest }) {
  const classes = ['event-card', onDark ? 'event-card--on-dark' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classes} {...rest}>
      <div className="event-card__date">
        <div className="event-card__month">{month}</div>
        <div className="event-card__day">{day}</div>
      </div>
      <div className="event-card__body">
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>
    </article>
  );
}

export default EventCard;
