import React from 'react';
import CorrectAnswer from '../../features/CorrectAnswer/CorrectAnswer';
import AnswerCard from '../../common/AnswerCard/AnswerCard.js';
import { makeStyles } from '@material-ui/styles';
import {Card, CardContent, CardHeader, Chip, Avatar, Modal, Paper} from '@material-ui/core';


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
    position: 'relative',
    height: '70%',
    margin: 'auto 0',
  },
  answerCard: {
    //width: '20%',
  },
  chip: {
    margin: '50px 0 40px',
    position: 'relative',
    overflow: 'initial',
    padding: '20px 0',
    width: '150px',
    fontSize: '15px',
    boxShadow: `0px 3px 5px ${theme.palette.primary.dark}`,
  },
  avatar: {
    background: theme.palette.primary.light,
    padding: '30px',
    marginTop: '-55px',
    fontSize: '30px',
    position: 'absolute',
    boxShadow: `0px 3px 5px ${theme.palette.primary.dark}`,
  },
}));

const demoContent = {
  title: "L’oiseau et l’enfant",
  artist: "Marie Myriam",
  year: 1977,
  country: "Francja",
  place: "Londyn (Anglia)",
  answers: [
    {id: 'A', answer: "Marie Myriam & Celine Dion" },
    // {id: 'B', answer: "Celine Dion" },
    // {id: 'C', answer: "Massiel"}
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
            <AnswerCard
              key={answer.id} 
              className={classes.answerCard}
              onClick={() => handleClick(answer.answer)}
              answer={answer.answer}
            />
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