import React from 'react';
import useSound from 'use-sound';
import Question from './../../views/Question/Question';
import SetLanguage from './../../views/SetLanguage/SetLanguage';
import Intro from '../../views/Intro/Intro';
import Level from './../../views/Level/Level';
import Score from './../../views/Score/Score';
import QuestionSong from '../../views/QuestionSong/QuestionSong';
import answersSound from '../../../Sounds/guitar.mp3';
import introSound from '../../../Sounds/Intro.mp3';

 

const View = ({languageHandler, level, currentView, levelHandler, periodHandler, period, quizHandler, questionSongIsLoading, currentQuestion, questionNumber, viewHandler, animHandler, questionChangeHandler, scoreHandler, score}) => {
  const [playAnswersSound] = useSound(answersSound);
  const [playIntroSound, {stop}] = useSound(introSound);

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

  // console.log('STATE', questionSongIsLoading, 'DISPLAY NOTES', displayLoader(questionSongIsLoading))
  // console.log('STATE', questionSongIsLoading, 'RUN LITTLE MAN', runAnim(questionSongIsLoading))

  if (currentView === 'start'){
    return (
      <SetLanguage viewHandler={viewHandler} playBgMusic={playIntroSound} languageHandler={languageHandler} />
    );
  }
  else if (currentView === 'intro')
  return (
    <Intro viewHandler={viewHandler} />
  );
  else if (currentView === 'level')
    return (
      <Level viewHandler={viewHandler} levelHandler={levelHandler} periodHandler={periodHandler} period={period} quizHandler={quizHandler} stopBgMusic={stop} />
    );
  else if (currentView === 'question song')
    return (
      <QuestionSong displayLoader={displayLoader(questionSongIsLoading)} runAnim={runAnim(questionSongIsLoading)}  animHandler={animHandler} viewHandler={viewHandler} question={currentQuestion} playerStart={currentQuestion.playerStart} playerEnd={currentQuestion.playerEnd}/>
      );
  else if (currentView === 'question')
  return (
    <Question level={level} period={period} question={currentQuestion} questionNumber={questionNumber} questionChangeHandler={questionChangeHandler} scoreHandler={scoreHandler}  />
  );
  else if (currentView === 'score')
    return (
      <Score score={score} viewHandler={viewHandler} scoreHandler={scoreHandler}/>
    );
}

export default View;