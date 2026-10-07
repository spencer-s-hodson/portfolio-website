import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function Icon() {
  const fontData = await readFile(
    join(process.cwd(), "app/assets/BricolageGrotesque-ExtraBold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ff5a1f",
          color: "#ffffff",
          fontFamily: "Bricolage",
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        S
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bricolage",
          data: fontData,
          weight: 800,
          style: "normal",
        },
      ],
    },
  );
}
