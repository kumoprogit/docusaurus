// src/pages/login.jsx
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // ここで外部認証サービスと連携する（例：Rolipop / Firebase）
    // 認証成功したら Cookie や localStorage にトークンを保存する
    setMessage('ログイン処理を実行しました（ここに認証処理を追加）');
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', textAlign: 'center' }}>
      <h1>ログイン</h1>

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 16 }}>
          <input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: 10 }}>
          ログイン
        </button>
      </form>

      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </div>
  );
}
