type NorthwindLogoProps = { className?: string };

export function NorthwindLogo({ className }: NorthwindLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="40"
      viewBox="0 0 200 40"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="img"
      aria-label="Northwind"
    >
      <path d="M6 28V12l12 16V12" stroke="#0e7c6b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="26" cy="24" r="4" fill="#f2b84b" />
      <text
        x="40"
        y="27"
        fill="#0a1f2c"
        fontFamily="Sora, Inter, sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="0.5"
      >
        Northwind
      </text>
    </svg>
  );
}
