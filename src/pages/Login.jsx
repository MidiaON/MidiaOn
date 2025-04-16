// Página: Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validação local (sem backend)
    if (username === 'lider' && password === 'senha123') {
      navigate('/dashboard-lider');
    } else if (username === 'pastor' && password === 'senha456') {
      navigate('/dashboard-pastor');
    } else if (username === 'membro' && password === 'senha789') {
      navigate('/dashboard-membro');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      <h2>Login - MídiaON</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
