// 1)
function Positions(row, col) {
    for (let r = 0; r <= row; r++) {
        for (let c = 0; c <= col; c++) {
            console.log(`row: ${r} col: ${c}`);
        }
    }
}

Positions(2, 2);

// 2) ?
function multiply(){
    let res = []
    for(let i = 1; i < 11; i++){
        for(let d = 1; d < 11; d++){
            res.push(i * d)
        }
        console.log(res)
    }
}

multiply()



// 3)
function printGreaterPairs(n) {
    const pairs = [];

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            if (b > a) {
                pairs.push(`(${a}, ${b})`);
            }
        }
    }

    console.log(pairs.join(', '));
}

printGreaterPairs(3);