import React from 'react'
import { useAuth } from '../../contexts/roleContext';
const StudentLayout = () => {
    const { user, logout } = useAuth();

    if (user && user.role === 'user') {
      return (
        <div>
          <h1>Welcome, User!</h1>
          <button onClick={logout}>Logout</button>
        </div>
      );
    }
  
    return <div>Access denied. Please log in as a user.</div>;
}

export default StudentLayout