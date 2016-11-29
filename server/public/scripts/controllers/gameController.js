colorBlocks.controller('GameController', ['$scope', 'DataFactory', function($scope, DataFactory) {

console.log('game controller running');
console.log(DataFactory);

var self = this;
self.colors = DataFactory.colors;
self.winCounter = 0;
self.win

// start game
init();

// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?'
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    self.winCounter++;
    alert('You got it!\n\nNow try another!');
    init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
    DataFactory.highScore.push(self.winCounter);
    DataFactory.highScore.sort(function(a, b){return b-a});
    console.log(DataFactory.highScore);
    self.winCounter = 0;
    // init();
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
