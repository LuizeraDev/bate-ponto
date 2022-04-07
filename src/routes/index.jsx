import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import RegisterCompany from '../pages/RegisterCompany';


function Router() {
    return( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Dashboard/> } />
                <Route path="/login" element={ <Login/>} />
                <Route path="/register/step-1" element={ <Register/> } />
                <Route path="/register/step-2" element={ <RegisterCompany/> } />
                <Route path="/profile" element={ <Profile/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;