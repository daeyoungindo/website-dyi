type BrandLogoProps = {
  className?: string;
  title?: string;
};

export function BrandLogo({
  className = "h-12 w-auto",
  title = "DYI HWASEUNG",
}: BrandLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 220"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <rect width="640" height="220" rx="18" fill="#ffffff" />
      <text
        x="320"
        y="92"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="78"
        fontWeight="700"
        letterSpacing="6"
        fill="#6b7280"
      >
        DYI
      </text>
      <text
        x="320"
        y="175"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="64"
        fontWeight="800"
        fontStyle="italic"
        letterSpacing="2"
        fill="#1e4f8c"
      >
        HWASEUNG
      </text>
    </svg>
  );
}
