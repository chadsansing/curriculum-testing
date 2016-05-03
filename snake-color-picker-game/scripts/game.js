// Original project forked from https://github.com/JDStraughan/html5-snake
// under a MIT License http://opensource.org/licenses/MIT
// and Copyright (c) 2013 Jason D. Straughan

// Fork by Chad Sansing under an MIT License http://opensource.org/licenses/MIT 
// with help from Luke Pacholski.

var canvas = document.getElementById("the-game");
var context = canvas.getContext("2d");
var game, snake, food;

game = {

  score: 0,
  fps: 8,
  over: false,
  message: null,

  start: function() {
    game.over = false;
    game.message = null;
    game.score = 0;
    game.fps = 8;
    snake.init();
    food.set();
  },

  stop: function() {
    game.over = true;
    game.message = 'GAME OVER - PRESS SPACEBAR';
  },

  drawBox: function(x, y, size, color) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x - (size / 2), y - (size / 2));
    context.lineTo(x + (size / 2), y - (size / 2));
    context.lineTo(x + (size / 2), y + (size / 2));
    context.lineTo(x - (size / 2), y + (size / 2));
    context.closePath();
    context.fill();
  },

  drawScore: function() {
    context.fillStyle = '#999';
    context.font = (canvas.height) + 'px Impact, sans-serif';
    context.textAlign = 'center';
    context.fillText(game.score, canvas.width / 2, canvas.height * 0.9);
  },

  drawMessage: function() {
    if (game.message !== null) {
      context.fillStyle = '#00F';
      context.strokeStyle = '#FFF';
      context.font = (canvas.height / 10) + 'px Impact';
      context.textAlign = 'center';
      context.fillText(game.message, canvas.width / 2, canvas.height / 2);
      context.strokeText(game.message, canvas.width / 2, canvas.height / 2);

      // This draws onto the canvas what is in the game.message object
      // If we want it to draw the last eaten color, we'll have to set the
      // game.message object to the color value

    }
  },

  resetCanvas: function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

};

snake = {

  size: canvas.width / 40,
  x: null,
  y: null,
  color: '#0F0',
  direction: 'left',
  sections: [],

  init: function() {
    snake.sections = [];
    snake.direction = 'left';
    snake.x = canvas.width / 2 + snake.size / 2;
    snake.y = canvas.height / 2 + snake.size / 2;
    for (var i = snake.x + (5 * snake.size); i >= snake.x; i -= snake.size) {
      snake.sections.push(i + ',' + snake.y);
    }
  },

  move: function() {
    switch (snake.direction) {
      case 'up':
        snake.y -= snake.size;
        break;
      case 'down':
        snake.y += snake.size;
        break;
      case 'left':
        snake.x -= snake.size;
        break;
      case 'right':
        snake.x += snake.size;
        break;
    }
    snake.checkCollision();
    snake.checkGrowth();
    snake.sections.push(snake.x + ',' + snake.y);
  },

  draw: function() {
    for (var i = 0; i < snake.sections.length; i++) {
      snake.drawSection(snake.sections[i].split(','));
    }
  },

  drawSection: function(section) {
    game.drawBox(parseInt(section[0]), parseInt(section[1]), snake.size, snake.color);
  },

  checkCollision: function() {
    if (snake.isCollision(snake.x, snake.y) === true) {
      game.stop();
    }
  },

  isCollision: function(x, y) {
    if (x < snake.size / 2 ||
        x > canvas.width ||
        y < snake.size / 2 ||
        y > canvas.height ||
        snake.sections.indexOf(x + ',' + y) >= 0) {
      return true;
    }
  },

  checkGrowth: function() {
    if (snake.x == food.x && snake.y == food.y) {
      // Note - This code runs when the snake eats the food
	  snake.color = food.color;
      game.score++;
      if (game.score % 5 == 0 && game.fps < 60) {
        game.fps++;
      }
      food.set();
      // If we can get the food color here (food.color), then we can use that value
      // To change the color of the snake & background color.
      //
      // * We can change the color of the snake by changing the .color property of the snake object
      // * The canvas color is set via CSS, so we'll have to use that
      //
      // However - if you change the snake and background color to the same thing
      // The snake will be impossible to see!
	  
	  //Chad-note: Changing the background-color of body, not canvas :)

    } else {
      snake.sections.shift();
    }
  }

};

food = {
  size: null,
  x: null,
  y: null,
  color: "",
  rgbValue: "",  // Note - we don't even need to set it here, since we set it again every time food is made

  set: function() {
    // Note - This is where new food is generated, and where we want to set the food color

    food.size = snake.size;
    food.x = (Math.ceil(Math.random() * 10) * snake.size * 4) - snake.size / 2;
    food.y = (Math.ceil(Math.random() * 10) * snake.size * 3) - snake.size / 2;
    food.color='#' + ("000000" + Math.random().toString(16).slice(2,8).toUpperCase()).slice(-6);
	
  },

  draw: function() {
    game.drawBox(food.x, food.y, food.size, food.color); // Note - This draws the food every frame
  }
};

var inverseDirection = {
  'up': 'down',
  'left': 'right',
  'right': 'left',
  'down': 'up'
};

var keys = {
  up: [38, 75, 87],
  down: [40, 74, 83],
  left: [37, 65, 72],
  right: [39, 68, 76],
  start_game: [13, 32]
};

function getKey(value){
  for (var key in keys){
    if (keys[key] instanceof Array && keys[key].indexOf(value) >= 0){
      return key;
    }
  }
  return null;
}

addEventListener("keydown", function (e) {
    var lastKey = getKey(e.keyCode);
    if (['up', 'down', 'left', 'right'].indexOf(lastKey) >= 0
        && lastKey != inverseDirection[snake.direction]) {
      snake.direction = lastKey;
    } else if (['start_game'].indexOf(lastKey) >= 0 && game.over) {
      game.start();
    }
}, false);

var requestAnimationFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame;

function loop() {
  if (game.over == false) {
    game.resetCanvas();
    game.drawScore();
    snake.move();
    food.draw();
    snake.draw();
    game.drawMessage(); // Note - this is what draws the score in the background
}
  
  
  //Chad-note: Where do I put this to make it work with line 253?
  
  function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : null;
	
  	var rValue = hexToRgb(food.color).r;
  	var gValue = hexToRgb(food.color).g;
  	var bValue = hexToRgb(food.color).b

  	var rgbValue = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
  	this.rgbValue = rgbValue;

  }
  
  document.getElementById("hexColorCode").innerHTML = "<span>" + food.color + "</span>";
  document.getElementById("rgbColorCode").innerHTML = "<span>" + this.rgbValue + "</span>";
  document.body.style.backgroundColor = food.color;
  
  setTimeout(function() {
    requestAnimationFrame(loop);
  }, 1000 / game.fps);
}

requestAnimationFrame(loop);