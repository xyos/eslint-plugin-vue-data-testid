const RuleTester = require("eslint").RuleTester;

const rule = require("../../src/rules/missing-data-test-id");

const ruleTester = new RuleTester({
  parser: require.resolve("vue-eslint-parser"),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
});

ruleTester.run("missing-data-test-id", rule, {
  valid: ['<template><input data-test-id="foo" /></template>'],
  invalid: [
    {
      code: "<template><input /></template>",
      errors: [
        {
          message: "Missing data-test-id attribute",
          type: "VElement",
        },
      ],
      output: '<template><input data-test-id="" /></template>',
    },
  ],
});
