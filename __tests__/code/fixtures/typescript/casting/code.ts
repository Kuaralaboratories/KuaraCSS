import kuaracss from "kuaracss";
const styles = kuaracss.create({
  default: {
    ["--bg-color" as any]: "blue",
  },
});
styles("default");
