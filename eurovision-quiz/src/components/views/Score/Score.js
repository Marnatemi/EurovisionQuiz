import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Divider  } from '@material-ui/core';
import ScoreCounter from '../../features/ScoreCounter/ScoreCounter';

const divider = "divider";
const header = "header";
const block = "block";
const title = "title";


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '70vh',
    maxHeight: 550,
    fontFamily: 'Anton',
    '& hr': {
      width: 30,
      margin: '0 auto',
      animation: `$${divider} 1s ease-in forwards`,
    }
  },
  header: {
    overflow: 'hidden',
    letterSpacing: 1,
    width: 330,
    height: 120,
    '& h2': {
      opacity: 1,
      color: theme.palette.primary.main,
      marginTop: 150,
      animation: `$${header} 2s ease-in-out forwards`,
      animationDelay:' 0.5s',
    },

  },
  titleContainer: {
    position: 'relative',
    width: '100%',
    height: 50,
    marginBottom: 21.5,
  },

  block: {
    height: '0%',
    top: 0,
    left: 0,
    width: 'inherit',
    background: theme.palette.primary.main,
    position: 'absolute',
    animation: `$${block} 1s cubic-bezier(.74, .06, .4, .92) forwards`,
    animationDelay: '3s',
  },
  title: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    letterSpacing: 1,
    opacity: 0,
    marginTop: 0,
    animation: `$${title} 0.7s ease-in-out forwards`,
    animationDelay: '3.5s',
  },
  score: {
    margin: 'auto',
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
    '50%': {
      marginTop: 70, 
    },
    '70%': {
      marginTop: 70, 
    },
    '100%': {
      marginTop: 20,
    }
  },
  [`@keyframes ${title}`]: {
    '100%': {
      opacity: 1, 
    },

  },
  [`@keyframes ${block}`]: {
    '50%': {
      height: '100%',
      top: 0,
    },
    '100%': {
      height: 0,
      top: '100%',
    },

  },
}));

const demoContent = {
  score: 3,
}

const Score = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2>Gratulacje!</h2>
        <p>Udało Ci się ukończyć QUIZ</p>
      </div>
      <Divider />
      <div className={classes.score}>
        <div className={classes.titleContainer}>
          <span className={classes.block}></span>
          <h1 className={classes.title}>Twój wynik :</h1>
        </div>
        <ScoreCounter  
          scoreNumber={demoContent.score}
        />
      </div>
    </div>
  );
}

export default Score;