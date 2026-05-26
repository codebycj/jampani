import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Chaitanya Jampani";
  const client = searchParams.get("client") ?? "Senior Frontend Engineer";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c0b09",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#02b4b7",
            }}
          />
          <span style={{ color: "#9e9b95", fontSize: "16px" }}>jampani.dev</span>
        </div>

        {/* Content */}
        <div>
          <p style={{ color: "#02b4b7", fontSize: "18px", marginBottom: "20px", margin: "0 0 20px 0" }}>
            {client}
          </p>
          <h1
            style={{
              color: "#f0ede8",
              fontSize: "56px",
              fontWeight: 500,
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.02em",
              maxWidth: "800px",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "#5e5b57", fontSize: "15px" }}>
            Chaitanya Jampani — Senior Frontend Engineer
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#161512",
              border: "1px solid #252320",
              borderRadius: "8px",
              padding: "8px 16px",
            }}
          >
            <span style={{ color: "#9e9b95", fontSize: "13px" }}>Toronto · Open to work</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
