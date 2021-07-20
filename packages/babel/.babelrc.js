const path = require("path");
const jsconfig = require("./paths");

module.exports = {
  "targets": {
    "node": "12",
  },
  "presets": ["@babel/preset-env", "@babel/preset-typescript"],
  "plugins": [
    [
      "babel-plugin-module-resolver",
      {
        root: [path.resolve(jsconfig.compilerOptions.baseUrl)],
        "alias": {
          ...jsconfig.compilerOptions.paths,
          //"@/src/*": "./src/*"
        },
      },
    ],
  ],
  "env": {
    "development": {
      "ignore": ["**/*.spec.js"] 
    },
    "production": { 
      "ignore": ["**/*.spec.js"] 
    },
    "test": {
    },
  },
};
