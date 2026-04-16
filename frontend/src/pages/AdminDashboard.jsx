import React, { useEffect, useState, useContext } from 'react';
import API from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  // 1. Fetch Users logic
  const fetchUsers = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${user.token}` }
      };
      const { data } = await API.get('/', config);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.token) {
      fetchUsers();
    }
  }, [user.token]);

  // 2. Delete User logic
  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const config = {
          headers: { Authorization: `Bearer ${user.token}` }
        };
        await API.delete(`/${id}`, config);
        
        // Remove the user from the state so the UI updates immediately
        setUsers(users.filter((u) => u.id !== id));
        alert("User successfully removed from MySQL");
      } catch (error) {
        alert(error.response?.data?.message || "Delete failed");
      }
    }
  };

  if (loading) return <p className="loading-text">Loading users...</p>;

  return (
    <div className="admin-dashboard">
      <h3>System Users (Admin View)</h3>
      <table className="user-table">
        <thead>
            <tr>
                <th>🆔 ID</th>
                <th>👤 Name</th>
                <th>📧 Email</th>
                <th>🛡️ Role</th>
                <th>📅 Joined</th>
                <th>⚙️ Actions</th>
            </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <span className={`badge ${u.role}`}>{u.role}</span>
              </td>
              <td>{new Date(u.createdAt).toLocaleDateString()}</td>
              <td>
                {/* Prevent admin from seeing a delete button for themselves */}
                {u.id !== user.id ? (
                  <button 
                    className="delete-btn" 
                    onClick={() => deleteHandler(u.id)}
                  >
                    🗑️ Delete
                  </button>
                ) : (
                  <span className="self-tag">(You)</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;