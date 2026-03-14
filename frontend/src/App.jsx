import { useContext, useState } from 'react'; // Added useState
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register'; // Import Register
import './App.css';

function App() {
  const { user, logout } = useContext(AuthContext);
  const [isRegistering, setIsRegistering] = useState(false); // Toggle state

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
          <div>
            {isRegistering ? <Register /> : <Login />}
            <button onClick={() => setIsRegistering(!isRegistering)} style={{marginTop: '10px'}}>
              {isRegistering ? "Back to Login" : "Don't have an account? Register"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;