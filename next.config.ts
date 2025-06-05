import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      // ここに許可したい外部ホスト名を列挙します
      'via.placeholder.com',
      // もし他にimagesドメインを使うなら、
      // 'example.com',
      // 'another-domain.net',
    ],
  },
};

export default nextConfig;
