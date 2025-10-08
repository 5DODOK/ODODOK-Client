import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  eslint: {
    // 빌드 시 ESLint 에러만 체크하고 warning은 무시
    ignoreDuringBuilds: false,
  },
  typescript: {
    // 빌드 시 타입 체크 (에러만 체크)
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
