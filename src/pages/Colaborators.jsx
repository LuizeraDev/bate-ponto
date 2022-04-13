import { Button, Box, Container, Typography } from '@mui/material';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import Table from '../components/UsersTable';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';

function Colaborators() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const userToken = localStorage.getItem('token');

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/users/list`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            },
        });
        setUsers(response.data.users);

        return response.data.users;
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <Box>
            <Navbar />
            {/* Main */}
            <Container maxWidth="sm" component="main" sx={{ pt: 10 }}>
                <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Meus Colaboradores
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        mt: 5,
                        mb: 5
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ py: 0.6 }}
                        color="success"
                    >
                        <AddBoxIcon />&nbsp;Adicionar
                    </Button>
                </Box>
                <Table users={users} />
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

export default Colaborators;