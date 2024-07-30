/* eslint-env jest */
const compile = require("../compile.js");

it("throws on invalid nesting", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    foo: {
      opacity: 1
    }
  }
});
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Invalid key foo. Object keys must be at-rules or pseudo selectors
      3 | const styles = kuaracss.sheet({
      4 |   default: {
    > 5 |     foo: {
        |     ^^^
      6 |       opacity: 1
      7 |     }
      8 |   }"
  `);
});

it("throws on invalid nesting with string literal key", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    'foo': {
      opacity: 1
    }
  }
});
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Invalid key foo. Object keys must be at-rules or pseudo selectors
      3 | const styles = kuaracss.sheet({
      4 |   default: {
    > 5 |     'foo': {
        |     ^^^^^
      6 |       opacity: 1
      7 |     }
      8 |   }"
  `);
});

it("throws on invalid nesting with dynamic key", () => {
  const input = `
import kuaracss from 'kuaracss';
const foo = 'bar';
const styles = kuaracss.sheet({
  default: {
    [foo]: {
      opacity: 1
    }
  }
});
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Invalid key bar. Object keys must be at-rules or pseudo selectors
      4 | const styles = kuaracss.sheet({
      5 |   default: {
    > 6 |     [foo]: {
        |      ^^^
      7 |       opacity: 1
      8 |     }
      9 |   }"
  `);
});

it("throws when failing to evaluate key", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    [foo]: {
      opacity: 1
    }
  }
});
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Could not evaluate value
      3 | const styles = kuaracss.sheet({
      4 |   default: {
    > 5 |     [foo]: {
        |      ^^^
      6 |       opacity: 1
      7 |     }
      8 |   }"
  `);
});

it("throws on spread object", () => {
  const input = `
import kuaracss from 'kuaracss';
const foo = {};
const styles = kuaracss.sheet({
  ...foo
});
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Could not evaluate value
      3 | const foo = {};
      4 | const styles = kuaracss.sheet({
    > 5 |   ...foo
        |   ^^^^^^
      6 | });
      7 |   "
  `);
});
