import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';

function Profile() {

    const [user, setUser] = useState('');

    useEffect(() => {
        const userToken = localStorage.getItem('token');
        const getUser = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/user`, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                },
            });
            setUser(response.data.user);
        }

        return getUser();
    }, []);

    const handleSubmit = (event) => {
        const userToken = localStorage.getItem('token');
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userUpdated = {
            name: data.get('name'),
            email: data.get('email'),
            cellphone: data.get('cellphone'),
            password: data.get('password'),
        }

        axios.patch(`${process.env.REACT_APP_API_URL}/user/update`, userUpdated, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            },
        }).then((res) => {
            Swal.fire({
                title: 'Atualizado com sucesso!',
                icon: 'success'
            });
        }).catch(function (error) {
            Swal.fire({
                title: 'Houve um erro na atualização',
                icon: 'error'
            });
        });
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
                    <Typography component="h3" variant="h3">
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
                            onChange={(e) => setUser(e.target.value)}
                            value={user.name}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => setUser(e.target.value)}
                            value={user.email}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="cellphone"
                            label="Celular"
                            name="cellphone"
                            onChange={(e) => setUser(e.target.value)}
                            value={user.cellphone}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Senha"
                            name="password"
                            type="password"
                            onChange={(e) => setUser(e.target.value)}
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