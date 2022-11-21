const log = console.log;

/**
 * 최대값을 받아 홀수만 리턴하는 함수
 * @param { string } limit  최대치
 * @returns { number }      조건에 맞는 값 리턴
 */
const oddMaker = function*(limit) {
    for (let i = 0; i < limit; i++) {
        if (i % 2 === 1) {
            yield i;
        }
    }
};

const newOdds = oddMaker(10);

for (const a of newOdds) log(a);

log([...oddMaker(100), ...oddMaker(10)]);

const [first, second, ...rest] = oddMaker(20);
log(first, 'first');
log(second, 'second');
log(...rest, 'rest');

// generator와 iterator를 이용하면 조합성이 높은 함수형 프로그래밍을 할 수 있음