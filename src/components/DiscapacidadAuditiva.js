import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DiscapacidadAud from '../images/discapacidad_auditiva.jpg'
import { Button } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import ContenidoAuditivaComponent from './CursoDiscapacidadAuditiva/ContenidoAuditiva';
import InstructoresAuditivaComponent from './CursoDiscapacidadAuditiva/InstructoresAuditiva';
import AprenderasAuditivaComponent from './CursoDiscapacidadAuditiva/AprenderasAuditiva';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
}));

export default function DiscapacidadAuditivaComponent() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{padding: 0}}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <img
                        alt='Discapacidad Auditiva'
                        src={DiscapacidadAud}
                        width={750}
                    />
                </Grid>
                <Grid item xs={1} sm={1}>
                </Grid>
                <Grid item xs={10} sm= {5}>
                    <div>
                        <h1 aling='left'>
                            Aprender sobre <br />
                            Discapacidad Auditiva
                        </h1>
                        <Typography align='justify'>
                            En este curso aprenderás todo lo necesario para poder comunicarte y enseñarle <br />
                            a personas con Discapacidad Auditiva.
                        </Typography>
                        <br />
                        <Typography align='justify'>
                            Curso impartido por Jonh Doe
                        </Typography>
                        <br />
                        <Grid container>
                            <Grid item xs={8} sm={3}>
                                <Button color='primary' variant='contained'>
                                    Ir al curso
                                </Button>
                            </Grid>
                            <Grid item xs={8} sm={3}>
                                <Button color='primary' variant='contained'>
                                    <span>Compartir</span>
                                    <ShareIcon fontSize='small' />
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.root}>
                <AppBar position="static" color='default'>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                        <Tab label="Lo que aprenderás" {...a11yProps(0)} />
                        <Tab label="Contenido del Curso" {...a11yProps(1)} />
                        <Tab label="Instructores" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <AprenderasAuditivaComponent />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ContenidoAuditivaComponent />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <InstructoresAuditivaComponent />
                </TabPanel>
            </div>
        </div>
    );
}