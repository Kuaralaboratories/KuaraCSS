/* eslint-env jest */
const compile = require("../compile.js");

it("only supports Member- and CallExpression on styles", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    color: 'blue'
  }
});
foo(styles);
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: SyntaxError: Return value from kuaracss.sheet has to be called as a function or accessed as an object
      6 |   }
      7 | });
    > 8 | foo(styles);
        |     ^^^^^^
      9 |   "
  `);
});

it("supports React Hot Loader call", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    color: 'blue'
  }
});
reactHotLoader.register(styles);
  `;
  expect(() => compile(input)).not.toThrow();
});

it("throws on invalid React Hot Loader call", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    color: 'blue'
  }
});
foo.register(styles);
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: SyntaxError: Return value from kuaracss.sheet has to be called as a function or accessed as an object
      6 |   }
      7 | });
    > 8 | foo.register(styles);
        |              ^^^^^^
      9 |   "
  `);
});

it("throws on invalid React Hot Loader call2", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    color: 'blue'
  }
});
reactHotLoader.foo(styles);
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: SyntaxError: Return value from kuaracss.sheet has to be called as a function or accessed as an object
      6 |   }
      7 | });
    > 8 | reactHotLoader.foo(styles);
        |                    ^^^^^^
      9 |   "
  `);
});

it("throws on non-existing property import", () => {
  const input = `
import kuaracss from 'kuaracss';
kuaracss.foo;
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported use. Supported uses are: kuaracss(), kuaracss.sheet(), and kuaracss.keyframes()
      1 |
      2 | import kuaracss from 'kuaracss';
    > 3 | kuaracss.foo;
        | ^^^^^^
      4 |   "
  `);
});

it("sheet throws when called without arguments", () => {
  const input = `
import kuaracss from 'kuaracss';
kuaracss.sheet();
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported use. Supported uses are: kuaracss(), kuaracss.sheet(), and kuaracss.keyframes()
      1 |
      2 | import kuaracss from 'kuaracss';
    > 3 | kuaracss.sheet();
        | ^^^^^^
      4 |   "
  `);
});

it("sheet throws when called multiple arguments", () => {
  const input = `
import kuaracss from 'kuaracss';
kuaracss.sheet({}, {});
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported use. Supported uses are: kuaracss(), kuaracss.sheet(), and kuaracss.keyframes()
      1 |
      2 | import kuaracss from 'kuaracss';
    > 3 | kuaracss.sheet({}, {});
        | ^^^^^^
      4 |   "
  `);
});

it("sheet throws non-object argument", () => {
  const input = `
import kuaracss from 'kuaracss';
kuaracss.sheet(1);
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported use. Supported uses are: kuaracss(), kuaracss.sheet(), and kuaracss.keyframes()
      1 |
      2 | import kuaracss from 'kuaracss';
    > 3 | kuaracss.sheet(1);
        | ^^^^^^
      4 |   "
  `);
});

it("styles throws on non-existing style key", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    color: 'blue'
  }
});
styles('blue');
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Property blue does not exist in style object
      6 |   }
      7 | });
    > 8 | styles('blue');
        |        ^^^^^^
      9 |   "
  `);
});

it("styles throws on unsupported operator", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    color: 'blue'
  }
});
styles(foo & 'blue');
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported type BinaryExpression
      6 |   }
      7 | });
    > 8 | styles(foo & 'blue');
        |        ^^^^^^^^^^^^
      9 |   "
  `);
});

it("styles throws on failure to evaluate values", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    color: BLUE
  }
});
styles('blue');
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Could not evaluate value
      3 | const styles = stkuaracssyle9.sheet({
      4 |   default: {
    > 5 |     color: BLUE
        |            ^^^^
      6 |   }
      7 | });
      8 | styles('blue');"
  `);
});

it("styles throws on spread", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    color: 'red'
  }
});
styles({ ...foo })
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported type SpreadElement
      6 |   }
      7 | });
    > 8 | styles({ ...foo })
        |          ^^^^^^
      9 |   "
  `);
});

it("styles throws non-string logical right hand", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  red: {
    color: 'red'
  }
});
styles(foo && red)
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported type Identifier
      6 |   }
      7 | });
    > 8 | styles(foo && red)
        |               ^^^
      9 |   "
  `);
});

it("styles throws non-string ternary left hand", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  red: {
    color: 'red'
  }
});
styles(foo ? red : 'red')
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported type Identifier
      6 |   }
      7 | });
    > 8 | styles(foo ? red : 'red')
        |              ^^^
      9 |   "
  `);
});

it("styles throws non-string ternary right hand", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  red: {
    color: 'red'
  }
});
styles(foo ? 'red' : red)
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported type Identifier
      6 |   }
      7 | });
    > 8 | styles(foo ? 'red' : red)
        |                      ^^^
      9 |   "
  `);
});

it("styles throws on identifier", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  default: {
    color: 'red'
  }
});
styles(foo)
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported type Identifier
      6 |   }
      7 | });
    > 8 | styles(foo)
        |        ^^^
      9 |   "
  `);
});

it("styles throws on dynamic key", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  red: {
    color: 'red'
  }
});
styles({ [red]: foo })
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported type ObjectProperty
      6 |   }
      7 | });
    > 8 | styles({ [red]: foo })
        |          ^^^^^^^^^^
      9 |   "
  `);
});

it("throws on unsupported logical expression", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.sheet({
  red: {
    color: 'red'
  }
});
styles(foo || red)
  `;
  expect(() => compile(input)).toThrowErrorMatchingInlineSnapshot(`
    "unknown: Unsupported type LogicalExpression
      6 |   }
      7 | });
    > 8 | styles(foo || red)
        |        ^^^^^^^^^^
      9 |   "
  `);
});
