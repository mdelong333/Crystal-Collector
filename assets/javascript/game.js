//Generate random number for goal between 19-120 and logs it to console
function randomGoalNumber(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
  }

//Assigns random number as goal for player to meet
var goal = randomGoalNumber(19, 120);


$(".goal-number").text(goal);

//Generate random number for crystal value between 1-12 and logs it to console
function randomCrystalValue(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

//Assigns random value to crystal
var crystalValue = randomCrystalValue(1, 12);


//on click event for buttons - logs click to console
$(".crystal-img").on("click", function() {
    
    
    console.log("click!");


  });