function TrailMarker({ color = 'var(--color-brick)', size = 14, className = '', ...rest }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest}
    >
      <circle cx="7" cy="7" r="5" fill={color} />
      <circle cx="7" cy="7" r="6" fill="none" stroke={color} strokeWidth="1" opacity="0.35" />
    </svg>
  );
}

export default TrailMarker;
