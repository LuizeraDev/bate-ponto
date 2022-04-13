import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from '../auth/ProtectedRoutes';
import Appointments from '../pages/Appointments';
import Colaborators from '../pages/Colaborators';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import RegisterCompany from '../pages/RegisterCompany';
import Forgot from '../pages/Forgot';
import NotFound from '../pages/NotFound';

function Router() {
    return( 
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <Login/>} />
                <Route path="/forgot" element={ <Forgot/>} />
                <Route path="/register/step-1" element={ <Register/> } />
                <Route path="/register/step-2" element={ <RegisterCompany/> } />
                <Route element={ <ProtectedRoutes/> }>
                    <Route path="/" element={ <Dashboard/> } />
                    <Route path="/profile" element={ <Profile/> } />
                    <Route path="/appointments" element={ <Appointments/> } />
                    <Route path="/colaborators" element={ <Colaborators/> } />
                </Route>
                <Route path="*" element={ <NotFound/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;