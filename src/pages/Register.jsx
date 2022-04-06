import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
    return (
        <Typography variant="body1" align="center" {...props}>
            {'Copyright © '} Bate&Ponto{' '} {new Date().getFullYear()}
        </Typography>
    );
}

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
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
                    <WatchLaterIcon sx={{ width: 50, height: 50 }} />
                </Avatar>
                <Typography component="h4" variant="h4">
                    Bate & Ponto
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
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Avançar
                    </Button>
                    <Grid container>
                        <Grid alignItems="center">
                            <Link href="/login" color="primary.light" variant="body2">
                                {"Já possui uma conta? Entrar"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}

export default Register;