import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LevelPicker from '../../features/LevelPicker/LevelPicker';
import YearsPicker from '../../features/YearsPicker/YearsPicker';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '85%',
  },
  button: {
    width: 80,
  }
}));

const Start = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <h2>Wybierz poziom</h2>
    <LevelPicker />
    <YearsPicker />
    <Button className={classes.button} variant="outlined" size="large" color="primary">START</Button>
    </div>
  );
}

export default Start;