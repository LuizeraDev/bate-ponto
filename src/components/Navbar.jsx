import { AppBar, Link, Toolbar, Typography } from '@mui/material';

function Navbar() {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Bate&Ponto
                </Typography>
                <Link
                    variant="button"
                    color="inherit"
                    href="/"
                    sx={{ my: 1, mx: 1.5 }}
                >
                    Dashboard
                </Link>
                <Link
                    variant="button"
                    color="inherit"
                    href="/profile"
                    sx={{ my: 1, mx: 1.5 }}
                >
                    Perfil
                </Link>
                <Link
                    variant="button"
                    color="inherit"
                    href="/login"
                    sx={{ my: 1, mx: 1.5 }}
                >
                    Sair
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;