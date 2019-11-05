//find the character repeated most in the string.

//es6 Object.entries creates an array of arrays. Each inner array has two item. The first item is the property; the second item is the value.
// const fruits = {
//     apple: 28,
//     orange: 17,
//     pear: 54,
//   }
  
//   const entries = Object.entries(fruits)
//   console.log(entries)
  // [
  //   [apple, 28],
  //   [orange, 17],
  //   [pear, 54]
  // ]

function maxChar(str){
    h = {};
    //for every character encountered, either start a new count or add to the count for that char.
    [...str].forEach(ch=>{
        if(ch in h){
            h[ch]++;
        }else{
            h[ch]=1;
        }
    })
    //look at the values of each key in the hash.
    let maxCount=0;
    let maxCh='';
    
    let arr= Object.entries(h);
    for(let [ch,count] of arr){
        if(count>maxCount) {
            maxCount = count;
            maxCh=ch;
        }
    };  
    return maxCh;
}

function maxChar_2(str){
    let maxCount=0;
    let maxCh='';
    const h = {};
    for (let char of str){
        if(!h[char]) h[char]=1;
        else h[char]++;
    } //of is for arrays
    for (let char in h){ // in is for objects
        if(h[char]>maxCount) {
            maxCount = h[char];
            maxCh=char;
        }
    }
    return maxCh;
}

console.log(maxChar_2('12233344'));

// console.log(maxChar('appllle'));