type MarlinLineLogoProps = { className?: string };

export function MarlinLineLogo({ className }: MarlinLineLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="40"
      viewBox="0 0 200 40"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="img"
      aria-label="Marlin Line"
    >
      <path d="M4 26c6-12 14-12 20 0" stroke="#0e7c6b" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M8 14h14" stroke="#f2b84b" strokeWidth="3" strokeLinecap="round" />
      <text
        x="40"
        y="27"
        fill="#0a1f2c"
        fontFamily="Sora, Inter, sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="0.5"
      >
        Marlin Line
      </text>
    </svg>
  );
}
