import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Home from '../components/Home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Movies from '../components/Movies/Movies';
import Series from '../components/Series/Series';

import { AuthenticatedContext } from '../components/AuthenticatedContext';


const RouterConfig = () => {
    /* const [isAuthenticated, setIsAuthenticated] = useContext(AuthenticatedContext); */
    const { isAuthenticated } = useContext(AuthenticatedContext);

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route
                    path="/Home"
                    element={isAuthenticated ? (<Home />) : (<Navigate to="/" replace />)}
                />
                <Route path="/Home" element={<Home />} />
                <Route path="/Signin" element={<SignIn />} />
                <Route path="/Signup" element={<SignUp />} />
                <Route path='/Movies' element={<Movies />}></Route>
                <Route path='/Series' element={<Series />} ></Route>
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </div>
    )
}

export default RouterConfig
