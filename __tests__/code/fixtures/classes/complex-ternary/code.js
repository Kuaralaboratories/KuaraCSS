import kuaracss from "kuaracss";
const styles = kuaracss.sheet({
  not_used: {
    padding: "0",
    cursor: "pointer",
  },
  base: {
    pointerEvents: "none",
    ":focus": {
      outline: "none",
    },
  },
  enabled: {
    color: "green",
  },
  disabled: {
    color: "red",
    cursor: "not-allowed",
  },
  hover: {
    ":hover": {
      color: "blue",
    },
  },
  other: {
    backgroundColor: "red",
  },
});

styles("base", checked ? "enabled" : "disabled", "hover", "other");
