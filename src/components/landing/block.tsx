import { cn } from "@/lib/utils";

export function Shell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("shell", className)}>{children}</div>;
}

export function BlockHead({
  overline,
  title,
  body,
  align = "center",
  tone = "light",
  className,
}: {
  overline: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <header
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      <p
        className={cn(
          "kicker",
          tone === "dark" ? "text-amber" : "text-teal"
        )}
      >
        {overline}
      </p>
      <h2
        className={cn(
          "mt-4 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.05]",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 text-[15.5px] leading-relaxed",
            align === "center" ? "mx-auto max-w-xl" : "max-w-xl",
            tone === "dark" ? "text-white/65" : "text-ink-soft"
          )}
        >
          {body}
        </p>
      ) : null}
    </header>
  );
}

export function ArrowLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-[14px] font-semibold transition-colors",
        tone === "dark"
          ? "text-amber hover:text-white"
          : "text-teal hover:text-ink"
      )}
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
