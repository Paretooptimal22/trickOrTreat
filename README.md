# trickOrTreat

Your task is to build a game where a user has 1 minute to Trick Or Treat at as many houses as they can to try and collect the most candy.

Technologies Needed:
* NodeJS
* Inquirer NPM
* MySQL2 NPM
* MySQL Database

### Data Needed

- MySQL Database and Table
  - Create a database
  - Create a table for the user leaderboard
  - The table should have a column for the user's name and a column for the user's candy count

#### The Main Menu

- Start by creating an inquirer prompt to ask the user what they want to do. The choices should be 'Trick Or Treat', 'View Leaderboard', and 'Exit Game'. Use `process.exit()` to leave the game if they choose 'Exit'. If the user chooses 'View Leaderboard' take them to the Leaderboard Menu (described later). If the user chooses 'Trick Or Treat' set a timer for 1 minute, set the user's candy count to be 0, and throw them to the Trick Or Treat Menu.

#### The Trick Or Treat Menu

- Create an inquirer prompt to ask the user what they want to do. The choices should be '*KNOCK-KNOCK* Trick Or Treat!', or 'Run Away'. If the user chooses 'Run Away', send them to the Record Menu (described later). If the user chooses '*KNOCK-KNOCK* Trick Or Treat!', do the following steps:

  1. Choose a random number between 1 and 100, we will call this the mark
  2. Choose a random number between 1 and 10, we will call this the candy
  3. If the mark is less than or equal to 50, then subtract the candy from the user's candy count
  4. If the mark is greater than 50, then add the candy to the user's candy count
  5. If the user's candy count is ever less than or equal to 0 or if the timer runs out, display the user's candy count so they can see and then send them to the Record Menu (described later).
  6. If there is still time in the game and the user still has candy, let them continue by recursively sending them to the Trick Or Treat Menu again.

#### The Record Menu

- Create an inquirer prompt to ask the user what their name is. Once you have the user's name, send it along with their candy count to be stored in your MySQL Database. Once their score has been recorded, send them to the Leaderboard Menu.

#### The Leaderboard Menu

- Query your MySQL Database for the stored leaderboard data. Make sure that, in this query, you order it by candy count from greatest to least, and limit the results to only the top 10 (both the ordering and the limiting can be done within the MySQL query itself). Display the final data, then send the user to the Main Menu
