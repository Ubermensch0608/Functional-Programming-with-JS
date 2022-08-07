export const map = (f, iter) => {
  const list = [];
  for (const el of iter) {
    list.push(f(el));
  }
  return list;
};
