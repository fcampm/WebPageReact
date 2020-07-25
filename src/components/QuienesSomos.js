import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GrupoFondo from '../images/grupo_quienes_somos.jpg';
import IntegranteUno from '../images/integrante1.jpeg';
import IntegranteDos from '../images/integrante2.jpeg';
import IntegranteTres from '../images/integrante3.jpeg';
import IntegranteCuatro from '../images/integrante4.jpeg';
import IntegranteCinco from '../images/integrante5.jpeg';

export default function QuienesSomosComponent() {
    return (
        <div>
            <img
                alt='Foto de un grupo'
                src={GrupoFondo}
                width='100%'
                height={300}
            />
            <br />
            <br />
            <br />
            <br />
            <Grid container>
                <Grid item xs='3' sm='1'></Grid>
                <Grid item xs='21' sm='11'>
                    <Typography variant='h2' align='left'>
                        ¿Quiénes Somos?
                    </Typography>
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <Grid container>
                <Grid item xs='13' sm='7'>
                    <img
                        alt='Foto integrante 1'
                        src={IntegranteUno}
                        width={350}
                        height={425}
                        style={{borderRadius: 50}}
                    />
                </Grid>
                <Grid item xs='8' sm='4'>
                    <Typography variant='h5' align='justify'>
                        <br />
                        <br />
                        <br />
                        Pertenecer, es una Consultora comprometida a generar una cultura inclusiva dentro de las 
                        escuelas primarias. Enfocándonos principalmente en las personas con discapacidad en primera instancia.
                        Actualmente trabajamos en el municipio de Atizapán de Zaragoza para lograr esta inclusión.
                    </Typography>
                </Grid>
                <Grid item xs='3' sm='1'></Grid>
            </Grid>
            <br />
            <br />
            <br />
            <Grid container>
                <Grid item xs='3' sm='1'></Grid>
                <Grid item xs='8' sm='4'>
                    <Typography variant='h5' align='justify'>
                        <br />
                        <br />
                        <br />
                        Nuestro compromiso es brindar una plataforma donde tanto docentes, padres de familia, alumnos 
                        y directivos puedan tomar capacitaciones para tratar a niños con diferentes capacidades, fomentar 
                        la cultura inclusiva en casa y así como fortalecer la capacidad motriz, visual y kinestésica.
                    </Typography>
                </Grid>
                <Grid item xs='13' sm='7'>
                <img
                        alt='Foto integrante 2'
                        src={IntegranteDos}
                        width={350}
                        height={425}
                        style={{borderRadius: 50}}
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <Grid container>
                <Grid item xs='13' sm='7'>
                    <img
                        alt='Foto integrante 3'
                        src={IntegranteTres}
                        width={350}
                        height={425}
                        style={{borderRadius: 50}}
                    />
                </Grid>
                <Grid item xs='8' sm='4'>
                    <Typography variant='h5' align='justify'>
                        <br />
                        <br />
                        <br />
                        <br />
                        Aunado a nuestro compromiso y a la metodología estratégica, un valor agregado que ofrecemos 
                        es que dentro la plataforma otorgaremos certificaciones por la inclusión de las escuelas.
                    </Typography>
                </Grid>
                <Grid item xs='3' sm='1'></Grid>
            </Grid>
            <br />
            <br />
            <br />
            <Grid container>
                <Grid item xs='3' sm='1'></Grid>
                <Grid item xs='8' sm='4'>
                    <Typography variant='h5' align='justify'>
                        <br />
                        <br />
                        <br />
                        <br />
                        Debido a la precaria actitud y compromiso de todos, la inclusión se ve mermada. 
                        Si no exite un cambio en la comunidad en la que vivimos y no se fomenta el aprendizaje colectivo, 
                        la inclusión no podrá ser incentivada.
                    </Typography>
                </Grid>
                <Grid item xs='13' sm='7'>
                <img
                        alt='Foto integrante 4'
                        src={IntegranteCuatro}
                        width={350}
                        height={425}
                        style={{borderRadius: 50}}
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <Grid container>
                <Grid item xs='13' sm='7'>
                    <img
                        alt='Foto integrante 5'
                        src={IntegranteCinco}
                        width={350}
                        height={425}
                        style={{borderRadius: 50}}
                    />
                </Grid>
                <Grid item xs='8' sm='4'>
                    <Typography variant='h5' align='justify'>
                        <br />
                        <br />
                        <br />
                        <br />
                        Por eso en Pertencer, consideramos que la única forma de fomentar la inclusión es un 
                        cambio de actitud y con las certificaciones es cómo podemos incitar un cambio con pequeñas, 
                        pero valiosas acciones que nos unan y logremos un aprendizaje de calidad”.
                    </Typography>
                </Grid>
                <Grid item xs='3' sm='1'></Grid>
            </Grid>
        </div>
    );
}