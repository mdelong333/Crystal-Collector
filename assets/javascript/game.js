//Generate random number between 19-120 and logs it to console
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log (Math.floor(Math.random() * (max - min)) + min); 
  }

//Assigns random number as goal for player to meet
var goal = randomNumber(19, 120)

//on click event for buttons - logs click to console
$(".crystal-img").on("click", function() {
    console.log("click!");


  });