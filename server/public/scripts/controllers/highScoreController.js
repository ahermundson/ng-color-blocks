colorBlocks.controller('HighScoreController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("high score controller running");
  var self = this;
  self.highScore = DataFactory.highScore;
}]);
