import React from 'react';
import { Card, CardContent, Typography, CardActions, CardHeader, Button, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import waveImg from '../../../styles/Images/wave2.png';
const wave = "wave";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh', 
    width: '100vw ',
    overflow: 'hidden',

  },
  header: {
    backgroundColor: '#ce581f',
    backgroundImage: 'linear-gradient(326deg, #ce581f 0%, #deb445 74%)',
    height: '50%',
    textAlign: 'center',
  },
  wave: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: '#414c4f',
    boxShadow: 'inset 0 0 50px rgba(0,0,0,.5)',

    '&::after': {
      content: "''",
      position: 'absolute',
      width: '300%',
      height: '200%',
      top: 100,
      left: '50%',
      transform: 'translate(-50%, -75%)',
      borderRadius: '40%',
      boxShadow: 'inset 0 0 50px rgba(0,0,0,.5)',
      backgroundImage: 'linear-gradient(326deg, #ce581f 0%, #deb445 74%)',
      background: '#ce581f',  
      animation: `$${wave} 10s linear infinite`,
    },
  },
  
  
  [`@keyframes ${wave}`]: {
    '0%': {
      transform: "translate(-50%,-75%) rotate(0deg)",
    },
    '100%': {
      transform: "translate(-50%,-75%) rotate(360deg)",
    }
  }
}));

const Start = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <header className={classes.wave} > 
      {/* <div className={classes.wave}></div> */}
    </header>
    </div>
  );
}

export default Start;