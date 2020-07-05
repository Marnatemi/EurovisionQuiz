import React from 'react';
import CorrectAnswer from '../../features/CorrectAnswer/CorrectAnswer';
import AnswerCard from '../../common/AnswerCard/AnswerCard.js';
import { makeStyles } from '@material-ui/styles';
import {Card, CardContent, CardHeader, Chip, Avatar, Modal, Paper} from '@material-ui/core';

const grow = 'grow';
const growLeft = 'growLeft';
const growRight = 'growRight';


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

  },
  header: {
    background: theme.palette.primary.main,
    color: 'white', 
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
    //transform: 'rotate(90deg) scale(0.5)',
    transform: 'scale(0.5)',
    animation: `$${grow} 0.65s ease-in-out forwards`,
    animationDelay: '1.2s',
    '&:first-child': {
      animation: `$${growLeft} 0.6s ease-in-out forwards`,
      animationDelay: '1s',
    },
    '&:last-child': {
      animation: `$${growRight} 0.6s ease-in-out forwards`,
      animationDelay: '1.4s',
    },
  },
  [`@keyframes ${grow}`]: {
    '100%': {
      transform: 'rotate(0) scale(1)',
      //bottom: '65%',
      //left: '51.5%'
      bottom: '70%',
    }
  },
  [`@keyframes ${growLeft}`]: {
    '100%': {
      transform: 'rotate(0) scale(1)',
      //bottom: '45%',
      //left: '28.5%',
      bottom: '50%',
    }
  },
  [`@keyframes ${growRight}`]: {
    '100%': {
      transform: 'rotate(0) scale(1)',
      bottom: '30%',
      //left: '71.5%',
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


const Question = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = (id) => {
    if(id === demoContent.artist){demoContent.message = "Dobrze!"; console.info('You clicked the', id, demoContent.message);
    }
    else{demoContent.message = "Błędna odpowiedź"; console.info('You clicked the', id, demoContent.message);}
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
          {demoContent.answers.map(answer => (
            <div 
            className={classes.answer}
            key={answer.id}
            onClick={() => handleClick(answer.answer)}
            >
              <AnswerCard answer={answer.answer}/>
            </div>
          ))}
          <Modal
            open={open}
            onClose={handleClose}
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
          >
            <div>
              <CorrectAnswer message={demoContent.message} title={demoContent.title} artist={demoContent.artist} year={demoContent.year} country={demoContent.country} place={demoContent.place}   />
            </div>
          </Modal>
        </CardContent>
      </Card>
  );
};

export default Question;