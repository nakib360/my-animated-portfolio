import { useEffect, useRef } from "react";

export default function CyberpunkGlowBackground({
  colors = ["#00f0ff", "#7a2eff", "#00ffa3"],
  bg = "#07040f",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const styleId = "cyberpunk-glow-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes glowDrift1 {
          0%   { transform: translate(-10%, -10%) scale(1); }
          33%  { transform: translate(20%, 10%) scale(1.15); }
          66%  { transform: translate(5%, 25%) scale(0.95); }
          100% { transform: translate(-10%, -10%) scale(1); }
        }
        @keyframes glowDrift2 {
          0%   { transform: translate(10%, 15%) scale(1); }
          40%  { transform: translate(-15%, -5%) scale(1.2); }
          75%  { transform: translate(-5%, -20%) scale(0.9); }
          100% { transform: translate(10%, 15%) scale(1); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 0.9; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cpg-blob { animation: none !important; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const blobs = [
    { color: colors[0], top: "10%", left: "15%", size: 520, anim: "glowDrift1 22s ease-in-out infinite", delay: "0s" },
    { color: colors[1], top: "70%", left: "75%", size: 460, anim: "glowDrift2 26s ease-in-out infinite", delay: "-4s" },
    { color: colors[2], top: "75%", left: "10%", size: 420, anim: "glowDrift1 30s ease-in-out infinite reverse", delay: "-9s" },
  ];

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute", // আগে ছিল "fixed"
        inset: 0,
        zIndex: 0, // আগে ছিল -1
        overflow: "hidden",
        pointerEvents: "none",
        background: bg,
      }}
    >
      {blobs.map((b, i) => (
        <div
          key={i}
          className="cpg-blob"
          style={{
            position: "absolute",
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            marginLeft: -b.size / 2,
            marginTop: -b.size / 2,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${b.color} 0%, ${b.color}55 35%, transparent 70%)`,
            filter: "blur(60px)",
            mixBlendMode: "screen",
            animation: `${b.anim}, glowPulse ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${b.delay}, ${b.delay}`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* subtle vignette so content stays readable at the edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* faint grain/noise overlay for texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}