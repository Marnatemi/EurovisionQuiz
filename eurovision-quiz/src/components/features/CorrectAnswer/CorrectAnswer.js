import React from 'react';
import Player from '../../common/Player/Player';
import {CardContent, Typography, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ModalCard from '../../common/ModalCard/ModalCard';
import appText from '../../../data/appTexts.json';
//import QuestionSong from '../../views/QuestionSong/QuestionSong';

const useStyles = makeStyles(theme => ({
  props: {
    fontSize: "1rem",
    textTransform: 'uppercase',
    display: "inline"
  },
  player: {
    padding: '5px',
  },
}));
//delete "handler"
const Answer = ({text, title, year, artist, country, place, message, questionChangeHandler, playerStart, playerEnd, songId}) => {
  const classes = useStyles();

  const setVerbForLanguage = (language, verb) => {
    return appText[language].question.correctAnswer["verb" + verb]
  }

  const correctVerbFormForArtist = (verb) => {
    const id = artist.id
    let correctVerb = verb

    if(verb === setVerbForLanguage("polish", "Perform") || verb === setVerbForLanguage("polish", "Represent")){
        if (id === "she") {
          correctVerb = verb + "ła"
        } else if (id === "he"){
          correctVerb = verb + "ł"
        } else if (id === "they"){
          correctVerb = verb + "li"
        } else {
          verb === setVerbForLanguage("polish", "Perform") ? correctVerb = verb + "ł zaspół" : correctVerb = verb + "ł" 
        }
      } else if(verb === setVerbForLanguage("english", "Represent")){
        correctVerb = id +" "+ verb
        if (id === "group"){
          correctVerb = "they " + verb
        }
      }
       else if(verb === setVerbForLanguage("french", "Represent")){
        if (id === "she") {
          correctVerb = "elle " + verb + "t"
        } else if (id === "he"){
          correctVerb = "il " + verb + "t"
        } else {
          correctVerb = "ils " + verb + "ent"
        }
      }
      return correctVerb
    } 


  const correctVerbFormForCountry = (verb) => {
    
    const lastLetter = country.substring(country.length - 1)
    console.log(country)
    
    if(verb !== ""){
      if (lastLetter === "a" || 
          lastLetter === "o" ||
          lastLetter === "y"){
        console.log(country, lastLetter, verb)
   
        verb = verb + lastLetter
      }
    }
    return verb  
  }
  //     <ModalCard message={message} button="dalej" handler={questionChangeHandler}>

  return (
    <ModalCard message={message} button={text.button} handler={questionChangeHandler}>
      <CardContent>
        {text.phrase1}
        <Typography className={classes.props} color="primary"> "{title}" </Typography>
        {correctVerbFormForArtist(text.verbPerform)}
        <Typography className={classes.props} color="primary"> {artist.name} </Typography>
        {text.phrase2}
        <Typography className={classes.props} color="primary"> {place} </Typography> 
        {text.phrase3}
        <Typography className={classes.props} color="primary"> {year}</Typography>. <br/>
        {text.phrase4} {correctVerbFormForArtist(text.verbRepresent)} {correctVerbFormForCountry(text.verbWas)}
        <Typography className={classes.props} color="primary"> {country}</Typography>.
      </CardContent>
      <Divider variant="middle" />
      <CardContent className={classes.player}>
        <Player songId={songId} songStart={playerStart} songEnd={playerEnd}/>
      </CardContent>
    </ModalCard>
  );
}

export default Answer;