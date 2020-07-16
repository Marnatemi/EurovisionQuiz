import React from 'react';

import Question from './../../views/Question/Question'
import Start from './../../views/Start/Start';
import Level from './../../views/Level/Level';
import Score from './../../views/Score/Score';
import QuestionSong from '../../views/QuestionSong/QuestionSong';
 

const View = ({currentView, questionSongIsReady}) => {
  
  const displayLoader = (songIsReady) => {
    let questionSongDisplay = 'none'
    if (songIsReady === false ) questionSongDisplay = 'flex'
    return questionSongDisplay;
  }
  const runAnim = (songIsReady) => {
    let runAnim = 'run'
    if (songIsReady === false ) runAnim = 'paused'
    return runAnim;
  }


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
      <QuestionSong displayLoader={displayLoader(questionSongIsReady)} runAnim={runAnim(questionSongIsReady)}/>
    );
  else if (currentView === 'score')
    return (
      <Score />
    );
}

export default View;