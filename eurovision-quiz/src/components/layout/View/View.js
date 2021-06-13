import React from 'react';
import useSound from 'use-sound';
import ForIOS from './../../views/ForIOS/ForIOS';
import Question from './../../views/Question/Question';
import SetLanguage from './../../views/SetLanguage/SetLanguage';
import Intro from '../../views/Intro/Intro';
import Level from './../../views/Level/Level';
import Score from './../../views/Score/Score';
import QuestionSong from '../../views/QuestionSong/QuestionSong';
import introSound from '../../../assets/Sounds/Intro.mp3';

const View = ({lastESCYear, text, languageHandler, level, currentView, levelHandler, periodHandler, period, quizHandler, questionSongIsLoading, currentQuestion, questionNumber, viewHandler, animHandler, questionChangeHandler, scoreHandler, score}) => {
  const [playIntroSound, {stop}] = useSound(introSound);
  const ua = navigator.userAgent;
  const info = {
    browser: /Edge\/\d+/.test(ua) ? 'ed' : /MSIE 9/.test(ua) ? 'ie9' : /MSIE 10/.test(ua) ? 'ie10' : /MSIE 11/.test(ua) ? 'ie11' : /MSIE\s\d/.test(ua) ? 'ie?' : /rv:11/.test(ua) ? 'ie11' : /Firefox\W\d/.test(ua) ? 'ff' : /Chrom(e|ium)\W\d|CriOS\W\d/.test(ua) ? 'gc' : /\bSafari\W\d/.test(ua) ? 'sa' : /\bOpera\W\d/.test(ua) ? 'op' : /\bOPR\W\d/i.test(ua) ? 'op' : typeof MSPointerEvent !== 'undefined' ? 'ie?' : '',
    os: /Mac/.test(ua) ? "mac" : "",
  };

  const displayLoaderforQS = (songIsLoading) => {
    let questionSongDisplay = 'flex'
    if (songIsLoading === false ) questionSongDisplay = 'none'
      return questionSongDisplay;
  }

  // if(info.os === "mac")
  //   return (
  //     <ForIOS/>
  //   );
  // else 
  if (currentView === 'start')
    return (
      <SetLanguage viewHandler={viewHandler} languageHandler={languageHandler}/>
    );
  else if (currentView === 'intro')
    return (
      <Intro text={text.intro} viewHandler={viewHandler} playBgMusic={playIntroSound}/>
    );
  else if (currentView === 'level')
    return (
      <Level text={text.level} lastESCYear={lastESCYear} viewHandler={viewHandler} levelHandler={levelHandler} periodHandler={periodHandler} quizHandler={quizHandler} stopBgMusic={stop}/>
    );
  else if (currentView === 'question song')
    return (
      <QuestionSong stopBgMusic={stop} displayLoader={displayLoaderforQS(questionSongIsLoading)} animHandler={animHandler} viewHandler={viewHandler} songId={currentQuestion.id} playerStart={currentQuestion.playerStart} playerEnd={currentQuestion.playerEnd}/>
      );
  else if (currentView === 'question')
    return (
      <Question text={text.question} level={level} period={period} question={currentQuestion} questionNumber={questionNumber} questionChangeHandler={questionChangeHandler} scoreHandler={scoreHandler}/>
    );
  else if (currentView === 'score')
    return (
      <Score text={text.score} score={score} viewHandler={viewHandler} scoreHandler={scoreHandler}/>
    );
}

export default View;