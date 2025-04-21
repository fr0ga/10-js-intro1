    console.log("Hello JS!");

let a;
// asdasdasd
console.log(a);
const d = 'bye';
console.log(d);
a = true;
console.log(a);
const pi = 3.1415926;
console.log(pi);
let b= 80;
console.log(b);
a = 2.718281828;
console.log(a);
b = null;
const exp = a;
a = 2.7;
console.log('exp = ' + exp + ' or ' + a);
console.log(`exp = ${exp} or ${a}`);
let res = 7 % 4;
console.log(`res = ${res}`);
res = '6'+5;
console.log(`res = ${res}`);
res = '6'*5;
console.log(`res = ${res}`);
res= 'hello' * 5;
console.log(`res = ${res}`);
res = 5 / null;
console.log(`res = ${res}`);
res = 5 / undefined;
console.log(`res = ${res}`);

a = false == 0; /* === сравнивает приводя всё к числам */
console.log(a);
a = false === 0; /* === сравнивает сначала ТИПЫ (если разные то false) */
console.log(a);


a = true;
a == 1;
console.log(a == 1);

a === 1;
console.log(a === 1);

res = 5;
switch (res) {
    case 5:
        console.log(`number = ${res}`);
        break;
    case '5':
        console.log(`string = ${res}`);
        break;
    default:
        console.log(`not a five`)
}
let age = 35;
let vol = age <= 18 ? 1.5 : 42;
    console.log(vol)
if (age < 18) {
    console.log("ALCOHOL FORBIDDEN");
} else console.log("LET'S DRINK!");

    console.log('+++++++++++++++++++++++++++ LOOOP ++++++++++++++++++++++++++++')
let i;
for (i = 1; i <= 5; i++) {
    console.log(i);
}
console.log(i);


a = 42;
console.log(typeof a);
a = '5';
console.log(typeof a);
a=false;
console.log(typeof(a))
a = undefined;
console.log(typeof a);
a = null;
console.log(typeof a);

console.log("===== functions =====");
let x = 5;
let y = 3
res = add(x,y);
    console.log(`res = ${res}`)

res = multiple(x,y);
    console.log(`res = ${res}`)

console.log("===== is Lucky number ??? =====");

    testIsLucky(0);
    testIsLucky(1);
    testIsLucky(2);
    testIsLucky(22);
    testIsLucky(23);
    testIsLucky(132);
    testIsLucky(1243);

function add(a,b) {
    let res = a + b;
    return res;
}

function multiple(a,b) {
        let res = a * b;
        return res;
}

function  testIsLucky(a)
{
    console.log(`isLucky = ${a}? Answer = ${isLucky(a)}`);
}


function isLucky(a) {

    let isCheckSum = false;
    res = false;

    let sum1 = 0;
    let sum2 = 0;
    let stageOdd = true;

    while (a > 0) {
        if (stageOdd) {
            sum1 += a % 10;
            stageOdd = false;
        } else {
            sum2 += a % 10;
            stageOdd = true;
        }
        a = (a - (a % 10)) / 10;

        isCheckSum = true;
    }
    //console.log(`sum1 = ${sum1}; sum2 = ${sum2}`);
    if (isCheckSum && sum1 === sum2) {
        res = true;
    }

    return res;
}
