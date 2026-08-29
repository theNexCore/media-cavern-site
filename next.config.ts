import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // CLAUDE.md is this project's hand-authored brief. `next dev` appends
  // its own <!-- nextjs-agent-rules --> block on every start unless this
  // is off. Keep it false so the file stays ours.
  agentRules: false,

  async redirects() {
    return [
      // Canonical route is /the-story, matching the THE STORY nav item.
      // /story is accepted so shorter links written elsewhere still land.
      { source: "/story", destination: "/the-story", permanent: false },
    ];
  },
};

export default nextConfig;
