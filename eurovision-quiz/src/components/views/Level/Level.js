import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import InfoIcon from '@material-ui/icons/Info';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LevelPicker from '../../features/LevelPicker/LevelPicker';
import YearsPicker from '../../features/YearsPicker/YearsPicker';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '95vh',
    maxHeight: 600,
    letterSpacing: 0.5,
    "&>h1": {
      fontFamily: 'Anton',
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    }
  },
  icon: {
    position: 'absolute',
    marginLeft: 5,
    opacity: 0.5,
    "&:hover" : {
      opacity: 1,
    }
  },
  button: {
    width: 80,
    margin: 31,
  }
}));

const Start = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <h1>Wybierz poziom <HelpOutlineIcon className={classes.icon} /></h1>
    <LevelPicker />
    <YearsPicker />
    <Button className={classes.button} variant="outlined" size="large" color="primary">START</Button>
    </div>
  );
}

export default Start;