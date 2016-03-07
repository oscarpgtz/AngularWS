module.exports = function(ngModule) {
  ngModule.controller('PokemonListCtrl', function(PokemonService, $log) {
    var vm = this;
    vm.pokemons = [];
    vm.search = '';
    vm.getId = getId;

    PokemonService.getAllPokemons()
      .then(loadPokemons)
      .catch(errorHandler);

    function loadPokemons(data) {
      vm.pokemons = data;
    }

    function errorHandler(err) {
      $log.log(err);
    }

    function getId(pokemon) {
      var arr = pokemon.url.split('/');
      return arr[arr.length - 2];
    }
  });
};