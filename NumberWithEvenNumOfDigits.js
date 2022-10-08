// Input: nums = [12,345,2,6,7896];
// Input: nums = [555,901,482,1771];
 let evenNumberOfDigits = function(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        let digits = 0;

      
        while(array[i] >=  1) {
          
            array[i] = array[i]/10;
            digits++;
        }

        if(digits % 2 == 0) {
            count++;
        }
    }
    return count;
}
const arr1 = [12,345,2,6,7896];
const arr2 = [555,901,482,1771];
console.log(evenNumberOfDigits(arr1));
console.log(evenNumberOfDigits(arr2));