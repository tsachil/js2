"use strict";

var result;

load(function(data) {
    result = data;
    console.log(result);
});

function load(callback) {
    setTimeout(function(){callback([1,2,3,4,5,6,7,8,9,10]);},3000);
};

