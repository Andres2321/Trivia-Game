const BASE_URL = 'https://opentdb.com/api'
const dropdownCategory = document.querySelector('#dropdown-categories')

// fetch(`${BASE_URL}_category.php`)
// .then(triviaCategories => {
//   return triviaCategories.json()
// }).then(triviaCategories => {
//   const triviaArray = triviaCategories.trivia_categories
//   console.log(triviaArray)
//   for (let i = 0; i < triviaArray.length; i += 1){
//     console.log(triviaArray[i].id)
//     console.log(triviaArray[i].name)
//     dropdownCategory.innerHTML += `<option id=${triviaArray[i].id}>${triviaArray[i].name}</option>`
//   }
// }).catch(err => {
//   console.log(err)
// })



let categories = async () => {
  await axios.get(`${BASE_URL}_category.php`)
    .then(res => {
      console.log(res)
      const triviaArray = res.data.trivia_categories
      console.log(triviaArray)
      for (let i = 0; i < triviaArray.length; i += 1) {
        dropdownCategory.innerHTML += `<option id=${triviaArray[i].id}>${triviaArray[i].name}</option>`
      }
      }).catch(err => {
        console.log(err)
      })
    }
categories();