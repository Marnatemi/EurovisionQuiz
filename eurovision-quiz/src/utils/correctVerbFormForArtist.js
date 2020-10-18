import appText from '../data/appTexts.json';


const correctVerbFormForArtist = (verb, artist) => {
  const id = artist.id
  let correctVerb = verb

  const setVerbForLanguage = (language, verb) => {
    return appText[language].question.correctAnswer["verb" + verb]
  }

  if(verb === setVerbForLanguage("polish", "Perform") || verb === setVerbForLanguage("polish", "Represent")){
      if (id === "she") {
        correctVerb = verb + "ła"
      } else if (id === "he"){
        correctVerb = verb + "ł"
      } else if (id === "they"){
        correctVerb = verb + "li"
      } else {
        verb === setVerbForLanguage("polish", "Perform") ? correctVerb = verb + "ł zaspół" : correctVerb = verb + "ł" 
      }
    } else if(verb === setVerbForLanguage("english", "Represent")){
      correctVerb = id +" "+ verb
      if (id === "group"){
        correctVerb = "they " + verb
      }
    }
     else if(verb === setVerbForLanguage("french", "Represent")){
      if (id === "she") {
        correctVerb = "elle " + verb + "t"
      } else if (id === "he"){
        correctVerb = "il " + verb + "t"
      } else {
        correctVerb = "ils " + verb + "ent"
      }
    }
  return correctVerb
} 

export default correctVerbFormForArtist






