const RuleTester = require("eslint").RuleTester;

const rule = require("../../src/rules/missing-data-tid");

const ruleTester = new RuleTester({
  parser: require.resolve("vue-eslint-parser"),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
});

ruleTester.run("missing-data-tid", rule, {
  valid: ['<template><input data-tid="foo" /></template>'],
  invalid: [
    {
      code: "<template><input /></template>",
      errors: [
        {
          message: "Missing data-tid attribute",
          type: "VElement",
        },
      ],
      output: '<template><input data-tid="" /></template>',
    },
  ],
});
