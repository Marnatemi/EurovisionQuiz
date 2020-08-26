import React from 'react';

import Question from './../../views/Question/Question'
import Start from './../../views/Start/Start';
import Level from './../../views/Level/Level';
import Score from './../../views/Score/Score';
import QuestionSong from '../../views/QuestionSong/QuestionSong';
 

const View = ({level, currentView, levelHandler, periodHandler, period, quizHandler, questionSongIsLoading, currentQuestion, questionNumber, viewHandler, animHandler, questionChangeHandler, scoreHandler, score}) => {
  
  const displayLoader = (songIsLoading) => {
    let questionSongDisplay = 'flex'
    if (songIsLoading === false ) questionSongDisplay = 'none'
    return questionSongDisplay;
  }
  const runAnim = (songIsLoading) => {
    let runAnim = 'paused'
    if (songIsLoading === false ) runAnim = 'run'
    return runAnim;
  }

  console.log('STATE', questionSongIsLoading, 'DISPLAY NOTES', displayLoader(questionSongIsLoading))
  console.log('STATE', questionSongIsLoading, 'RUN LITTLE MAN', runAnim(questionSongIsLoading))

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
      <QuestionSong displayLoader={displayLoader(questionSongIsLoading)} runAnim={runAnim(questionSongIsLoading)}  animHandler={animHandler} viewHandler={viewHandler} question={currentQuestion} playerStart={currentQuestion.playerStart} playerEnd={currentQuestion.playerEnd}/>
      );
  else if (currentView === 'score')
    return (
      <Score score={score} viewHandler={viewHandler} scoreHandler={scoreHandler}/>
    );
}

export default View;