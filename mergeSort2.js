//more straight forward version of mergeSort
function mergeSort(arr){ //4,3,2,1 *4,3 **4 **3 //*2,1
    //fast exit/returns
    if(arr.length<=1) return arr; //**[4] **[3] //**[2] **[1]

    //the goal is the slice the array into 1 element arrays then merge each pair of 1 element arrays.
    //the array isn't length 1 yet so split it in half until the half is length 1.
    let lh=[];
    let rh=[];

    let length=arr.length;
    let middle = Math.floor(length/2);
    lh=arr.slice(0,middle); //[4,3] *[4]
    rh=arr.slice(middle); //[2,1]   *[3]
    console.log(`lh ${lh} rh ${rh}`) ;

    //recur with the new arrays
    return merge(
        mergeSort(lh), //4,3 *4  **[4] arr of length 1 is returned here
        mergeSort(rh)  //2,1 *3  **[3] arr of length 1 is returned here
        //**when [4]and[3] are returned here the call is merge([4][3])
        //**[3,4] is returned from merge
        //*2,1 *[2][1] *merge[2][1] **[1,2] is returned from merge
        //***merge is then called with [3,4] and [1,2] */ and returns [1,2,3,4]
    )
}

function merge(arr1,arr2){  //*[4] *[3] (same for [2] [1]) //***[3,4] and [1,2] */
    console.log(`arr1 ${arr1} arr2 ${arr2}`);
    //merge together the 2 arrays
    let i = 0;
    let j = 0;
    //compare the elements of the two arrays and place the lesser value at the end of the new array.
    let sortedArr = [];
    while(i<arr1.length && j < arr2.length){ //*0<1 0<1 //**0<1 1!<1 *///***0<2 0<2 / 0<2 1<2 / 0<2 2!<2
        if(arr1[i]<arr2[j]){ //*[0][0] = 4,3 ***[0][0] = 3,1 [0][1] 3,2
            sortedArr.push(arr1[i]); //*not executed /***not executed
            i++; //*i remains at 0 / ***i remains at 0
        }else{
            sortedArr.push(arr2[j]); //*3->[]=[3] ***1->[1] ***2->[1,2]
            j++; //*j inc to 1 //**j inc to 1 //**j inc to 2
        }
    } //**drop out of the array/
    sortedArr=sortedArr.concat(arr1.slice(i)).concat(arr2.slice(j));
    console.log(`sortedArr ${sortedArr}`);
    return sortedArr;
    //**[3]                 [4] slice from 0 til the end, 0 is the only index->4 / [3] from 1 til the end, there is no 1
    //**[3,4]
    //***[1,2]              [3,4] slice from 0 to the end, indices 0 and 1 ->3,4 / [1,2] from 2 to the end, there is no 2
    //***[1,2,3,4]/
}

console.log(mergeSort([99, 44, 6, 2, 1, 5, 63, 87, 283, -100,4, 0]));
