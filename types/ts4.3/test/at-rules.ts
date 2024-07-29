import kuaracss from "kuaracss";

kuaracss.create({
  nesting: {
    "@media": {
      "(min-width: 80em)": {
        opacity: 0,
        "@supports": {
          "(opacity: 1)": {
            opacity: 1,
          },
        },
      },
    },
  },
});
