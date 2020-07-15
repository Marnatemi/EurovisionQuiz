import React from 'react';

import Question from './../../views/Question/Question'
import Start from './../../views/Start/Start';
import Level from './../../views/Level/Level';
import Score from './../../views/Score/Score';
import QuestionSong from '../../views/QuestionSong/QuestionSong';
 

const View = ({currentView}) => {

  if (currentView === 'start')
    return (
      <Start />
    );
  else if (currentView === 'level')
    return (
      <Level/>
    );
  else if (currentView === 'question')
    return (
      <Question/>
    );
  else if (currentView === 'question song')
    return (
      <QuestionSong/>
    );
  else if (currentView === 'score')
    return (
      <Score />
    );
}

export default View;