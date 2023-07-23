'use strict'
const path = require('path')
const requireindex = require('requireindex')

module.exports = {
  meta: {
    name: 'eslint-plugin-vue-data-testid',
    version: require('../package.json').version,
  },
  configs: requireindex(path.join(__dirname, './configs')),
  rules: requireindex(path.join(__dirname, './rules')),
}
