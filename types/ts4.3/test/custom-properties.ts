import kuaracss from "kuaracss";

kuaracss.sheet({
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

kuaracss.sheet({
  declaration: {
    "--bg-color": "blue",
  },
  use: {
    backgroundColor: "var(--bg-color)",
  },
});