// map

const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

// filter

const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a) < 20000) res.push(a);
  }
  return res;
};

// reduce

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const log = console.log;
