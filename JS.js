/**
 * Created by admin on 14.03.2019.
 */
function printTimeout(str, n) {
    setTimeout((()=> console.log("HELLO")), n*1000);
}
printTimeout('hello', 10) // hello will appear after 10secs in console
