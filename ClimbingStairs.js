var climbStairs = function(n) {
    let result = 0;
    while(n>2){
        result += 2;
        n =Math.floor(n/2);
    }
    if(n == 2) result += 2;
    if(n == 1) result += 1;

    return result;
};

console.log(climbStairs(2));

// console.log(3%2);
// console.log(3/2);
console.log(climbStairs(3));