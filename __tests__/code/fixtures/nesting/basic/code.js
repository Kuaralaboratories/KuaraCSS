import kuaracss from "kuaracss";
const styles = kuaracss.create({
  default: {
    "::before": {
      opacity: 1,
    },
  },
});
styles("default");
