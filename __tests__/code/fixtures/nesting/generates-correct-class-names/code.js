import kuaracss from "kuaracss";
const styles = kuaracss.create({
  default: {
    "::before": {
      opacity: 1,
    },
  },
  hidden: {
    "::before": {
      opacity: 0,
    },
  },
});
styles("default", "hidden");