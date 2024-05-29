import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/register', { email, password });
      alert(res.data);
    } catch (err) {
      alert('Error registering');
    }
  };

  return (
    <div>
      <h2>Register Here</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter Email Here" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Enter Password Here" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
