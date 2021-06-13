import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import quizData from './data/quizData.json';
import textData from './data/appTexts.json';
import translateCountriesNames from './utils/translateCountriesNames';
import getRandomizedQuestionSongs from './utils/randomizeSongs';
import View from './components/layout/View/View';
import Footer from './components/layout/Footer/Footer';

import './App.css';
const lastESCFinal = quizData[quizData.length-1].year

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#deb445',
      dark: '#414c4f',
      light: '#f0f2ef',
    }, 
    secondary: {
      main: '#97a6ab',
      dark: '#000'
    },
  },
  typography: {
    fontFamily: [
      'Anton',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  positioning: {
    absoluteCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    flexboxCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    flexboxBetween: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
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
  },
  alert: {
    margin: 'auto',
    width: '80vw',
    maxWidth: 350,
  },
  importantText: {
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#deb445',
  }
});


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: "polish",
      level: "easy",
      period: {
        from: lastESCFinal-20, 
        to: lastESCFinal
      },
      questions: [],
      currentQuestion: 0,
      currentView: "start",
      score: 0,
      questionSongIsLoading: true,
      showFooter: true
    };
    this.viewHandler = this.viewHandler.bind(this);
    this.questionChangeHandler = this.questionChangeHandler.bind(this);
    this.scoreHandler= this.scoreHandler.bind(this);
    this.animHandler = this.animHandler.bind(this);
    this.levelHandler = this.levelHandler.bind(this);
    this.periodHandler = this.periodHandler.bind(this);
    this.languageHandler = this.languageHandler.bind(this);
    this.quizHandler = this.quizHandler.bind(this);


    this.render = this.render.bind(this);  
  }

    viewHandler = (view) => {
      this.setState({
        currentView: view,
      });
      view === "intro" ? this.setState({showFooter: false}) : this.setState({showFooter: true})
    }

    languageHandler = (language) => {
      this.setState({
        language: language,
      });

      translateCountriesNames(quizData, this.state.language)
    }

    animHandler = (status) => {
      setTimeout(() => {
        this.setState({
          questionSongIsLoading: status,
        });
      }, 1000);  
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
      this.setState(
        getRandomizedQuestionSongs(this.state.period.from, this.state.period.to)
      )
    }

  render() {
    const currentView = this.state.currentView
    const questionSongIsLoading = this.state.questionSongIsLoading
    const currentQuestion = this.state.questions[this.state.currentQuestion]
    const currentQuestionNumber = this.state.currentQuestion + 1
    const score = this.state.score
    const period = this.state.period
    const level = this.state.level
    const language = this.state.language

    return (
      <ThemeProvider theme={theme}>
        <div className="App" >
          <div></div>
          {console.log(this.state.questions)}
          <View 
            className="View"
            lastESCYear = {lastESCFinal}
            text={textData[language]}
            translateCountriesNames={this.translateCountriesNames}
            language={language}
            level={level}
            currentQuestion={currentQuestion} 
            questionNumber={currentQuestionNumber}
            currentView={currentView} 
            questionSongIsLoading={questionSongIsLoading} 
            score={score}
            period={period}
            viewHandler={this.viewHandler} 
            questionChangeHandler={this.questionChangeHandler} 
            scoreHandler={this.scoreHandler}
            animHandler={this.animHandler} 
            languageHandler={this.languageHandler}
            levelHandler={this.levelHandler}
            periodHandler={this.periodHandler}
            quizHandler={this.quizHandler}
          />
          <Footer status={this.state.showFooter} className="footer"/>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
