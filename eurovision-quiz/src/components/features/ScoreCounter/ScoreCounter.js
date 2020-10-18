import React from 'react';
import { makeStyles } from '@material-ui/styles';
import useSound from 'use-sound';
import clickSound from '../../../Sounds/coin.mp3';
import {useEffect} from 'react';


const border = 'border';
const counter = 'counter';
const borderDraw = 'borderDraw';
const total = 'total';
const show = 'show';


const useStyles = makeStyles(theme => ({
  root: {
    border: '2px solid rgba(255,255,255,0)',
    borderRadius: 4,
    padding: '10px 20px',
    width: 250,
    height: 100,
    letterSpacing: 6,
    position: 'relative',
    animation: `$${border} 0.1s forwards`,
    animationDelay: props => `calc(6.5s + ${props.scoreNumber} * 0.3s)`,
    '& svg': {
      position: 'absolute',
      top: '-3px',
      left: '-3px',
      width: 'calc(100% + 6px)',
      height: 'calc(100% + 6px)',
      fill: 'transparent',
      '& rect': {
        ...theme.size.fullByPercent,
        stroke: theme.palette.primary.main,
        strokeWidth: 7,
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        animation: `$${borderDraw} 3s forwards`,
        animationDelay: props => `calc(5.5s + ${props.scoreNumber} * 0.3s)`,
      }    }, 
  },
  scoreWrapper: {
    ...theme.center.absolute,
    ...theme.center.flexbox,
    opacity: 0,
    fontSize: '2em',
    animation: `$${show} 1s forwards`,
    animationDelay: '4.8s',
    '& span': {
      width: 0,
      opacity: 0,
      animation: `$${total} 1s forwards`,
      animationDelay: props => `calc(5.3s + ${props.scoreNumber} * 0.3s)`,
    }
  },
  score: (props) => (
    {
      color: theme.palette.primary.main,
      height: '1em',
      lineHeight: '1em',
      overflow: 'hidden',
      width: 42,
      '&:after': {
        position: 'relative',
        whiteSpace: 'pre-wrap',
        content: "' 0\\A  1\\A  2\\A  3\\A  4\\A  5\\A  6\\A  7\\A  8\\A  9\\A 10'",
        animation: `$${counter} steps(${props.scoreNumber}, start) forwards`,
        animationDuration: `calc(${props.scoreNumber} * 0.3s)`,
        animationDelay: '5.3s',
        top: 0,
      },
    }
  ),
  [`@keyframes ${borderDraw}`]: {
    '50%': {
      strokeDashoffset: 0,
    },
    '100%': {
      strokeDashoffset: 1000,
    }
  },
  [`@keyframes ${border}`]: {
    '100%': {
      border: `2px dashed rgba(255,255,255,1)`,
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    }
  },
  [`@keyframes ${counter}`]: {
    '100%': {
      top: props => `-${props.scoreNumber}em`,
    }
  },
  [`@keyframes ${total}`]: {
    '100%': {
      opacity: 1,
      width: 53,
    },
  },
  [`@keyframes ${show}`]: {
    '100%': {
      opacity: 1,
    },
  },
}));

const ScoreCounter = (props) => {
  const classes = useStyles(props);
  const [playClickSound] = useSound(clickSound);
  const [isPlaying, setClickSoundsStatus] = React.useState(false);

  

  let i = 0;


  useEffect(() => {
    setClickSoundsStatus(true)  
    setTimeout(() => {
        const time = setInterval(() => {
          i++;
          console.log(i, props.scoreNumber);
          if(props.scoreNumber > 0){
            playClickSound()
          }
          if (i >= props.scoreNumber) {
              clearInterval(time);
          }
      }, 280);
    }, 5000);
  }, [i, props.scoreNumber, playClickSound, isPlaying])


  return (
    <div className={classes.root}>
      <svg><rect></rect></svg>
      <div className={classes.scoreWrapper}>
        <div className={classes.score}></div>
        <span>/10</span>
      </div>
    </div>
  );
}

export default ScoreCounter;



