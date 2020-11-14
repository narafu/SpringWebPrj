
/* <ES6 변경사항> */


// 1. 변수 선언 방법이 달라졌다.

// var x = 3; /* 이전에 위와 같이 선언된 변수는 전역 객체 속성이 된다. */
// y = 4; /* 그래서 다음과 같이 선언하지 않은 변수도 사용할 수 있다. */

// var x = 5; /* 또한 이전의 변수는 중첩선언이 되고, */
/* 이전의 변수는 자료형을 따지지 않는다. */

/*
    let x = 5;
    이전에는 var x 와 window.x 가 같았다. - 전역변수 였다.
    let으로 선언된 x는 window.x가 아니라 지역변수이다.
*/

/*
    이전에는 지역 블록의 의미가 없었다.
    let으로 선언된 변수는 중괄호를 따라 생애주기를 갖는다.
*/

/*
    상수형 변수가 생겼다. - 바꿀 수 없는 값
    자바의 final과 같은 개념
    const a = 30;
*/



// 2. 개체의 정의가 달라졌다.

/*
    function Exam2(kor, eng, math) {
        this.kor = kor || 0;
        this.eng = eng || 0;
        this.math = math || 0;
    }

    Exam2.prototype.total = function () {
        return this.kor + this.eng + this.math;
    }
*/

class Exam2 {
    constructor(kor = 10, eng = 0, math = 0) {
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
    total() {
        return this.kor + this.eng + this.math;
    }
}

let exam2 = new Exam2();
console.log(exam2.total());



// 3. 나머지 매개변수 개념이 생겼다. : rest parameter
function print(x, y, ...z) {
    console.log(x + y);
    console.log(z);
    console.log("--------------------------------------------------")
}

print(2, 3, 5, 7, 2);



// 4. 가변적인 매개변수 : spread operator
function print1(nums) {
    console.log(nums[0]);
    console.log(nums[1]);
    console.log(nums[2]);
    console.log("--------------------------------------------------")
}
function print2(x, y, z) {
    console.log("x : " + x);
    console.log("y : " + y);
    console.log("z : " + z);
    console.log("--------------------------------------------------")
}
let nums = [2, 4, 6];
print1(nums);
print2(...nums);



// 5. 함수 매개변수 기본값
function add1(x = 0, y = 0) {
    return x + y;
}
console.log("x + y : " + add1(3, 5));
console.log("x + y : " + add1(5));
console.log("--------------------------------------------------")

function add2(x, y = 10, z) {
    console.log("x : " + x);
    console.log("y : " + y);
    console.log("z : " + z);
    console.log("--------------------------------------------------")
}
add2(10, null, 30);
add2(10, undefined, 30);

function add3(x, y = 10) {
    console.log(arguments.length);
    // arguments는 사용자가 전달한 매개변수
    console.log("--------------------------------------------------")
}
add3(10);
add3(10, 30);
add3(undefined);



// 6. 람다표현식 Arrow Functions

function Exam() {
    this.kor = 0;
    this.eng = 0;
    this.math = 0;
}

Exam.prototype = {

    total: function () {

        console.log("[1]: " + this.kor);

        setTimeout(function () {
            console.log("[2]: " + this.kor);
        }, 1000)
        return this.kor + this.eng + this.math;

    },

    avg: function () {

        console.log("[3]: " + this.kor);

        setTimeout(() => {
            console.log("[4]: " + this.kor);
        }, 1000)

        return (this.kor + this.eng + this.math) / 3;
    }

};

// var exam = Exam(); /* 이 경우 this는 window */
let exam = new Exam(); /* 이 경우 this는 new */
exam.kor = 30;
exam.total();
exam.avg();



// 7. 향상된 객체 리터럴(Enhanced Object Literal)

console.log("--------------------------------------------------")

let kor1 = 30;
let eng1 = 40;
let math1 = 50;

let exam1 = {
    // kor1: kor1,
    // eng1: eng1,
    // math1: math1
    kor1, eng1, math1, total1() {
        return this.kor1 + this.eng1 + this.math1;
    }
}

exam1.kor1 = 5;
console.log("kor1 : " + kor1);
console.log("exam.kor1 : " + exam1.kor1);
console.log("exam1.total1() : " + exam1.total1());



// 8. Computed Property

let col = "name";
let exam4 = { ["nick" + col]: "newlec" };
console.log(exam4.col);
console.log(exam4.nickname);



// 9. Object Destructuring

let exam3 = {
    kor3: 11,
    eng3: 22,
    math3: 33
};

let { math3, kor3 } = exam3;

console.log(`math3 : ${math3}`);
console.log("kor3: " + kor3);
console.log("eng3: " + exam3.eng3);

// 10. Assignment

let exam5 = {
    kor3: 44,
    eng3: 55,
    math3: 66
};

({ math3, kor3 } = exam5);
console.log(`math3: ${math3}, kor3: ${kor3}`);



// 11. 기본값 설정 & 별칭

let { kor: korean, eng: english, test: temp = 100 } = exam;
console.log(korean);
console.log(english);
console.log(temp);



// 12. 중첩 Destructuring

exam = {
    kor: 11,
    eng: 22,
    math: 33,
    student: {
        name: "dragon",
        phone: "010-1234-5678"
    }
};

// let name = exam.student.name;
// let phone = exam.student.phone;
// let {name, phone} = exam.student;
let { student: { name, phone } } = exam;
console.log(`name:${name}, phone:${phone}`);



// 13. 컬렉션 Set

/*
    값을 식별하는 키가 없다. 값이 키다.
    키는 중복될 수 없으므로, 중복된 값을 허용하지 않는다.
*/

let set = new Set();

// set.add(5);
// set.add("5");
// set.add(2);
// set.add(5);

set
    .add(5)
    .add("5")
    .add(2)
    .add(5);

console.log(`size: ${set.size}`);

// set을 array로 해서 중복을 제거하였다.
set = new Set([2, 3, 4, 3, 2, 5]);
console.log(`size: ${set.size}`);
console.log("--------------------------------------------------")


//  set 추가 -> ex) 5를 추가할 때 : set.add(5);
//  set 값 확인 -> ex) 5가 있는지 확인할 때 : set.has(5)
//  set 값 삭제 -> ex) 5를 삭제할 때 : set.delete(5)
//  set 비우기 -> set.cleat();


// for-in문 : 키를 뽑아낸다.
// for-of문 : 값을 뽑아낸다.
set = new Set([2, 10, 5, 20, 9]);
set.forEach(function (value, key, ownerSet) {
    console.log(`value: ${value}`);
    console.log(`key: ${key}`);
    console.log(`ownerSet: ${ownerSet}`);
    console.log("--------------------------------------------------")
})
for (let v of set) {
    console.log(`v: ${v}`);
}

// Set 객체를 Array 객체로 변경하기
set = new Set([2, 10, 5, 222, 9]);
let array = [...set];
console.log(`array: ${array}`);
console.log("--------------------------------------------------")

// map


// iterator & generator 
// 데이터를 갖지 않고 각자 자기만의 인덱스를 갖고 순서를 갖는 것 : iterator
// 데이터 : generator

const data = [3, 5, 11, 25, 45];

// function iterator() {
//     let index = -1;
//     return {
//         next: function () {
//             ++index;
//             return {
//                 value: data[index],
//                 done: data[index] != undefined ? false : true
//             }
//         }
//     };
// };

function* iterator() {
    for (let v of data)
        yield v;
};

let it = iterator();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log("--------------------------------------------------");


// Symbol : 유니크한 값을 갖는 새로운 데이터타입 : 키에 사용되는 유니크한 값을 뽑아내는 기능
let s1 = Symbol();
let s2 = Symbol();

console.log(s1 == s2);
console.log(s1 === s2);

let obj = {
    [Symbol()]: 1,
    [Symbol()]: 30
}

let sbs = Object.getOwnPropertySymbols(obj);
console.log(obj[sbs[1]]);


// 

const lotto = {
    nums: [3, 15, 11, 25, 45],
    print() {
        console.log(nums);
    },
    iterator() {
        let index = -1;
        return {
            next: function () {
                ++index;
                return {
                    value: this.nums[index],
                    done: this.nums[index] != undefined ? false : true
                };
            }
        }
    }
}

for (let n of lotto)
    console.log(n);
