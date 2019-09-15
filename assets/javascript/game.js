$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var score = 0;
  

  //Generate random number for goal between 19-120 and logs it to console
   var goal = Math.floor(Math.random() * (120 - 19 +1)) + 19;
  
   //Adds random goal number to html
   $("#goal-number").text("Goal: " + goal);

  //on click event for crystals - generates random number for crystal value and logs click to console
  $(".crystal-img").on("click", function() {
      var crystalValue = Math.floor(Math.random() * 12) + 1;
      
      console.log(crystalValue);
  });
})