import { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import ForgotPassword from './pages/ForgotPassword'; // New Import
import ResetPassword from './pages/ResetPassword';   // New Import
import './App.css';

function App() {
  const { user, logout, loading } = useContext(AuthContext);
  
  // 1. Updated state to handle multiple authentication views
  // Options: 'login', 'register', 'forgot', 'reset'
  const [view, setView] = useState('login');

  if (loading) return <div className="loading">Checking session...</div>;

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Identity Manager</h1>
        {user && (
          <div className="nav-links">
            <span className="user-badge">{user.role.toUpperCase()}</span>
            <span>{user.email}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </div>
        )}
      </nav>

      <main>
        {user ? (
          <div className="dashboard">
            <header className="welcome-header">
              <h2>Welcome, {user.name}!</h2>
              <p>Status: <span className="success-text">Connected to MySQL</span></p>
            </header>

            {user.role === 'admin' ? (
              <section className="admin-section">
                <AdminDashboard />
              </section>
            ) : (
              <section className="user-section">
                <div className="status-card">
                  <h3>User Profile</h3>
                  <p><strong>Role:</strong> Standard User</p>
                  <p><strong>Your Token:</strong> <code>{user.token.substring(0, 25)}...</code></p>
                  <p className="hint">Note: Admin features are hidden for your role.</p>
                </div>
              </section>
            )}
          </div>
        ) : (
          <div className="auth-container">
            {/* 2. Dynamic View Rendering */}
            {view === 'login' && <Login />}
            
            {view === 'register' && (
              <Register setView={setView} />
            )}
            
            {view === 'forgot' && (
              <ForgotPassword setView={setView} />
            )}
            
            {view === 'reset' && (
              <ResetPassword setView={setView} />
            )}
            
            {/* 3. Navigation Buttons for Auth Views */}
            <div className="auth-nav">
              {view === 'login' && (
                <>
                  <button className="toggle-btn" onClick={() => setView('register')}>
                    Don't have an account? Register
                  </button>
                  <button className="forgot-link" onClick={() => setView('forgot')}>
                    Forgot Password?
                  </button>
                </>
              )}

              {(view === 'register' || view === 'forgot' || view === 'reset') && (
                <button className="toggle-btn" onClick={() => setView('login')}>
                  Back to Login
                </button>
              )}
              
              {view === 'forgot' && (
                <button className="toggle-btn reset-hint" onClick={() => setView('reset')}>
                  Already have a token? Reset here
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;