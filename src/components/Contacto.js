import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid  from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IntegranteUno from '../images/integrante1.jpeg';
import IntegranteDos from '../images/integrante2.jpeg';
import IntegranteTres from '../images/integranteTres1.jpeg';
import IntegranteCuatro from '../images/integrante4.jpeg';
import IntegranteCinco from '../images/integrante5.jpeg';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SchoolIcon from '@material-ui/icons/School';
import ContactsIcon from '@material-ui/icons/Contacts';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 345,
    },
});

export default function ContactoComponent() {

    const classes = useStyles();

    return (
        <div>
            <br />
            <Grid container>
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={7} sm={3}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={IntegranteUno}
                            title="Daniela Fernández Migoni"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Daniela Fernández Migoni
                            </Typography>
                            <br />
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <SchoolIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        Licenciatura Relaciones Internacionales (LRI)
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <ContactMailIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        A00369887@itesm.mx
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <ContactsIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        55 1234 5678
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={7} sm={3}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={IntegranteDos}
                            title="Melisa Pacheco Torres"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Melisa Pacheco Torres
                            </Typography>
                            <br />
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <SchoolIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        Licenciatura en Economía y Finanzas (LEF)
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <ContactMailIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        A01373087@itesm.mx
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <ContactsIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        55 2267 0883
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={7} sm={3}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={IntegranteTres}
                            title="Miroslawa Gordillo Clement"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Miroslawa Gordillo Clement
                            </Typography>
                            <br />
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <SchoolIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        Licenciatura en Derecho <br />
                                        (LED)
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <ContactMailIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        A01374276@itesm.mx
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <ContactsIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        55 1234 5678
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={7} sm={3}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={IntegranteCuatro}
                            title="Jahel Alejandra Cruz Valdés"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Jahel Alejandra Cruz Valdés
                            </Typography>
                            <br />
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <SchoolIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        Licenciatura Relaciones Internacionales (LRI)
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <ContactMailIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        A01373621@itesm.mx
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <ContactsIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        55 1234 5678
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={7} sm={3}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={IntegranteCinco}
                            title="Diana Karen Tovar López"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Diana Karen Tovar López
                            </Typography>
                            <br />
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <SchoolIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        Licenciatura Relaciones Internacionales (LRI)
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <ContactMailIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        A01372852@itesm.mx
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={2}>
                                    <ContactsIcon fontSize='large'/>
                                </Grid>
                                <Grid item xs={20} sm={10}>
                                    <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                        55 1234 5678
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br />
        </div>
    );
}