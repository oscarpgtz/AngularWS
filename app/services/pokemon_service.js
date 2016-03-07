module.exports = function(ngModule) {
  ngModule.constant('BaseUrl', 'http://pokeapi.co/api/v2');
  ngModule.factory('PokemonService', function($http, BaseUrl) {
    return {
      getAllPokemons: getAllPokemons,
      getPokemon: getPokemon
    };

    //

    function getAllPokemons() {
      return $http.get(BaseUrl + '/pokemon/');
    }

    function getPokemon(id) {
      return $http.get(BaseUrl + '/pokemon/' + id + '/');
    }
  });
};