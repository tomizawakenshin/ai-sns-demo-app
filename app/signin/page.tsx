// ファイルパス: app/signin/page.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'kenshin.8799@gmail.com' && password === 'Kenshin0929') {
      router.push('/home');
    } else {
      setError('メールアドレスまたはパスワードが正しくありません。');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 16px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          width: '100%',
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '24px', color: '#000' }}>
          サインイン
        </h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#000',
            }}
          >
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            required
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '16px',
              border: '1px solid #333',
              borderRadius: '4px',
              fontSize: '16px',
              color: '#000',
            }}
          />

          <label
            htmlFor="password"
            style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#000',
            }}
          >
            パスワード
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            required
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '16px',
              border: '1px solid #333',
              borderRadius: '4px',
              fontSize: '16px',
              color: '#000',
            }}
          />

          {error && (
            <p style={{ color: 'red', marginBottom: '16px', fontSize: '14px' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#0070f3',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            サインイン
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <Link
            href="/signup"
            style={{
              display: 'inline-block',
              padding: '12px 0',
              width: '100%',
              border: '1px solid #0070f3',
              borderRadius: '4px',
              color: '#0070f3',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}