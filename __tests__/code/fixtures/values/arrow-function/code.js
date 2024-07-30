import kuaracss from "kuaracss";
const styles = kuaracss.create({
  default: {
    color: "blue",
  },
});
const get = (state) => styles(state && "default");
