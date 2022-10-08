var runningSum = function(nums) {
    let sum = 0;
    for(let i = 1; i < nums.length;i++) {
        
        nums[i] += nums[i-1];
    }
    return nums;
};
let arr1 = [1,2,3,4];
let arr2 = [1,1,1,1,1];
console.log(runningSum(arr1));
console.log(runningSum(arr2));