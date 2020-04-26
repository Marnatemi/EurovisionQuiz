import React from 'react';
import { Card, CardContent, Typography, CardActions, CardHeader, Button, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import melodyLine from '../../../styles/Images/melody-line.png';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    backgroundImage: 'url('+melodyLine+')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 90,
    },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
    
  );
}

export default Footer;