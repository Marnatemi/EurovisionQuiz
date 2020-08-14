import React from 'react';
import Player from '../../common/Player/Player';
import {CardContent, Typography, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ModalCard from '../../common/ModalCard/ModalCard';
import QuestionSong from '../../views/QuestionSong/QuestionSong';

const useStyles = makeStyles(theme => ({

  player: {
    padding: '5px',
  },
}));

const Answer = ({title, year, artist, country, place, message, questionChangeHandler, playerStart, playerEnd, songId}) => {
  const classes = useStyles();

  return (
    <ModalCard message={message} button="dalej" handler={questionChangeHandler}>
      <CardContent>
        <Typography align="center">
        Utwór ten pod tytułem "
        <Typography variant="button" color="primary"> {title} </Typography>" mogliśmy usłyszeć na eurowizyjnej scenie w mieście
        <Typography variant="button" color="primary"> {place}</Typography> w 
        <Typography variant="button" color="primary"> {year}</Typography> roku w wykonaniu 
        <Typography variant="button" color="primary"> {artist}</Typography>, reprezentując 
        <Typography variant="button" color="primary"> {country}</Typography>
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardContent className={classes.player}>
        <Player songId={songId} songStart={playerStart} songEnd={playerEnd}/>
      </CardContent>
    </ModalCard>
  );
}

export default Answer;