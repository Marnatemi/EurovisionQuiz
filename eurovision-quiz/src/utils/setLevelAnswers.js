const setLevelAnswers = (level, question, period) => {
  let answerOptions = []
  const randomizedAnswerOptions = []

  if (level === 'expert'){
    answerOptions = [question.year]
    //look for 2 different answers from correct period to add for options 
    while (answerOptions.length < 3) {
      const randomYear = Math.floor(Math.random() * (period.to - period.from + 1)) + period.from;
      if(answerOptions.indexOf(randomYear) === -1){
        answerOptions.push(randomYear);
      } 
    }

  } else {
  answerOptions = question[level + 'QuestionOptions']
}
  // randomize options for all 
  for( let i = 0; i < 3; i++ ){
    const randomElement = Math.floor(Math.random() * (answerOptions.length))
    randomizedAnswerOptions.push(answerOptions[randomElement])
    answerOptions.splice(randomElement, 1)
  }

  return randomizedAnswerOptions
}

export default setLevelAnswers