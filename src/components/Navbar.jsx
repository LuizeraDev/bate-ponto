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
                    sx={{ my: 1, mx: 1.5,  
                        ":hover": {
                            color: '#cfd8dc'
                        } 
                    }}
                >
                    Inicio
                </Link>
                <Link
                    variant="button"
                    color="inherit"
                    href="/colaborators"
                    sx={{ my: 1, mx: 1.5, 
                        ":hover": {
                            color: '#cfd8dc'
                        } 
                    }}
                >
                    Colaboradores
                </Link>
                <Link
                    variant="button"
                    color="inherit"
                    href="/appointments"
                    sx={{ my: 1, mx: 1.5, 
                        ":hover": {
                            color: '#cfd8dc'
                        } 
                    }}
                >
                    Apontamentos
                </Link>
                <Link
                    variant="button"
                    color="inherit"
                    href="/profile"
                    sx={{ my: 1, mx: 1.5,
                        ":hover": {
                            color: '#cfd8dc'
                        } 
                    }}
                >
                    Perfil
                </Link>
                <Link
                    variant="button"
                    color="inherit"
                    href="/login"
                    sx={{ my: 1, mx: 1.5,    
                        ":hover": {
                            color: '#cfd8dc'
                        } 
                     }}
                >
                    Sair
                </Link>
            </Toolbar>
        </AppBar>
        
    );
}

export default Navbar;