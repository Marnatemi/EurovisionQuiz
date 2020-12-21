import React from 'react';
import { makeStyles } from '@material-ui/styles';

const imgMove = 'imgMove'
const dotAnim = 'dotAnim'

const useStyles = makeStyles(theme => ({
  component: {
    // boxShadow: "inset 0 0 50px rgba(0,0,0,0.5)",
    // height: '100vh',
    // width: '100vw',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  image:{
    width: '80%',
    borderRadius: '5%',
    animation: `$${imgMove} 2.1s ease-in-out infinite`,
  },
  importantText: {
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 25,
    color: theme.palette.primary.main,
    marginBottom: 0,
    '& span:nth-of-type(2n)': {
      animationDelay : '.5s'
    },
    '& span:nth-of-type(3n)': {
      animationDelay : '1s'
    },
  
  },
  message: {
    marginBottom: 0
  },
  text: {
    marginTop: 0
  },
  dot: {
    opacity: 0,
    animation: `$${dotAnim} 2s ease-in-out infinite`,
  },
  [`@keyframes ${imgMove}`]: {
    '50%': {
      borderRadius: '50%',
    },
    '60%': {
      borderRadius: '50%',
    },
    '90%': {
      borderRadius: '5%',
    },
  },
  [`@keyframes ${dotAnim}`]: {
    '0%': {
      opacity: 1,
    },
    '30%': {
      opacity:1 
    },
    '50%': {
      opacity: 0,
    },
    '80%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },

  }

}));

const ForIOS = () => {
  const classes = useStyles();

  return (
      <div className={classes.component}>
        <img className={classes.image} src="https://i.postimg.cc/g2VDzyr5/absorbed-2409314-640.png" alt="working"/>
        <h1 className={classes.importantText}>Work in progress<span className={classes.dot}>.</span><span className={classes.dot}>.</span><span className={classes.dot}>.</span></h1>
        <h3 className={classes.message}>Avaiable for iOS very soon</h3>
        <p className={classes.text}>please try an Windows or Android device</p>
        <h2 className={classes.importantText}>Thanks!</h2>
      </div> 
    );
}

export default ForIOS;