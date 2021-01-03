import React from 'react';
import { makeStyles } from '@material-ui/styles';

const imgAnim = 'imgAnim'
const dotAnim = 'dotAnim'

const useStyles = makeStyles(theme => ({
  image: {
    width: '80%',
    maxWidth: 400,
    borderRadius: '5%',
    animation: `$${imgAnim} 2.1s ease-in-out infinite`,
    '@media (max-height:500px) and (orientation: landscape)': {
      height: 0,
    }
  },
  importantText: {
    ...theme.importantText,
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
  [`@keyframes ${imgAnim}`]: {
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