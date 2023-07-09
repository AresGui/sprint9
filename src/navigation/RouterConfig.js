import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Movies from '../pages/Movies/Movies';
import Series from '../pages/Series/Series';

import { AuthenticatedContext } from '../navigation/AuthenticatedContext';


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
