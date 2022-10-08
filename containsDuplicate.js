var containsDuplicate = function(nums) {
    let temp = {};
    for(let i = 0; i < nums.length; i++) {
       if(temp[nums[i]]) {
        console.log(nums[i]);
        return true;
       }
        else temp[nums[i]] = true;
    }
    return false
};
let arr = [1,2,3,1];
let arr2 = [1,2,3,4];
let arr3 = [1,1,1,3,3,4,3,2,4,2];

console.log(containsDuplicate(arr));
console.log(containsDuplicate(arr2));
console.log(containsDuplicate(arr3));