/**
 * Created by admin on 14.03.2019.
 */

// ******************task_1(printTimeout)****************
console.log("********************task_1(printTimeout)********************");


function printTimeout(str, n) {
setTimeout((()=> console.log("HELLO")), n*1000);
}
printTimeout('hello', 10) // hello will appear after 10secs in console

// *******************task_2(sumAll -> recursia)*****************
console.log("********************task_2 (sumAll -> recursion)********************");

function sumAll(n) {
    let sum;
    if (n > 1){
        sum = n + sumAll(n-1);
    }else
    {
        sum = 1;
    }
    return sum;
}
console.log(sumAll(2)); // 3
console.log(sumAll(4)); // 10

// *******************task_3 (bombTimer)*****************
console.log("********************task_3 (bombTimer)********************");

function bombTimer(str, time) {

}
bombTimer('Boooom', 3);
3
2
1
Boooom