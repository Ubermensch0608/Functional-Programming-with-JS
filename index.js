const log = console.log;

// *generator 함수 생성
// 함수선언 * 붙히기

function* generator() {
    // 제너레이터 함수 내부에서 원하는 로직 작성 가능
    yield 1;
    yield 2;
    yield 3;
    return 100; // done: true가 되었을 때 반환할 값
}

// 객체를 생성해 반환 -> iter가 생성된 객체
let iter = generator();

// generator는 well formed iterator를 반환하는 함수
// well formed iterator는 자기 자신이 이터레이터이면서
// 자식 역시 iterator로 반환하는 iterator
log(iter === iter[Symbol.iterator]()); // true

/**
 * 제너레이터 함수를 사용하는 이유
 * 원하는 시점에서 함수 내부의 로직을 순차적으로 실행 가능
 */

log(iter.next());
log(iter.next()); // 순서대로 값을 반환하다가 마지막에 done: true를 반환하고 끝

// 함수를 변수에 담은 형태로도 생성 가능 but arrow function일 경우 불가
const gen = function*() {
    yield 3;
    yield 2;
    yield 1;
};

const iter2 = gen();

const run = async function*() {
    await new Promise((resolve) => setTimeout(resolve, 100));
    yield 'Hello';
    log('World!');
};

const asyncIter = run();

(async() => {
    for await (const val of asyncIter) {
        log(val);
    }
})();

const myGen = function*(x, y, iter) {
    for (let i = 0; i < iter; i++) {
        yield x + y;
    }
};

const myIter = myGen(1, 2, 5);

// 무한히 수열을 반환하는 generator 함수
const infinityGen = function*(i = 0) {
    while (true) yield i++;
};

const limitGen = function*(limit, iter) {
    for (const value of iter) {
        yield value;
        if (value === limit) return;
    }
};

// 홀수만 반환하는 generator 함수
const oddGen = function*(limit) {
    for (const num of limitGen(limit, infinityGen(1))) {
        if (num % 2 === 1) yield num;
    }
};

const oddIter = oddGen(10);

log(oddIter.next());
log(oddIter.next());
log(oddIter.next());
log(oddIter.next());
log(oddIter.next());
log(oddIter.next());
log(oddIter.next());

for (const a of oddGen(1000)) {
    log(a);
}