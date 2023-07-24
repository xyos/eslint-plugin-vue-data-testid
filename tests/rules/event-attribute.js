const RuleTester = require('eslint').RuleTester

const rule = require('../../src/rules/event-attribute')

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
})

ruleTester.run('missing-data-testid', rule, {
  valid: [
    '<template><div class="button" @click="action" data-testid="foo" /></div><template>',
    '<template><SomeElement @otherEvent="action" /></SomeElement><template>',
  ],
  invalid: [
    {
      code: '<template><div @click.stop="action" /></template>',
      errors: [
        {
          message: 'Missing data-testid attribute on testable event',
          type: 'VElement',
        },
      ],
      output: '<template><div data-testid="" @click.stop="action" /></template>',
    },
  ],
})
