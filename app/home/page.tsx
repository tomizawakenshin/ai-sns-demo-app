// ファイルパス: app/home/page.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';

type Idea = {
  id: number;
  title: string;
  images: string[];
  text: string;
  posted: boolean; // ← 追加: ポスト済みかどうかのフラグ
};

export default function HomePage() {
  // ダミーのカウントダウン表示
  const [countdown, setCountdown] = useState('06:28:57');

  // アイデア一覧を state で管理し、テキスト部分を編集可能かつ、posted 状態も管理
  const [ideas, setIdeas] = useState<Idea[]>([
    {
      id: 1,
      title: 'ポストアイデア1: “Harriet”フリルワンピース',
      text:
        'クラシカルな魅力漂るブラック×ホワイトのワンピース🎀アクセサリーも合わせやすく、ハニエルでもお使いいただけるシルエットに。後ろのリボンがさりげなく可愛さをプラス💓今すぐ着たくなる一着です！',
      images: [
        '/images/idea1-1.jpg',
        '/images/idea1-2.jpg',
        '/images/idea1-3.jpg',
        '/images/idea1-4.jpg',
      ],
      posted: false, // 初期はまだポストしていない
    },
    {
      id: 2,
      title: 'ポストアイデア2: お花モチーフ＆リボンミニハット',
      text:
        '華やかな美しさを演出するミニハットが新登場！✨ 黒を基調としたゴシックな雰囲気がクール。花やリボンのボリューム感が魅力的で、クリップ式で簡単装着。コーデのアクセントにぴったりです。',
      images: [
        '/images/idea2-1.jpg',
        '/images/idea2-2.jpg',
        '/images/idea2-3.jpg',
        '/images/idea2-4.jpg',
      ],
      posted: false,
    },
    {
      id: 3,
      title: 'ポストアイデア3: レースアップシューズ “Evangeline”',
      text:
        'クラシカルなレースアップデザインにモダンなエッセンスを加えた一足。黒光沢のレザーにシルバーのアイレットが映え、どんなコーデとも相性◎。歩きやすさも追求したソールで、一日中楽しく過ごせます。',
      images: [
        '/images/idea3-1.jpg',
        '/images/idea3-2.jpg',
        '/images/idea3-3.jpg',
        '/images/idea3-4.jpg',
      ],
      posted: false,
    },
  ]);

  // テキスト編集時のハンドラ
  const handleTextChange = (id: number, newText: string) => {
    setIdeas((prev) =>
      prev.map((idea) =>
        idea.id === id ? { ...idea, text: newText } : idea
      )
    );
  };

  // 「ポストする」ボタン押下時に該当アイデアの posted を true にするハンドラ
  const handlePostClick = (id: number) => {
    setIdeas((prev) =>
      prev.map((idea) =>
        idea.id === id ? { ...idea, posted: true } : idea
      )
    );
  };

  return (
    <div
      style={{
        backgroundColor: '#1f1f1f',
        color: '#fff',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
      }}
    >
      {/* ヘッダー */}
      <header
        style={{
          backgroundColor: '#333',
          padding: '12px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {/* タイトル行 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1 style={{ fontSize: '20px', margin: 0 }}>任せて広報さん</h1>
          <button
            style={{
              backgroundColor: '#555',
              color: '#fff',
              padding: '6px 12px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            サインアウト
          </button>
        </div>

        {/* カウントダウン & アカウント */}
        <div
          style={{
            fontSize: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <span>次のアイデア提案まで: {countdown}</span>
          <span style={{ fontSize: '12px' }}>
            ポストするXアカウント:{' '}
            <a
              href="https://x.com/XZvMsu8Xd686224"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1DA1F2', textDecoration: 'underline' }}
            >
              https://x.com/XZvMsu8Xd686224
            </a>
          </span>
        </div>

        {/* ナビゲーション（見た目のみ） */}
        <nav style={{ display: 'flex', gap: '8px' }}>
          <Link
            href="/home"
            style={{
              flex: 1,
              padding: '8px 0',
              backgroundColor: '#0070f3',
              color: '#fff',
              textAlign: 'center',
              borderRadius: '4px',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            ホーム
          </Link>
          <Link
            href="/report"
            style={{
              flex: 1,
              padding: '8px 0',
              backgroundColor: '#555',
              color: '#fff',
              textAlign: 'center',
              borderRadius: '4px',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            レポート
          </Link>
        </nav>
      </header>

      {/* アイデアリスト */}
      <main style={{ padding: '12px 16px' }}>
        {ideas.map((idea) => (
          <div
            key={idea.id}
            style={{
              backgroundColor: '#2a2a2a',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px',
            }}
          >
            {/* タイトル */}
            <h2
              style={{
                fontSize: '16px',
                margin: '0 0 8px 0',
                color: '#fff',
              }}
            >
              {idea.title}
            </h2>

            {/* 説明用テキストは textarea に変更し、編集可能に */}
            <textarea
              value={idea.text}
              onChange={(e) => handleTextChange(idea.id, e.target.value)}
              rows={4}
              style={{
                width: '100%',
                backgroundColor: '#3a3a3a',
                color: '#fff',
                border: '1px solid #555',
                borderRadius: '4px',
                padding: '8px',
                fontSize: '14px',
                resize: 'vertical',
                marginBottom: '8px',
              }}
            />

            {/* 画像＋チェックボックスの一覧 */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                paddingBottom: '4px',
              }}
            >
              {idea.images.map((src, idx) => (
                <label
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: '80px',
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      marginBottom: '4px',
                    }}
                  />
                  <img
                    src={src}
                    alt={`idea-${idea.id}-img-${idx}`}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      backgroundColor: '#555',
                    }}
                  />
                </label>
              ))}
            </div>

            {/* 「ポストする」ボタン */}
            <button
              onClick={() => handlePostClick(idea.id)}
              style={{
                marginTop: '12px',
                width: '100%',
                padding: '10px 0',
                backgroundColor: idea.posted ? '#444' : '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: idea.posted ? 'default' : 'pointer',
              }}
              disabled={idea.posted} // すでにポスト済みなら押せないように
            >
              {idea.posted ? 'ポスト済み' : 'ポストする'}
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}