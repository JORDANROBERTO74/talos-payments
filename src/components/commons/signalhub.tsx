type SignalhubLogoProps = { className?: string };

export function SignalhubLogo({ className }: SignalhubLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="40"
      viewBox="0 0 200 40"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="img"
      aria-label="Signalhub"
    >
      <circle cx="10" cy="20" r="3" fill="#0e7c6b" />
      <circle cx="22" cy="20" r="6" stroke="#0e7c6b" strokeWidth="2.5" fill="none" />
      <circle cx="22" cy="20" r="11" stroke="#f2b84b" strokeWidth="2" fill="none" />
      <text
        x="42"
        y="27"
        fill="#0a1f2c"
        fontFamily="Sora, Inter, sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="0.5"
      >
        Signalhub
      </text>
    </svg>
  );
}
