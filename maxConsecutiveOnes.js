function maxConsecutiveOnes(nums) {
    let maxcount = 0;
    let currentCount = 0;
    for (let i = 0; i < nums.lenght; i++) {
        if (nums[i] == 1) {
            currentCount++
            if (currentCount > maxcount) maxcount = currentCount;
        }
        else {
            currentCount = 0;
        }
    }
    return maxcount;
}
var n = [1, 1, 0, 1, 1, 1];
maxConsecutiveOnes(n);
