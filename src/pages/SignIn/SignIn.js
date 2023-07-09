import { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedContext } from '../../navigation/AuthenticatedContext';
import MainNavBar from '../../navigation/components/MainNavBar/MainNavBar';

function SignIn() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthenticatedContext);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
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

    //redirect to sign up
    const redirectButton = () => {
        navigate("/Signup");
    }

    return (
        <div>
            <MainNavBar />
            <h1>SIGN IN</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********' id="password" name="password" />
                <button type="submit">Sign in</button>
            </form>
            <p>Yo don't have an account?</p>
            <button onClick={redirectButton}>Sign up here</button>
        </div>
    )
}

export default SignIn;
