let sumFound = function (array, z) {
    let tempArray = {};
    let k = 0;
    for(let i = 0; i < array.length; i++) {
        tempArray[z -array[i]] = true;
    }
    for(let i = 0; i < array.length; i++) {
        if(tempArray[array[i]]){
            return true;
        }
    }
    return false;
}
let array = [1,4,2,3];
let array1 = [1,4,2,3];
console.log(sumFound(array, 5));
console.log(sumFound(array, 100));

