import kuaracss from "kuaracss";
const styles = kuaracss.create({
  default: {
    "@supports": {
      "(opacity: 1)": {
        opacity: 1,
        "@media": {
          "(max-width: 1000px)": {
            opacity: 1,
          },
        },
      },
    },
  },
});
styles.default;
