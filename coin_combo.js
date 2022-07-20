let coins = [2, 3, 5, 7, 5, 12, 10];
let amount = 17;

let arr = []; // resulting array

let sum = 0;

// random array generator
let counterValue = (n) => {
    for (let i = 1; i <= n; i++) {
        arr.push(coins[Math.floor(Math.random() * coins.length)]);
        // console.log("1");
    }
    // console.log(arr);
};

// find the combination
function coinComb() {
    for (let i = 0; i <= 2000; i++) {
        counterValue(3);

        /*  
                    if you get result [num, num] then add argue in counterValue(2)
                    if you get result [num, num, num] then add argue in counterValue(3)
                    so on...
                */

        for (let j in arr) {
            // console.log("2");
            sum += arr[j];
        }

        if (amount === sum) {
            console.log(arr);
            return;
        }

        arr = [];
        sum = 0;
    }
}

coinComb();