require('angular');
require('angular-route');

var app = angular.module('pokedex', ['ngRoute']);

require('./controllers')(app);
require('./services')(app);
require('./utils')(app);
require('./directives')(app);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/pokemon_list.html',
      controller: 'PokemonListCtrl',
      controllerAs: 'vm'
    })
    .when('/pokemon/:id', {
      templateUrl: 'views/pokemon_details.html',
      controller: 'PokemonDetailsCtrl',
      controllerAs: 'vm'
    });

  $httpProvider.interceptors.push('DataInterceptor');
});