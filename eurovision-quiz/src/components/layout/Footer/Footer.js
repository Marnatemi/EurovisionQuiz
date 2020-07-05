import React from 'react';
import { Card, CardContent, Typography, CardActions, CardHeader, Button, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    width: '200px',
    position: 'absolute',
    bottom: 0,
    right: '55%',
    textAlign: 'right',
    marginLeft: 10,
    fontSize: 11,
    //backgroundImage: `url('${melodyLine}')`,
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

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>Made with <span className={classes.icon}>passion</span> by Mar</p>
    </div>
    
  );
}

export default Footer;