'use strict'
const merge = require('webpack-merge')
const env = require('../env.js')

module.exports = merge({
  NODE_ENV: '"production"',
}, env.prod || {})
