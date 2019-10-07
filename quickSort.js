// how does it work:

// Step-1: You have to pick a pivot. This could be randomly selected or the middle one. Here we select the last element of the array.

// Step-2: Put all the items smaller than the pivot value to the left and larger than the pivot value to the right.

// Step-3:Repeat the step-2 for both left and right side of the pivot (pick a pivot, put all item smaller than the pivot to the left and larger on the right)

// Explain the code
// Call Quick sort: Pass the array and pass left and right to the quickSort function. For the first call, left would be the index of the first element which is 0 and right would be the index of the last element which would be length -1.

// Select Pivot: We select pivot as the last index of the array.

// Call Partition function: After calculating the pivot, we send the pivot to the partition function. In the partition function we pass array, pivot index, left and right.

// partitionIndex: In the partition function, we move all the items smaller than the pivot value to the left and larger than pivot value to the right (rights are moved by default, bo actal action is taken for this steup. We have to keep track of the position of the partition (swap to index), so that we can split the array into two parts in the next step. This tracking of the index where we partition the array is done by using partitionIndex variable. 

// Swap function: This is just a helper function to swap values of the array.

// move elements: we start a for loop from the left, and if the values is smaller than the pivot values we swap it with the position of the partitionIndex and increase the value of the partitionIndex. If the value is bigger, we don't do anything. We keep going until the element before the last element (remember last element is the pivot)

// place pivot After moving all the smallest element to the left, we swap the last element (pivot value) with the partitionIndex. By doing this, the pivot sits where it suppose to sit when the full array is sorted. As all elements left to it smaller and all element right to it is bigger. End of the function partition, return the partitionIndex

// Repeat the process: Now come back to quickSort function. when you get the partitionIndex, apply quickSort for the left side of the array and right side of the array. keep doing it until left is smaller than right

function quickSort(array, left, right){ 
  if(left < right) { //the array section is at least 2 elements
    let pivot = right;
    let partitionIndex = partition(array, pivot, left, right);
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [2,6,1,5,]
console.log(quickSort(numbers, 0, numbers.length - 1));