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
console.log("factorial:" ,factorial(3)); // 6
console.log("factorial:" ,factorial(5)); // 120


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
console.log("********************task_6 (filterNumbers)********************");

function filterNumbers(arr, maxNumber) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < maxNumber){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filterNumbers([1, 4, 8, 1, 20], 5));  // [1, 4, 1]

// *******************task_7 (minMax)*****************
console.log("********************task_7 (minMax)********************");

function minMax(arr) {
    const minMaxObj = {
        max : arr[0],
        min : arr[0]
    };
    console.log(minMaxObj);
    for(let i = 1; i < arr.length; i++ )
    {
        if (arr[i] > minMaxObj.max){minMaxObj.max = arr[i]}
        if (arr[i] < minMaxObj.min){minMaxObj.min = arr[i]}
    }

    return minMaxObj;
}
minMax([1, 4, 8, 2, 20]) // { max: 20, min: 1 }

// *******************task_8 (average)*****************
console.log("********************task_8 (average)********************");

function average(arr) {
    let ever = (1+4+2)/(arr.length);
    return ever.toFixed(2);
}
console.log(average([1, 4, 2])); // 2.33

// *******************task_9 (concatFirstNestedArraysv->for)*****************
console.log("********************task_9 (concatFirstNestedArrays->for)********************");

function concatFirstNestedArrays(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[j].length; j++){
            newArr.push(arr[i][j]);
        }
    }
    return newArr;
}
console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]])) // [0, 1, 2, 3, 4, 5]

// *******************task_9_2 (concatFirstNestedArraysv->callback)*****************
console.log("********************task_9_2 (concatFirstNestedArrays->callback)********************");


function concatFirstNestedArraysF(arr) {
    let newArr = [];

    const callback2 = item => newArr.push(item);
    const callback1 = item1 => item1.forEach(callback2);
    arr.forEach(callback1);

    return newArr;
}
console.log(concatFirstNestedArraysF([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5]

// *******************task_9_3 (concatFirstNestedArraysv->reduce)*****************
console.log("********************task_9_3(concatFirstNestedArrays->reduce)********************");


// function myFunction(x, y, z) { }
// var args = [0, 1, 2];
// myFunction(...args);


function concatFirstNestedArraysR(arr) {
    const res = arr.reduce((acc, elem) => [...acc, ...elem]);
    return res;
}
console.log(concatFirstNestedArraysR([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5]


// *******************task_10_concatFirstNestedArraysv->reduce)*****************
console.log("********************task_9_3(usersToObject)********************");

const users = [
    { id: 1, name: 'John', birthday: '1999-2-12' },
    { id: 2, name: 'Bill', birthday: '1999-1-19' },
    { id: 3, name: 'Carol', birthday: '1999-3-11' },
    { id: 4, name: 'Luce', birthday: '1999-2-22' }
];

function usersToObject(users) {
    
}
usersToObject(users)
// {
//  1: { id: 1, name: 'John', birthday: '1999-2-12' },
//  2: { id: 2, name: 'Bill', birthday: '1999-1-19' },
//  3: { id: 3, name: 'Carol', birthday: '1999-3-11' },
//  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
// };




