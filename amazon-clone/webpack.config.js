const path = require("path");

module.exports = {
  // ...
  resolve: {
    preferRelative: true,
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  // ...
};
