import { AppBar, Button, Container, CssBaseline, GlobalStyles, Link, Toolbar, Typography } from '@mui/material';
import Copyright from '../components/Copyright';
import { useState } from 'react';

function Dashboard() {
    let time = new Date().toLocaleTimeString();

    const [timer, setTimer] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setTimer(time);
    }

    setInterval(UpdateTime, 1000);

    return (
        <div>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Bate&Ponto
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Dashboard
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/profile"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Perfil
                        </Link>
                    </nav>
                    <Button href="/login" variant="contained" sx={{ my: 1, mx: 1.5 }}>
                        Sair
                    </Button>
                </Toolbar>
            </AppBar>
            {/* Body */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 10, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Hora atual
                </Typography>
                <Typography variant="h2" align="center" color="text.secondary" component="p">
                  { timer }
                </Typography>
                <Container align="center">
                    <Button href="#" variant="contained" size="large" sx={{ my: 4, mx: 1.5 }}   
                    onClick={() => {
                        alert('Você registrou seu ponto');
                    }}
                    >
                            Bater Ponto 
                    </Button>
                </Container>
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
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </div>
    );
}

export default Dashboard;