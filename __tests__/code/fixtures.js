const path = require("path");
const pluginTester = require("babel-plugin-tester").default;
const plugin = require("../../babel.js");

pluginTester({
  plugin,
  pluginName: "kuaracss",
  fixtures: path.join(__dirname, "fixtures"),
  babelOptions: {
    parserOpts: {
      plugins: ["typescript"],
    },
  },
});
