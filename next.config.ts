import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure content directory files aren't bundled into the client
  serverExternalPackages: ["gray-matter"],
  // Strict mode for better React hygiene
  reactStrictMode: true,
  // Images from the domain itself only
  images: {
    remotePatterns: [],
  },
  // Redirect /feed to /feed.xml for convenience
  async redirects() {
    return [
      { source: "/feed", destination: "/feed.xml", permanent: true },
      { source: "/rss", destination: "/feed.xml", permanent: true },
    ];
  },
};

export default nextConfig;
