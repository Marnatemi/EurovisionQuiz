import React from 'react';
import Player from '../../common/Player/Player';
import {CardContent, Typography, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ModalCard from '../../common/ModalCard/ModalCard';
import correctVerbFormForArtist from '../../../utils/correctVerbFormForArtist';
import correctVerbFormForCountry from '../../../utils/correctVerbFormForCountry';
//import QuestionSong from '../../views/QuestionSong/QuestionSong';

const useStyles = makeStyles(theme => ({
  props: {
    fontSize: "1rem",
    textTransform: 'uppercase',
    display: "inline"
  },
  player: {
    height: '45%',
    padding: '5px',
  },
}));

const Answer = ({text, message, question, questionChangeHandler}) => {
  const classes = useStyles();
  
  return ( 
    <ModalCard message={message} button={text.button} handler={questionChangeHandler}>
      <CardContent>
        {text.phrase1}
        <Typography className={classes.props} color="primary"> "{question.songTitle}" </Typography>
        {correctVerbFormForArtist(text.verbPerform, question.artist)}
        <Typography className={classes.props} color="primary"> {question.artist.name} </Typography>
        {text.phrase2}
        <Typography className={classes.props} color="primary"> {question.place} </Typography> 
        {text.phrase3}
        <Typography className={classes.props} color="primary"> {question.year}</Typography>. <br/>
        {text.phrase4} {correctVerbFormForArtist(text.verbRepresent, question.artist)} {correctVerbFormForCountry(text.verbWas, question.winnerCountry)}
        <Typography className={classes.props} color="primary"> {question.winnerCountry}</Typography>.
      </CardContent>
      <Divider variant="middle" />
      <CardContent className={classes.player}>
        <Player songId={question.id} playerStart={question.playerStart} playerEnd={question.playerEnd}/>
      </CardContent>
    </ModalCard>
  );
}

export default Answer;