import React from 'react';
import {useEffect} from 'react';
import useSound from 'use-sound';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Title from '../../common/Title/Title';
import clickSound from '../../../Sounds/click3.mp3';
const wave = "wave";
const button = "button";


const useStyles = makeStyles(theme => ({
  root: {
    ...theme.size.fullByDivice,
    overflow: 'hidden',
  },
  hero: {
    ...theme.center.absolute,
    height: '70%',
    maxHeight: '400px',
    display: 'flex',
    zIndex: 99,
  },
  wave: {
    position: 'relative',
    ...theme.size.fullByPercent,
    background: '#414c4f',
    boxShadow: 'inset 0 0 50px rgba(0,0,0,.5)',
    '&::after': {
      ...theme.center.absolute,
      top: '37%',
      width: '90vw',
      height: '90vw',
      maxWidth: '500px',
      maxHeight: '500px',
      content: "''",
      borderRadius: '40%',
      boxShadow: 'inset 0 0 50px rgba(0,0,0,.5)',
      backgroundImage: 'linear-gradient(326deg, #1F95CE 0%, #ce581f 74%)',
      background: '#ce581f',  
      animation: `$${wave} 10s linear infinite`,
    },
    '&::before': {
      content: "''",
      ...theme.center.absolute,
      top: '37%',
      width: '90vw',
      height: '90vw',
      maxWidth: '500px',
      maxHeight: '500px',
      border: '2px solid #fff',
      borderRadius: '50%',
      zIndex: 1,
      boxShadow: 'inset 0 0 50px rgba(0,0,0,.5)',
    },

  },
  button: {
    fontSize: '1.3rem',
    alignSelf: 'flex-end',
    animation: `$${button} 2s forwards`,
    animationDelay: '6s',
    opacity: 0,
    //pointerEvents: "none"
  },
  [`@keyframes ${button}`]: {
    '100%': {
      opacity: '1',
      //pointerEvents: 'auto',
    }
  },
  [`@keyframes ${wave}`]: {
    '0%': {
      transform: "translate(-50%,-50%) rotate(0deg)",
    },
    '100%': {
      transform: "translate(-50%,-50%) rotate(360deg)",
    }
  },
  //eslint-disable-next-line no-useless-computed-key
  ['@media (min-width:500px)']: {
    'wave': {
      '&::after': {
        top: '50%',
        width: '500px',
        height: '500px',
      },
      '&::before': {
        top: '50%',
        width: '500px',
        height: '500px',
        border: '2px solid #fff',
        borderRadius: '50%',
        zIndex: 1,
        boxShadow: 'inset 0 0 50px rgba(0,0,0,.5)',
      }
    },
  },
}));

const Intro = ({text, viewHandler, playBgMusic}) => {
  const classes = useStyles();
  const [play] = useSound(clickSound);
  const [isPlaying, setBgMusicStatus] = React.useState(false);


  const clickHandler = () => {
    play()
    setTimeout(() => {
      viewHandler("level")
    }, 500);
  }

  useEffect(() => {
    setBgMusicStatus(true)  
    playBgMusic()
  }, [playBgMusic, isPlaying])

  return (
    <div className={classes.root}>
    <header className={classes.wave} > 
      <div className={classes.hero}>
        <Title title={text.title} subtitle={text.subtitle} text={text.text} />
        <Button className={classes.button}
          variant="outlined"
          color="primary"
          size="large"
          onClick={clickHandler}> 
          {text.button}
        </Button>
      </div>
    </header>
    </div>
  );
}

export default Intro;