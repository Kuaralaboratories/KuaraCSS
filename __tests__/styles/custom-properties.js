/* eslint-env jest */
const compile = require("../compile.js");

it("does not convert number", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.create({
  default: {
    '--opacity': 1
  }
});
styles('default');
  `;
  const { styles } = compile(input);

  expect(styles).toBe(".jVMKrZ{--opacity:1}");
});

it("does not change capitalization", () => {
  const input = `
import kuaracss from 'kuaracss';
const styles = kuaracss.create({
  default: {
    '--backgroundColor': 'red'
  }
});
styles('default');
  `;
  const { styles } = compile(input);

  expect(styles).toBe(".hJKoGo{--backgroundColor:red}");
});
