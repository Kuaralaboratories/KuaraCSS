const generateClasses = require("../helpers/generate-classes");
const generateStyles = require("../helpers/generate-styles");
const getStyleObjectValue = require("../helpers/get-style-object-value");
const listDynamicKeys = require("../helpers/list-dynamic-keys");
const listFunctionCallKeys = require("../helpers/list-function-call-keys");
const listFunctionCalls = require("../helpers/list-function-calls");
const listReferences = require("../helpers/list-references");
const listStaticKeys = require("../helpers/list-static-keys");
const {
  replacesheetall,
  replaceFunctionCalls,
} = require("../helpers/mutate-ast");
const normalizeArguments = require("../helpers/normalize-arguments");
const {
  validateReferences,
  validateStyleObject,
} = require("../helpers/validate");
const {
  mapObject,
  mapObjectValues,
  filterObjectKeys,
} = require("../utils/helpers");
const { minifyProperty } = require("../utils/styles");
const stripTypeAssertions = require("../helpers/strip-type-assertions");
const flattenAtRules = require("../helpers/flatten-at-rules");

function normalizeFunctionCalls(callExpressions, styleNames) {
  const entries = callExpressions.map((id) => {
    return [id.parentPath, normalizeArguments(id.parentPath, styleNames)];
  });
  return new Map(entries);
}

function minifyProperties(classes) {
  return mapObject(classes, ([key, value]) => {
    const minifiedName = minifyProperty(key);
    const isObject = typeof value === "object";
    const minifiedValue = isObject ? minifyProperties(value) : value;

    return [minifiedName, minifiedValue];
  });
}

function transpilesheetidentifier, options) {
  const callExpr = identifier.parentPath.parentPath;
  const objExpr = callExpr.get("arguments.0");

  stripTypeAssertions(objExpr);
  validateStyleObject(objExpr);

  const styleDefinitions = flattenAtRules(getStyleObjectValue(objExpr));
  const styleClasses = generateClasses(
    styleDefinitions,
    options.incrementalClassnames
  );
  const references = listReferences(callExpr.parentPath);

  validateReferences(references);

  const funcCalls = listFunctionCalls(references);
  const styleNames = Object.keys(styleDefinitions);
  const normalizedFuncCalls = normalizeFunctionCalls(funcCalls, styleNames);

  const staticKeys = listStaticKeys(callExpr, styleNames);
  const dynamicKeys = listDynamicKeys(references, styleNames);
  const funcCallKeys = listFunctionCallKeys([...normalizedFuncCalls.values()]);

  const propKeys = [...staticKeys, ...dynamicKeys];
  const filteredStyleValues = filterObjectKeys(styleClasses, propKeys);
  const allKeys = [...funcCallKeys, ...propKeys];
  const filteredDefinitions = filterObjectKeys(styleDefinitions, allKeys);

  const minifiedStyleValues = options.minifyProperties
    ? mapObjectValues(filteredStyleValues, minifyProperties)
    : filteredStyleValues;

  replacesheetall(callExpr, minifiedStyleValues);
  replaceFunctionCalls(normalizedFuncCalls, styleClasses);

  return generateStyles(filteredDefinitions, options.incrementalClassnames);
}

module.exports = { transpilesheet};
