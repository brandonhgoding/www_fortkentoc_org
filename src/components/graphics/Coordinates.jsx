import './Coordinates.css';

// FKOC stadium coordinates
const DEFAULT_LAT = '47.2340°N';
const DEFAULT_LON = '68.5895°W';

function Coordinates({
  lat = DEFAULT_LAT,
  lon = DEFAULT_LON,
  onDark = false,
  separator = ' · ',
  className = '',
  ...rest
}) {
  const classes = ['coordinates', onDark ? 'coordinates--on-dark' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <span className={classes} {...rest}>
      {lat}
      {separator}
      {lon}
    </span>
  );
}

export default Coordinates;
