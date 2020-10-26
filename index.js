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

function gameStart() {
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
  $(this).addClass('pressed')
  setTimeout(function(){
    $('.btn').removeClass('pressed');
  },100);
  console.log(clickedButton);
  clickedArray.unshift(clickedButton);
  console.log(clickedArray);
  if (clickedArray[0] == randomArray[0]) {
    console.log("Correct");
    lvl++;
    $("#level-title").text("Level " + lvl);
    next()
  } else {
    console.log("Game Over");
    $("#level-title").text("Game Over");
    $('.btn').off('click');
  }
})

// Next Level
function next() {
  var randomButton = Math.floor(Math.random()*4);
  randomArray.unshift(colorArray[randomButton]);
  var chosenColor = randomArray[0];
  console.log(randomArray);
  console.log(chosenColor);
  $("#" + chosenColor).fadeOut(50).fadeIn(50);
  var audio = new Audio("sounds/"+ chosenColor +".mp3");
  audio.play();
}
