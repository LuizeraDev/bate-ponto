import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

function Profile() {
    const [user, setUser] = useState();


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
        }
    };

    return (
        <Box>
            <Navbar />
            {/* Main */}
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h4" variant="h4">
                        Meus dados
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ py: 1.9, mt: 3, mb: 2 }}
                            size="large"
                        >
                            Salvar
                        </Button>
                    </Box>
                </Box>
                {/* Footer */}
                <Container
                    maxWidth="md"
                    component="footer"
                    sx={{
                        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                        mt: 8,
                        py: [3, 6],
                    }}
                >
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </Container>
        </Box>
    );
}

export default Profile;