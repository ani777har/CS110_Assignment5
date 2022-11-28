
// 1. product of matrices
function matrixProduct(mat1, mat2){
    let result = [];
    for(row1=0; row1<mat1.length; row1++){
        result[row1]=[];
        for(col2=0; col2<mat2[row1].length; col2++){
            let product=0
            for(k=0; k<mat1[row1].length; k++){
                product+=mat1[row1][k]*mat2[k][col2];
            }
        result[row1][col2]=product;      
        }
    }
    return result;
}

// 2. sum of matrices
function sumOfMatrices(m1, m2){
    let result=[];
    for(row=0; row<m1.length; row++){
        result[row]=[];
        for(column=0; column<m1[row].length; column++){
            result[row][column]=m1[row][column]+m2[row][column];
        }
    }
    return result;
}


// 3. sum of each row
function sumOfArray(arr){
    sum=0
    for(i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}


function sumOfEachRow(mat){
    let result=[];
    for(row=0; row<mat.length; row++){
        let sum=sumOfArray(mat[row]);
        result[row]=sum;
    }
    return result;
}

const prompt=require('readline-sync')
// 4. count of words
function countWords(text){
    text+=" ";
    let i=0;
    let wordcount=0;
    while(i<text.length){
        if(text[i]!=" "){
            while(text[i]!=" "){
                i++;
            }
            wordcount++;
        }
        while(text[i]===" "){
            i++;
        }
    }
    return wordcount;
}

// 5. trim
function trim(text){
    let result="";
    let i=0;
    while(text[i]===" "){
        i++;
    }
    let m=text.length-1;
    while(text[m]===" "){
        m--;
    }
    for(i; i<=m; i++){
        result+=text[i];
    }
    return result;
}


module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfArray,
    sumOfEachRow,
    countWords,
    trim
}
