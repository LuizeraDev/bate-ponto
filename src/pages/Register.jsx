import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Copyright from '../components/Copyright';

function Register() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userRegister = {
            name: data.get('name'),
            email: data.get('email'),
            cpf: data.get('cpf'),
            cellphone: data.get('cellphone'),
            password: data.get('password'),
            confirmPassword: data.get('confirmPassword')
        };

        navigate('/register/step-2', { state: userRegister });
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
                    <AccountCircleIcon sx={{ width: 40, height: 40 }} />
                </Avatar>
                <Typography component="h4" variant="h4">
                    Usuário
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Nome"
                        name="name"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="cpf"
                        label="CPF"
                        name="cpf"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="cellphone"
                        label="Celular"
                        name="cellphone"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Senha"
                        name="password"
                        type="password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="confirmPassword"
                        label="Confirmar Senha"
                        name="confirmPassword"
                        type="password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ py: 1.9, mt: 3, mb: 2 }}
                        size="large"
                    >
                        Avançar
                    </Button>
                    <Grid container>
                        <Grid alignItems="center">
                            <Typography component="h2" variant="body2">
                                {"Já possui uma conta? "}
                                <Link href="/login" color="primary.light" variant="body2">
                                    {"Entrar"}
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}

export default Register;