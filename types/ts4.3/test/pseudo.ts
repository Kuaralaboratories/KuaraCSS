import kuaracss from "kuaracss";

kuaracss.sheet({
  pseudo: {
    ":hover": {
      "::before": {
        opacity: '"placeholder"',
      },
    },
  },
});
