$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var score = 0;
  

  //Generate random number for goal between 19-120 and logs it to console
   var goal = Math.floor(Math.random() * (120 - 19 +1)) + 19;
   //Adds random goal number to html
   $("#goal-number").text("Goal: " + goal);
  
  //Generate random number for each crystal
  var amethyst = Math.floor(Math.random() * 12) + 1;
  var quartz = Math.floor(Math.random() * 12) + 1;
  var citrine = Math.floor(Math.random() * 12) + 1;
  var labradorite = Math.floor(Math.random() * 12) + 1;
  
   //on click event for each crystal - generates random number for crystal value and logs click to console
  $("#amethyst").on("click", function() {
    console.log(amethyst);
  });

  $("#quartz").on("click", function() {
    console.log(quartz);
  })

  $("#citrine").on("click", function() {
    console.log(citrine);
  })

  $("#labradorite").on("click", function() {
    console.log(labradorite);
  })

  console.log(score);
})