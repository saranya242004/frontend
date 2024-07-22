import React, { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import './Register.css';


function Register() {
    const [empId, setEmpId] = useState('');
    const [empName, setEmpName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            await authService.register(empId, empName, emailId, password, confirmPassword);
            alert("Registration successful");
            navigate('/login');
        } catch (error) {
            alert("Error registering");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Employee ID" value={empId} onChange={(e) => setEmpId(e.target.value)} required />
                <input type="text" placeholder="Employee Name" value={empName} onChange={(e) => setEmpName(e.target.value)} required />
                <input type="email" placeholder="Email ID" value={emailId} onChange={(e) => setEmailId(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
