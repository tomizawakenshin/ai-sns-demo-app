// ファイルパス: next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 既存の images.domains 設定
  images: {
    domains: [
      'via.placeholder.com',
      // 必要に応じて他のホストを追加できます
      // 'example.com',
      // 'another-domain.net',
    ],
  },

  // ルート (/) にアクセスがあったら /signin にリダイレクトする
  async redirects() {
    return [
      {
        source: '/',           // ルートにアクセスしたとき
        destination: '/signin',// /signin に転送する
        permanent: false,      // 一時リダイレクト (ブラウザキャッシュに残さない)
      },
    ];
  },
};

export default nextConfig;