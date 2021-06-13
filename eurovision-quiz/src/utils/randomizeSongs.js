import quizData from '../data/quizData.json';

const getRandomizedQuestionSongs = (from, to) => {
  console.log(from, to)
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

export default getRandomizedQuestionSongs