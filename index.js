var colorArray = ['green', 'red', 'yellow', 'blue'];
var randomArray = [];
var clickedArray = [];
var colorIndex;
var clickedIndex;
var lvl = 0;

// Game Start
$(document).keydown(function start(event) {
  if (event.key == "a" && lvl == 0) {
    next();
  }
})

// Next Level
function next() {
  var randomButton = Math.floor(Math.random() * 4);
  randomArray.push(colorArray[randomButton]);
  var chosenColor = randomArray[randomArray.length-1];
  console.log(randomArray);
  console.log(chosenColor);
  $("#" + chosenColor).fadeOut(50).fadeIn(50);
  var audio = new Audio("sounds/" + chosenColor + ".mp3");
  audio.play();
  colorIndex = randomArray.length-1;
  lvl++
  $("#level-title").text("Level " + lvl);
}

// Click Button
  $('.btn').click(function() {
    clickedButton = event.target.id;
    clickSound();
    $(this).addClass('pressed')
    setTimeout(function() {
      $('.btn').removeClass('pressed');
    },100);
    console.log(clickedButton);
    clickedArray.push(clickedButton);
    console.log(clickedArray);
    clickedIndex = clickedArray.length-1;
    clickCheck(clickedIndex);
  })

// Click Sounds
function clickSound() {
  var audio = new Audio("sounds/" + clickedButton + ".mp3");
  audio.play();
}

// Click Check
function clickCheck(clickedIndex) {
  if (clickedIndex == colorIndex) {
    if (clickedArray[clickedIndex] == randomArray[clickedIndex]) {
      console.log('Correct');
      setTimeout(function() {
        next();
      },1000)
      clickedArray = [];
    }
    else {
      console.log('Game Over');
      $('body').addClass('game-over');
      setTimeout(function() {
        $('body').removeClass('game-over');
      },200)
      $("#level-title").text("Game Over, Press A to Restart");
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      gameOver();
    }
  }
}

// Game Over
function gameOver() {
  randomArray = [];
  clickedArray = [];
  lvl = 0;
  // start();
}
