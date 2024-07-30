import kuaracss from "kuaracss";

const styles = kuaracss.sheet({
  blue: {
    color: "blue",
  },
  red: {
    color: "red",
  },
});

const isRed = true; // Example condition

document.querySelectorAll("h1").forEach((el) => {
  el.className = styles("blue", isRed && "red");
});

document.querySelectorAll("h2").forEach((el) => {
  el.className = styles("blue", isRed && "red");
});
