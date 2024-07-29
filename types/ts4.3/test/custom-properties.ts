import kuaracss from "kuaracss";

kuaracss.create({
  declaration: {
    // $ExpectError
    "--undefined": "value",
  },
  use: {
    // $ExpectError
    flexDirection: "var(--undefined)",
  },
});

declare module "kuaracss" {
  interface CustomProperties {
    "--bg-color"?: string;
  }
}

kuaracss.create({
  declaration: {
    "--bg-color": "blue",
  },
  use: {
    backgroundColor: "var(--bg-color)",
  },
});
