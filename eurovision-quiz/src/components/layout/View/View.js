import React from 'react';
import useSound from 'use-sound';
import Question from './../../views/Question/Question';
import SetLanguage from './../../views/SetLanguage/SetLanguage';
import Intro from '../../views/Intro/Intro';
import Level from './../../views/Level/Level';
import Score from './../../views/Score/Score';
import QuestionSong from '../../views/QuestionSong/QuestionSong';
import introSound from '../../../Sounds/Intro.mp3';

 

const View = ({text, startText, language, languageHandler, level, currentView, levelHandler, periodHandler, period, quizHandler, questionSongIsLoading, currentQuestion, questionNumber, viewHandler, animHandler, questionChangeHandler, scoreHandler, score}) => {
  const [playIntroSound, {stop}] = useSound(introSound);
  const displayLoader = (songIsLoading) => {
    let questionSongDisplay = 'flex'
    if (songIsLoading === false ) questionSongDisplay = 'none'
    return questionSongDisplay;
  }

  if (currentView === 'start'){
    return (
      <SetLanguage text={startText} viewHandler={viewHandler} languageHandler={languageHandler} />
    );
  }
  else if (currentView === 'intro')
  return (
    <Intro text={text.intro} viewHandler={viewHandler} playBgMusic={playIntroSound} />
  );
  else if (currentView === 'level')
    return (
      <Level text={text.level} viewHandler={viewHandler} levelHandler={levelHandler} periodHandler={periodHandler} quizHandler={quizHandler} stopBgMusic={stop} />
    );
  else if (currentView === 'question song')
    return (
      <QuestionSong stopBgMusic={stop} displayLoader={displayLoader(questionSongIsLoading)} animHandler={animHandler} viewHandler={viewHandler} question={currentQuestion} playerStart={currentQuestion.playerStart} playerEnd={currentQuestion.playerEnd}/>
      );
  else if (currentView === 'question')
  return (
    <Question text={text.question} language={language} level={level} period={period} question={currentQuestion} questionNumber={questionNumber} questionChangeHandler={questionChangeHandler} scoreHandler={scoreHandler}  />
  );
  else if (currentView === 'score')
    return (
      <Score text={text.score} score={score} viewHandler={viewHandler} scoreHandler={scoreHandler}/>
    );
}

export default View;