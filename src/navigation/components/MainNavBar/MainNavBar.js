import React, { useState } from 'react'
import { NavbarContainer, Logo, LinksContainer, LiLeft, LiRight, StyledLink, ToggleButton, ToggleBar } from './MainNavBar.styles';

const MainNavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <NavbarContainer>
            <div>
                <Logo href="/">FILMFLIX</Logo>
            </div>
            <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} href="#">
                <ToggleBar></ToggleBar>
                <ToggleBar></ToggleBar>
                <ToggleBar></ToggleBar>
            </ToggleButton>
            <LinksContainer isOpen={isMenuOpen}>
                <LiLeft><StyledLink href="/Signin">SIGN IN</StyledLink></LiLeft>
                <LiRight><StyledLink href="/Signup">SIGN UP</StyledLink></LiRight>
            </LinksContainer>
        </NavbarContainer>
    )
}

export default MainNavBar;