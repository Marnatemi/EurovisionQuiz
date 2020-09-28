import React from 'react';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import { makeStyles } from '@material-ui/styles';

const hero = "hero";
const background = "background";
const text = "text";
const icon = "icon";
const title = "title";
const subtitle = "subtitle";


const useStyles = makeStyles(theme => ({
  root: {
    ...theme.center.absolute,
    top: '20%',
    lineHeight: 1,
    letterSpacing: '-.07em',
    fontSize: '2em',
    textTransform: 'uppercase',
    animation: `$${hero} 1.2s forwards`,
    animationDelay: '4.3s',
    '&>*': {
      fontFamily: 'Anton',
    },
    '&>span+span': {
      opacity: 0,
     },
     //eslint-disable-next-line no-useless-computed-key
    ['@media (min-width:500px)']: { 
      '&': {
        top: '30%',
      },
    },
  },
  background: {
    ...theme.center.absolute,
    width: '150vw',
    height: '150vh',
    background: '#000',
    zIndex: '-1',
    animation: `$${background} 2.5s forwards`,
    animationDelay: '3s',
  },
  icon: {
    animation: `$${icon} 0.7s forwards`,
    animationTimingFunction: 'ease-in-out',
    opacity: 0,
    transform: 'rotate(30deg)',
  },
  title: {
    fontSize: '2.2em',
    lineHeight: 1,
    marginTop: -11,
    letterSpacing: -1,
    color: theme.palette.primary.main,
    animation: `$${title} 0.7s forwards`,
    animationDelay: '1.9s',
    transform: 'translateX(-1000%)',
  },
  subtitle: {
    animation: `$${subtitle} 0.7s forwards cubic-bezier(0.02, 0.01, 0.21, 1) `,
    animationDelay: '1.4s',
  },
  text: {
    animation: `$${text} 0.7s forwards cubic-bezier(0.02, 0.01, 0.21, 1)`,
    animationDelay: '0.7s',
  },


  [`@keyframes ${hero}`]: {
    '10%': {
      transformOrigin: '0 0',
    },
    '100%': {
      transform: 'scale(0.9) translate(-50%, -50%)',
      transformOrigin: '0 0',
    }
  },
  [`@keyframes ${background}`]: {
    '100%': {
      opacity: '0',
    }
  },
  [`@keyframes ${text}`]: {
    '100%': {
      opacity: 1,
      fontSize: '1.5em',
    }
  },
  [`@keyframes ${title}`]: {
    '100%': {
      transform: 'translateX(0)', 
    }
  },
  [`@keyframes ${subtitle}`]: {
    '100%': {
      opacity: 1,
      fontSize: '1.7em',
    }
  },
  [`@keyframes ${icon}`]: {
    '100%': {
      opacity: 1,
    }
  }
}));

const Title = ({title, subtitle, text}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <div className={classes.background}></div>
      <span ><AudiotrackOutlinedIcon className={classes.icon}/></span>
      <span className={classes.text}>{text}</span>
      <span className={classes.subtitle}>{subtitle}</span>
      <div className={classes.title}>{title}</div>
    </div>
  );
}

export default Title;