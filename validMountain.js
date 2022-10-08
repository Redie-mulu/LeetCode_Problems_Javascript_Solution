/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]*/ 
var validMountainArray = function(arr) {
    if(arr.length < 3) return false;
    // get the maximum element 
    let maxElement = arr[0];
    let maxIndex = 0;
    for(let i = 0; i < arr.length; i++) {
        if(maxElement < arr[i]) {
            maxElement = arr[i];
            maxIndex = i;
        }
    }
    if(maxElement == arr[0] || maxElement == arr[arr.length -1]) return false;
    // console.log(maxIndex);
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i] +'+' + arr[i+1]);
        if((arr[i] > arr[i+1])&& (i < maxIndex)) return false;
        if((arr[i] < arr[i+1]) && (i > maxIndex)) return false;
    }
    return true;
};
let a1 = [2,1];
let a2 = [0,3,2,1];
let a3 = [3,5,5];
let a4 = [1,7,9,5,4,1,2];


console.log(validMountainArray(a1));
console.log(validMountainArray(a2));
console.log(validMountainArray(a3));
console.log(validMountainArray(a4));