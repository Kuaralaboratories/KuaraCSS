import kuaracss from "kuaracss";

const styles = kuaracss.create({
  default: {
    color: "blue",
  },
});

styles(foo() && "default");