import React from 'react';
import Player from '../../common/Player/Player';
import { CardContent, Typography, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ModalCard from '../../common/ModalCard/ModalCard';
import correctVerbFormForArtist from '../../../utils/correctVerbFormForArtist';
import correctVerbFormForCountry from '../../../utils/correctVerbFormForCountry';

const useStyles = makeStyles(theme => ({
  answer: {
    padding: '10px 16px',
  },
  props: {
    ...theme.importantText,
    display: "inline"
  },
  player: {
    height: '45%',
    minHeight: 240,
    padding: 5,
  },
}));

const Answer = ({text, message, question, questionChangeHandler}) => {
  const classes = useStyles();
  
  return ( 
    <ModalCard message={message} button={text.button} handler={questionChangeHandler}>
      <CardContent className={classes.answer}>
        {text.phrase1}
        <Typography className={classes.props}> "{question.songTitle}" </Typography>
        {correctVerbFormForArtist(text.verbPerform, question.artist)}
        <Typography className={classes.props}> {question.artist.name} </Typography>
        {text.phrase2}
        <Typography className={classes.props}> {question.place} </Typography> 
        {text.phrase3}
        <Typography className={classes.props}> {question.year}</Typography>. <br/>
        {text.phrase4} {correctVerbFormForArtist(text.verbRepresent, question.artist)} {correctVerbFormForCountry(text.verbWas, question.winnerCountry)}
        <Typography className={classes.props}> {question.winnerCountry}</Typography>.
      </CardContent>
      <Divider variant="middle" />
      <CardContent className={classes.player}>
        <Player songId={question.id} playerStart={question.playerStart} playerEnd={question.playerEnd}/>
      </CardContent>
    </ModalCard>
  );
}

export default Answer;