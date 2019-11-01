



































































// get inquirer npm
const inquirer = require(`inquirer`)

// get mysql2 npm
const mysql = require(`mysql2`)

let userCandy = 0
// let timer = 0

// const countDown =_=>{
 
//     if(timer < 60){

//     setTimeout(() => {
//      timer++
//       console.log(`${timer}`)
//     }, 1000);

//     }
//   }
//functions to run
const knock =_=>{
  let mark = Math.floor(Math.random()* 101)
  let candy = Math.floor(Math.random()* 11)
  
  console.log(mark)
  console.log(candy)

  if(mark <= 50){
    userCandy-= candy
  }else if (mark > 50){
    userCandy+= candy
  }else if(userCandy <= 0 || timer === 0){
    console.log(`This is your candy count ${userCandy}`)
  //send to record menu
    
  }
}


inquirer
  .prompt([

    {type: 'list',
      message: 'Choose your fate...',
      name: 'choice',
      choices: ['KNOCK-KNOCK TRICK-OR-TREAT!', 'RUN AWAY!']
    },

    {type:'text',
      message: 'You have ONE MINUTE to trick or treat!',
      name:'timer'
    }
    /* Pass your questions in here */
  ])
  .then(answers => {
  let userChoice = answers.choice
    switch(userChoice){
      case `KNOCK-KNOCK TRICK-OR-TREAT!`:
        knock()
        break

      case `RUN AWAY!`:
        //send to record menu
        break
      }
    console.log(answers.choices)
  });