import kuaracss from "kuaracss";
const styles = kuaracss.sheet({
  default: {
    "::before": {
      padding: "1rem",
    },
  },
});
styles("default");
