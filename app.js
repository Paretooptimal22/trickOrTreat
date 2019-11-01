// get inquirer npm
const inquirer = require(`inquirer`)

// get mysql2 npm
const mysql = require(`mysql2`)

//Connecting to the MySql
const db = mysql.createConnection({
  host: 'localhost',
  user: `root`,
  password: `password`,
  database: `trickOrTreat_db`
})

inquirer
  .prompt([
    {
      type: `input`,
      name: `user`,
      message: `What is your name?`
    }
  ])


let userCandy = 0
// An asynchronous timer  
function startCountDown(seconds) {
  let counter = seconds
  let interval = setInterval(() => {
    // console.log(counter)
    counter--
    if (counter < 0) {
      // code here will run when the counter reaches zero.
      clearInterval(interval)
      console.log('Time up!')
    }
    if(counter === 20){
      console.log('You have 20 seconds left')
    }else if(counter === 40 ){
      console.log('You have 40 seconds left!')
    }
  }, 1000)
}


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

const mainGame =()=>{ 
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
        startCountDown(60)
        break

      case `RUN AWAY!`:
        //send to record menu
        break
      }
    console.log(answers.choices)
  });

}







  // main menu - Cal Travis
inquirer.prompt([
    {
      type: 'list',
      name: 'mainMenu',
      message: `BOO! Are you scared? Probably not cause this is all text... This is important.. choose an option.`,
      choices: ['Trick or Treat', 'View Leaderboard', 'Exit Game']
    }
  ])
  .then(choices => {
    if(choices.option === 'Trick or Treat'){
        // Cyd and Sabrina functions goes here

    }
    if(choices.option === 'View Leaderboard'){

    }
    if(choices.option === 'Exit Game'){

    }
  })

  .catch(err => console.log(err))
