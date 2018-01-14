'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const env = require('../env.js')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
}, env.dev || {})
