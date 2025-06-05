// ファイルパス: app/report/page.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

type PostReport = {
  id: number;
  date: string;
  text: string;
  metrics: {
    edit: number;
    repost: number;
    quote: number;
    likes: number;
    impressions: number;
    bookmarks: number;
  };
};

export default function ReportPage() {
  const pathname = usePathname(); // 現在のURLパスを取得

  // ダミーの投稿データ
  const [reports] = useState<PostReport[]>([
    {
      id: 1,
      date: '2024/10/23 08:32',
      text:
        '音楽が奏でる優雅な世界へ誘うクラシックなジャンパースカート！アイボリー×ブラウンの配色が上品で、スカート裾のピアノ柄がアクセントに。華麗なデザインで、スタンドカラー×フリル×レースの相性抜群！リボンも可愛らしさを演出します💗',
      metrics: {
        edit: 0,
        repost: 0,
        quote: 0,
        likes: 9,
        impressions: 120,
        bookmarks: 0,
      },
    },
    {
      id: 2,
      date: '2024/10/23 08:23',
      text:
        'Metamorphoseの青いバラがかわいいジャンパースカート！深いピンクに輝く小さなバラが映え、繊細なレースがアクセント。ふんわりとしたシルエットで、まるで花園の中にいるような気分に💗',
      metrics: {
        edit: 0,
        repost: 0,
        quote: 0,
        likes: 17,
        impressions: 200,
        bookmarks: 0,
      },
    },
    {
      id: 3,
      date: '2024/10/23 08:17',
      text:
        'ステンドグラスの美しさをワンピースに。黒地に映える幻想的なデザインと、シフォン素材の繊細な袖感。Aラインシルエットで、バニエ無しでも美しく、パールやチューリップ付きで華麗な雰囲気を演出。レースの繊細さもたまりません💗',
      metrics: {
        edit: 0,
        repost: 0,
        quote: 0,
        likes: 3,
        impressions: 85,
        bookmarks: 0,
      },
    },
    {
      id: 4,
      date: '2024/10/22 19:55',
      text:
        '華やかな黒のミニハットが登場！パールとレースで神秘的な雰囲気に。ゴシックな紋章風で、クリップ装着で簡単。レースの繊細な装飾が魅力的です💗',
      metrics: {
        edit: 0,
        repost: 0,
        quote: 0,
        likes: 5,
        impressions: 60,
        bookmarks: 0,
      },
    },
    {
      id: 5,
      date: '2024/10/22 07:45',
      text:
        'SheglitのCordeliaシリーズ、グレンチェックのリボンボレロが新登場。クラシカルな雰囲気がハイウエストスカートやジャンパースカートと相性抜群！リボンを取り外し可能で2WAY仕様。袖のボタンもオシャレなアクセントに◎',
      metrics: {
        edit: 0,
        repost: 0,
        quote: 0,
        likes: 51,
        impressions: 340,
        bookmarks: 1,
      },
    },
  ]);

  // ダミーのAIフィードバックテキスト
  const aiFeedback =
    'あら、素晴らしい投稿ばかりね！特に印象的だったのは、10月22日のCordeliaシリーズのジャンパースカートの投稿ね。51いいねを獲得しているのは見事だわ。季節感が効いているし、「Sheglitらしさ」が表れた文章で、読者にイメージが伝わりやすいのがいいわ。\n\nこれからは、季節やイベントに合わせた投稿がもっと効果的かもしれないわね。例えば、クリスマスパーティーにぴったりのドレスとか、バレンタインデーにおすすめのコーデとか、そういう具体的なシチュエーションを提案すると、みんなの心に響くと思うわ。自然と想像が膨らんで、欲しくなっちゃうものね！';

  return (
    <div
      style={{
        backgroundColor: '#1f1f1f',
        color: '#fff',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
      }}
    >
      {/* ─── ヘッダー ───────────────────────────────────── */}
      <header
        style={{
          backgroundColor: '#333',
          padding: '12px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {/* タイトルとサインアウト */}
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
          <span>次のアイデア提案まで: 06:28:07</span>
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

        {/* ナビゲーション */}
        <nav style={{ display: 'flex', gap: '8px' }}>
          {/* /home のときだけ青、/report のときは白 */}
          <Link
            href="/home"
            style={{
              flex: 1,
              padding: '8px 0',
              backgroundColor:
                pathname === '/home' ? '#0070f3' : '#fff',
              color: pathname === '/home' ? '#fff' : '#000',
              textAlign: 'center',
              borderRadius: '4px',
              fontSize: '14px',
              textDecoration: 'none',
              fontWeight: pathname === '/home' ? 'bold' : 'normal',
            }}
          >
            ホーム
          </Link>

          {/* /report のときだけ青、その他は白 */}
          <Link
            href="/report"
            style={{
              flex: 1,
              padding: '8px 0',
              backgroundColor:
                pathname === '/report' ? '#0070f3' : '#fff',
              color: pathname === '/report' ? '#fff' : '#000',
              textAlign: 'center',
              borderRadius: '4px',
              fontSize: '14px',
              textDecoration: 'none',
              fontWeight: pathname === '/report' ? 'bold' : 'normal',
            }}
          >
            レポート
          </Link>
        </nav>
      </header>

      {/* ─── 投稿レポート一覧 ───────────────────────────────── */}
      <main style={{ padding: '12px 16px' }}>
        {reports.map((r) => (
          <div
            key={r.id}
            style={{
              backgroundColor: '#2a2a2a',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '20px',
            }}
          >
            {/* ─ 日時 & 区切り ─ */}
            <p
              style={{
                fontSize: '12px',
                color: '#aaa',
                margin: '0 0 8px 0',
              }}
            >
              {r.date}
            </p>
            <div
              style={{
                height: '1px',
                backgroundColor: '#444',
                margin: '0 0 12px 0',
              }}
            />

            {/* ─ 投稿テキスト ─ */}
            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 12px 0',
                whiteSpace: 'pre-wrap',
              }}
            >
              {r.text}
            </p>
            <div
              style={{
                height: '1px',
                backgroundColor: '#444',
                margin: '0 0 12px 0',
              }}
            />

            {/* ─ メトリクス ─ */}
            <div
              style={{
                backgroundColor: '#3a3a3a',
                borderRadius: '6px',
                padding: '12px',
              }}
            >
              {/* １行ずつラベルと数値を左右に並べる */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}
              >
                <span style={{ fontSize: '12px', color: '#ccc' }}>
                  いいね
                </span>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  {r.metrics.likes}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}
              >
                <span style={{ fontSize: '12px', color: '#ccc' }}>
                  インプレッション
                </span>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  {r.metrics.impressions}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}
              >
                <span style={{ fontSize: '12px', color: '#ccc' }}>
                  リポスト
                </span>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  {r.metrics.repost}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}
              >
                <span style={{ fontSize: '12px', color: '#ccc' }}>
                  引用
                </span>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  {r.metrics.quote}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}
              >
                <span style={{ fontSize: '12px', color: '#ccc' }}>
                  ブックマーク
                </span>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  {r.metrics.bookmarks}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '12px', color: '#ccc' }}>
                  編集
                </span>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  {r.metrics.edit}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* ─── AIフィードバック ───────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: '#333',
            borderRadius: '8px',
            padding: '12px',
            marginTop: '24px',
            position: 'relative',
          }}
        >
          {/* 吹き出しの白い背景 */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              color: '#000',
              padding: '12px',
              fontSize: '14px',
              lineHeight: '1.5',
              whiteSpace: 'pre-wrap',
              marginRight: '56px', // アバター分の余白
            }}
          >
            {aiFeedback}
          </div>

          {/* アバター画像（右下） */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
            }}
          >
            <Image
              src="/images/ai-avatar.jpg" 
              alt="AI Avatar"
              width={40}
              height={40}
              style={{
                borderRadius: '50%',       /* 丸くする */
                objectFit: 'cover',        /* 長方形でも中央を切り取って丸表示 */
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}