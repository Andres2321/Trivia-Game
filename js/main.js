const BASE_URL = 'https://opentdb.com/api'
const randomTrivia = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple'
const dropdownCategory = document.querySelector('#dropdown-categories')
const question = document.querySelector('#question')
const answers = document.querySelectorAll('.answers')


let questionsArray = []

let winner = () => {
    console.log('yay')
}

let loser = () => {
  console.log('boo')
}

const refineData = (qArray) => {
  let questionsArray = qArray.map((questionElement, index) => {
    // let incorrect = questionElement.incorrect_answer.map(ans => {
    // ans.
    // })
    // console.log(answers.length)
    if (index === 0) {
      question.innerHTML =`<div class="question">${questionElement.question}</div>`
      for (i = 0; i < answers.length; i++) {
        if (i === 0) {
          answers[i].innerHTML = `${questionElement.correct_answer}`
          answers[i].addEventListener('click', () => {
              winner()
          })
        }
        else {
          questionElement.incorrect_answers.forEach(ans => {
            answers[i].innerHTML = `${questionElement.incorrect_answers[i - 1]}`
            // answers[i].addEventListener('click', () => {
            //   loser()
        //})
      })
    }
  }
}
  const answersFilled = document.querySelectorAll('.answers')
    console.log(answersFilled)
    // console.log(questionsArray)
    // let formattedQuestions = {
    //   question: questionElement.question,
    //   correct_answer: questionElement.correct_answer,
    //   incorrect: questionElement.incorrect_answers
    // }
  })
  // console.log(questionsArray)
}

let randomQuestions = async () => {
  await axios.get(randomTrivia)
    .then(res => {
      console.log(res)
      let questionsArray = res.data.results
      refineData(questionsArray)
      console.log(questionsArray)
    }).catch(err => {
      console.log(err)
    })
}
randomQuestions();

  // let currentQuestion = {}
  // let score = 0;
  // let questionCounter = 0
  // let availableQuestions = []

  // const questions = ['ada?', 'asdaa?', 'asdasdasd?', 'asdasdasd?']


  // startGame = () =>{
  //   questionNumber = 0
  //   score = 0;
  //   availableQuestions = [...questions]
  //   console.log(availableQuestions)
  //   getNewQuestions()
  // }
  // getNewQuestions = () => {
  //   questionNumber += 1
  //   const questionIndex = Math.floor(Math.random() * availableQuestions.length)
  //   currentQuestion = availableQuestions[questionIndex]
  //   console.log(currentQuestion)
  //   question.innerText = currentQuestion
  //   availableQuestions.splice(questionIndex, 1)
  // }

  // startGame();

  // let categories = async () => {
  //   await axios.get(`${BASE_URL}_category.php`)
  //     .then(res => {
  //       const triviaArray = res.data.trivia_categories

  //       for (let i = 0; i < triviaArray.length; i += 1) {
  //         dropdownCategory.innerHTML += `<option id=${triviaArray[i].id}>${triviaArray[i].name}</option>`
  //       }

  //       }).catch(err => {
  //         console.log(err)
  //       })
  // }

  // categories();

  //         for (let i = 0; i < generalCatQuestions.length; i += 1) {
  //           let question = generalCatQuestions[i].question
  //           let correctAnswer = generalCatQuestions[i].correct_answer
  //           const questionDiv = document.createElement('div')
  //           questionDiv.innerHTML = `<h3>${question}</h3>`
  //           questionLocation.appendChild(questionDiv)
  //           const answerBtn = document.createElement('button')
  //           answerBtn.innerHTML = `${correctAnswer}`
  //           questionDiv.appendChild(answerBtn)
  //           let wrongAnswers = generalCatQuestions[i].incorrect_answers.forEach(incorrectAns => {
  //           let wrong_answer = incorrectAns
  //           const wrongAnswerBtn = document.createElement('button')
  //           wrongAnswerBtn.innerHTML = `${wrong_answer}`
  //           questionDiv.appendChild(wrongAnswerBtn)
  //         })
  //         }
  //       }).catch(err => {
  //       console.log(err)



  // retrieve questions from api
  // write function that displays one question at a time
  // attach questions to question div
  // retrieve correct answers
  // retrieve incorrect answers
  // create function to randomize order of correct and incorrect answers
  // create a start game function