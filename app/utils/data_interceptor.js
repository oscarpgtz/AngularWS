module.exports = function(ngModule) {
  ngModule.factory('DataInterceptor', function(BaseUrl) {
    return {
      response: transformData
    };

    //

    function transformData(response) {
      if (response.config.url.indexOf(BaseUrl) > -1) {
        return response.data;
      }
      return response;
    }
  });
};