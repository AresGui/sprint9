import React from 'react'
import { Link } from 'react-router-dom';
import './MainNavBar.css';

const MainNavBar = () => {
    return (
        <div className='NavWrapper'>
            <div className="Logo">
                <h1>FILMFLIX</h1>
            </div>
            <div className='RegisterWrapper'>
                <Link to='/Signin'>SIGN IN</Link>
                <Link to='/Signup'>SIGN UP</Link>
            </div>
        </div>
    )
}

export default MainNavBar;