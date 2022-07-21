## Chapter - 02 / ES6에서의 순회와 이터러블:이터레이터 프로토콜

### 순회
    ES6에서의 순회는 다음과 같이 간략한 형태로 나타낼 수 있음
    const list = [1, 2, 3]
    for(const i of list){
        console.log(i) 
    }

    const str = 'abc'
    for(const a of str){
        console.log(a)
    }

    => 명력적 프로그래밍에서 선언적으로 변경
    