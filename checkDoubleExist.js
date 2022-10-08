var checkIfExist = function (arr) {
    let tempObj = {};
    let zeros = 0;
    for (let i = 0; i < arr.length; i++) {
            let key = arr[i] * 2;
            tempObj[key] = true;
        
    }
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == 0) zeros++;
      if (tempObj[arr[i]] == true && (zeros >= 2 ||  zeros == 0)) return true;
    }
    return false;
};

let ar1 = [10, 2, 5, 3]; 
let ar2 = [7, 1, 14, 11];
let ar3 = [3, 1, 7, 11];
let ar4 = [-2, 0, 10, -19, 4, 6, -8];
console.log(checkIfExist(ar1));
console.log(checkIfExist(ar2));
console.log(checkIfExist(ar3));
console.log(checkIfExist(ar4));