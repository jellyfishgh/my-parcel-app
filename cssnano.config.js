const defaultPreset = require('cssnano-preset-default')
module.exports = defaultPreset({
  calc: false,
  discardComments: {
    removeAll: true
  }
})
