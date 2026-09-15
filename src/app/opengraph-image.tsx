import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Nodex Labs — Chatbots, automações e sistemas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(
    join(process.cwd(), "public/assets/logo-on-black.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 6,
            width: 120,
            background: "#e10600",
          }}
        />
        <img src={logoSrc} width={445} height={102} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: 44,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Chatbots, automações e sistemas.
          </div>
          <div
            style={{
              color: "#8f8f8f",
              fontSize: 26,
              fontWeight: 400,
              lineHeight: 1.35,
            }}
          >
            Engenharia e IA no mesmo time.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
