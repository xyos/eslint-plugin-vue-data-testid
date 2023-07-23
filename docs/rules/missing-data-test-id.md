# Rule: Missing Data Test Id

## Description

Enforces a custom data-test-id attribute on testable Vue.js components. This rule helps ensure that certain elements in your Vue.js components always include a test Id, which can be used for automated testing.

The rule is fixable -- if an element is missing the required attribute, the rule will automatically add an empty one.

## Options

This rule accepts an options object with the following properties:

- `testableTagNames`: An array of Vue.js component names to which this rule applies. If not provided, the default array is `["Input", "Button", "Checkbox", "Radio", "Select", "Textarea", "Link"]`.
- `dataTestIdAttribute`: The name of the attribute used for test Ids. If not provided, the default is `"data-test-id"`.

## Usage

Here is an example configuration:

```json
{
  "rules": {
    "vue-data-test-id/missing-data-test-id": [
      "error",
      {
        "testableTagNames": ["Input", "Button", "Select"],
        "dataTestIdAttribute": "data-tid"
      }
    ]
  }
}

## Examples:

###❌ Incorrect
```vue
<template>
  <button>Submit</button>
</template>
```

###✅ Correct

```vue
<template>
  <button data-tid="UserForm-Submit-Button">Submit</button>
</template>
```
