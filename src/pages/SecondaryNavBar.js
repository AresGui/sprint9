import React from 'react'
import { Link } from 'react-router-dom';

const SecondaryNavBar = () => {
    return (
        <div className='NavWrapper'>
            <div className="Logo">
                <Link to='/Home'>FILMFLIX</Link>
            </div>
            <div className='RegisterWrapper'>
                <Link to='/Movies'>MOVIES</Link>
                <Link to='/Series'>SERIES</Link>
            </div>
        </div>
    )
}

export default SecondaryNavBar;