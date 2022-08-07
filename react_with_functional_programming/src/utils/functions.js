export const map = (f, iter) => {
  const list = [];
  for (const el of iter) {
    list.push(f(el));
  }
  return list;
};

export const filter = (f, iter) => {
  const list = [];
  for (const el of iter) {
    if (f(el)) list.push(el);
  }
  return list;
};
