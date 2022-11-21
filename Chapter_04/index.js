const log = console.log;

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
const map = (f, iter) => {
    const newArr = [];

    for (const i of iter) {
        newArr.push(f(i));
    }

    return newArr;
};

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
const filter = (f, iter) => {
    const newFilter = [];

    for (const el of iter) {
        if (f(el)) newFilter.push(el);
    }

    return newFilter;
};

for (const product of products) {
    if (product.price > 20000) {
        newArr2.push(product);
    }
}

// log(...newArr2);
log(...filter((product) => product.price < 20000, products));