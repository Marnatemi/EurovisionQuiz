import React from 'react';
import Answer from '../../features/Answer/Answer'
import { makeStyles } from '@material-ui/styles';
import {Card, CardContent, CardHeader, Chip, Avatar, Modal} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  card: {
    transition: '0.3s',
    display: 'inline-block',
    position: 'relative',
    width: '95vw',
    backgroundColor: theme.palette.primary.light,
    margin: '50px 0',
    overflow: 'initial',
  },
  header: {
    background: theme.palette.primary.main,
    color: 'white', 
    margin: '-30px 15px 20px',
    borderRadius: '3px',
    padding: '15px',
    boxShadow: '0px 3px 5px #000',
  },
  content: {
    textAlign: 'center',
    overflowX: 'auto',
    padding: '30px 0 0',
  },
  chip: {
    margin: '50px 0 40px',
    position: 'relative',
    overflow: 'initial',
    padding: '20px 0',
    width: '150px',
    fontSize: '15px',
    boxShadow: '0px 3px 5px '+ theme.palette.primary.dark +'',
  },
  avatar: {
    background: theme.palette.primary.light,
    padding: '30px',
    marginTop: '-55px',
    fontSize: '30px',
    position: 'absolute',
    boxShadow: '0px 3px 5px '+ theme.palette.primary.dark +'',
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
    {id: 'B', answer: "Celine Dion" },
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
              title={'Wskaż wykonawcę'}
            />
        <CardContent className={classes.content}>
          {demoContent.answers.map(answer => (
             <Chip key={answer.id} 
             className={classes.chip} 
             color='primary.light'
             size='medium'
             avatar={<Avatar className={classes.avatar}><h1>{answer.id}</h1></Avatar>} 
             label={answer.answer} 
             onClick={() => handleClick(answer.answer)} />
          ))}
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Answer message={demoContent.message} title={demoContent.title} artist={demoContent.artist} year={demoContent.year} country={demoContent.country} place={demoContent.place}   />
          </Modal>
        </CardContent>
      </Card>
  );
};

export default Question;