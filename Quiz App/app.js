
// let array = [1996, 1997, 2004, 1980, 1992]

// function arrayCalc(arr, instructions) {
//     let newArr = []
//     for(let element of arr) {
//         newArr.push(instructions(element))
//     }
//     return newArr
// }

// function calcAge(element) {
//     return 2020 - element
// }

// function maxHeartRate(el) {
//     if(el >= 18 && el <= 80) {
//         return 220 - el
//     } else {
//         return -1
//     }
// }

// function isFullAge(el) {
//     return el >= 18
// }

// let ages = arrayCalc(array, calcAge)
// console.log(ages)
// console.log(arrayCalc(ages, isFullAge))
// console.log(arrayCalc(ages, maxHeartRate));

// function interviewQuestions(job) {
//     return function(name) {
//         switch(job) {
//             case 'Designer':
//                     return `Hey ${name}, what is User Interface?`
//             case 'Developer':
//                     return `Hey ${name}, what is Closure in JavaScript?`
//             case 'DevOps':
//                     return `Hey ${name}, what is Cloud Architecture?`
//         }
//     }
// }

// let designerQuestion = interviewQuestions('Designer')('Joshua')
// console.log(designerQuestion)
// console.log(interviewQuestions('DevOps')('Emmy'))

// let john = {
//     name: 'Joshua',
//     age: 24,
//     job: 'Software Engineer',
//     greeting: function(style, timeOfDay) {
//         if(style === 'formal') {
//             console.log(`Good ${timeOfDay} Ladies and Gentlement, I am ${this.name}, a ${this.job} and I am ${this.age} years old`);
//         } else if (style === 'friendly') {
//             console.log(`Good ${timeOfDay} Ladies and Gentlement, I am ${this.name}, a ${this.job} and I am ${this.age} years old`);
//         }
//     }
// }

// let emily = {
//     name: 'Emmily',
//     age: 26,
//     job: 'Product Designer'
// }

// john.greeting('formal', 'morning')
// emilyPresentation = john.greeting.bind(emily, 'formal')
// emilyPresentation('Morning')

// Quiz game
(function () {
  function Question (question, answers, correct, score) {
    this.question = question
    this.answers = answers
    this.correct = correct
    this.score = score
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question)

    for (let i = 0; i < this.answers.length; i++) {
      console.log(`${i}: ${this.answers[i]}`)
    }
  }

  Question.prototype.displayAnswer = function (ans) {
      this.score = 0
    if (ans === this.correct) {
      console.log('correct answer', this.score += 1)
      
    } else {
      console.log('wrong answer, please try again:', this.score = this.score)
      
    }
  }

  const q1 = new Question('What year was Jesus Christ born?', [1920, 1924, 1002, 1900], 3)
  const q2 = new Question('What year did Nigeria get independence?', [1920, 1924, 1002, 1900], 3)
  const q3 = new Question('What year was Grooming Center Formed?', [1920, 1924, 1002, 1900], 3)

  var questions = [q1, q2, q3]

  function nextQuestion () {
    var n = Math.floor(Math.random() * questions.length)

    questions[n].displayQuestion()

    var answer = prompt('Please input the correct answer')

    if (answer !== 'exit') {
      questions[n].displayAnswer(parseInt(answer))
      nextQuestion()
    }
  }
  nextQuestion()
})()
