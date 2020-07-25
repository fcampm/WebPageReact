import React from 'react';
import Grid  from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

export default function NoticiasComponent() {
    return (
        <div>
            <br />
            <Grid container>
                <Grid item xs={18} sm={9}>
                    <a href='https://www.eenet.org.uk/'>
                        <img 
                            alt='Imagen Noticia'
                            src='https://i0.wp.com/www.eenet.org.uk/wp-content/uploads/2018/01/front-IMG_0101.jpg?fit=2600%2C955&ssl=1'
                            width={1000}
                            style={{borderRadius: 50}}
                        />
                    </a>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <br />
                    <br />
                    <Typography variant='h4' align='left'>
                        Te recomendamos el siguiente sitio para mayor información
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button href='https://www.eenet.org.uk/' color='primary' variant='contained'>
                        Visitar Sitio
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}