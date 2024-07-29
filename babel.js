const NAME = require("./package.json").name;
const processReferences = require("./src/process-references.js");

module.exports = function kuaracssBabelPlugin() {
  return {
    name: NAME,
    visitor: {
      ImportDefaultSpecifier(path, state) {
        if (path.parent.source.value !== NAME) return;

        const importName = path.node.local.name;
        const bindings = path.scope.bindings[importName].referencePaths;

        const css = processReferences(bindings, state.opts).join("");
        if (!state.file.metadata.kuaracss) {
          state.file.metadata.kuaracss = "";
        }
        state.file.metadata.kuaracss += css;
      },
    },
  };
};
