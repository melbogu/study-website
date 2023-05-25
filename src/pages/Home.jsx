import * as React from 'react';

import Login from '../components/Login';

export default function Home() {
    return (
        <div>
            <div className='alignHeader'>
                <h1 className="header">Study World</h1>
                <img src="assets/img/logo2.jpg" alt="logo" className="headerImage"/>
            </div>
            <Login />
        </div>
    );
}