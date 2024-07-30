import kuaracss from "kuaracss";
const styles = kuaracss.create({
  default: {
    "@media (max-width: 1000px)": {
      ":hover": {
        "::before": {
          opacity: 1,
        },
      },
    },
  },
});
styles("default");
