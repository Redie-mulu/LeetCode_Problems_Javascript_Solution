var mergeSort = function(arr) {
    // base case
    if(arr.length <= 1) return arr;
    // find the mid-index, to separate the two arrays
    let mid;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == ';') mid = i;
    }

    // creat two arrays
    let leftArray = partition(arr, 0, mid);
    let rightArray = partition(arr, mid+1, arr.length);
   // merge 
    return(merg(leftArray, rightArray));

}
// partition the array in to part using ";""
var partition = function(arr, start, end){
    let partArray = [];
    
    for(let i = start; i < end; i++) {
        partArray[i - start] = arr[i];
    }
    return partArray;
}
var merg = function(arr1, arr2) {
    // creat a new array to store sorted array
    var sortedArray = [];
    var list = {};
    let leta = ''

    let k = 0; j = 0; counter = 0;

    while(k < arr1.length && j < arr2.length) {
        
        
        if(arr1[k] < arr2[j]) {
            leta = '(' + arr1[k] + ',' + arr2[j] + ')'
            list[counter] = [leta];
            sortedArray[counter++] = arr1[k++];
            leta=""
        }
        else {
            leta = '(' + arr1[k] + ',' + arr2[j] + ')';
            list[counter] = [leta];
            sortedArray[counter++] = arr2[j++];
            leta=""
            
        }
    }
    while(k < arr1.length){
        sortedArray[counter++] = arr1[k++];
    }
    while(j < arr2.length) {
        sortedArray[counter++] = arr2[j++];
    }
    // console.log(sortedArray);

    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
    console.log(list);

    return sortedArray;
    }
    let array = [1,4,7,8,";",2, 3, 5, 6]
    console.log(mergeSort(array));

