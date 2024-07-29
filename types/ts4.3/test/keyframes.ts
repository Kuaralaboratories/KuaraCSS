import kuaracss from "kuaracss";

// $ExpectType string
kuaracss.keyframes({
  from: { color: "blue" },
  "50%": { color: "yellow" },
  to: { color: "red" },
});

kuaracss.keyframes({
  from: {
    // $ExpectError
    ":hover": {
      color: "blue",
    },
  },
});
