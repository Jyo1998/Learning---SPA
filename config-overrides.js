module.exports = {
    jest: function(config) {
      config.watchPlugins = [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
      ];
      return config;
    },
  };
  