
// import asd, { test1 as f1, test3, Exam } from './module1.js';

// function test() {
//     console.log("hello");
// }

// test();
// f1();
// asd(); /* test2는 default로 오기에 이것을 이헤한다. */
// test3();

// let exam = new Exam();
// console.log(exam.total());

class Exam {

    constructor() {
        this.kor = 10;
        this.eng = 20;
    }

    total() {
        return this.kor + this.eng;
    }

}

// 왕자
let exam = new Exam();

const handler = {
    // 속성을 호출할 때마다 get이 실행된다.
    get: function (target, prop, receiver) {

        // if (prop === 'kor')
        //     return 50000;

        console.log("앞부분 코드");
        let v = Reflect.get(...arguments);
        console.log("뒷부분 코드")

        return v;
    }
}; // 곁다리

// 거지
const p = new Proxy(exam, handler);
console.log(p.total());
console.log(`kor: ${p.kor}`); /* 속성 호출 */
console.log(`eng: ${p.eng}`);


