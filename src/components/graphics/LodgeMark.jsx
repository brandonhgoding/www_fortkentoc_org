function LodgeMark({ color = 'currentColor', className = '', size = 120, ...rest }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {/* roofline */}
      <path d="M10 60 L60 20 L110 60" />
      {/* lodge body */}
      <path d="M20 60 L20 100 L100 100 L100 60" />
      {/* chimney */}
      <path d="M78 30 L78 15 L88 15 L88 38" />
      {/* door */}
      <path d="M52 100 L52 74 L68 74 L68 100" />
      {/* window squares */}
      <rect x="30" y="72" width="12" height="12" />
      <rect x="78" y="72" width="12" height="12" />
      {/* trail mark above */}
      <circle cx="60" cy="8" r="2" fill={color} />
    </svg>
  );
}

export default LodgeMark;
