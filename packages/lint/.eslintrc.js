// .eslintrc.js
// off: 0, warn: 1, error: 2

const dev_rules = {
  "no-unused-vars": [0],
  "no-empty-pattern": [0],
  "no-empty": [0],
  "jest/no-done-callback": [0],
  "jest/no-disabled-tests": [0],
  "camelcase": [0],
};

const prettierConfig = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  proseWrap: "preserve",
  arrowParens: "always",
  printWidth: 100,
  bracketSpacing: true,
  quoteProps: "preserve",
};

/**
 * eslint config for *.js?x
 */
const config = {
  env: {
    // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    strapi: "writable",
  },
  plugins: ["prettier", "jest", "json"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:json/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": [2, "unix"],
    "quotes": [0, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "quote-props": [1, "consistent-as-needed"],
    "json/*": [2, "allowComments"],
    "prettier/prettier": [1, prettierConfig, { usePrettierrc: false }],
    "no-template-curly-in-string": [0],
    "no-underscore-dangle": [0],
    "jest/no-done-callback": [1],
    "no-unused-vars": [1, { argsIgnorePattern: "^_.*_$" }],
    ...(process.env.NODE_ENV === "production" ? {} : dev_rules),
  },
};

module.exports = {
  root: true, // do not use parent's props
  ...config,
};
