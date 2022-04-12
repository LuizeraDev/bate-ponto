import MailLock from '@mui/icons-material/MailLock';
import { Avatar, Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import Copyright from '../components/Copyright';

function ForgotPassword() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const email = {
            email: data.get('email')
        }
       
        axios.post(`${process.env.REACT_APP_API_URL}/user/forgot`, email).finally(() => {
            Swal.fire({
                title: 'Uma nova senha foi enviada para este usuário, caso exista.',
                icon: 'success'
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
                    <MailLock sx={{ width: 40, height: 40 }} />
                </Avatar>
                <Typography component="h4" variant="h4">
                    Recuperar Senha
                </Typography>
                <Typography component="h4" variant="body2" sx={{ mt: 2 }}>
                    Preencha com o email, para enviarmos um email contendo uma nova senha.
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ py: 1.9, mt: 3, mb: 2 }}
                        size="large"
                    >
                        Enviar
                    </Button>
                    <Link href="/login" sx={{ ml: 36 }}>Voltar ao Inicio</Link>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}

export default ForgotPassword;