import React from 'react';
import {Card, CardContent, CardHeader, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const flip = 'flip';
const flipBack = 'flipBack';
const growA = 'growA';
const growB = 'growB';
const growC = 'growC';


// const useStyles = makeStyles(theme => ({
//   cardWrapper:{
//     width: 120,
//     minHeight: 120,
//     perspective: 120,
//     bottom: '10%',
//     left: '50%',
//     position: 'absolute',
//     transform: 'translate(-50%, -50%) scale(.6) rotate(90deg)',
//     transformStyle: 'preserve-3d',
//     //animation: `$${growB} 5s ease-in-out  forwards`,
//     '&:first-of-type':{
//       zIndex: 1,
//       top: '20%',
//       left: '50%',
//       //animation: `$${growA} 5s ease-in-out forwards`,
//     },
//     '&:last-of-type':{
//       //animation: `$${growC} 5s ease-in-out  forwards`,
//     },
//     '& *': {
//       width: '100%',
//       height: '100%',
//       backfaceVisibility: 'hidden',
//     },
//   },
//   card: {
//     position: 'relative',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     background: 'linear-gradient(-20deg, rgba(222,180,69,0.7245179063360881) 0%, rgba(240,242,239,0.5) 37%)', 
//     '& div': {
//       padding: 0,
//     },
//     '& div:last-child' :{
//       padding: 0,
//       height: 54,
//     },
//     transform: 'rotateY(180deg) rotateZ(90deg)',
//     animation: `$${flip} 0.8s ease forwards`,
//     animationDelay: '0.2s',
//   },
//   cardBack: {
//     background: 'linear-gradient(-20deg, rgb(222,180,69) 0%, rgb(240,242,239) 37%)', 
//     top: 0,
//     left: 0,
//     transform: 'rotateY(0deg)',
//     animation: `$${flipBack} 5s cubic-bezier(.175, .885, .32, 1.275) forwards`,
//     animationDelay: '0.2s',
//     position: 'absolute',

//   },
//   answer: {
//     position: 'relative',
//     '& p':{
//       position: 'absolute',
//       width: '100%',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//     }
//   },
//   [`@keyframes ${flip}`]: {
//     '100%': {
//       transform: 'rotateY(0deg) rotateZ(0)',

//     }
//   },
//   [`@keyframes ${flipBack}`]: {
//     '100%': {
//       transform: 'rotateY(180deg) rotateZ(0)',

      
//     }
//   },
//   [`@keyframes ${growA}`]: {
//     '100%': {
//       transform: 'translate(-50%, -50%) scale(1) rotate(0)',
//       top: '20%',
//       left: '50%',

//     }
//   },
//   [`@keyframes ${growB}`]: {
//     '100%': {
//       transform: 'translate(-50%, -50%) scale(1) rotate(0)',
//       top: '50%',
//       left: '25%',  
//     }
//   },
//   [`@keyframes ${growC}`]: {
//     '100%': {
//       transform: 'translate(-50%, -50%) scale(1) rotate(0)',
//       top: '50%',
//       left: '75%',
//     }
//   },
// }));

const useStyles = makeStyles(theme => ({
 cardContainer: {
   width: 120,
   height: 150,
 },
 card: {
   position: 'relative',
   width: '100%',
   height: '100%',
   animation: `$${flip} 1s ease-in-out forwards`,
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