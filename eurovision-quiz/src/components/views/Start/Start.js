import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Title from '../../common/Title/Title'

const wave = "wave";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh', 
    width: '100vw ',
    overflow: 'hidden',
  },
  hero: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '70%',
    display: 'flex',
    zIndex: 99,
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
      backgroundImage: 'linear-gradient(326deg, #1F95CE 0%, #ce581f 74%)',
      background: '#ce581f',  
      animation: `$${wave} 10s linear infinite`,
    },
  },
  button: {
    height: 20,
    alignSelf: 'flex-end',
  },
  [`@keyframes ${wave}`]: {
    '0%': {
      transform: "translate(-50%,-75%) rotate(0deg)",
    },
    '100%': {
      transform: "translate(-50%,-75%) rotate(360deg)",
    }
  },
}));

const Start = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <header className={classes.wave} > 
      <div className={classes.hero}>
        <Title title={'Eurowizja'} subtitle={'Quiz'} text={'muzyczny'}/>
        <Button className={classes.button}
          variant="outlined"
          color="primary"
          size="large" >
          Graj
        </Button>
      </div>
    </header>
    </div>
  );
}

export default Start;