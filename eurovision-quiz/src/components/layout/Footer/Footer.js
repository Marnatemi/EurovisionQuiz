import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '200px',
    position: 'absolute',
    bottom: 0,
    right: '55%',
    textAlign: 'right',
    marginLeft: 10,
    fontSize: 11,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    justifySelf: "flex-end",
  },
  icon: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    fontSize: 13,
    letterSpacing: -0.2,
    },
}));

const Footer = ({hide}) => {
  const classes = useStyles();
  console.log(hide);
  if (hide === true)
    return (
      null
    );
  else
    return (
      <div className={classes.root}>
        <p>Made with <span className={classes.icon}>passion</span> by Mar</p>
      </div> 
    );
}

export default Footer;