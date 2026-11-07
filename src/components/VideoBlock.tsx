type VideoBlockProps = {
  src: string;
  title: string;
  description: string;
  eyebrow?: string;
  poster?: string;
};

export function VideoBlock({
  src,
  title,
  description,
  eyebrow,
  poster,
}: VideoBlockProps) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-line bg-hero text-white shadow-[0_24px_60px_rgba(8,20,35,0.18)]">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center p-8 md:p-10">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
            {description}
          </p>
        </div>
        <div className="relative min-h-64 bg-black/30 lg:min-h-[22rem]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={src} type="video/mp4" />
            Browser Anda tidak mendukung pemutaran video.
          </video>
        </div>
      </div>
    </div>
  );
}
