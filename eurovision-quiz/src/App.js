import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Question from '././components/views/Question/Question'
import Start from '././components/views/Start/Start';
import Level from '././components/views/Level/Level';
import Score from '././components/views/Score/Score';
import QuestionSong from './components/views/QuestionSong/QuestionSong';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Start /> */}
        {/* <Score /> */}
        {/* <Level /> */}
        <Question />
        {/* <QuestionSong /> */}
        <Footer />
        {/* <img className="Img" src={melodyLine} /> */}
      </div>
    </ThemeProvider>
    
  );
}

export default App;
