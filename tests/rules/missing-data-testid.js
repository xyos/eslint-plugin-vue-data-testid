const RuleTester = require('eslint').RuleTester

const rule = require('../../src/rules/missing-data-testid')

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
})

ruleTester.run('missing-data-testid', rule, {
  valid: ['<template><input data-testid="foo" /></template>'],
  invalid: [
    {
      code: '<template><input /></template>',
      errors: [
        {
          message: 'Missing data-testid attribute',
          type: 'VElement',
        },
      ],
      output: '<template><input data-testid="" /></template>',
    },
  ],
})
