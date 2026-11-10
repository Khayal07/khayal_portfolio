import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = `${portfolio.identity.name} — ${portfolio.identity.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { identity, hero } = portfolio;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0c0d10",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "#a1a1aa" }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#22c55e" }} />
          {hero.status}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: -2 }}>{identity.name}</div>
          <div style={{ marginTop: 12, fontSize: 40, color: "#a1a1aa" }}>{identity.title}</div>
          <div style={{ marginTop: 32, fontSize: 28, color: "#a1a1aa", maxWidth: 900, lineHeight: 1.4 }}>
            {identity.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #27272a",
            paddingTop: 28,
            fontSize: 22,
            color: "#a1a1aa",
          }}
        >
          <span>khayaliszade.vercel.app</span>
          <span>{identity.location}</span>
        </div>
      </div>
    ),
    size
  );
}
