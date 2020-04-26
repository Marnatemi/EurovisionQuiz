import React from 'react';
import Player from '../../common/Player/Player';
import React from 'react';
import { Card, CardContent, Typography, CardActions, CardHeader, Button, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

const Start = () => {
  const classes = useStyles();

  return (
    <h1>START</h1>
  );
}

export default Start;