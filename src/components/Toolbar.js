import React from 'react';
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';

export default function ToolbarWebPage(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Link to='/' style={{color: "white", textDecoration: 'none'}}>
                    <Button color="inherit">
                        Inicio
                    </Button>
                </Link>
                <Link to="/quienes-somos" style={{color: "white", textDecoration: 'none'}}>
                    <Button color="inherit">¿Quiénes Somos?</Button>
                </Link>
                <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Aprender
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Link to="/discapacidad-auditiva" style={{color:"black", textDecoration: 'none'}}>
                        <MenuItem onClick={handleClose}>Discapacidad Auditiva</MenuItem>
                    </Link>
                    <Link to="/discapacidad-visual" style={{color:"black", textDecoration: 'none'}}>
                        <MenuItem onClick={handleClose}>Discapacidad Visual</MenuItem>
                    </Link>
                </Menu>
                <Link to="/noticias" style={{color:"white", textDecoration: 'none'}}>
                    <Button color="inherit">Noticias</Button>
                </Link>
                <Link to="/contacto" style={{color:"white", textDecoration: 'none'}}>
                    <Button color="inherit">Contacto</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
