const pathconfig = require("./pathconfig");

module.exports = {
  rootDir: ".",
  testEnvironment: "node",
  moduleNameMapper: {
    ...pathconfig.jest,
  },
};
