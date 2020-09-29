/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90vw',
    position: 'absolute',
    bottom: 0,
    fontSize: 11,
    zIndex: 0,
    display: 'flex',
    justifyContent: 'space-between',
    "& *":{
      color: "inherit",
      textDecoration: 'none',
    }
  },
  icon: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    fontSize: 13,
    letterSpacing: -0.2,
    },
  porfolioLink: {
    color:  theme.palette.primary.main,
  }
}));

const Footer = ({hide}) => {
  const classes = useStyles();
  //console.log(hide);
  if (hide === true)
    return (
      null
    );
  else
    return (
      <div className={classes.root}>
        <p>Made with <span className={classes.icon}>passion</span> by <a className={classes.porfolioLink} target="_blank" href="https://marnatemi.github.io/Portfolio/">Mar</a></p>
        <p>Sound from <a target="_blank" href="https://www.zapsplat.com">Zapsplat.com</a></p>
      </div> 
    );
}

export default Footer;