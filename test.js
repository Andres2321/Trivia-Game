const BASE_URL = 'https://opentdb.com/api'
const randomTrivia = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple'
const questionLocation = document.querySelector('.question')
const answerLocation = document.querySelector('.answer')

console.log(questionLocation)
console.log(answerLocation)

let randomQuestions = async () => {
  await axios.get(randomTrivia)
    .then(res => {
      // console.log(res)
      let questions = res.data.results
      console.log(questions)
      for (let i = 0; i < questions.length; i += 1) {
        let triviaQuestion = questions[i].question
        let correctAnswer = questions[i].correct_answer
        console.log(triviaQuestion)
        console.log(correctAnswer)
        // creating a div for every question in the array
        let newQuestionDiv = document.createElement('div')
        newQuestionDiv.innerHTML = `<h3>${triviaQuestion}</h3>`
        questionLocation.appendChild(newQuestionDiv)
        // creating a <p> for every answer in the array and attaching it to div created above
        let newAnswerElement = document.createElement('div')
        newAnswerElement.innerHTML = `${correctAnswer}`
        newQuestionDiv.appendChild(newAnswerElement)
      }
    }).catch(err => {
      console.log(err)
    })
  }
  randomQuestions();
  
  

  // const questionDiv = document.createElement('div')
  // questionDiv.innerHTML = `<h3>${question}</h3>`
  // questionLocation.appendChild(questionDiv)
  // const answerBtn = document.createElement('button')
  // answerBtn.innerHTML = `${correctAnswer}`
  // questionDiv.appendChild(answerBtn)
  // let wrongAnswers = res[i].incorrect_answers.forEach(incorrectAns => {
  // let wrong_answer = incorrectAns
  // const wrongAnswerBtn = document.createElement('button')
  // wrongAnswerBtn.innerHTML = `${wrong_answer}`
  // questionDiv.appendChild(wrongAnswerBtn)
  // })