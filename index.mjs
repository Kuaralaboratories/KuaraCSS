function merge(target, source) {
  for (const key in source) {
    if (typeof source[key] === "object") {
      target[key] = merge({ ...target[key] }, source[key]);
    } else {
      target[key] = source[key];
    }
  }

  return target;
}

function getValues(obj) {
  const values = [];

  for (const key in obj) {
    const val = obj[key];
    if (typeof val === "object") {
      values.push(...getValues(val));
    } else {
      values.push(val);
    }
  }

  return values;
}

export default function kuaracss(...styles) {
  const merged = styles.reduce(merge, {});
  return getValues(merged).join(" ");
}

kuaracss.create = () => {
  throw new Error("kuaracss.create calls should be compiled away");
};

kuaracss.keyframes = () => {
  throw new Error("kuaracss.keyframes calls should be compiled away");
};
