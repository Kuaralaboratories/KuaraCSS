import kuaracss from "kuaracss";

kuaracss.sheet({
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
