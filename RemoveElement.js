
/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]/ */
let removeElement1 = function (array, val) {
    let j = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] != val) {
            array[j++] = array[i];
            count++;
            console.log(array[i]);
        }
    }
    for(let i = j; i < array.length; i++) {
        array[i] = 0;
    }
    console.log("This is the  number of counts of element ....." + count);
    return array;
}
const arr1 = [3,2,2,3];
console.log(removeElement1(arr1, 3));


// option 2
let removeElement2 = function(array1, val) {
    let count = 0;
    for(let i = 0; i < array1.length-1; i++) {
        if(array1[i] == val) {
            let temp = array1[i];
            array1[i] = array1[i+1];
            array1[i+1] = temp;
            count++;
        }
    }
    for(let i = count; i < array1.length; i++) {
        array1[i] = 0;
    }
    console.log("This is the  number of counts of element ..... opption two "  + count);
    console.log(array1);
    return count;
}
const arr2 = [3,2,2,3];
console.log(removeElement2(arr2, 3));