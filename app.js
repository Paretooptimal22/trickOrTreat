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