import kuaracss from "kuaracss";
const styles = kuaracss.create({
  default: {
    "@media (max-width: 1000px)": {
      opacity: 1,
    },
    "@supports (color: blue)": {
      color: "blue",
    },
  },
});
styles("default");
