import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let data = new FormData(event.currentTarget);

        data = {
            email: data.get('email'),
            password: data.get('password'),
        }

        axios.post('http://localhost:3333/auth', data).then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("refreshToken", res.data.refreshToken);
        });

        navigate('/');
    };

    return (
        <LoginForm handleSubmit={handleSubmit} />
    );
}

export default Login;
