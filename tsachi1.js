/**
 * Created by student19 on 12/20/2015.
 */
"use strict";

function *gen(num) {
    for (let i=0;i<num;i++) {
        if (i % 2 == 0) {
            yield i;
        }
    }
}

for(let g of gen(20)) {
    console.log(g);
}
