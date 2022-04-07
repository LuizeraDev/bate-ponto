import { Navigate, Outlet } from "react-router";
import * as jose from 'jose';

const useAuth = () => {
    const user = {
        token: localStorage.getItem('token'),
        refreshToken: localStorage.getItem('refreshToken')
    };

    if (user.token && user.refreshToken) {
        const validateToken = jose.decodeJwt(user.token);
        
        localStorage.setItem('userId', validateToken.userId);
        
        let isExpired = true; 

        const dateNow = new Date().getTime();
        const convert = dateNow.toString().slice(0, -3);
    
        if (validateToken.exp > parseInt(convert)) {
            isExpired = false;
        }
        
        return isExpired;
    }

    return false;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ?  <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoutes;