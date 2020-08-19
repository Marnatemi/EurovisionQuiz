import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import quizData from './data/quizData.json';
import levelQuestions from './data/levelQuestions';
import View from './components/layout/View/View';
import Footer from './components/layout/Footer/Footer';
import Player from './components/common/Player/Player';
import CorrectAnswer from './components/features/CorrectAnswer/CorrectAnswer';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#deb445',
      dark: '#414c4f',
      light: '#f0f2ef',
    }, 
    secondary: {
      main: '#ce581f',
      dark: '#97a6ab',
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
      level: "expert",
      period: {
        from: 1989, 
        to: 2009
      },
      questions: [],
      currentQuestion: 0,
      currentView: "start",
      score: 0,
      questionSongIsReady: false,
    };

    this.viewHandler = this.viewHandler.bind(this);
    this.questionChangeHandler = this.questionChangeHandler.bind(this);
    this.scoreHandler= this.scoreHandler.bind(this);

    this.render = this.render.bind(this);
    //console.log(this.state)
  
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

    questionChangeHandler = () => {
      if(this.state.currentQuestion < 9) {
        this.setState({
          currentView: "question song",
          currentQuestion: this.state.currentQuestion + 1,
        });  
        console.log('AFTER CHANGE', this.state.currentQuestion)
      } else {
        this.setState({
          currentView: "score",
        });  
      }
    }

    scoreHandler = () => {
      this.setState({
        score: this.state.score + 1,
      });  
    }

    componentDidMount(){
      this.getRandomizedQuestions(this.state.period.from, this.state.period.to)
    }

  render() {
    const currentView = this.state.currentView
    const questionSongIsReady = this.state.questionSongIsReady
    const hide = () => {
      if (currentView === "start") {
        return true
      }
    }

    return (
      <ThemeProvider theme={theme}>
        <div className="App" >
          <View 
            level={this.state.level}
            currentQuestion={this.state.questions[this.state.currentQuestion]} 
            currentView={currentView} 
            questionSongIsReady={questionSongIsReady} 
            viewHandler={this.viewHandler} 
            questionChangeHandler={this.questionChangeHandler} 
            scoreHandler={this.scoreHandler}
            score={this.state.score}
            period={this.state.period}
          />
          {/* <Player /> */}
          <Footer status={hide()} />
        </div>
        {console.log(this.state.questions[this.state.currentQuestion])}
        {console.log("WYNIK", this.state.score)}

      </ThemeProvider>
    );
  }
}

export default App;
