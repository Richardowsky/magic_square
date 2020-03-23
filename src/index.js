const readline = require('readline');
const {performance} = require('perf_hooks');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let square = [];
let counter = 8;
console.log("Please enter 9 numbers separated by <Enter>");
rl.on('line', (input) => {
    if (counter >= 0) {
        console.log(`enter ${counter--} numbers`);
        square.push(input);
    } else {
        console.log("<Ctrl+C> to exit program")
    }
});

rl.on('close', () => {
    console.log("This is your square =>");
    console.log(square);
    const start = performance.now();
    makeSquare();
    const finish = performance.now();
    console.log('Took', (finish - start).toFixed(4), 'milliseconds to generate');

});




function makeSquare() {
    const variants = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ];

    let minDiff = 0;
    let magicSquare = [];

    for (let variant of variants) {
        let diff = 0;
        for (let i = 0; i < 9; i++) {
            diff += (Math.abs(square[i] - variant[i]));
        }
        if (minDiff === 0) {
            minDiff = diff;
            magicSquare = variant;
        }
        if (diff < minDiff) {
            minDiff = diff;
            magicSquare = variant;
        }
    }
    console.log("Minimal cost => " + minDiff);
    console.log(magicSquare[0] + ' ' + magicSquare[1] + ' ' + magicSquare[2]);
    console.log(magicSquare[3] + ' ' + magicSquare[4] + ' ' + magicSquare[5]);
    console.log(magicSquare[6] + ' ' + magicSquare[7] + ' ' + magicSquare[8]);
}