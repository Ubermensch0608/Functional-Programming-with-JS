const log = console.log;

const curry =
    (f) =>
    (a, ..._) =>
    _.length // 인자가 2개 이상일 때
    ?
    f(a, ..._) // 함수 즉시 실행
    :
    (..._) => f(a, ..._); // 지연했다가 실행

const products = [
    { name: '반팔티', price: 15000 },
    { name: '긴팔티', price: 20000 },
    { name: '핸드폰케이스', price: 15000 },
    { name: '후드티', price: 30000 },
    { name: '바지', price: 25000 },
];

const names = [];

for (const product of products) {
    names.push(product.name);
}

log(names);

const prices = [];

for (const product of products) {
    prices.push(product.price);
}

log(prices);

/**
 * iterable한 값을 통해 새로운 iterable를 리턴하는 map 함수
 * @param { void } f        로직을 처리할 함수
 * @param { Iterable } iter iterable한 값
 * @returns { Iterable }    로직에 의해 생생된 iterable한 값 리턴
 * */
const map = curry((f, iter) => {
    const newArr = [];

    for (const i of iter) {
        newArr.push(f(i));
    }

    return newArr;
});

log(map((product) => product.name, products));
log(map((product) => product.price, products));

// 함수형 프로그래밍에서는 인자와 리턴값으로 소통하는 것을 권장
// 함수를 값으로 다루면서, 원하는 시점에 값을 도출해내는 함수 => 고차함수

// map함수는 iterable protocol을 따르기 때문에 다형성이 높다.
// 사용 스펙트럼이 넓다.

// log(map((dom) => dom.nodeName, document.querySelectorAll('*')));
// const it = document.querySelectorAll('*')[Symbol.iterator]();
// log(it.next());
// log(it.next());
// log(it.next());

const gen = function*() {
    yield 2;
    yield 3;
    yield 4;
};

// 제러레이터 함수 gen과 같이 문장 역시 순회를 하여 새로운 이터러블을 반환할 수 있다.
// 사실상 모든 로직을 순회할 수 있는 셈
log(map((el) => el ** 3, gen()));

// key value 쌍으로
const m = new Map();
m.set('a', 10);
m.set('b', 20);

log(m);
log(new Map(map(([key, value]) => [key, value * 100], m)));

const newArr2 = [];
const filter = curry((f, iter) => {
    const newFilter = [];

    for (const el of iter) {
        if (f(el)) newFilter.push(el);
    }

    return newFilter;
});

for (const product of products) {
    if (product.price > 20000) {
        newArr2.push(product);
    }
}

// log(...newArr2);
log(...filter((product) => product.price < 20000, products));

const numbers = [1, 2, 3, 4, 5];
let total = 0;

for (const number of numbers) {
    total = total + number;
}

log(total);
const add = (a, b) => a + b;
/**
 * reduce iterable한 값을 축약해나가는 함수
 * @param { void } f    역할을 수행할 함수
 * @param { number } initial    초기값
 * @param { Iterable<number> } iter  iterable한 값들
 */
const reduce = curry(function(f, initial, iter) {
    if (!iter) {
        iter = initial[Symbol.iterator]();
        initial = iter.next().value;
    }
    for (const number of iter) {
        initial = f(initial, number);
    }
    return initial;
});

// log(reduce(add, numbers));
// log(reduce((total, product) => total + product.price, 0, products));
// log(add(add(add(add(add(0, 1), 2), 3), 4), 5));

log(
    reduce(
        add,
        map(
            // 기대한 배열
            (product) => product.price,
            filter((product) => product.price < 20000, products) // 기대한 배열
        )
    )
);
console.clear();

// 위 함수들은 다형성이 높지만 코드를 읽는 것에서는 좋다고 할 수 없음

/**
 * 원하는 로직 처리 함수들을 받아 순차적으로 실행 시킨 뒤 마지막 값을 반환하는 helper 함수
 * @param  {...number} args
 * @returns
 */
const go = (...args) => reduce((a, f) => f(a), args);

/**
 * 함수를 리턴하는 함수
 * @param { void} f  로직을 처리할 첫 번째 함수를 받는다.
 * @param {...void} fs  로직을 처리할 나머지 함수들을 받는다.
 */
const pipe =
    (f, ...fs) =>
    (...as) =>
    go(f(...as), ...fs);

go(
    0,
    (a) => a + 1,
    (a) => a + 10,
    (a) => a + 100,
    log
);

const f = pipe(
    (a, b) => a + b,
    (a) => a + 10,
    (a) => a + 100
);

log(f(0, 1));

// go 함수를 통해 순서 뒤집기
// curry 함수를 통해서 표현 간결하게 하기
go(
    products,
    filter((p) => p.price < 20000),
    map((p) => p.price),
    reduce(add),
    log
);

const multi = curry((a, b) => a * b);

log(multi(2)(3));