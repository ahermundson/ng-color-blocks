colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");
  var self = this;
  self.colors = DataFactory.colors;
  self.addColor = function() {
    DataFactory.colors.push(self.newColor);
    self.newColor = '';
  }

  self.updateColor = function(index) {
    DataFactory.colors[index] = self.colors[index];
    console.log(DataFactory.colors[index]);
  }

}]);
