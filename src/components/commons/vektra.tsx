type VektraLogoProps = { className?: string };

export function VektraLogo({ className }: VektraLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="40"
      viewBox="0 0 200 40"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="img"
      aria-label="Vektra"
    >
      <rect x="2" y="6" width="28" height="28" rx="8" fill="#0e7c6b" />
      <path d="M9 14l7 14 7-14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text
        x="40"
        y="27"
        fill="#0a1f2c"
        fontFamily="Sora, Inter, sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="1"
      >
        VEKTRA
      </text>
    </svg>
  );
}
