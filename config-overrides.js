const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const { setConfig } = require('react-hot-loader')
/* config-overrides.js */
module.exports = function override (config, env) {
  console.log(config);
  setConfig({
  reloadHooks: false
})
  config = rewireReactHotLoader(config, env)
  return config
}
