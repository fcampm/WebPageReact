import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import FaceIcon from '@material-ui/icons/Face';
import SchoolIcon from '@material-ui/icons/School';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import StepperPhotoOne from '../images/carusel_img1.jpg';
import StepperPhotoTwo from '../images/carusel_img2.jpg';
import StepperPhotoThree from '../images/carusel_img3.jpg';
import StepperPhotoFour from '../images/carusel_img4.jpg';
import StepperPhotoFive from '../images/carusel_img5.png';

function SpaceBuilder(){
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

const tutorialSteps = [
  {
    label: '"La inclusión solamente se logra trabajando juntos por un mundo mejor."',
    imgPath: StepperPhotoOne,
    labelBtn: 'Conócenos',
    btnEmoji: <FaceIcon fontSize='large'/>,
    quoteAuthor: 'Meli Pacheco'
  },
  {
    label: '"Si no generamos conciencia, ¿Quién lo hará?"',
    imgPath: StepperPhotoTwo,
    labelBtn: 'Cursos y Capacitaciones',
    btnEmoji: <SchoolIcon fontSize='large'/>,
    quoteAuthor: 'Karen Tovar'
  },
  {
    label: '"La inclusión comienza en casa, y nosotros somos tu segunda casa."',
    imgPath: StepperPhotoThree,
    labelBtn: 'Más Información',
    btnEmoji: <InfoIcon fontSize='large'/>,
    quoteAuthor: 'Dany Fernández'
  },
  {
    label: '"Trabajemos por un mundo donde todas las personas podamos comunicarnos."',
    imgPath: StepperPhotoFour,
    labelBtn: 'Sumate',
    btnEmoji: <PersonAddOutlinedIcon fontSize='large'/>,
    quoteAuthor: 'Miros Gordillo'
  },
  {
    label: '"Petenece: trabajando por un mundo incluyente y sin barreras de comunicación"',
    imgPath: StepperPhotoFive,
    labelBtn: 'Contáctanos',
    btnEmoji: <ContactSupportIcon fontSize='large'/>,
    quoteAuthor: 'Ale Cruz'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 100,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 640,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function HomeComponent(){

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={14} sm={7}>
              <img
                className={classes.img}
                src={tutorialSteps[activeStep].imgPath}
                alt={tutorialSteps[activeStep].label}
              />
            </Grid>
            <Grid item xs={2} sm={1}></Grid>
            <Grid item xs={6} sm={3}>
              <Box fontStyle='italic'>
                <Typography variant='h4' align='left'><br />{tutorialSteps[activeStep].label}</Typography>
              </Box>
              <Typography variant='h6' align='right'><br />{tutorialSteps[activeStep].quoteAuthor}</Typography>
              <SpaceBuilder />
              <SpaceBuilder />
              <div align='center'>
                <Button size='large' variant='outlined' color='primary'>
                  {tutorialSteps[activeStep].labelBtn}
                  {tutorialSteps[activeStep].btnEmoji}
                </Button>
              </div>
            </Grid>
            <Grid item xs={2} sm={1}></Grid>
          </Grid>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
                }
            />
        </div>
    );
}