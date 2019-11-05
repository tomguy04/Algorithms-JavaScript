/*REMEMBER If separator is an empty string (""), str is converted to an array of each of its UTF-16 “characters”.*/
/*USING [...data] is more reliable in that does not break surrogate pairs.*/

//check for negative method 1    
function reverseInt(data){
    var isNeg = false;
    
    //if(data.split('').slice()==='-'){ won't work because .split is a string method.
    // data1 = data.toString().split('');
    // console.log(data.toString().split('').slice(1))
    if(data.toString().split('')[0]==='-'){
        data = data.toString().split('').slice(1);
        console.log(data);
        isNeg = true;
    }

    if (isNeg===false) {
        return +data.toString().split('').reverse().join('');
    }
    if (isNeg===true) { //negative handled above and its already an array in this case.
        return '-' + parseInt((data.reverse()).join(''));
    }

}

function reverseInt_2(data){
    if(data < 0){
        // return "-"+(+(data/-1).toString().split('').reverse().join(''));     
        return parseInt(data.toString().split('').reverse().join(''))*-1;
    }
    return +data.toString().split('').reverse().join(''); 
}

function reverseInt_3(data){
    //first, reverse the whole thing as an int, store it seperate to preserve the sign for later.
    // dataRev = data.toString().split('').reverse().join('');
    //or 
    dataRev = [...data.toString()].reverse().join('');
    console.log(data);
    //then determine the sign
    return parseInt(dataRev)*Math.sign(data); //sign returns -1 if neg, 1 if pos.
}

console.log(reverseInt_3(-301));