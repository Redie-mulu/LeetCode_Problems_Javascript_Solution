// var search = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] == target) return i;
//     }
//     return -1;
// };

var search = function(nums, target) {
    let maxIndex = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i+1]) min = nums[i];
    }
    // bs
    let mid = min;
    if(nums[mid] == target) return mid;

};

let a = [4,5,6,7,0,1,2];
let a2 = [1];

console.log(search(a, 0));
console.log(search(a, 3));

// var privotedBinarySearch =  function(l arr, let n, let key )