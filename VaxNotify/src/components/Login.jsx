import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Login.css'; // Ensure this CSS file is created and linked

function Login() {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic
        console.log('Login attempted:', { emailOrPhone, password });
    };

    return (
        <div className="outer-box">
            <div className="inner-box">
                <header className="login-header">
                    <h1>Login</h1>
                </header>
                <form onSubmit={handleLogin}>
                    {/* Email or Mobile Number */}
                    <div className="mb-3">
                        <label htmlFor="emailOrPhone" className="form-label">Email or Mobile Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="emailOrPhone"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            placeholder="Enter Email or Mobile Number"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    {/* Registration Link */}
                    <div className="register-link">
                        <p>Don't have an account?? <a href="/Registration">Register</a></p> {/* Updated link to /login */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;


