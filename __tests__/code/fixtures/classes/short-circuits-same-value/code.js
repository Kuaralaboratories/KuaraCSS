import kuaracss from "kuaracss";
const styles = kuaracss.sheet({
  default: {
    color: "blue",
  },
  blue: {
    color: "blue",
  },
  red: {
    color: "red",
  },
});
styles("blue", foo && "default", bar && "red");
