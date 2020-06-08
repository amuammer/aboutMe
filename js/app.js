let username = "";
while (!username){
  username = prompt("What is your name ?");
  if (username){
    console.log("welcome", username);
    document.getElementById("username").innerText="Welcome "+username + " !";
  }
}


const questionsNo = 5;
let points = 0;
let myName;
while (myName !== "y" && myName !== "n"){
  myName = prompt("Is my name \"Adnan\" ? y/n").toLowerCase();
  if (myName === "y"){
    console.log("myName is correct");
    document.getElementById("myName").classList.add("success");
    points++;
  } else if (myName === "n"){
    console.log("myName is in-correct");
    document.getElementById("myName").classList.add("failled");
  }
}
alert(`your score ${points} / ${questionsNo}`);


let myCountry;
while (myCountry !== "y" && myCountry !== "n"){
  myCountry = prompt("Am i from Palestine ? y/n").toLowerCase();
  if (myCountry === "y"){
    console.log("myCountry is correct");
    document.getElementById("myCountry").classList.add("success");
    points++;
  } else if (myCountry === "n") {
    console.log("myCountry is in-correct");
    document.getElementById("myCountry").classList.add("failled");
  }
}
alert(`your score ${points} / ${questionsNo}`);


let myAge;
while (myAge !== "y" && myAge !== "n"){
  myAge = prompt("Am i 22 years old ? y/n").toLowerCase();
  if (myAge === "y"){
    console.log("myAge is correct");
    document.getElementById("myAge").classList.add("success");
    points++;
  } else if (myAge === "n") {
    console.log("myAge is in-correct");
    document.getElementById("myAge").classList.add("failled");
  }
}
alert(`your score ${points} / ${questionsNo}`);


let myJob;
while (myJob !== "y" && myJob !== "n"){
  myJob = prompt("Am i front End developer ? y/n").toLowerCase();
  if (myJob === "n"){
    console.log("myJob is correct");
    document.getElementById("myJob").classList.add("success");
    points++;
  } else if (myJob === "y") {
    console.log("myJob is in-correct");
    document.getElementById("myJob").classList.add("failled");
  }
}
alert(`your score ${points} / ${questionsNo}`);

let myProgrammingLanguage;
while (myProgrammingLanguage !== "y" && myProgrammingLanguage !== "n"){
  myProgrammingLanguage = prompt("Am i Node Js developer ? y/n").toLowerCase();
  if (myProgrammingLanguage === "y"){
    console.log("myProgrammingLanguage is correct");
    document.getElementById("myProgrammingLanguage").classList.add("success");
    points++;
  } else if (myProgrammingLanguage === "n") {
    console.log("myProgrammingLanguage is in-correct");
    document.getElementById("myProgrammingLanguage").classList.add("failled");
  }
}
alert(`your score ${points} / ${questionsNo}`);

document.getElementById("questions").hidden=false;
