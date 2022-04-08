import BussinessIcon from '@mui/icons-material/Business';
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Copyright from '../components/Copyright';

function RegisterCompany() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const fullRegister = {
            name: state.name,
            email: state.email,
            cpf: state.cpf,
            cellphone: state.cellphone,
            password: state.password,
            confirmPassword: state.confirmPassword,
            companyName: data.get('companyName'),
            cnpj: data.get('cnpj')
        }
        
        axios.post(`${process.env.REACT_APP_API_URL}/user/register`, fullRegister)
        .then((res) => {
            if (res.status === 201) {
                Swal.fire({
                    title: 'Usuário e empresa criados com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Confirmar',
                }).then((result) => {
                    if (result.isConfirmed)
                        navigate('/login')
                });
            }
        }).catch(function (error) {
            Swal.fire({
                title: 'Alguns dados não foram preenchidos corretamente',
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
                    <BussinessIcon sx={{ width: 40, height: 40 }} />
                </Avatar>
                <Typography component="h4" variant="h4">
                    Empresa
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="companyName"
                        label="Nome da empresa"
                        name="companyName"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="cnpj"
                        label="CNPJ"
                        name="cnpj"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Cadastrar
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

export default RegisterCompany;