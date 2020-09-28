import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import quizData from './data/quizData.json';
import textData from './data/appTexts.json';
import countries from './data/countries.json';
import cities from './data/cities.json';
import View from './components/layout/View/View';
import CorrectAnswer from './components/features/CorrectAnswer/CorrectAnswer';
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
      main: '#97a6ab',
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
  },
  alert: {
    margin: 'auto',
    width: '80vw',
    maxWidth: 350,
  },
});


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: "",
      level: "easy",
      period: {
        from: 1999, 
        to: 2019
      },
      questions: [],
      currentQuestion: 0,
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
    this.languageHandler = this.languageHandler.bind(this);
    this.quizHandler = this.quizHandler.bind(this);


    this.render = this.render.bind(this);  
  }
    // newHandler = () => { //to delete
    //   this.setState({
    //     currentQuestion: this.state.currentQuestion + 1,
    //   }); 
    // }

    translateCountriesNames = (questions) => {
      const language = this.state.language

      console.log(language, questions)
      let countriesNamesforAnswers = []

        for (let question of questions){
          const city = question.place
          console.log("CITY", city)
          if (language !== "english"){
           countriesNamesforAnswers = question.mediumQuestionOptions
           question.winnerCountry = countries[question.winnerCountry][language]
           question.place = cities[question.place][language]
          console.log('DONE', question)
           for( let i = 0; i < 3; i++ ){
             const country = question.mediumQuestionOptions[i]
             countriesNamesforAnswers.splice(i, 1, countries[country][language])
           }  
         }
         // add country for city in "place"
         const countryForCity = cities[city].country
         let correctCityName = ""
         language !== "english" ? correctCityName = countries[countryForCity][language] : correctCityName = countryForCity
         question.place = question.place + " (" + correctCityName + ")"
      } 
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

    languageHandler = (language) => {
      this.setState({
        language: language,
      });

      this.translateCountriesNames(quizData)
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
      this.getRandomizedQuestions(this.state.period.from, this.state.period.to)
    }

    componentDidUpdate(){
      console.log("app update", this.state)
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

    // let x = this.state.currentQuestion // to delete
    // let question = quizData[x] // to delete



    //console.log('NUMBER', currentQuestionNumber, 'QUESTION', currentQuestion)

    const hide = () => {
      if (currentView === "start") {
        return true
      }
    }

    return (
      <ThemeProvider theme={theme}>
        <div className="App" >
          <View 
            text={textData[language]}
            startText={textData.start}
            translateCountriesNames={this.translateCountriesNames}
            language={language}
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
            languageHandler={this.languageHandler}
            levelHandler={this.levelHandler}
            periodHandler={this.periodHandler}
            quizHandler={this.quizHandler}
          />
          {/* <CorrectAnswer 
            text={textData[language].correctAnswer}
            handler = {this.newHandler}
            language={language}
            message={'Dobrze'}
            title={question.songTitle} 
            artist={question.artist} 
            year={question.year} 
            country={question.winnerCountry} 
            place={question.place} 
            songId={question.id}
            playerStart={question.playerStart}
            playerEnd={question.playerEnd}
          /> */}
          <Footer status={hide()} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
