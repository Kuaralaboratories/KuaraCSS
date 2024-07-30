import kuaracss from "kuaracss";
const styles = kuaracss.sheet({
  default: {
    color: "blue",
  },
});
const get = (state) => styles(state && "default");
