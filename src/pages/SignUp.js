import React, { useState, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedContext } from './AuthenticatedContext';
import MainNavBar from './MainNavBar/MainNavBar';

function SignUp() {
    /* const [isAuthenticated, setIsAuthenticated] = useContext(AuthenticatedContext); */
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthenticatedContext);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                console.log(userCredential);
                //set isAuthenticated to true
                setIsAuthenticated(true);
                //redirect to Home
                navigate('/Home');
            }).catch((error) => {
                console.log(error);
            })
        console.log(`email: ${email} Pass: ${pass}`);
    }

    //redirect to sign in if the user has already been registered
    const redirectButton = () => {
        navigate("/Signin");
    }

    return (
        <div>
            <MainNavBar />
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='Full name' id="name" name="name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********' id="password" name="password" />
                <button type="submit">Sign up</button>
            </form>
            <p>Have you already signed up?</p>
            <button onClick={redirectButton}>Sign in here</button>
        </div>
    )
}

export default SignUp;