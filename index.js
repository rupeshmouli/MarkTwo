var readline = require('readline-sync');
var score = 0;

var highscores = [{ name: "Rupesh", score: 5 },
{ name: "Lokesh", score: 5 },]//High scores


var name = readline.question("Please Input your name to Proceed \n");
console.log("Welcome " + name.toUpperCase() + ", Let's play a game to know, how much general knowledge you have!");


if (readline.keyInYN('Do you want play?'))// if Y is the input from user, execute below code.

{

  var quiz = [{ question: 'Indian population as on 1st March 2011?\nA) 10Billion\nB) 9Billion\nC) 12Billion\nD) 19Billion', answer: 'C' }, { question: 'INDIA largest city by population?\nA) Delhi\nB) Mumbai\nC) Chennai\nD) Pune', answer: 'B' }, { question: 'Number of states and union territories in India?\nA) 27S &8U\nB) 28S&8U\nC) 27S&6U\nD) 23S&10U', answer: 'B' }, { question: "INDIA's total area?\nA) 3.7 Million Sq.Km\nB) 3.0 Million Sq.Km\nC) 4.2 Million Sq.Km\nD) 3.3 Million Sq.Km", answer: 'D' }, { question: 'Who designed Indian parliament in new delhi?A) Gustave Eiffel\nB) Le Corbusier\nC) Edwin Landseer Lutynes\nD) Bonanno pisano', answer: 'C' },];


//for loop begins
  for (i = 0; i < quiz.length; i++) {
    var n = i + 1
    var ans = readline.question(n + ") " + quiz[i].question + '\n');

    if (ans.toUpperCase() == quiz[i].answer) {
      console.log('You are Right :-)');
      score++;
      console.log('score: ' + score);
      console.log("Moving to next question");
      console.log('-----------------------');
    }
    else {
      i=quiz.length+1;
    }

  } //For loop ends
  console.log("Hey " + name + ", Your total score is: " + score);

  //If statement to check High score
  if (score == quiz.length) {
    console.log("You toped the score! You are my Closest one <3 \n");
  }
  else {
    console.log('Better luck next time!!! \n');
  }

  console.log("Previous Best High scores are")
  highscores.map(tops => console.log(tops.name, " : ", tops.score))

  console.log("If you have cracked them, take a screenshot and send me. I will update them here.")
}

else   // Another key was pressed, execute below code.
{
  console.log('Will come up with another Intresting topic');
}
