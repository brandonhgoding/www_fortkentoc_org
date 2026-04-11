function TopoLines({ stroke = 'currentColor', opacity = 0.08, seed = 0, className = '', ...rest }) {
  const offset = seed * 17;
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeWidth="1"
      aria-hidden="true"
      style={{ opacity }}
      {...rest}
    >
      {Array.from({ length: 10 }).map((_, i) => {
        const y = 40 + i * 56 + (offset % 17);
        return (
          <path
            key={i}
            d={`M-20 ${y} Q 100 ${y - 30 - (i % 3) * 5} 200 ${y} T 400 ${y} T 600 ${y} T 820 ${y}`}
          />
        );
      })}
    </svg>
  );
}

export default TopoLines;
