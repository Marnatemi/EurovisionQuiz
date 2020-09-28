import React from 'react';
import useSound from 'use-sound';
import CorrectAnswer from '../../features/CorrectAnswer/CorrectAnswer';
import AnswerCard from '../../common/AnswerCard/AnswerCard.js';
import { makeStyles } from '@material-ui/styles';
import {Card, CardContent, CardHeader,  Modal} from '@material-ui/core';
// import levelQuestions from '../../../data/levelQuestions.json';
import clickSound from '../../../Sounds/click3.mp3';
import succesSound from '../../../Sounds/SaxBeep.mp3';
import failureSound from '../../../Sounds/SaxHonk.mp3';
import cardSound from '../../../Sounds/cardOpen.mp3';


const growFirst = 'growFirst';
const growThird = 'growThird';
const growSecond = 'growSecond';
const appear = 'appear'


const useStyles = makeStyles(theme => ({
  card: {
    transition: '0.3s',
    display: 'flex',
    position: 'relative',
    width: '95%',
    height: '80vh',
    maxHeight: 600,
    backgroundColor: theme.palette.primary.light,
    margin: '50px 0',
    overflow: 'initial',
    maxWidth: 450,
    flexDirection: 'column',
    animation: `$${appear} .8s ease forwards`,
    opacity: 0,
    top: '10%',
  },
  header: {
    background: theme.palette.primary.main,
    color: '#1f1b0e', 
    margin: '-30px 15px 0px',
    borderRadius: '3px',
    padding: '15px',
    boxShadow: '0px 3px 5px #000',
  },
  answers: {
    height: '70%',
    margin: 'auto 0',
  },
  answer : {
    position: 'absolute',
    left: '50%',
    bottom: '10%',
    marginLeft: -110,
    marginBottom: -35,
    transform: 'scale(0.5)',
    animation: `$${growFirst} 0.65s ease-in-out forwards`,
    animationDelay: '1.2s',
    '&:first-child': {
      animation: `$${growThird} 0.6s ease-in-out forwards`,
      animationDelay: '1s',
    },
    '&:last-child': {
      animation: `$${growSecond} 0.6s ease-in-out forwards`,
      animationDelay: '1.4s',
    },
  },
  'questionNumber': {
    alignSelf: 'flex-end',
    marginRight: 20,
    fontFamily: 'Anton',
    color: theme.palette.primary.main,
    letterSpacing: 1.5,
  },
  [`@keyframes ${appear}`]: {
    '100%': {
      opacity: 1,
      top: 0,
    },
  },
  [`@keyframes ${growFirst}`]: {
    '100%': {
      transform: 'rotate(0) scale(1)',
      bottom: '70%',
    }
  },
  [`@keyframes ${growThird}`]: {
    '100%': {
      transform: 'rotate(0) scale(1)',
      bottom: '50%',
    }
  },
  [`@keyframes ${growSecond}`]: {
    '100%': {
      transform: 'rotate(0) scale(1)',
      bottom: '30%',
    }
  },
}));

let answerMessage = ""



const Question = ({text, language, level, question, period, questionNumber, questionChangeHandler, scoreHandler}) => {
  const classes = useStyles();
  const [playbackRate] = React.useState(1);
  const [playClickSound] = useSound(clickSound, {playbackRate});
  const [playSuccesSound] = useSound(succesSound);
  const [playFailureSound] = useSound(failureSound);
  const [playCardSound] = useSound(cardSound);


  const [open, setOpen] = React.useState(false);
  let answerOptions = []
  const randomizedAnswerOptions = []

  const setLevelQuestion = () => {
    return text.levelQuestions[level];
  }
  const setLevelAnswers = () => {
    if (level === 'expert'){
      answerOptions = [question.year]
      while (answerOptions.length < 3) {
        const randomYear = Math.floor(Math.random() * (period.to - period.from + 1)) + period.from;
        if(answerOptions.indexOf(randomYear) === -1){
          answerOptions.push(randomYear);
        } 
      }
      // randomize for expert
      for( let i = 0; i < 3; i++ ){
        const randomElement = Math.floor(Math.random() * (answerOptions.length))
        randomizedAnswerOptions.push(answerOptions[randomElement])
        answerOptions.splice(randomElement, 1)
      }  
      answerOptions = randomizedAnswerOptions
  } else {
    answerOptions = question[level + 'QuestionOptions']
  }
    // // randomize for all 
    // for( let i = 0; i < 3; i++ ){
    //   const randomElement = Math.floor(Math.random() * (answerOptions.length))
    //   randomizedAnswerOptions.push(answerOptions[randomElement])
    //   answerOptions.splice(randomElement, 1)
    // }
    // return randomizedAnswerOptions

    return answerOptions
  }

  const handleClick = (id) => {
    playClickSound()
    setTimeout(() => {
      playCardSound()
      if(id === question.artist.name || id === question.winnerCountry || id === question.year){
        playSuccesSound();
        answerMessage = text.succesMessage;
        scoreHandler();
      }
      else {
        playFailureSound();
        answerMessage = text.failMessage;
      }
      setOpen(true);  
    }, 300);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  setLevelAnswers()

  return (
      <Card className={classes.card}>
        <CardHeader
              className={classes.header}
              title={setLevelQuestion()}
        />
        <h4 className={classes.questionNumber}>
          <span>{questionNumber}</span>/10
        </h4>
        <CardContent className={classes.answers}>
          {answerOptions.map(answer => (
            <div 
            className={classes.answer}
            key={answer}
            onClick={() => handleClick(answer)}
            >
              <AnswerCard answer={answer}/>
            </div>
          ))}
          <Modal
            open={open}
            onClose={handleClose}
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
          >
            <div>
              <CorrectAnswer 
                text={text.correctAnswer}
                language={language}
                message={answerMessage}
                title={question.songTitle} 
                artist={question.artist} 
                year={question.year} 
                country={question.winnerCountry} 
                place={question.place} 
                questionChangeHandler={questionChangeHandler}
                songId={question.id}
                playerStart={question.playerStart}
                playerEnd={question.playerEnd}
              />
            </div>
          </Modal>
        </CardContent>
      </Card>
  );
};

export default Question;