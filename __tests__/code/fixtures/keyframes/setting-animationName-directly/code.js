import kuaracss from "kuaracss";
const styles = kuaracss.sheet({
  default: {
    animationName: kuaracss.keyframes({
      "0%": {
        opacity: 0,
      },
    }),
  },
});
styles.default;
