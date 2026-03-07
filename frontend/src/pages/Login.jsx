import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
  const { user, login, loading } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Already logged in → go home
  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  if (loading) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login(username, password);

    if (!res.success) {
      setError(res.error);
    }
  };

  return (
    <main className="login">
      {/* Background */}
      <div className="login__bg" />
      <div className="login__overlay" />

      {/* Card */}
      <div className="login__card">
        <div className="login__brand">
          <span className="login__brand-icon">⬡</span>
          <span className="login__brand-text">
            Housing<span className="login__brand-accent">Trends</span>
          </span>
        </div>

        <div className="login__divider" />

        <h1 className="login__title">Welcome Back</h1>
        <p className="login__subtitle">
          Sign in to explore housing market analytics, price trends, and renovation insights.
        </p>

        {/* LOGIN FORM */}
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="login__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="login__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="login__error">{error}</p>}

          <button type="submit" className="login__btn">
            Login
          </button>
        </form>

        <p className="login__terms">
          By signing in, you agree to use this app for housing data exploration only.
        </p>

        {/* Decorative stats */}
        <div className="login__stats">
          {[
            { value: '21K+', label: 'Properties' },
            { value: '9', label: 'Zip Groups' },
            { value: '31', label: 'Data Points' },
          ].map(({ value, label }) => (
            <div key={label} className="login__stat">
              <span className="login__stat-value">{value}</span>
              <span className="login__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}