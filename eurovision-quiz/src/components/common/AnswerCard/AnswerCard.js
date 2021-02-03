import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import { makeStyles } from '@material-ui/styles';

const flip = 'flip';

const useStyles = makeStyles(theme => ({
 cardContainer: {
   width: 220,
   height: 80,
   '&:hover': {
     '& figure:first-of-type': {
      background: '#dddedd',
      }
    },
  },
 card: {
   position: 'relative',
   ...theme.size.fullByPercent,
   animation: `$${flip} 0.45s ease-in-out forwards`,
   animationDelay: '1.2s',
   transformStyle: 'preserve-3d',
   overflow: 'visible',
   '-moz-backface-visibility': 'hidden',
   '& figure' : {
     ...theme.positioning.flexboxCenter,   
     ...theme.size.fullByPercent,
     position: 'absolute',
     margin: 0,
     borderRadius: 4,
     boxShadow: 'inset -1px -1px 7px 0px #0000001f',
   },
 },
 answer: {
  lineHeight: 'inherit',
  fontSize: '1.2rem'
 },
 front: {
  transform: 'rotateX(180deg)',
  background: theme.palette.primary.light,
  border: `2px dashed ${theme.palette.primary.dark}` ,
 },
 back: {
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}` ,
 },
 note: {
  border: 'solid 1px #000',
  borderRadius: '50%',
 },
 [`@keyframes ${flip}`]: {
    '100%': {
      transform: 'rotateX(180deg)',
    }
  },
}));

const AnswerCard = ({answer}) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
      <figure className={classes.front}>
        <CardContent >
          <Typography align="center" className={classes.answer}>
            {answer}
          </Typography>
        </CardContent>
      </figure>
      <figure className={classes.back}>
        <AudiotrackOutlinedIcon className={classes.note} />
      </figure>
      </Card>
    </div>
  );
}

export default AnswerCard;