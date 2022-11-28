const utils = require('./utils.js');
const prompt = require('readline-sync');

// product of matrices
let mat1=[
    [4, 5, 7], 
    [2, 4, 3]
];
let mat2=[
    [1, 4], 
    [3, 6], 
    [2, 5]
];
console.log(utils.matrixProduct(mat1, mat2));

//sum of matrices
let m1=[
    [4, 5, 7], 
    [2, 4, s3]
];
let m2=[
    [1, 4, 6], 
    [3, 6, 10]
];
console.log(utils.sumOfMatrices(m1, m2));

//sum of each row
let mat=[
    [4, 5, 7], 
    [2, 4, 3],
    [4, 8, 10]
];
console.log(utils.sumOfEachRow(mat));

//count of words
let text=prompt.question("Please, input your sentence. - ");
console.log(utils.countWords(text));

//trim
let text1=prompt.question("Please, input your sentence. - ");
//let trimmed=utils.trim(text1);
//console.log(text1);
console.log(utils.trim(text1));
//console.log(text1.length);
//console.log(trimmed.length);

