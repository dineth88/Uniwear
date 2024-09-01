import { useState, useEffect } from 'react';
import './SignUp.css';
import '../../index.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; // Ensure to import the CSS for the Dropdown component
import { useNavigate } from 'react-router-dom';

export default function SignUp({ setShowNav }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [university, setUniversity] = useState('');
    const [indexNumber, setIndexNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setShowNav(false);
    }, [setShowNav]);

    const options = [
        { value: 'UOV', label: 'University of Vavuniya' },
        { value: 'UOP', label: 'University of Peradeniya' },
        { value: 'UOC', label: 'University of Colombo' },
        { value: 'UOJ', label: 'University of Jaffna' },
        { value: 'UOR', label: 'University of Ruhuna' },
        { value: 'UOK', label: 'University of Kelaniya' },
        { value: 'UOM', label: 'University of Moratuwa' },
        { value: 'USJ', label: 'University of Sri Jayawardenepura' },
        { value: 'RUSL', label: 'Rajarata University of Sri Lanka' },
        { value: 'EUSL', label: 'Eastern University of Sri Lanka' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous error message

        // Validate form fields
        if (!firstName || !lastName || !university || !indexNumber || !email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    firstName: firstName,
                    indexNo: indexNumber,
                    lastName: lastName,
                    password: password,
                    university: university
                })
            });
            if (response.ok) {
                const data = await response.text();
                if (data === 'New user added') {
                    setShowNav(true); // Show navigation bar after successful registration
                    navigate('/UniWear/');
                } else {
                    setError('Error signing up user.');
                }
            } else {
                setError('Error signing up user.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div className="login-div">
                <div className='card login-card'>
                    <h2>Sign Up</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="name-fields">
                            <div className="first-name">
                                <label htmlFor="firstName" className="email">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder='First Name'
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="last-name">
                                <label htmlFor="lastName" className="email lname">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder='Last Name'
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <label htmlFor="university" className="email">University</label>
                        <Dropdown
                            options={options}
                            onChange={(option) => setUniversity(option.value)}
                            value={options.find(option => option.value === university)}
                            placeholder="Select an option"
                            className="form-control"
                        />
                        <label htmlFor="indexNumber" className="email">Index Number</label>
                        <input
                            type="text"
                            id="indexNumber"
                            name="indexNumber"
                            placeholder='Type your Index Number'
                            className="form-control"
                            value={indexNumber}
                            onChange={(e) => setIndexNumber(e.target.value)}
                            required
                        />
                        <label htmlFor="email" className="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Type your Email'
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className="email">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Type your Password'
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <center>
                            <button type="submit" className='btnmargin'>Sign Up</button>
                            <p className='textmargin'>Already have an Account? <a href="./login">Log In</a></p>
                        </center>
                    </form>
                    {error && <span className="error-message">{error}</span>}
                </div>
            </div>
        </>
    );
}
