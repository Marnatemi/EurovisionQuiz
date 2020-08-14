import React from 'react';
import CorrectAnswer from '../../features/CorrectAnswer/CorrectAnswer';
import AnswerCard from '../../common/AnswerCard/AnswerCard.js';
import { makeStyles } from '@material-ui/styles';
import {Card, CardContent, CardHeader,  Modal} from '@material-ui/core';

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

const demoContent = {
  title: "L’oiseau et l’enfant",
  artist: "Marie Myriam",
  year: 1977,
  country: "Francja",
  place: "Londyn (Anglia)",
  answers: [
    {id: 'A', answer: "Marie Myriam" },
    {id: 'B', answer: "Celine Dion Marie Myriam" },
    {id: 'C', answer: "Massiel"}
  ],
  message: "",
}


const Question = ({level, question, questionChangeHandler, scoreHandler}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const answers = `questions.${level}QuestionOptions`
  // const setLevelAnswers = () => {
  //   if(level === "easy"){
  //     return {
  //       question.easyQuestionOptions.map(answer => (
  //       <div 
  //       className={classes.answer}
  //       key={answer}
  //       onClick={() => handleClick(answer)}
  //       >
  //         <AnswerCard answer={answer}/>
  //       </div>
  //     ))}}}
  // console.log(question, answers)


  const handleClick = (id) => {
    if(id === question.artist){
      demoContent.message = "Dobrze!";
      scoreHandler();
    }
    else {
    demoContent.message = "Błędna odpowiedź";
    }
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Card className={classes.card}>
          <CardHeader
              className={classes.header}
              title={'Wskaż wykonawcę utworu'}
            />
        <CardContent className={classes.answers}>
          {question.easyQuestionOptions.map(answer => (
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
                message={demoContent.message}
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