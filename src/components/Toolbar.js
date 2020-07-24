import React from 'react';
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Button } from '@material-ui/core';
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
                <Button color="inherit" variant="outlined">Inicio</Button>
                <Button color="inherit">¿Quiénes Somos?</Button>
                <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Capacitaciones / Cursos
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Discapacidad Auditiva</MenuItem>
                    <MenuItem onClick={handleClose}>Discapacidad Visual</MenuItem>
                </Menu>
                <Button color="inherit">Noticias</Button>
                <Button color="inherit">Contacto</Button>
            </Toolbar>
        </AppBar>
    );
}
