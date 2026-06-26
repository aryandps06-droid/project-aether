import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Project AETHER",
    short_name: "AETHER",
    description: "Aryan's AI-inspired portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#DC2626",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}