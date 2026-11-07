type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero pt-28 text-white">
      <div className="mesh-bg absolute inset-0 opacity-30" />
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-blue/25 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-green/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
