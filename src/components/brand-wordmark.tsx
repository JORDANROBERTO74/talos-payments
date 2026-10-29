type BrandWordmarkProps = { className?: string };

export function BrandWordmark({ className }: BrandWordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="h-8 w-8"
      >
        <rect width="32" height="32" rx="9" fill="currentColor" opacity="0.14" />
        <path
          d="M9 11l7 12 7-12"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="23.5" r="1.8" fill="currentColor" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight">Talos</span>
    </span>
  );
}
