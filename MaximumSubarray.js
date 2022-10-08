
var maxSubArray = function(nums) {
    let maxsub = nums[0];
    curSum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(curSum < 0) curSum = 0;
        curSum += nums[i];
   
        if(maxsub> curSum) maxsub = maxsub;
        else maxsub = curSum;
    }
    return maxsub;
};

let arr1 = [-2,1,-3,4,-1,2,1,-5,4];
let arr2 = [1];
let arr3 = [5,4,-1,7,8];

console.log(maxSubArray(arr1));

console.log(Math.max(1,3));