// In Login.js
import React, { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [empId, setEmpId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await authService.login(empId, password);
            navigate('/update-timesheet', { state: { empId } });
        } catch (error) {
            alert("Error logging in");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Employee ID" value={empId} onChange={(e) => setEmpId(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
