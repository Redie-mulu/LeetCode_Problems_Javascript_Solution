var maxProduct = function(nums) {
    let currentMax = 1;
    let currentMin = 1;
    let maxProduct= nums[0];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > maxProduct)
        maxProduct = nums[i];
    } 
    for(let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if(n == 0 ) {
            currentMax = 1;
            currentMin = 1;
           
        }
        
        let temp = currentMax * n;
        // currentMin *= nums[i];
       
        // currentMax *= nums[i];
        
       
        currentMax = Math.max(currentMax * n, currentMin * n, n);
        currentMin = Math.min(temp, currentMin * n , n);
        maxProduct = Math.max(maxProduct, currentMax);
    }
    return maxProduct; 

};

// console.log(Math.max(1,2,3));
let arr1 = [2,3,-2,4];
let arr2 = [-2,0,-1];
let arr3 = [0,2];
let arr4 = [-3,-1,-1];
let arr5 = [-2,3,-4];

console.log(maxProduct(arr1));
console.log(maxProduct(arr2));
console.log(maxProduct(arr3));
console.log(maxProduct(arr4));
console.log(maxProduct(arr5));