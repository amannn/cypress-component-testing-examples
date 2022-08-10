const {defineConfig} = require('cypress');

module.exports = defineConfig({
  coverage: true,
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    }
  }
});
