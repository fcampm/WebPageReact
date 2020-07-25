import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid  from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import JohnDoe from '../../images/john_doe.png';
import JaneDoe from '../../images/jane_doe.png';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,
    },
});

export default function InstructoresAuditivaComponent() {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={5} sm={4}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={JohnDoe}
                        title="John Doe"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            John Doe
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align='left'>
                            Profesor egresado del Magisterio Académico Marista Entusiasta. Su filosofía es "Inclusión para todos".
                        </Typography>
                    </CardContent>
                    
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={5} sm={4}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={JaneDoe}
                        title="Jane Doe"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Jane Doe
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align='left'>
                            Profesora egresada del Instituo Jane Thompson. Ha trabajado de interprete de señas. Su filosofía es "Comunicarse lo es todo"
                        </Typography>
                    </CardContent>
                    
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}