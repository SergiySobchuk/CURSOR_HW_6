/**
 * Created by admin on 14.03.2019.
 */

// ******************task_1(printTimeout)****************
console.log("********************task_1(printTimeout)********************");


function printTimeout(str, n) {
setTimeout((()=> console.log(str)), n*1000);
}
// printTimeout('hello', 10);

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
    let newTime = time;

    const  bimba = (count, newTime) => setTimeout((()=> console.log(newTime)),count*1000);

    for (let i = 1; i <= time; i++ ) {
        // debugger
        bimba(i,newTime);
        newTime--;
    }
    setTimeout((()=> console.log(str)),(time + 1)*1000);
}
// bombTimer('Boooom', 3);


// *******************task_4 (factorial)*****************
console.log("********************task_4 (factorial)********************");

function factorial(n) {
    let count = 2;
    let resF = 1;
    // debugger
    const  fack = (n) => {
       if (count <= n) {
           resF = resF * count;
           count++;
           fack(n);
       }
       return resF;
    }
    return fack(n);
}
console.log("res:" ,factorial(3)); // 6
console.log("res:" ,factorial(5)); // 120


// *******************task_5 (bombTimerRec)*****************
console.log("********************task_5 (bombTimerRec)********************");

function bombTimerRec(str, time) {
    // debugger;
    let count = 1;
    const bomb = (time) => {
        if (time > 0){
            setTimeout((()=> console.log(time)),count*1000);
            count++;
            bomb(time-1);
        }
    }
    bomb(time);
    setTimeout((()=> console.log(str)),(time+1)*1000);

}
// bombTimerRec('Boooom', 3);

// *******************task_6 (filterNumbers)*****************
console.log("********************task_3 (filterNumbers)********************");








