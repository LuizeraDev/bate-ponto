import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import RegisterCompany from '../pages/RegisterCompany';
import ProtectedRoutes from '../auth/ProtectedRoutes';


function Router() {
    return( 
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <Login/>} />
                <Route path="/register/step-1" element={ <Register/> } />
                <Route path="/register/step-2" element={ <RegisterCompany/> } />
                <Route element={ <ProtectedRoutes/> }>
                    <Route path="/" element={ <Dashboard/> } />
                    <Route path="/profile" element={ <Profile/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;