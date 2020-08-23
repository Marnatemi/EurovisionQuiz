import React from 'react';

import Question from './../../views/Question/Question'
import Start from './../../views/Start/Start';
import Level from './../../views/Level/Level';
import Score from './../../views/Score/Score';
import QuestionSong from '../../views/QuestionSong/QuestionSong';
 

const View = ({level, currentView, levelHandler, periodHandler, period, quizHandler, questionSongIsReady, currentQuestion, questionNumber, viewHandler, animHandler, questionChangeHandler, scoreHandler, score}) => {
  
  const displayLoader = (songIsReady) => {
    let questionSongDisplay = 'none'
    if (songIsReady === false ) questionSongDisplay = 'flex'
    return questionSongDisplay;
  }
  const runAnim = (songIsReady) => {
    let runAnim = 'run'
    if (songIsReady === false ) runAnim = 'paused'
    return runAnim;
    console.log(runAnim)
  }

  if (currentView === 'start')
    return (
      <Start viewHandler={viewHandler}/>
    );
  else if (currentView === 'level')
    return (
      <Level viewHandler={viewHandler} levelHandler={levelHandler} periodHandler={periodHandler} period={period} quizHandler={quizHandler}/>
    );
  else if (currentView === 'question')
    return (
      <Question level={level} period={period} question={currentQuestion} questionNumber={questionNumber} questionChangeHandler={questionChangeHandler} scoreHandler={scoreHandler}  />
    );
  else if (currentView === 'question song')
    return (
      <QuestionSong displayLoader={displayLoader(questionSongIsReady)} animHandler={animHandler} runAnim={runAnim(questionSongIsReady)} handler={viewHandler} question={currentQuestion} playerStart={currentQuestion.playerStart} playerEnd={currentQuestion.playerEnd}/>
    );
  else if (currentView === 'score')
    return (
      <Score score={score} />
    );
}

export default View;