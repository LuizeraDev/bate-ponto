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
        
        let isExpired = false; 

        const dateNow = new Date().getTime();
        const actualTime = dateNow.toString().slice(0, -3);
    
        if (validateToken.exp > parseInt(actualTime)) {
            isExpired = true;
        }
        
        return isExpired;
    }

    return false;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ?  <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;