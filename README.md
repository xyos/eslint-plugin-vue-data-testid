# eslint-plugin-vue-data-testid

An ESLint plugin to enforce consistent usage of custom 'data-testid' attributes in Vue.js components for better testability.

## Install

You should have [`eslint`](https://eslint.org/docs/user-guide/getting-started) and [`eslint-plugin-vue`](https://eslint.vuejs.org/user-guide/#installation) set up first.

```bash
yarn add eslint-plugin-vue-data-testid -D
# OR
npm install eslint-plugin-vue-data-testid --save-dev
```

```js
// .eslintrc.js
module.exports = {
  extends: ["plugin:vue-data-testid/base"],
};
```

or if you want to configure rules manually:

```js
module.exports = {
  plugins: ["vue-data-testid"],
  rules: {
    // add your rules here
  },
};
```

## Rules

### `missing-data-testid`:

Enforces the inclusion of a custom 'data-testid' attribute in specified Vue.js components.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](./LICENSE)
