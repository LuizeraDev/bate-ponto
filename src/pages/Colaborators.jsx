import { Box, Container, Typography } from '@mui/material';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import TablePagination from '../components/PaginationTable';

function Colaborators() {
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
                    Meus Colaboradores
                </Typography>
                <TablePagination/>
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