import React, {useEffect} from 'react';
import useSound from 'use-sound';
import CorrectAnswer from '../../features/CorrectAnswer/CorrectAnswer';
import AnswerCard from '../../common/AnswerCard/AnswerCard.js';
import { makeStyles } from '@material-ui/styles';
import {Card, CardContent, CardHeader,  Modal} from '@material-ui/core';
import setLevelAnswers from '../../../utils/setLevelAnswers'; 
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
    width: '95%',
    minWidth: 260,
    maxWidth: 450,
    height: '80vh',
    minHeight: 375,
    maxHeight: 530,
    backgroundColor: theme.palette.primary.light,
    overflow: 'initial',
    animation: `$${appear} .8s ease forwards`,
    opacity: 0,
    marginTop: 'auto'
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
    position: 'relative',
    height: '70%',
    minHeight: 295,
    margin: 'auto 0',
  },
  answer : {
    position: 'absolute',
    left: '50%',
    bottom: 10,
    marginLeft: -110,
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
  questionNumber: {
    textAlign: 'right',
    margin: '5px 20px 0',
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
      bottom: '43%',
    }
  },
  [`@keyframes ${growSecond}`]: {
    '100%': {
      transform: 'rotate(0) scale(1)',
      bottom: '16%',
    }
  },
  //eslint-disable-next-line no-useless-computed-key
  ['@media (max-height:780px)']: {
    card: {
      marginTop: 60,
    }
  },
  //eslint-disable-next-line no-useless-computed-key
  ['@media (max-width:315px)']: {
    card: {
      minHeight: 410,
    }
  }
}));

let answerMessage = ""

const Question = ({text, level, question, period, questionNumber, scoreHandler, ...otherProps}) => {
  const classes = useStyles();
  const [playbackRate] = React.useState(1);
  const [playClickSound] = useSound(clickSound, {playbackRate});
  const [playSuccesSound] = useSound(succesSound);
  const [playFailureSound] = useSound(failureSound);
  const [playCardSound] = useSound(cardSound);
  const [open, setOpen] = React.useState(false);
  const [answerOptions, setOptions] = React.useState([]);

  useEffect(() => {
    setOptions(setLevelAnswers(level, question, period))
  }, [level, question, period])

  const setLevelQuestion = () => {
    return text.levelQuestions[level];
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
    }, 50);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
      <Card className={[classes.card, "question"].join(' ')} >
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
                message={answerMessage}
                question={question}
                {...otherProps}
              />
            </div>
          </Modal>
        </CardContent>
      </Card>
  );
};

export default Question;