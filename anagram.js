// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// start out with needing a regex to detect if we only compare alphabet letters.
const regex = /[A-Za-z]/; //if the character is in this range, use it and place it and it's count in a hash, then compare hashes.

// let reg1=/abc/;
// let theFoundString = 'abc'.match(reg1); //->abc
// console.log(`theFoundString ${theFoundString}`);
// let bool = regex.test('abc');
// console.log(`bool ${bool}`);
// let str = regex.test('123abc123'); //true bc the entire string contains the a match to the regex.
// console.log(str);

function buildHash(hash,ch){
    if(regex.test(ch)===true){
        if(!hash[ch]) hash[ch]=1;
        else hash[ch]++;
    }
    //we don't have to return anything, the object is passed by reference since it's non-primitive.
}

function anagram(str1,str2){
    const regex = /[A-Za-z]/;
    let h1={};
    let h2={};

    //look at each character in the string.
    for (let ch of str1.toLowerCase()){
        if(regex.test(ch)){
            buildHash(h1,ch);
        }
    }
    for (let ch of str2.toLowerCase()){
        if(regex.test(ch)){
            buildHash(h2,ch);
        }
    }
    return compareHash(h1,h2)
}

function compareHash(h1,h2){
    //if the hashes are different lengths, then 1 has a letter that the other doesn't.
    if (h1.length !== h1.length) return false;
    
    //they are the same length, iterate through both to check they contain the same characters and the same count.
    for (let ch in h1){
        if(!h2[ch] || h1[ch]!==h2[ch]){
            return false
        }
    }
    return true;
}

console.log(anagram('Hi theroe', 'Hi there!'));
