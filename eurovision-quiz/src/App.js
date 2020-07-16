import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import {quizData} from './data/quizData.json';
import {levelQuestions} from './data/levelQuestions.json';
import Question from '././components/views/Question/Question'
import Start from '././components/views/Start/Start';
import Level from '././components/views/Level/Level';
import Score from '././components/views/Score/Score';
import QuestionSong from './components/views/QuestionSong/QuestionSong';
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
});



class App extends React.Component {

  constructor(props) {
    super(props);
    //props = data;
    this.state = {
      level: "easy",
      currentQuestion: 0,
      currentView: "question song",
      score: 0,
      questionSongIsReady: true,
    };

    this.handler = this.handler.bind(this);
    console.log(this.state);
    }

    handler(view) {
      this.setState({
        currentView: view,
      });
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
        <div className="App">
          <View currentView={currentView} questionSongIsReady={questionSongIsReady} />
          {/* <Start /> */}
          {/* <Score /> */}
          {/* <Level /> */}
          {/* <Question /> */}
          {/* <QuestionSong /> */}
          <Footer hide={hide()} />
          {/* <img className="Img" src={melodyLine} /> */}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
