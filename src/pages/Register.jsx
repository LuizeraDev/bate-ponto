import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Avatar, Box, Button, Container, TextField, Typography, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';
import PeopleIcon from '@mui/icons-material/People';

const CpfMaskAdapter = React.forwardRef(function CpfMaskAdapter(props, ref) {
    const { onChange, ...other } = props;
    return <IMaskInput {...other} mask="000.000.000-00" inputRef={ref} onAccept={(value) => onChange({ target: { name: props.name, value } })} overwrite />;
});

const cellphoneMaskAdapter = React.forwardRef(function TelefoneMaskAdapter(props, ref) {
    const { onChange, ...other } = props;
    return <IMaskInput {...other} mask="(00) 00000-0000" inputRef={ref} onAccept={(value) => onChange({ target: { name: props.name, value } })} overwrite />;
});

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userToken = localStorage.getItem('token');
        
        if (!name || !email || !cpf || !cellphone || password.length < 6 || password !== confirmPassword) {
            Swal.fire({ title: 'Erro', text: 'Verifique os campos e a senha (mínimo 6 caracteres).', icon: 'error' });
            return;
        }

        const newUser = { name, email, cpf, cellphone, password, isAdmin: data.get('isAdmin') };

        axios.post(`${process.env.REACT_APP_API_URL}/user/employee`, newUser, {
            headers: { 'Authorization': `Bearer ${userToken}` },
        }).then(() => {
            Swal.fire({ title: 'Sucesso!', text: 'Colaborador adicionado.', icon: 'success' })
                .then(() => navigate('/colaborators'));
        }).catch(() => Swal.fire({ title: 'Erro', text: 'Falha no cadastro', icon: 'error' }));
    };

    return (
        <Box>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <Box sx={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}><PersonAddAltIcon /></Avatar>
                    <Typography component="h4" variant="h4">Novo Colaborador</Typography>
                    
                    <Button sx={{ mt: 2 }} variant="contained" color="success" href="/register/massive" fullWidth>
                        <PeopleIcon /> &nbsp; Inserção em massa
                    </Button>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField margin="normal" required fullWidth label="Nome" onChange={(e) => setName(e.target.value)} />
                        <TextField margin="normal" required fullWidth label="Email" onChange={(e) => setEmail(e.target.value)} />
                        <TextField
                            margin="normal" required fullWidth label="CPF" value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            InputProps={{ inputComponent: CpfMaskAdapter }}
                        />
                        <TextField
                            margin="normal" required fullWidth label="Celular" value={cellphone}
                            onChange={(e) => setCellphone(e.target.value)}
                            InputProps={{ inputComponent: cellphoneMaskAdapter }}
                        />
                        <TextField margin="normal" required fullWidth label="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <TextField margin="normal" required fullWidth label="Confirmar Senha" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />

                        <FormControl component="fieldset" sx={{ mt: 2 }}>
                            <FormLabel component="legend">Nível de Acesso</FormLabel>
                            <RadioGroup row name="isAdmin" defaultValue="false">
                                <FormControlLabel value="false" control={<Radio />} label="Colaborador" />
                                <FormControlLabel value="true" control={<Radio />} label="Admin" />
                            </RadioGroup>
                        </FormControl>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Cadastrar</Button>
                    </Box>
                </Box>
            </Container>
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
        </Box>
    );
}
export default Register;
