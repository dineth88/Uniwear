import { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login({ setShowNav }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setShowNav(false); // Hide the navigation bar when the Login component mounts
    }, [setShowNav]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous error message

        try {
            const response = await fetch(`http://localhost:8080/user/${email}`);
            if (response.ok) {
                const data = await response.text();
                if (data === password) {
                    navigate('/UniWear/');
                } else {
                    setError('Incorrect password');
                }
            } else {
                setError('User not found');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='login-div'>
            <div className='card login-card'>
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label className="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="form-control">Login</button>
                </form>
                {error && <span className="error-message">{error}</span>}
            </div>
        </div>
    );
}
