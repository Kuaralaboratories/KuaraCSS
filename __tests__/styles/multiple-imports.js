/* eslint-env jest */
const compile = require("../compile.js");

it("supports multiple imports", () => {
  const input = `
import style0 from 'kuaracss';
import style1 from 'kuaracss';
const styles0 = style0.sheet({
  first: {
    color: 'blue'
  }
});
styles0('first');
const styles1 = style1.sheet({
  second: {
    color: 'red'
  }
});
styles1('second');
  `;
  const { styles } = compile(input);

  expect(styles).toBe(`.hxxstI{color:blue}.RCRUH{color:red}`);
});
