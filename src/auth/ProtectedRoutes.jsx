import axios from 'axios';
import * as jose from 'jose';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from "react-router";

const verifyToken = async() => {
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
            const verifyRefresh = await verifyRefreshToken(user.refreshToken);
            return verifyRefresh ? true : false;
        }
    }

    return true;
};

const verifyRefreshToken = async(refresh) => {
    const refreshToken = { "refreshToken": refresh };

    try {
        const newToken = await axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh`, refreshToken);
        localStorage.setItem('token', newToken.data.token);
        return true;
    } catch (error) {
        console.log(error.message);
        return false
    }
}

const ProtectedRoutes = () => {
    const [ authenticated, setAuthenticated] = useState();

    useEffect(() => {
        verifyToken().then(res => setAuthenticated(res))
    }, [])

    if (authenticated === undefined) {
        return "<p>Loading...</p>";
    } else {
        return authenticated ? <Outlet /> : <Navigate to="/login" />
    }
};

export default ProtectedRoutes;