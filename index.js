// Game Start
var colorArray = ['green', 'red', 'yellow', 'blue'];
var randomArray = [];
var clickedArray = [];
var lvl = 1;

$(document).keydown(function(event) {
  if (event.key == "a" && lvl == 1) {
    $("#level-title").text("Level " + lvl);
    gameStart();
  }
})

function gameStart () {
  var randomButton = Math.floor(Math.random()*4);
  randomArray.unshift(colorArray[randomButton]);
  var chosenColor = randomArray[0];
  console.log(randomArray);
  console.log(chosenColor);
  $("#" + chosenColor).fadeOut(50).fadeIn(50);
  var audio = new Audio("sounds/"+ chosenColor +".mp3");
  audio.play();
}

// Click Button
$('.btn').click(function(){
  clickedButton = event.target.id;
  console.log(clickedButton);
  clickedArray.unshift(clickedButton);
  console.log(clickedArray);
  if (clickedButton == randomArray[0]) {
    console.log("Correct");
    lvl++;
    $("#level-title").text("Level " + lvl);
  } else {
    console.log("Game Over");
  }
})
