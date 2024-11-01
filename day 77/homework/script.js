// 1)
function Positions(row, col) {
    for (let r = 1; r <= row; r++) {
        for (let c = 1; c <= col; c++) {
            console.log(`row: ${r} col: ${c}`);
        }
    }
}

Positions(2, 2);

// 2) ?

3)
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