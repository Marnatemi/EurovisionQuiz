import React from 'react';
import useSound from 'use-sound';
import clickSound from '../../../Sounds/click3.mp3';
import applause from '../../../Sounds/applause.mp3';

import {useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Divider, Button } from '@material-ui/core';
import ScoreCounter from '../../features/ScoreCounter/ScoreCounter';
import Confetti from 'react-confetti'


const divider = "divider";
const header = "header";
const scoreTitle = "scoreTitle";
const score = "score";
const button = "button";



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxHeight: 500,
    fontFamily: 'Anton',
    width: '100vw',
    maxWidth: 500,
    position: 'relative',
    justifyContent: 'center',
    overflow: 'hidden',
    '& hr': {
      width: 30,
      margin: '0 auto',
      animation: `$${divider} 1s ease-in forwards`,
    },
    '& button': {
      width: 120,
      opacity: 1,
      borderRadius: '50%',
      height: 120,
      border: '5px double',
      background: '#000000ad',
      position: 'absolute',
      transform: 'rotate(180deg)',
      bottom: 0,
      right: '-150px',
      color: '#7549ff',
      animation: `$${button} 1.2s ease-out forwards`,
      animationDelay: score => `calc(9.5s + ${score} * 0.3s)`,
    }
  },
  header: {
    overflow: 'hidden',
    letterSpacing: 1,
    width: 250,
    height: 120,
    margin: '0 auto',
    position: 'relative',
    '& *':{
      animation: `$${header} 3s ease-in-out forwards`,
      fontSize: '1.2em',
      overflow: 'hidden',
      position: 'absolute',
      bottom: -50,
    },
    '& h2': {
      opacity: 1,
      color: theme.palette.primary.main,
      animationDelay:' 0.5s',
    },
    '& p': {
      opacity: 1,
      animationDelay:' 2.2s',
    },
  },
  title: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    animation: `$${scoreTitle} 3s ease-in-out forwards`,
    animationDelay: '3.9s',
  },
  score: {
    height: 0,
    animation: `$${score} 2s ease-in-out forwards`,
    animationDelay: '4.2s',
  },

  [`@keyframes ${divider}`]: {
    '20%': {
      width: 10, 
    },
    '90%': {
      width: 320, 
    },
    '100%': {
      width: 300, 
    }
  },
  [`@keyframes ${header}`]: {
    '30%': {
      fontSize: '1.3em', 
      bottom: '30%'
    },
    '70%': {
      fontSize: '1.3em', 
      bottom: '30%'
    },
    '100%': {
      fontSize: '1.2em',
      bottom: '150%'
    },
  },
  [`@keyframes ${scoreTitle}`]: {
    '30%': {
      fontSize: '2em', 
      bottom: '30%'
    },
    '100%': {
      fontSize: '2em', 
      bottom: '30%'
    },
  },
  [`@keyframes ${score}`]: {
    '100%': {
      height: '124px', 
    },
  },
  [`@keyframes ${button}`]: {
    '100%': {
      right: '10%',
      transform: 'rotate(-25deg)',
    }
  },
    //eslint-disable-next-line no-useless-computed-key
    ['@media (max-height:500px) and (orientation: landscape)']: {
      root: {
        maxWidth: 700,
      },
     },
}));


const Score = ({text, score, viewHandler, scoreHandler}) => {
  const classes = useStyles(score);
  const [playClickSound] = useSound(clickSound);
  const [playApplause] = useSound(applause);
  const [finish, setFinish] = React.useState(false);
  const [isPlaying, setPlayingApplause] = React.useState(false);

  useEffect(()=> {
    playApplause()
    setPlayingApplause(true)

    const timer = setTimeout(() => {
      setFinish(true)
    }, 5000);
    return () => clearTimeout(timer);
  }, [playApplause, isPlaying])
  


  const resetQuiz = () => {
    playClickSound()
    setTimeout(() => {
      viewHandler("level") 
      scoreHandler('reset')
    }, 500);
  }


  return (
    <div className={classes.component}>
      <Confetti 
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={100}
        gravity={0.03}
        opacity={0.6}
        run={finish}
      />
      <div className={classes.container}>
        <div className={classes.header}>
          <h2>{text.title}</h2>
          <p>{text.subtitle}</p>
          <h1 className={classes.title}>{text.text}</h1>
        </div>
        <Divider />
        <div className={classes.score}>
          <ScoreCounter  
            scoreNumber={score}
          />
        </div>
        <Button variant="outlined" color="secondary" size="large" onClick={()=> resetQuiz()}>{text.button}</Button>
      </div>
    </div>
  );
}

export default Score;