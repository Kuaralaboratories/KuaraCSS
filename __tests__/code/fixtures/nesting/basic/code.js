import kuaracss from "kuaracss";
const styles = kuaracss.sheet({
  default: {
    "::before": {
      opacity: 1,
    },
  },
});
styles("default");
