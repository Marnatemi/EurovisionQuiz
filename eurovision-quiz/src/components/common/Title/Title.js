import React from 'react';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const hero = "hero";
const background = "background";
const text = "text";
const icon = "icon";
const title = "title";
const subtitle = "subtitle";


const useStyles = makeStyles(theme => ({
  root: {
    border: '2px solid white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '100vh',
    width: '100vw',
    paddingTop: '40vh',
    lineHeight: 1,
    letterSpacing: '-.07em',
    fontSize: '2em',
    textTransform: 'uppercase',
    //animation: `$${hero} 4s forwards`,
    //animationDelay: '1.5s',
    '&::before': {
      content: '""',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      position: 'absolute',
      background: '#000',
      zIndex: '-1',
      //animation: `$${background} 2s forwards`,
      //animationDelay: '1.5s',
    },
    '&>*': {
      //animation: `$${text} 2s forwards`,
      //animationDelay: '1.5s',
      fontFamily: 'Anton',
    },
    '&>span+span': {
      opacity: 0,
     }
  },
  icon: {
    transform: 'rotate(-20deg)',
    animation: `$${icon} 1s forwards`,
    opacity: 0,
    //transition: 'all .3s  1.7s',
  },
  title: {
    fontSize: '2.2em',
    lineHeight: 1,
    marginTop: -11,
    letterSpacing: -1,
    color: '#fc0',
    animation: `$${title} 1s forwards cubic-bezier(.190, 1.000, .220, 1.000)`,
    animationDelay: '3s',
    //transition: 'all .3s  3s',
    transform: 'translateX(-1000%)',
  },
  subtitle: {
    animation: `$${subtitle} 1s forwards cubic-bezier(.190, 1.000, .220, 1.000)`,
    animationDelay: '2s',
    //transition: 'all .3s  2.3s',
  },
  text: {
    animation: `$${text} 1s forwards`,
    animationDelay: '1s',
    //transition: 'all .3s  2s',
  },
  [`@keyframes ${hero}`]: {
    '100%': {
      position: 'asolute',
      height: '60%',
      width: '60vw',
      borderRadius: '20%', 
      top: '20%',
      background: 'inherit',
    }
  },
  [`@keyframes ${background}`]: {
    '100%': {
      opacity: '0',
      borderRadius: '20%', 

    }
  },
  [`@keyframes ${text}`]: {
    '100%': {
      transform: 'scale(1.5,1.5)',
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
      transform: 'scale(1.5,1.5)',
      opacity: 1,
      fontSize: '1.7em',
    }
  },
  [`@keyframes ${icon}`]: {
    '100%': {
      transform: 'scale(1.5,1.5)',
      opacity: 1,
      fontSize: '1em',
    }
  }
}));

const Title = ({title, subtitle, text}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span ><AudiotrackOutlinedIcon className={classes.icon}/></span>
      <span className={classes.text}>{text}</span>
      <span className={classes.subtitle}>{subtitle}</span>
      <div className={classes.title}>{title}</div>
    </div>
  );
}

export default Title;