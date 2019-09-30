function insert(arr,rI,v){
    console.log(arr,' ',rI,' ',v);
    for(var ri=rI; ri >= 0 && v<arr[ri]; ri--){
        let copyToIndex = ri+1; //+1 because we are copying the value in ri to the next element in the list.
        arr[copyToIndex]=arr[ri];
    }
    arr[ri+1]=v; //ri was decremented on the last successful loop or it wasn't and we need to put the value back where it belongs. In the case where the loop wasn't executed, say 1 > 2 in [1,2,3], the rI was at 0, but 2 should be placed in index 0, so we use +1. If it was [2,1,3], we ran the loop from ri=0, decremented to -1 but need to place the value (1) at index 0, not index -1.
    return arr;
}

function insertionSort(arr){
    for(let valueIndex=1; valueIndex<arr.length; valueIndex++){ //vI is the index of the value we are comparing to the subarray.
        let value = arr[valueIndex]; //get the value of the element at vI
        let ri = valueIndex-1; //the right index is immediately to the left of the index of the value that we are inserting.
        insert(arr,ri,value);//321 0 2
    }
    return arr;
}


// const arr = [-22, 110, 42];
const arr = [3, 5, 7, 11, 13, 2, 9, 6];
// const arr = [3,2,1];
// const array = [-1,2]
console.log(insertionSort(arr));
// console.log(insert(arr,0,5));
