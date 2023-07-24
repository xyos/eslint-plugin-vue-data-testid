'use strict'

module.exports = {
  plugins: [
    'vue-data-testid',
  ],
  rules: {
    'vue-data-testid/tag-element': 'error',
    'vue-data-testid/event-attribute': 'error',
  },
}
