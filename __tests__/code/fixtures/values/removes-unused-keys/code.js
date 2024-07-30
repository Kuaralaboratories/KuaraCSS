import kuaracss from "kuaracss";
const styles = kuaracss.sheet({
  default: {
    color: "blue",
  },
  red: {
    color: "red",
  },
  yellow: {
    color: "yellow",
  },
});
styles("default");
styles.red;
