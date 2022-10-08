var merge = function (nums1, m, nums2, n) {
    let j = m;
    let i = n;
    let k = m+n-1;
    while (k >= m) {
        if (nums2[i] > nums1[j]) {
            nums1[k] = nums2[i];
            k--;
            i--;
        }
        else if (nums2[i] < nums1[j]) {
            nums1[k] = nums1[j];
            k--;
            j--
        }
        else {
            nums1[k] = nums1[j];
            k--;
            j--
        }
    
    }
    return nums1;
};
const n = [1,2,3,0,0,0];
const m = [2,5,6];
console.log(merge(n,3,m,3));