import countries from '../data/countries.json';
import cities from '../data/cities.json';


const translateCountriesNames = (questions, language) => {

  console.log(language, questions)
  let countriesNamesforAnswers = []

    for (let question of questions){
      const city = question.place
      // console.log("CITY", city)
      if (language !== "english"){
       countriesNamesforAnswers = question.mediumQuestionOptions
       question.winnerCountry = countries[question.winnerCountry][language]
       question.place = cities[question.place][language]
       //console.log('DONE', question)
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

export default translateCountriesNames
