let duplicateZeros = function(array) {
    let temp = [array.length];
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        temp[count] = array[i];
        if(array[i] == 0 && count < array.length) {
            temp[count + 1] = 0;
            count ++;
        }
       
        count++;
    }
    return temp;
}
const arr1 = [1,0,2,3,0,4,5,0];
const arr2 = [1,2,3];

console.log(duplicateZeros(arr1));
console.log(duplicateZeros(arr2));


let duplicateZeros2 = function(array) {
    let temp;
    for(let i = 0; i < array.length; i++) {
        if(array[i] == 0 ) {
           temp = a[i+1];
           a[i+1] = 0;

        }
        
        let temp1= array[i+2];
           array[i+2] = temp;
           temp = array[i+2];

    }
}