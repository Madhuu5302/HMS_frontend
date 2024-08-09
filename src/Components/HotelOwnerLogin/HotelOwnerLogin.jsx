import React, { useState } from 'react';
import axios from 'axios';
 
const HotelOwnerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', { username, password });
      const { access, refresh,role } = response.data;
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      localStorage.setItem('role',role)
      // Redirect based on role
      if (response.data.role === 'hotel_owner') {
        window.location.href = '/hotel_owner-dashboard';
      } else {
        alert('Unauthorized');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };
 
  return (
<div>
<h2>Admin Login</h2>
<input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
<input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
<button onClick={handleLogin}>Login</button>
</div>
  );
};
 
export default HotelOwnerLogin;