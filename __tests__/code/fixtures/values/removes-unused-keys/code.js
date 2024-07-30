import kuaracss from "kuaracss";
const styles = kuaracss.create({
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
