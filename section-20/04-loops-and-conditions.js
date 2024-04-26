const flag = true;

if (!flag) {
    console.log("Condition satisfied.");
} else {
    console.log(flag);
    console.log("Condition not satisfied.");
}


let i = 0;
while (i < 10) {
    i++;
    console.log("i: " + i);
}

do {
    i++;
    console.log("i: " + i);
} while (i < 10);

for (let k = 1; k <= 100; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        console.log("multiple values of 2 and 5: " + k);
    }
}