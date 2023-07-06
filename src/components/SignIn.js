import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                console.log(userCredential);
                //redirect to Home
                navigate('/Home');
            }).catch((error) => {
                console.log(error);
            })
        console.log(`email: ${email} Pass: ${pass}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********' id="password" name="password" />
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default SignIn;
