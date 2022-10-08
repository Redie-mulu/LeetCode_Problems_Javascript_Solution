var pivotIndex = function(nums) {
    let sumRight = 0;
    let sumLeft = 0;
    for(let i = 0; i < nums.length; i++) {
        sumRight += nums[i];
    }
    console.log(sumRight);
    for(let i = 0; i < nums.length; i++) {
        sumRight -= nums[i];
        if(sumRight == sumLeft) return i;
        sumLeft += nums[i];
        
    }
    return -1;

};

let arr = [1,7,3,6,5,6];

console.log(pivotIndex(arr));