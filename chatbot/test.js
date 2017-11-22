// 1) 객체 생성 및 프로퍼티 추가

//방법1
var obj = new Object;
obj.v1 = 100;
obj.f1 = function() {
    console.log('hello')
};

console.log(obj.v1)
obj.f1()
console.log('.......................................')

//방법2
var obj2 = {
    v1 :200,
    f1 : function() {
        console.log("hello2")
    }
};

console.log(obj2.v1)
obj2.f1()
console.log('.......................................')

//방법3
var obj3 = {
    v1 :300,
    f1 : () => {
        console.log("hello3")
    }
};

console.log(obj3.v1)
obj3.f1()
console.log('.......................................')

//방법4
var obj4 = {
    v1 :400,
    f1() {
        console.log("hello4..1")
    },
    f2() {
        console.log("hello4...2")
    }
};

console.log(obj4.v1)
obj4.f1()
obj4.f2()
console.log('.......................................')


//방법5
function f1() {
    console.log("hello5...1")
}

function f1() {
    console.log("hello5...1")
}

var obj4 = {
    v1 :500,
    f1,
    f2
};

console.log(obj5.v1)
obj5.f1()
obj5.f2()
console.log('.......................................')