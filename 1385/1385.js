/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    return arr1.reduce((res, curr) => {
        for(const num of arr2) {
            if(Math.abs(curr - num) <= d) return res;
        }
        return res + 1;
    }, 0);
};
ㄌ

arr1=[2,1,100,3]
arr2=[-5,-2,10,-3,7]
d=6
console.log(findTheDistanceValue(arr1,arr2,d))