module.exports = function(ngModule) {
  var colors = {
    fire: 'red',
    water: 'blue',
    grass: 'green',
    rock: 'brown',
    normal: 'gray',
    poison: 'purple'
  };

  ngModule.directive('pokemonType', function() {
    return {
      restrict: 'E',
      scope: {
        type: '=typeName'
      },
      template: require('./pokemon_type.html'),
      link: link
    };

    function link(scope, element) {
      scope.$watch('type', function(newValue) {
        if (colors[newValue]) {
          element.css('color', colors[newValue]);
        }
      });
    }
  });
};