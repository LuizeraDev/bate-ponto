import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import { IMaskInput } from 'react-imask';

const cellphoneMaskAdapter = React.forwardRef(function cellphoneMaskAdapter(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="(00) 00000-0000"
            inputRef={ref} 
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

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
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/profile`, {
                    headers: { 'Authorization': `Bearer ${userToken}` },
                });
                setName(response.data.user.name);
                setEmail(response.data.user.email);
                setCellphone(response.data.user.cellphone);
            } catch (error) { console.error("Erro ao buscar dados", error); }
        }
        getUser();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const userToken = localStorage.getItem('token');
        
        name === '' ? setNameError(true) : setNameError(false);
        email === '' ? setEmailError(true) : setEmailError(false);
        cellphone === '' ? setCellphoneError(true) : setCellphoneError(false);
        password.length > 0 && password.length < 6 ? setPasswordError(true) : setPasswordError(false);

        if (name === '' || email === '' || cellphone === '') {
            Swal.fire({ title: 'Campos em Branco', text: 'Preencha os campos obrigatórios.', icon: 'error', confirmButtonText: 'Entendi' });
        } else if (password !== '' && password.length < 6) {
            Swal.fire({ title: 'Senha inválida', text: 'Mínimo de 6 caracteres', icon: 'error', confirmButtonText: 'Entendi' });
        } else {
            let userUpdated = { name, email, cellphone };
            if (password !== '') userUpdated['password'] = password;

            axios.patch(`${process.env.REACT_APP_API_URL}/user/profile`, userUpdated, {
                headers: { 'Authorization': `Bearer ${userToken}` },
            }).then(() => {
                Swal.fire({ title: 'Atualizado!', icon: 'success', confirmButtonText: 'Entendi' });
            }).catch(() => {
                Swal.fire({ title: 'Erro', icon: 'error', confirmButtonText: 'Entendi' });
            });
        }
    };

    return (
        <Box>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <Box sx={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography component="h3" variant="h4">Meus dados</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField error={nameError} margin="normal" required fullWidth id="name" label="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField error={emailError} margin="normal" required fullWidth id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField
                            error={cellphoneError}
                            margin="normal"
                            required
                            fullWidth
                            id="cellphone"
                            label="Celular"
                            value={cellphone}
                            onChange={(e) => setCellphone(e.target.value)}
                            InputProps={{
                                inputComponent: cellphoneMaskAdapter,
                            }}
                        />
                        <TextField error={passwordError} margin="normal" fullWidth id="password" label="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <Button type="submit" fullWidth variant="contained" sx={{ py: 1.9, mt: 3, mb: 2 }} size="large">Salvar</Button>
                    </Box>
                </Box>
                <Container maxWidth="md" component="footer" sx={{ borderTop: (theme) => `1px solid ${theme.palette.divider}`, mt: 8, py: [3, 6] }}>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </Container>
        </Box>
    );
}

export default Profile;
