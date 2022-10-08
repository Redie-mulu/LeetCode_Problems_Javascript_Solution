// Input: nums = [-4,-1,0,3,10]
// Input: nums = [-7,-3,2,3,11]
let  squaresOfSortedArray = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] =  nums[i] *  nums[i];
        
    }
    let j = nums.length - 1;
    let k = 0;
    let tempArray = [];
    let count = nums.length - 1;
    while(k <= j) {
        if(nums[k]> nums[j]){
            tempArray[count] = nums[k];
            k++;
        }
        else {
            tempArray[count] = nums[j];
            j--;
        }
        count--;
    }
    return tempArray;
}
let  squaresOfSortedArray2 = function(array) {  
}
const a = [-4,-1,0,3,10];
const b = [-7,-3,2,3,11];
console.log(squaresOfSortedArray(a));
console.log(squaresOfSortedArray(b));