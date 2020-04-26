import React from 'react';
import { Card, CardContent, Typography, CardActions, CardHeader, Button, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LevelPicker from '../../features/LevelPicker/LevelPicker';

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

const Start = () => {
  const classes = useStyles();

  return (
    <LevelPicker />
  );
}

export default Start;