import kuaracss from "kuaracss";
const styles1 = kuaracss.sheet({
  default: {
    color: "blue",
  },
});
const styles2 = kuaracss.sheet({
  red: {
    color: "red",
  },
});
kuaracss(styles1.default, styles2.red);
