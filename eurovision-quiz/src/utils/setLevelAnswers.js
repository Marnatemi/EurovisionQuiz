const setLevelAnswers = (level, question, period) => {
  let answerOptions = []
  const randomizedAnswerOptions = []
  console.log("AT FIRST", 'A:',answerOptions, "RA:", randomizedAnswerOptions)

  if (level === 'expert'){
    answerOptions = [question.year]
    //look for 2 different answers from correct period to add for options 
    while (answerOptions.length < 3) {
      const randomYear = Math.floor(Math.random() * (period.to - period.from + 1)) + period.from;
      if(answerOptions.indexOf(randomYear) === -1){
        answerOptions.push(randomYear);
       console.log("FOR EXPERT", 'A:',answerOptions, "RA:", randomizedAnswerOptions)

      } 
    }

  } else {
  answerOptions = question[level + 'QuestionOptions']
}
console.log("with options", 'A:',answerOptions, "RA:", randomizedAnswerOptions)

  // randomize options for all 
  for( let i = 0; i < 3; i++ ){
    const randomElement = Math.floor(Math.random() * (answerOptions.length))
    randomizedAnswerOptions.push(answerOptions[randomElement])
    answerOptions.splice(randomElement, 1)
    console.log("loop FOR ALL", 'A:',answerOptions, "RA:", randomizedAnswerOptions)
  }
  console.log(" after all", 'A:',answerOptions, "RA:", randomizedAnswerOptions)

  return randomizedAnswerOptions
}

export default setLevelAnswers