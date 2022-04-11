import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';

function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [cellphoneError, setCellphoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    useEffect(() => {
        const userToken = localStorage.getItem('token');

        const getUser = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/user`, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                },
            });
            setName(response.data.user.name);
            setEmail(response.data.user.email);
            setCellphone(response.data.user.cellphone);
        }

        return getUser();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const userToken = localStorage.getItem('token');

        name === '' ? setNameError(true) : setNameError(false);
        email === '' ? setEmailError(true) : setEmailError(false);
        cellphone === '' ? setCellphoneError(true) : setCellphoneError(false);
        password.length < 6 ? setPasswordError(true) : setPasswordError(false);
        password === '' ? setPasswordError(false) : setPasswordError(true);

        let userUpdated = {
            name: name,
            email: email,
            cellphone: cellphone,
        }

        if (password !== '') {
            userUpdated['password'] = password;
        }

        console.log("userUpdated", userUpdated)

        if (name === '' || email === '' || cellphone === '') {
            Swal.fire({
                title: 'Você não pode deixar certos campos em branco',
                icon: 'error'
            });
        } else if (password !== '' && password.length < 6) {
            console.log("entrei aqui")
            Swal.fire({
                title: 'A nova senha precisa de ter mais de 6 caracteres',
                icon: 'error'
            });
        } else {
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
                    <Typography component="h3" variant="h3">
                        Meus dados
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            error={nameError}
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Nome"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            autoFocus
                        />
                        <TextField
                            error={emailError}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <TextField
                            error={cellphoneError}
                            margin="normal"
                            required
                            fullWidth
                            id="cellphone"
                            label="Celular"
                            name="cellphone"
                            onChange={(e) => setCellphone(e.target.value)}
                            value={cellphone}
                        />
                        <TextField
                            error={passwordError}
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Senha"
                            name="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
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