# Rule: Event attribute

## Description

Enforces a custom data-testid attribute on testable Vue.js components with testable events. This rule helps ensure that certain elements with events in your Vue.js components always include a test Id, which can be used for automated testing.

The rule is fixable -- if an element with event is missing the required attribute, the rule will automatically add an empty one.

## Options

This rule accepts an options object with the following properties:

- `testableEventNames`: An array of Vue.js event names to which this rule applies.
- `dataTestIdAttribute`: The name of the attribute used for test Ids. If not provided, the default is `"data-testid"`.

## Usage

Here is an example configuration:

```json
{
  "rules": {
    "vue-data-testid/event-attribute": [
      "error",
      {
        "testableEventNames": ["click", "input", "keydown"],
        "dataTestIdAttribute": "data-tid"
      }
    ]
  }
}
```

## Examples:

###❌ Incorrect
```vue
<template>
  <button @click="action">Submit</button>
</template>
```

###✅ Correct

```vue
<template>
  <button @click="action" data-tid="UserForm-Submit-Button">Submit</button>
</template>
```
