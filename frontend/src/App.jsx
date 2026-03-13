import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import './App.css';

function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="App">
      <nav>
        <h1>Identity Manager</h1>
        {user && <button onClick={logout}>Logout</button>}
      </nav>

      <main>
        {user ? (
          <div>
            <h2>Welcome, {user.name}!</h2>
            <p>Your Token: {user.token.substring(0, 20)}...</p>
          </div>
        ) : (
          <Login />
        )}
      </main>
    </div>
  );
}

export default App;