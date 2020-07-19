import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import quizData from './data/quizData.json';
import levelQuestions from './data/levelQuestions';
import View from './components/layout/View/View';
import Footer from './components/layout/Footer/Footer';

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
      level: "easy",
      period: {
        from: 1999, 
        to: 2019
      },
      questions: [],
      currentQuestion: 0,
      currentView: "score",
      score: 0,
      questionSongIsReady: false,
    };

    this.handler = this.handler.bind(this);

    this.render = this.render.bind(this);
    console.log(this.state)
  
  }

    questionsPicker = (from, to) => {

      this.setState(
        () => {
          const questions = [];
          const randomizedQuestions = [];
    
          for (let question of quizData){
            if(question.year <= to && question.year >= from){
              questions.push(question);
            }
            console.log(questions)
          }
        
          while (randomizedQuestions.length < 10) {
            const randomQuestion = Math.floor(Math.random() * (questions.length))
            console.log(randomQuestion)
            const selectedQuestion = questions[randomQuestion]
        
            if(randomizedQuestions.indexOf(selectedQuestion) === -1){
              randomizedQuestions.push(selectedQuestion)
            }
        
            console.log(randomizedQuestions)
          }
        
          return { questions: randomizedQuestions }
        }
      )
    
    }


    handler(view) {
      this.setState({
        currentView: view,
      });
    }


    componentDidMount(){
      this.questionsPicker(this.state.period.from, this.state.period.to)
    }

  render() {
    const currentView = this.state.currentView
    const questionSongIsReady = this.state.questionSongIsReady
    const hide = () => {
      if (currentView === "start") {
        return true
      }
    }
    // const initQuestions = () => {
    //   const randomizedQuestions = this.questionsPicker(this.state.period.from, this.state.period.to)

    //   this.setState ({
    //     questions: randomizedQuestions,
    //   })

    // }


    return (
      <ThemeProvider theme={theme}>
        <div className="App" >
          <View question={this.state.questions[this.state.currentQuestion]} currentView={currentView} questionSongIsReady={questionSongIsReady} questions={quizData}/>
          <Footer status={hide()} />
        </div>
        {console.log(this.state)}
      </ThemeProvider>
    );
  }
}

export default App;
