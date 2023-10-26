import React from 'react'
import { useAuth } from '../../contexts/roleContext';

const AdminLayout = () => {
    const { user, logout } = useAuth();

    if (user && user.role === 'admin') {
      return (
        <div>
          <h1>Welcome, Admin!</h1>
          <button onClick={logout}>Logout</button>
        </div>
      );
    }
  
    return <div>Access denied. Please log in as an admin.</div>;
  
}

export default AdminLayout