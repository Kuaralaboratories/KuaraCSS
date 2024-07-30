import kuaracss from "kuaracss";
const styles1 = kuaracss.create({
  default: {
    color: "blue",
  },
});
const styles2 = kuaracss.create({
  red: {
    color: "red",
  },
});
kuaracss(styles1.default, styles2.red);
