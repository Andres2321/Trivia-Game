const BASE_URL = 'https://opentdb.com/api'
const randomTrivia = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple'
const scoreLocation = document.querySelector('score')
const questionLocation = document.querySelector('#question')

const randomIndex = Math.floor(Math.random() * 2)

let score = 0;

const formatData = (resultArray, idx = 0) => {
  console.log(idx)
  // console.log(resultArray)
  for (let i = 0; i < 2; i++) {
    let newButton = document.createElement('div')
    newButton.classList.add('answer-btn')
    document.querySelector('.answer-container').append(newButton)
  }

  const buttons = document.querySelectorAll('.answer-btn')

  let indexArr = [0, 1]
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(indexArr);

  // console.log(indexArr)
  
  ans = resultArray[idx]

  questionLocation.innerHTML = ans.question
  buttons[indexArr[0]].innerHTML = ans.correct_answer
  buttons[indexArr[1]].innerHTML = ans.incorrect_answers[0]

  let but1 = buttons[indexArr[0]].addEventListener('click', () => {
    console.log('correct')
    score = score + 1;
    buttons.forEach(button => {
    button.remove()
    })
    if (idx === 9) {
      document.querySelector('#game-container').style.display = 'none'
    } else {
      return formatData(resultArray, idx + 1)
    }
  })
  let but2 = buttons[indexArr[1]].addEventListener('click', () => {
    buttons.forEach(button => {
      button.remove()
    })
    if (idx === 9) {
      document.querySelector('#game-container').style.display = 'none'
    } else {
      return formatData(resultArray, idx + 1)
    }
  })
  console.log(score)
  // if (idx = 10) {
  //   alert('done')
  // }
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