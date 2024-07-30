import kuaracss from "kuaracss";
const styles = kuaracss.sheet({
  default: {
    color: "blue",
  },
  blue: {
    color: "blue",
  },
});
styles(false && "default", true && "blue");
