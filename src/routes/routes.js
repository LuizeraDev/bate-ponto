import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

function Router() {
    return( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login/>} />
                <Route path="/register" element={ <Register/> } />
                <Route path="/dashboard" element={ <Dashboard/> } />
                <Route path="/profile" element={ <Profile/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;