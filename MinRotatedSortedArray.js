//loop throught the array and find the min value this will take O(n) running time 
// O(1) space
var findMin = function(nums) {
    
    let j = 1;
    let min = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < min) min = nums[i];
    }
    return min;
};
// since the input is sorted rotated array we can use binary search this will 
// take O(log n) running time it is much faster than the first solution
// and ths  O(1) space
var findMin2 = function(nums) {
    // find the rotation index of the array
    let maxIndex = nums[0];

    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] > nums[i+1]) {
            maxIndex = nums[i+1];
            return maxIndex;
        }
    }
    
    return maxIndex;
};

let arr = [3,4,5,1,2];
let arr2 = [4,5,6,7,0,1,2];
let arr3 = [11,13,15,17];

// console.log(findMin(arr));
// console.log(findMin(arr2));
// console.log(findMin(arr3));


console.log(findMin2(arr));
console.log(findMin2(arr2));
console.log(findMin2(arr3));