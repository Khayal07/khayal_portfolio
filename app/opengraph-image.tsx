import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = `${portfolio.identity.name} — ${portfolio.identity.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const { identity, hero } = portfolio;
  const [display, mono] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/BricolageGrotesque-500.woff")),
    readFile(join(process.cwd(), "app/fonts/GeistMono-500.woff")),
  ]);

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
          background: "#F3EDE2",
          color: "#1F1A15",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "flex-end", fontFamily: "Mono", fontSize: 40, color: "#1F1A15" }}>
            khayal
            <div style={{ width: 24, height: 6, marginLeft: 2, marginBottom: 9, background: "#B4532A" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#6B6157" }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#3E9B5B" }} />
            {hero.status}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontFamily: "Bricolage", letterSpacing: -3 }}>{identity.name}</div>
          <div style={{ marginTop: 8, fontSize: 44, fontFamily: "Bricolage", color: "#B4532A" }}>{identity.title}</div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#6B6157", maxWidth: 900, lineHeight: 1.4 }}>
            {identity.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #E2D8C6",
            paddingTop: 28,
            fontSize: 22,
            color: "#6B6157",
          }}
        >
          <span>khayaliszade.vercel.app</span>
          <span>{identity.location}</span>
        </div>
      </div>
    ),
    { ...size, fonts: [
        { name: "Bricolage", data: display, weight: 500, style: "normal" },
        { name: "Mono", data: mono, weight: 500, style: "normal" },
      ], }
  );
}
