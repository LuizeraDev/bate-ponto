import axios from 'axios';
import * as jose from 'jose';
import { Navigate, Outlet } from "react-router";

var teste;

const verifyToken = () => {
    const user = {
        token: localStorage.getItem('token'),
        refreshToken: localStorage.getItem('refreshToken')
    };

    if (user.token && user.refreshToken) {
        const validateToken = jose.decodeJwt(user.token);

        localStorage.setItem('userId', validateToken.userId);

        const dateNow = new Date().getTime();
        const actualTime = dateNow.toString().slice(0, -3);

        if (parseInt(actualTime) > validateToken.exp) {
            const verifyRefresh = verifyRefreshToken(user.refreshToken);
            console.log('verifyRefresh return', verifyRefresh)
            return verifyRefresh ? true : false;
        }
    }

    return true;
};

const verifyRefreshToken = (refresh) => {
    const refreshToken = { "refreshToken": refresh };

    axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh`, refreshToken)
        .then((res) => {
            localStorage.setItem('token', res.data.token);
            teste = true; 
        }).catch(function (error) {
            console.log("catch", error);
            teste = false;
        });

    return teste;
}

const ProtectedRoutes = () => {
    const isAuth = verifyToken();
    console.log('isAuth:', isAuth);
    if (isAuth) {
        console.log("entrou aqui");
        return <Outlet />;
    } else {
        console.log("vai voltar pro inicio");
        return <Navigate to="/login" />;
    }
    //return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;