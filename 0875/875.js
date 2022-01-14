/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    var k = Math.max(...piles);
    if(h == piles.length) {
        return k;
    } 
    var start = 1,
        end = k,
        mid,
        speed = 0;

    while(start < end) {
        speed = 0;
        mid = start + Math.floor((end - start) / 2);
        
        for(let idx = 0; idx < piles.length; ++idx) {
            speed += Math.ceil(piles[idx] / mid);   
        }
        
        if(speed <= h) {
            k = Math.min(k, mid);
            end = mid;
        } else if(speed > h) {  // k value should be bigger
            start = mid + 1;
        }
    }
    return k;
    
};

//Input: piles = [3,6,7,11], h = 8
//Output: 4
//
//Input: piles = [30,11,23,4,20], h = 5
//Output: 30
//
//Input: piles = [30,11,23,4,20], h = 6
//Output: 23

var piles = [30,11,23,4,20], h = 6

console.log(minEatingSpeed(piles,h))

//Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Koko Eating Bananas.
//Memory Usage: 42.7 MB, less than 14.10% of JavaScript online submissions for Koko Eating Bananas.