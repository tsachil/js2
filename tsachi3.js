/**
 * Created by student19 on 12/20/2015.
 */
"use strict";
function createLiner(a,b) {
    return function Liner(x, callback) {
        setTimeout(function () {
            callback(a * x + b);
        }, 3000);
    }
}

var liner = createLiner(1,2);
var r;

liner(5,function(result){
    r = result;
    console.log(r);
});