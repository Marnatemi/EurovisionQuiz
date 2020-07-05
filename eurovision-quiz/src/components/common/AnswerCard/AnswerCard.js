import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const flip = 'flip';

const useStyles = makeStyles(theme => ({
 cardContainer: {
   width: 120,
   height: 150,
 },
 card: {
   position: 'relative',
   width: '100%',
   height: '100%',
   animation: `$${flip} 0.45s ease-in-out forwards`,
   animationDelay: '1.2s',
   transformStyle: 'preserve-3d',
   overflow: 'visible',
   '& figure' : {
     width: '100%',
     height: '100%',
     position: 'absolute',
     margin: 0,
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection: 'column',
     borderRadius: 4,
     boxShadow: 'inset -1px -1px 7px 0px #0000001f',

   },
   answer: {
     padding: 0,
   }
 },
 front: {
  transform: 'rotateY(180deg)',
 },
 back: {
    background: '#deb445'
 },
 [`@keyframes ${flip}`]: {
    '100%': {
      transform: 'rotateY(180deg)',
    }
  },
}));


const AnswerCard = ({answer}) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
      <figure className={classes.front}>
        <CardContent className={classes.answer}>
          <Typography align="center">
            {answer}
          </Typography>
        </CardContent>
      </figure>
      <figure className={classes.back}></figure>
      </Card>
    </div>
  );
}

export default AnswerCard;