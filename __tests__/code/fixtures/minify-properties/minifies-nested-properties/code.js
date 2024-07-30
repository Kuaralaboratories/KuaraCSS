import kuaracss from "kuaracss";
const styles = kuaracss.create({
  default: {
    "@media (max-width: 1000px)": {
      "::before": {
        opacity: 1,
      },
    },
  },
});
styles.default;
