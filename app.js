// get inquirer npm
const inquirer = require(`inquirer`)

// get mysql2 npm
const mysql = require(`mysql2`)










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
    console.log(choices)
        if(choices.option === 'Trick or Treat'){
            inquirer
                .prompt([{
                    type: '',
                    name: '',
                    message: ''
                }])
            }
        })
  })
  .catch(err => console.log(err))