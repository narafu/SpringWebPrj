
class Exam {
    constructor(kor = 10, eng = 0, math = 0) {
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
    total() {
        return this.kor + this.eng + this.math;
    }
}

class NewlecExam extends Exam {
    constructor(kor = 0, eng = 0, math = 0, com = 0) {
        super(kor, eng, math);
        this.com = com;
    }
    total() {
        return super.total() + this.com;
    }

}

let exam = new NewlecExam(1, 1, 1, 1);
console.log(typeof Exam);
console.log(exam.total());



class MyArray extends Array {
    constructor(myarg, ...arg) {
        super(...arg);
        this.myarg = myarg;
    }
    print() {
        console.log(this.myarg);
        super.push(this.myarg);
    }
}

let mar = new MyArray("hoho", 1, 2, 3, 4);
mar.print();
console.log(mar.pop());
console.log(mar.pop());
console.log(mar.pop());
console.log(mar.pop());
console.log(mar.pop());
console.log(mar.pop());
console.log("-----------------------------------------------");



/*
    //  비동기 처리를 가지는 함수 정의 방법(과거)
    function getNotice(callback) {
        console.log("가짜 요청 시작");
        setTimeout(function () {
            callback({ id: 1, title: "공지가 있습니다." });
        }, 2000);
    }

    // 비동기 처리를 가진 함수를 호출 방법(과거)
    getNotice(function (notice) {
        console.log(notice.title);
    });
*/



function getNotice(id) {
    console.log("가짜 요청 시작");
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (id < 40)
                resolve(`{ "id": "1", "title": "공지가 있습니다." }`);
            else
                reject({ status: "error", message: "오류발생" });
        }, 2000);
    });
};

// getNotice().then(function (notice) {
//     console.log(notice.title);
// });

async function test() {
    console.log("process test");
    let notice = await getNotice(32);
    console.log(notice.title);
};

test();
console.log("after test");


function test1() {
    console.log("process test1");
    getNotice(45)
        .then(function (n) { // 문자열 데이터를 객체화해서 제목을 반환
            let notice = JSON.parse(n);
            return notice.title;
        })
        // .then
        // .then
        .then(function (title) { // 반환된 데이터를 출력
            console.log(title);
        })
        .catch(function (e) {
            return e.message;
        })
        .then(m => {
            console.log(m);
        })
    // .then
}

test1();
console.log("-----------------------------------------------");


