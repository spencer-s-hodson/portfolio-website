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
    join(process.cwd(), "app/assets/Poppins-Bold.ttf"),
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
          fontFamily: "Poppins",
          fontSize: 22,
          fontWeight: 700,
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
          name: "Poppins",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
