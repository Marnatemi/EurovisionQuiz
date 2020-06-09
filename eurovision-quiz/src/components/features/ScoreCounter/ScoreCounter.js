import React from 'react';
import { makeStyles } from '@material-ui/styles';

const border = 'border';
const counter = 'counter';
const borderDraw = 'borderDraw';

const useStyles = makeStyles(theme => ({
  root: {
    border: '2px solid rgba(255,255,255,0)',
    padding: '10px 20px',
    width: 250,
    height: 100,
    letterSpacing: 6,
    position: 'relative',
    animation: `$${border} 1s forwards`,
    animationDelay: '6s',
    '& svg': {
      position: 'absolute',
      top: '-3px',
      left: '-3px',
      width: 'calc(100% + 6px)',
      height: 'calc(100% + 6px)',
      fill: 'transparent',
      '& rect': {
        width: '100%',
        height: '100%',
        stroke: theme.palette.primary.main,
        strokeWidth: 7,
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        animation: `$${borderDraw} 3s forwards`,
        animationDelay: '5s',
      }
    }, 
  },
  scoreWrapper: {
    display: 'flex',
    fontSize: '2em',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  score: {
    color: theme.palette.primary.main,
    height: '1em',
    lineHeight: '1em',
    overflow: 'hidden',
    width: 42,
    '&:after':{
      position: 'relative',
      whiteSpace: 'pre-wrap',
      content: "' 00 01 02 03 04 05 06 07 08 09 10'",
      animation: `$${counter} 5s steps(11) forwards`,
      top: 0,
    },
  },
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
      border: `2px dashed rgba(255,255,255,1)`    }
  },
  [`@keyframes ${counter}`]: {
    '100%': {
      top: '-11em',
    },
  },
}));

const ScoreCounter = ({score}) => {
  const classes = useStyles();

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



