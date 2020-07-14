import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Question from './../../views/Question/Question'
import Start from './../../views/Start/Start';
import Level from './../../views/Level/Level';
import Score from './../../views/Score/Score';
import QuestionSong from '../../views/QuestionSong/QuestionSong';

const appear = 'appear'

const useStyles = makeStyles(theme => ({
  component: {
    animation: `$${appear} .5s ease forwards`,
    opacity: 0,
  },
  [`@keyframes ${appear}`]: {
    '100%': {
      opacity: 1,
    },
  },
 }));
 

const View = ({currentView}) => {

  const classes = useStyles();

  if (currentView === 'start')
    return (
      <Start className={classes.component} />
    );
  else if (currentView === 'level')
    return (
      <Level className={classes.component}/>
    );
  else if (currentView === 'question')
  return (
    <Question className={classes.component}/>
  );
  else if (currentView === 'question song')
  return (
    <QuestionSong className={classes.component}/>
  );
  else if (currentView === 'score')
  return (
    <Score className={classes.component} />
  );
}

export default View;