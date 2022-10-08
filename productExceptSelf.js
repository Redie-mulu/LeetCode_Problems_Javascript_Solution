var productExceptSelf = function(nums) {
    let newArray = [];
    let prefix = 1;
    let postfix = 1;
    
    for(let i = 0; i < nums.length; i++){
        
        newArray[i] = prefix
        prefix *= nums[i];
    }
    for(let i = nums.length-1; i >= 0; i--){
        
        newArray[i] *= postfix;
        postfix *= nums[i];
    }
    return newArray;
};

let arr = [1,2,3,4];
let arr2 = [-1,1,0,-3,3];
console.log(productExceptSelf(arr));
console.log(productExceptSelf(arr2));
