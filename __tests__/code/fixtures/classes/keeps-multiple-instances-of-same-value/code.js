import kuaracss from "kuaracss";
const styles = kuaracss.create({
  default: {
    color: "blue",
  },
  blue: {
    color: "blue",
  },
});
styles(false && "default", true && "blue");
