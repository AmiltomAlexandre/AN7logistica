interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const primary = variant === "light" ? "#ffffff" : "#0f244a";
  const sub = variant === "light" ? "rgba(255,255,255,0.75)" : "#5a6b8a";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 shadow-lg shadow-navy-900/20">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          {/* Speed lines */}
          <path d="M2 9h5" stroke="#ff6b1a" strokeWidth="2" strokeLinecap="round" />
          <path d="M1 12.5h4" stroke="#ff6b1a" strokeWidth="2" strokeLinecap="round" />
          {/* Van body */}
          <path
            d="M8 7h7l3 3.5V16h-2M8 16H7V7z"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path d="M8 16h4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="9.5" cy="17" r="1.6" stroke="#ff6b1a" strokeWidth="1.6" />
          <circle cx="16.5" cy="17" r="1.6" stroke="#ff6b1a" strokeWidth="1.6" />
        </svg>
      </div>
      <div className="leading-none">
        <div
          className="font-display text-lg font-extrabold tracking-tight"
          style={{ color: primary }}
        >
          AN<span style={{ color: "#ff6b1a" }}>7</span>
        </div>
        <div
          className="text-[10px] font-semibold uppercase tracking-[0.25em]"
          style={{ color: sub }}
        >
          Logística
        </div>
      </div>
    </div>
  );
}
