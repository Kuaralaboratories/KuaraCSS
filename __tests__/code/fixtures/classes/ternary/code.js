import kuaracss from "kuaracss";
const styles = kuaracss.create({
  default: {
    color: "blue",
    opacity: 1,
  },
  red: {
    color: "red",
  },
});
styles(foo ? "default" : "red");
