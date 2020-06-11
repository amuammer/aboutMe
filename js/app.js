let username = "";
while (!username){
  username = prompt("What is your name ?");
  if (username){
    console.log("welcome", username);
    document.getElementById("username").innerText="Welcome "+username + " !";
  }
}
const questionsNo = 7;
  let points = 0;

function askQuestions(questionText,correctAnswer, id){
  let input=prompt(questionText);
  if (input!== "y" && input !== "n"){
    return askQuestions(questionText,correctAnswer, id);
  } else {
    console.log(id);
    document.getElementById(id).hidden=false;
     if (input === correctAnswer){
      console.log(id + "answer is correct");
      document.getElementById(id).classList.add("success");
      points++;
    } else {
      console.log(id + "answer is in-correct");
      document.getElementById(id).classList.add("failled");
    }
  }
  alert(`your score ${points} / ${questionsNo}`);
}

function askName (questionText,correctAnswer){
  askQuestions("Is my name \"Adnan\" ? y/n","y", "myName");
}
function askCountry (questionText,correctAnswer){
  askQuestions("Am i from Palestine ? y/n","y", "myCountry");
}
function askAge (questionText,correctAnswer){
  askQuestions("Am i 22 years old ? y/n","y", "myAge");
}
function askJop (questionText,correctAnswer){
  askQuestions("Am i front End developer ? y/n", "n", "myJob")
}
function askmProgrammingLanguage (questionText,correctAnswer){
  askQuestions("Am i Node Js developer ? y/n","y", "myProgrammingLanguage")
}
askName();
askCountry();
askAge();
askJop();
askmProgrammingLanguage();

const number =  Math.floor(Math.random()*10);
console.log(number);
let success = false;
for (var i = 0; i < 4; i++) {
  const input = prompt("guess the random number ? (0, 10)");
  if (input < number){
    alert("too low");
  } else if (input > number){
    alert("too High");
  } else {
    alert("success");
    success = true;
    points++;
    break;
  }
}
// if not guessed
if (!success){
  alert("the number is "+ number);
}

alert(`your score ${points} / ${questionsNo}`);


const colors =  ["green", "blue", "white"];
for (var i = 0; i < 6; i++) {
  const input = prompt("guess a favorite color ?");
  let includes = false;
  for (var j = 0; j < colors.length; j++) {
      if (colors[j] === input){
        includes = true;
      }
  }
  if (includes){
    alert("success");
    points++;
    break;
  }
}
alert("the correct Answers "+ colors);

alert(`your score ${points} / ${questionsNo}`);
