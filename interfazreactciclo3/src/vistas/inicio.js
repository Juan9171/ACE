import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import inicioVideo from '../Assets/Iconos/Monedas.mp4'

const useStyles = makeStyles(theme =>({
        root:{
            width: '100%',
            height: '80vh',
            position:'relative',
            '& video':{
                ObjectFit: 'cover',
            },

        },
        overlay:{
            position: 'absolute',
            top: 0,
            left: 0,
            width:'100%',
            height:'100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'

        },
        title:{

            paddingBotton: theme.spacing(4),
        },


}));

const Inicio =() =>{

    const classes =  useStyles();
    return(
        <section className ={classes.root}>
            <ReactPlayer
                url={inicioVideo}
                playing
                loop
                muted
                width='100%'
                height='100%'


        />
        <div className={classes.overlay}>
            <Box
                height="100%"
                display="flex"
                flexDirection="colum"
                justifyContent="center"
                alignItems="center"
                color='#ff'
            >
                <Typography variant="h3" component="h1" className={classes.title}>
                    Monedas del mundo
                </Typography>
            </Box>    
         </div> 
       </section>  
        
    )
}



export default  Inicio;