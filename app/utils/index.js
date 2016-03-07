module.exports = function(ngModule) {
  require('./data_interceptor')(ngModule);
  require('./capitalize_filter')(ngModule);
};