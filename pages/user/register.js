import Head from 'next/head';
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://next-market-mocha-omega.vercel.app//api/user/register',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert('ユーザ登録失敗');
    }
  };

  return (
    <div>
      <Head>
        <title>ユーザ登録</title>
      </Head>
      <h1 className="page-title">ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="名前"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="メールアドレス"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
          placeholder="パスワード"
          required
        />
        <button>登録</button>
      </form>
    </div>
  );
};

export default Register;
