import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Home from '../components/Home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Movies from '../components/Movies/Movies';
import Series from '../components/Series/Series';

import PrivateRoute from '../components/PrivateRoute';

const RouterConfig = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <PrivateRoute auth={isAutheticated} path="/Home" element={<Home />} />
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
