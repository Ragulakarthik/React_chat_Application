import React, { useState } from 'react';
import './login.css';
import loginpic from './loginpic.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login({ onLoginSuccess }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onLoginSuccess();
        }
    };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const toggleShowPassword = () => setShowPassword(!showPassword);

    const validateForm = () => {
        const newErrors = {};

        if (!username) {
            newErrors.username = "Username can't be empty.";
        } else if (!/^[A-Za-z]+$/.test(username)) {
            newErrors.username = 'Username can only contain alphabetic characters.';
        }

        if (!password) {
            newErrors.password = "Password can't be empty.";
        } else if (
            password.length < 8 ||
            !/[A-Z a-z 0-9 !@#$%^&* ]/.test(password)
        ) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div className="login-container">
            <img src={loginpic} alt="Logo" />
            <h3>Join the Fun</h3>
            <div className="form-section">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input placeholder='Username' type="text" value={username} onChange={handleUsernameChange} className={errors.username ? 'error' : ''} />
                        {errors.username && <span className="error-message">{errors.username}</span>}
                    </div>
                    <div className="input-group">
                        <div className="password-wrapper">
                            <input placeholder='************' type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} className={errors.password ? 'error' : ''} />
                            <div className="eye-icon" onClick={toggleShowPassword} aria-hidden="true">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    );
}
export default Login;