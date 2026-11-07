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
      viewBox="0 0 560 200"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <text
        x="540"
        y="82"
        textAnchor="end"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontSize="86"
        fontWeight="900"
        letterSpacing="8"
        fill="#ffffff"
        stroke="#000000"
        strokeWidth="3.5"
        paintOrder="stroke fill"
      >
        DYI
      </text>
      <text
        x="540"
        y="168"
        textAnchor="end"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontSize="58"
        fontWeight="900"
        fontStyle="italic"
        letterSpacing="1"
        fill="#3b82f6"
        stroke="#3b82f6"
        strokeWidth="2.5"
        paintOrder="stroke fill"
      >
        HWASEUNG
      </text>
    </svg>
  );
}
