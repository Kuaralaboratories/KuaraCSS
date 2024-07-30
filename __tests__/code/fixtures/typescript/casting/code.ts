import kuaracss from "kuaracss";
const styles = kuaracss.sheet({
  default: {
    ["--bg-color" as any]: "blue",
  },
});
styles("default");
