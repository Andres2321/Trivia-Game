const BASE_URL = 'https://opentdb.com/api'
const randomTrivia = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple'

const questionLocation = document.querySelector('#question')

// const answer = document.querySelector('.answer')
// console.log(answer)

const buttons = document.querySelectorAll('.answer-btn')

const randomIndex = Math.floor(Math.random() * 2)

let score = 0

const formatData = (resultArray, idx=0) => {
  let indexArr = [0, 1]

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(indexArr);
  console.log(resultArray)
  resultArray.map((ans, index) => {

    // x.push({ index: index, ans: [ans.correct_answer, ans.incorrect_answers[0]] })
    if (index === idx) {
      questionLocation.innerHTML = ans.question
      buttons[indexArr[0]].innerHTML = ans.correct_answer
      buttons[indexArr[1]].innerHTML = ans.incorrect_answers[0]


      let but1 = buttons[indexArr[0]].addEventListener('click', () => {
        if (buttons[indexArr[0]].innerHTML === ans.correct_answer) {
          console.log('correct')
          formatData(resultArray, idx + 1)
          score = score + 1
        } else {
          console.log('incorrect')

        }
      })
      let but2 = buttons[indexArr[1]].addEventListener('click', () => {
        if (buttons[indexArr[0]].innerHTML === ans.incorrect_answers[0]) {
          console.log('correct')
          formatData(resultArray, idx + 1)
          score = score + 1
          
        } else {
          console.log('incorrect')

        }
      })
      console.log(score)
    }
  })
  console.log(buttons, resultArray)
  if (resultArray === 'correct_answer') {
    console.log('test')
  }
}

let randomQuestions = async () => {
  await axios.get(randomTrivia)
    .then(res => {
      console.log(res)
      let questionsArray = res.data.results
      console.log(questionsArray)
      formatData(questionsArray)
    }).catch(err => {
      console.log(err)
    })
}
randomQuestions();

