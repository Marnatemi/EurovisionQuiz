const setLevelAnswers = (level, question, period) => {
  let answerOptions = []
  const randomizedAnswerOptions = []

  if (level === 'expert'){
    answerOptions = [question.year]
    while (answerOptions.length < 3) {
      const randomYear = Math.floor(Math.random() * (period.to - period.from + 1)) + period.from;
      if(answerOptions.indexOf(randomYear) === -1){
        answerOptions.push(randomYear);
      } 
    }
    // randomize for expert
    for( let i = 0; i < 3; i++ ){
      const randomElement = Math.floor(Math.random() * (answerOptions.length))
      randomizedAnswerOptions.push(answerOptions[randomElement])
      answerOptions.splice(randomElement, 1)
    }  
    answerOptions = randomizedAnswerOptions
} else {
  answerOptions = question[level + 'QuestionOptions']
}
  // // randomize for all 
  // for( let i = 0; i < 3; i++ ){
  //   const randomElement = Math.floor(Math.random() * (answerOptions.length))
  //   randomizedAnswerOptions.push(answerOptions[randomElement])
  //   answerOptions.splice(randomElement, 1)
  // }
  // return randomizedAnswerOptions

  return answerOptions
}

export default setLevelAnswers