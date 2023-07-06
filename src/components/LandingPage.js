import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainNavBar from './MainNavBar/MainNavBar';

function LandingPage() {

    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/Signup');
    }

    return (
        <div>
            <MainNavBar />
            <p>Iconic, award-winning series, movies, and more</p>
            <p>€6.95/month</p>
            <p>Cancel anytime</p>
            <button onClick={handleButton}>Sign up now</button>
        </div>
    )
}

export default LandingPage