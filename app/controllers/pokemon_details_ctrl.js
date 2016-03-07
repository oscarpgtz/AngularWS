module.exports = function(ngModule) {
  ngModule.controller('PokemonDetailsCtrl', function($routeParams, PokemonService) {
    var vm = this;
    var id = $routeParams.id;

    PokemonService.getPokemon(id)
      .then(loadPokemon)
      .catch(errorHandler);

    function loadPokemon(data) {
      vm.pokemon = data;
    }

    function errorHandler(err) {
      $log.log(err);
    }
  });
};