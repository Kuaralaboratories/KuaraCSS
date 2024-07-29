import kuaracss from "kuaracss";

const styles = kuaracss.create({
  blue: { color: "blue" },
  red: { color: "red" },
  green: { color: "green" },
});

// $ExpectType string
styles("blue");
// $ExpectError
styles("not-defined");
// $ExpectType string
styles(true && "blue");
// $ExpectType string
styles(Math.random() < 0.5 ? "blue" : "red");
// $ExpectType string
styles({
  blue: true,
});
// $ExpectType string
styles(false, undefined, null);
// $ExpectType string
styles({ blue: undefined, red: null, green: false });
styles({ blue: undefined, red: null, green: true });
// $ExpectType string
kuaracss(styles.blue);
// $ExpectType string
kuaracss(false, undefined, null);
// $ExpectError
kuaracss(true);
