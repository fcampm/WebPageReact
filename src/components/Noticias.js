import React from 'react';
import Grid  from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import WebIcon from '@material-ui/icons/Web';
import NotesIcon from '@material-ui/icons/Notes';

export default function NoticiasComponent() {
    return (
        <div>
            <br />
            <Grid container>
                <Grid item xs={18} sm={9}>
                    <img 
                        alt='Imagen Noticia'
                        src='https://i0.wp.com/www.eenet.org.uk/wp-content/uploads/2018/01/front-IMG_0101.jpg?fit=2600%2C955&ssl=1'
                        width={1000}
                        height={300}
                        style={{borderRadius: 50}}
                    />
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
                    <Grid container>
                        <Grid item xs={10} sm={4}>
                            <Button href='https://www.eenet.org.uk/' color='primary' variant='contained'>
                                Sitio
                                <WebIcon fontSize='large' />
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button href='https://www.eenet.org.uk/resources/docs/Index%20EY%20Spanish.pdf' color='primary' variant='contained'>
                                Leer Nota
                                <NotesIcon fontSize='large'/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
                <Grid item xs={6} sm={3}>
                    <br />
                    <br />
                    <Typography variant='h4' align='right'>
                        Te recomendamos leer el siguiente artículo
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Button href='https://revistaeducacioninclusiva.es/index.php/REI' color='primary' variant='contained'>
                                Sitio
                                <WebIcon fontSize='large' />
                            </Button>
                        </Grid>
                        <Grid item xs={11} sm={5}>
                            <Button href='https://revistaeducacioninclusiva.es/index.php/REI/article/view/139' color='primary' variant='contained'>
                                Leer Nota
                                <NotesIcon fontSize='large'/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={18} sm={9}>
                    <img 
                        alt='Imagen Noticia'
                        src='https://revistaeducacioninclusiva.es/public/site/pageHeaderTitleImage_es_ES.png'
                        width={1000}
                        height={300}
                        style={{borderRadius: 50}}
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
                <Grid item xs={18} sm={9}>
                    <img 
                        alt='Imagen Noticia'
                        src='https://www.educacionespecial.sep.gob.mx/2016/images/Estrategia_AprendeEnCasa.jpg'
                        width={1000}    
                        height={300}
                        style={{borderRadius: 50}}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <br />
                    <br />
                    <Typography variant='h4' align='left'>
                        SEP tras la inclusión en el aula.
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Grid container>
                        <Grid item xs={10} sm={4}>
                            <Button href='https://www.educacionespecial.sep.gob.mx/2016/index.html' color='primary' variant='contained'>
                                Sitio
                                <WebIcon fontSize='large' />
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button href='https://www.educacionespecial.sep.gob.mx/pdf/doctos/3Internacionales/8Indice_de_Inclusion.pdf' color='primary' variant='contained'>
                                Leer Nota
                                <NotesIcon fontSize='large'/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}