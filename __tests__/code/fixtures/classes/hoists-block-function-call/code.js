import kuaracss from "kuaracss";
const styles = kuaracss.create({
  default: {
    color: "blue",
  },
});
{
  styles({
    default: foo(),
  });
}
