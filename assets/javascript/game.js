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
    score = score + amethyst;
    $("#player-score").text("Total Score: " + score);
    console.log(amethyst);
    console.log(score);

    if (score === goal) {
      wins++
      $("#win-txt").text("Wins: " + wins);
      reset();
    } else if (score > goal) {
      losses++
      $("#loss-txt").text("Losses: " + losses);
      reset()
    }
  });

  $("#quartz").on("click", function() {
    score = score + quartz;
    $("#player-score").text("Total Score: " + score);
    console.log(quartz);
    console.log(score);

    if (score === goal) {
      wins++
      $("#win-txt").text("Wins: " + wins);
      reset();
    } else if (score > goal) {
      losses++
      $("#loss-txt").text("Losses: " + losses);
      reset()
    }
  })

  $("#citrine").on("click", function() {
    score = score + citrine;
    $("#player-score").text("Total Score: " + score);
    console.log(citrine);
    console.log(score);

    if (score === goal) {
      wins++
      $("#win-txt").text("Wins: " + wins);
      reset();
    } else if (score > goal) {
      losses++
      $("#loss-txt").text("Losses: " + losses);
      reset()
    }
  })

  $("#labradorite").on("click", function() {
    score = score + labradorite;
    $("#player-score").text("Total Score: " + score);
    console.log(labradorite);
    console.log(score);

    if (score === goal) {
      wins++
      $("#win-txt").text("Wins: " + wins);
      reset();
    } else if (score > goal) {
      losses++
      $("#loss-txt").text("Losses: " + losses);
      reset()
    }
  })

  function reset() {
    goal = Math.floor(Math.random() * (120 - 19 +1)) + 19;
    $("#goal-number").text("Goal: " + goal);
    amethyst = Math.floor(Math.random() * 12) + 1;
    quartz = Math.floor(Math.random() * 12) + 1;
    citrine = Math.floor(Math.random() * 12) + 1;
    labradorite = Math.floor(Math.random() * 12) + 1;
    score = 0;
    $("#player-score").text("Total Score: " + score);
  }
})