import { Avatar, Button, TextField, Link, Grid, Typography, Container, Box } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Copyright from '../components/Copyright';
import Swal from 'sweetalert2';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const user = {
            email: data.get('email'),
            password: data.get('password'),
        }

        axios.post(`${process.env.REACT_APP_API_URL}/auth`, user)
        .then((res) => {
            if (res.data.token && res.data.refreshToken) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('refreshToken', res.data.refreshToken);
                navigate('/');            
            }
        }).catch(function (error) {
            Swal.fire({
                title: 'Usuário não encontrado',
                icon: 'error',
                cancelButtonText: 'Cancelar',
            });
        });
    };

    return (
        <Container component="main" maxWidth="xs">
        <Box
            sx={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, width: 56, height: 56, bgcolor: 'primary.main' }}>
                <WatchLaterIcon sx={{ width: 40, height: 40 }} />
            </Avatar>
            <Typography component="h4" variant="h4">
                Bate & Ponto
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Senha"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Entrar
                </Button>
                <Grid item xs="auto">
                    <Link href="/register/step-1" color="primary.light" variant="body2">
                        {"Não tem uma conta? Registrar-se"}
                    </Link>
                </Grid>
            </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
    );
}

export default Login;
