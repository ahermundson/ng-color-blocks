var colorBlocks = angular.module('colorBlocks', ['ngRoute']);

colorBlocks.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/play', {
            templateUrl: '/views/templates/gameview.html',
            controller: 'GameController',
            controllerAs: 'game'
        })
        .when('/config', {
            templateUrl: '/views/templates/configview.html',
            controller: 'SettingsController',
            controllerAs: 'settings'
        })
        .when('/high-score', {
            templateUrl: '/views/templates/high-score.html',
            controller: 'HighScoreController',
            controllerAs: 'highScore'
        })
        .otherwise({
            redirectTo: '/play'
        });
}]);
