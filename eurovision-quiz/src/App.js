import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import quizData from './data/quizData.json';
//import levelQuestions from './data/levelQuestions';
import View from './components/layout/View/View';
import Footer from './components/layout/Footer/Footer';
//import Player from './components/common/Player/Player';
//import CorrectAnswer from './components/features/CorrectAnswer/CorrectAnswer';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#deb445',
      dark: '#414c4f',
      light: '#f0f2ef',
    }, 
    secondary: {
      main: '#97a6ab',
      //lol: '#ce581f',
    },
  },
  typography: {
    fontFamily: [
      'Anton',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  center: {
    absolute: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    flexbox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  size: {
    fullByPercent: {
      width: '100%',
      height: '100%',
    },
    fullByDivice: {
      width: '100vw',
      height: '100vh',
    },
  }
});


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      level: "easy",
      period: {
        from: 1999, 
        to: 2019
      },
      questions: [],
      currentQuestion: 9,
      currentView: "start",
      score: 0,
      questionSongIsLoading: true,
    };

    this.viewHandler = this.viewHandler.bind(this);
    this.questionChangeHandler = this.questionChangeHandler.bind(this);
    this.scoreHandler= this.scoreHandler.bind(this);
    this.animHandler = this.animHandler.bind(this);
    this.levelHandler = this.levelHandler.bind(this);
    this.periodHandler = this.periodHandler.bind(this);
    this.quizHandler = this.quizHandler.bind(this);


    this.render = this.render.bind(this);
    console.log(this.state.level, this.state.period)
  
  }

    getRandomizedQuestions = (from, to) => {

      this.setState(
        () => {
          const questions = [];
          const randomizedQuestions = [];
    
          for (let question of quizData){
            if(question.year <= to && question.year >= from){
              questions.push(question);
            }
          }
        
          while (randomizedQuestions.length < 10) {
            const randomQuestion = Math.floor(Math.random() * (questions.length))
            const selectedQuestion = questions[randomQuestion]
        
            if(randomizedQuestions.indexOf(selectedQuestion) === -1){
              randomizedQuestions.push(selectedQuestion)
            }
          }
        
          return { questions: randomizedQuestions }
        }
      )
    
    }

    viewHandler = (view) => {
      this.setState({
        currentView: view,
      });
    }

    animHandler = (status) => {
      this.setState({
        questionSongIsLoading: status,
      });
    }

    levelHandler = (level) => {
      this.setState({
        level: level,
      });
    }

    periodHandler = (customPeriod) => {
      this.setState({
        period: {
          from: customPeriod[0],
          to: customPeriod[1]
        } 
      });
    }

    questionChangeHandler = () => {
      if(this.state.currentQuestion < 9) {
        this.setState({
          currentView: "question song",
          currentQuestion: this.state.currentQuestion + 1,
        });  
      } else {
        this.setState({
          currentView: "score",
        });  
      }
    }

    scoreHandler = (reset) => {
      if (reset === undefined){
        this.setState({
          score: this.state.score + 1,
        });    
      } else {
        this.setState({
          score: 0,
          currentQuestion: 0, 
        });    
      }
    }

    quizHandler(){
      this.getRandomizedQuestions(this.state.period.from, this.state.period.to)
    }

  render() {
    const currentView = this.state.currentView
    const questionSongIsLoading = this.state.questionSongIsLoading
    const currentQuestion = this.state.questions[this.state.currentQuestion]
    const currentQuestionNumber = this.state.currentQuestion + 1
    const score = this.state.score
    const period = this.state.period
    const level = this.state.level

    console.log('NUMBER', currentQuestionNumber, 'QUESTION', currentQuestion)

    const hide = () => {
      if (currentView === "start") {
        return true
      }
    }

    return (
      <ThemeProvider theme={theme}>
        <div className="App" >
          <View 
            level={level}
            currentQuestion={currentQuestion} 
            questionNumber={currentQuestionNumber}
            currentView={currentView} 
            questionSongIsLoading={questionSongIsLoading} 
            viewHandler={this.viewHandler} 
            questionChangeHandler={this.questionChangeHandler} 
            scoreHandler={this.scoreHandler}
            score={score}
            period={period}
            animHandler={this.animHandler} 
            levelHandler={this.levelHandler}
            periodHandler={this.periodHandler}
            quizHandler={this.quizHandler}
          />
          {/* <Player /> */}
          <Footer status={hide()} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
