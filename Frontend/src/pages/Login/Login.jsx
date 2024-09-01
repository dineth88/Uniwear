import { useState } from 'react';
import './Login.css';
import '../../index.css';
import { useNavigate } from 'react-router-dom';

export default function Login({ setShowNav, setIsLoggedIn, setUserId }) { // Add setUserId as a prop
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous error message

        try {
            const response = await fetch(`http://localhost:8080/user/${email}`);
            if (response.ok) {
                const data = await response.text();
                if (data === password) {
                    // Fetch user ID
                    const idResponse = await fetch(`http://localhost:8080/user/id/${email}`);
                    if (idResponse.ok) {
                        const userId = await idResponse.text();
                        setUserId(userId); // Store the user ID
                    }

                    setIsLoggedIn(true); // Update login state to true
                    setShowNav(true); // Show navigation bar after successful login
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
        <div className="login-div">
            <div className='card login-card'>
                <h2>Log In</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Type your Email'
                        required
                    />
                    <label htmlFor="password" className="email">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Type your Password'
                        required
                    />
                    <p className='pwdalign'><a href='#'>Forgot Password?</a></p>
                    <button type="submit" className="form-control btnmargin">Log In</button>
                </form>
                {error && <span className="error-message">{error}</span>}
                <div className='textmargin'>
                    <p>Create New Account?</p>
                    <a href="./signup">Sign Up</a>
                </div>
            </div>
        </div>
    );
}
