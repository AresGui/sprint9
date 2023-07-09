import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainNavBar from '../../navigation/components/MainNavBar/MainNavBar';
import { Background, Button, MainContainer, MainDiv } from './LandingPage.styles';

function LandingPage() {

    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/Signup');
    }

    return (
        <>
            <Background>
                <MainNavBar />
                <MainContainer>
                    <MainDiv>
                        <p>Iconic, award-winning series, movies, and more</p>
                        <p>€6.95/month</p>
                        <p>Cancel anytime</p>
                        <Button onClick={handleButton}>Sign up now</Button>
                    </MainDiv>
                </MainContainer>
            </Background >
        </>
    )
}

export default LandingPage