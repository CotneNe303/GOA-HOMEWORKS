// function addMatrices(matrix1, matrix2) {
//     if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
//         throw new Error("Matrices must have the same dimensions to be added.");
//     }
    
//     const result = [];

//     for (let i = 0; i < matrix1.length; i++) {
//         const row = [];
//         for (let j = 0; j < matrix1[0].length; j++) {
//             row.push(matrix1[i][j] + matrix2[i][j]);
//         }
//         result.push(row);
//     }
//     return result;
// }


function transposeMatrix(matrix) {

    const result = [];
    
    for (let col = 0; col < matrix[0].length; col++) {

        const newRow = [];

        for (let row = 0; row < matrix.length; row++) {
            newRow.push(matrix[row][col]);
        }
        result.push(newRow);
    }
    return result;
}

