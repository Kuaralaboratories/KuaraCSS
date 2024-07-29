import kuaracss from "kuaracss";

kuaracss.create({
  pseudo: {
    ":hover": {
      "::before": {
        opacity: '"placeholder"',
      },
    },
  },
});
