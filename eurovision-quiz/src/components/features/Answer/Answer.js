import React from 'react';
import Player from '../../common/Player/Player';
import {CardContent, Typography, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ModalCard from '../../common/ModalCard/ModalCard';

const useStyles = makeStyles(theme => ({

  player: {
    height: '200px',
    padding: '5px',
  },
}));

const Answer = ({title, year, artist, country, place, message}) => {
  const classes = useStyles();

  return (
    <ModalCard message={message} button="dalej">
      <CardContent>
        <Typography align="center">
        Utwór ten pod tytułem "
        <Typography variant="button" color="primary"> {title} </Typography>" mogliśmy usłyszeć na eurowizyjnej scenie w 
        <Typography variant="button" color="primary"> {place}</Typography> w 
        <Typography variant="button" color="primary"> {year}</Typography> roku w wykonaniu 
        <Typography variant="button" color="primary"> {artist}</Typography>, reprezentując 
        <Typography variant="button" color="primary"> {country}</Typography>
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardContent className={classes.player}>
        <Player />
      </CardContent>
    </ModalCard>
  );
}

export default Answer;