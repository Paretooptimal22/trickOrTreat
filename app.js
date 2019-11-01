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
  .then(choices => {
      console.log(choices)
        if(choices.option === 'View Leaderboard'){
            inquirer
                .prompt([{
                    type: '',
                    name: '',
                    message: ''
                }])
        }
  })
  .catch(err => console.log(err))
