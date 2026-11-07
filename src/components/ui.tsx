import Link from "next/link";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}

type Stat = {
  value: string;
  label: string;
};

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-surface px-5 py-6">
          <p className="font-display text-3xl font-bold text-navy">
            {stat.value}
          </p>
          <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold text-blue transition hover:gap-3"
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
