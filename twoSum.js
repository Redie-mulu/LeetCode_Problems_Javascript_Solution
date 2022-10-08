let sumTwo = function(arr, z) {
    let tempArray = {};
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        tempArray[z-arr[i]] = i;
    }
    for(let i = 0; i < arr.length; i++) {
        if(tempArray[arr[i]] && i != tempArray[arr[i]]){
            result.push(i);
            result.push(tempArray[arr[i]]);
        
            return result;
        }
    }
    
}
var twoSum = function(nums, target) {
    let tempArray = {};
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        tempArray[target-nums[i]] = i;
    }
    for(let i = 0; i < nums.length; i++) {
        if(tempArray[nums[i]] && i != tempArray[nums[i]]){
            result.push(i);
            result.push(tempArray[nums[i]]);
        
            return result;
        }
    }
};
let array = [2,7,11,15];
let array2 = [3,2,4];
let array3 = [1,3,4,2];
console.log("HI");
console.log(sumTwo(array, 9));
console.log(sumTwo(array2, 6));
console.log(sumTwo(array3, 6));