import { Box, Container, Typography } from '@mui/material';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import DatePicker from '../components/DatePicker';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Appointments() {
    const [appointments, setAppointments] = useState([]);
    const [date, setDate] = useState();

    console.log(date ? date : 'false');

    useEffect(() => {
        const userToken = localStorage.getItem('token');

        const getAppointments = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/appointment/all`, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                },
            });
            setAppointments(response.data);
        }

        return getAppointments();
    }, []);

    return (
        <Box>
            <Navbar />
            {/* Main */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 10, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Meus Apontamentos
                </Typography>
                <Box sx={{ ml: 24, mt: 5 }}>
                    <DatePicker setDate={setDate} />
                </Box>
                <Table appointments={appointments} />
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

export default Appointments;