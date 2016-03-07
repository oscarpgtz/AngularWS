module.exports = function(ngModule) {
  ngModule.filter('capitalize', function() {
    return function(text) {
      return angular.isString(text) && text.length > 0 ? text[0].toUpperCase() + text.substr(1).toLowerCase() : '';
    };
  });
};