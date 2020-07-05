import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Player from '../../common/Player/Player';

const dance = 'dance';
const shadow = 'shadow';

const useStyles = makeStyles(theme => ({
  player: {
    opacity: 0,
    position: 'absolute',
  },
  littleMan: {
    animation: `$${dance} 2s ease-in-out infinite`,
    height: '50vh',
  },
  circle: {
    height: 18,
    width: '60%',
    borderRadius: '50%',
    background: '#000',
    opacity: 0.5,
    margin: 'auto',
    marginTop: 50,
    animation: `$${shadow} 2s ease-in-out infinite`,
  },
  [`@keyframes ${dance}`]: {
    '0%': {
      transform: 'rotate(25deg)',
    },
    '50%': {
      transform: 'rotate(-25deg)',
    },
    '100%': {
      transform: 'rotate(25deg)',
    },
  },
  [`@keyframes ${shadow}`]: {
    '0%': {
      width: '80%',
    },
    '25%': {
      width: '60%',
    },
    '50%': {
      width: '80%',
    },
    '75%': {
      width: '60%',
    },
    '100%': {
      width: '80%',
    }  
  },
}));

const QuestionSong = () => {
  const classes = useStyles();

  return(
    <div> 
      <div className={classes.player}>
      <Player songStart={634} songEnd={648} />
      </div>
      <div className={classes.loader}> 
        <img className={classes.littleMan} alt='earphones' src="https://i.postimg.cc/B6MMMKck/earphones-152471-640.png"></img>
        <div className={classes.circle}></div>
      </div>
      
    </div>
    

  );
}

export default QuestionSong;
