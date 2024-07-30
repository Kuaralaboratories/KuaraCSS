import kuaracss from "kuaracss";
const styles = kuaracss.sheet({
  default: {
    color: "blue",
  },
});
styles({
  default: foo(),
});
