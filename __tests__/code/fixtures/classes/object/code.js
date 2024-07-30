import kuaracss from "kuaracss";
const styles = kuaracss.sheet({
  default: {
    color: "blue",
    opacity: 1,
  },
  red: {
    color: "red",
  },
});
styles({
  default: foo,
  red: bar,
});
