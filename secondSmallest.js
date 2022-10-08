let secondSmallest = function(array) {
    let max;
    let min;
    let second;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > max ){
            max = array[i];
        }
    }
    for(let i = 0; i < array.length; i++) {
        if(array[i] < min ){
            min = array[i];
        }
    }
    for(let i = 0; i < array.length; i++) {
        if(array[i] < max && array[i] != 0){
            second = array[i];
        }
    }
    return second;
}
let secondSmallest2 = function(array) {
    let tempArray = {};
    for(let i = 0; i < array.length; i++) {
        tempArray[array[i]]= true;
    }

    
}
let arr = [1,4,2,3];