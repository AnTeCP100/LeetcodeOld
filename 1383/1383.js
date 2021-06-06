/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
 /*var maxPerformance = function(n, speed, efficiency, k) {
    let ord = Array.from({length: n}, (_,i) => i)
    ord.sort((a,b) => efficiency[b] - efficiency[a])
    console.log(ord)
    let sppq = new MinPriorityQueue(),
        totalSpeed = 0, best = 0
    for (let eng of ord) {
        sppq.enqueue(speed[eng])
        if (sppq.size() <= k) totalSpeed += BigInt(speed[eng])
        else totalSpeed += BigInt(speed[eng] - sppq.dequeue().element)
        let res = totalSpeed * BigInt(efficiency[eng])
        if (res > best) best = res
    }    
    return  best
};*/

const maxPerformance = (n, speed, efficiency, k) => {
    let workers = speed.map((val, ind) => ({ speed: val, efficiency: efficiency[ind] }));
    workers.sort((a, b) => b.efficiency - a.efficiency);
    let best = BigInt(0);
    let totalSpeed = 0;
    let currentTeam = new MinPriorityQueue({ priority: (worker) => worker.speed });
    for (let worker of workers) {
        if (currentTeam.size() === k) {
            const removed = currentTeam.dequeue();
            totalSpeed -= removed.element.speed;
        }
        currentTeam.enqueue(worker);
        const currentEfficiency = worker.efficiency;
        totalSpeed += worker.speed;
        const score = BigInt(totalSpeed) * BigInt(currentEfficiency);
        if (score > best) {
            best = score;
        }
    }
    return best % BigInt(1000000007);
};


//Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
//Output: 60
//Explanation: 
//We have the maximum performance of the team by selecting engineer 2 (with speed=10 and efficiency=4) and engineer 5 (with speed=5 and efficiency=7). That is, performance = (10 + 5) * min(4, 7) = 60.
//
//Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3
//Output: 68
//Explanation:
//This is the same example as the first but k = 3. We can select engineer 1, engineer 2 and engineer 5 to get the maximum performance of the team. That is, performance = (2 + 10 + 5) * min(5, 4, 7) = 68.
//
//
//Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4
//Output: 72

var n =6
var speed = [2,10,3,1,5,8]
var  eff = [5,4,3,9,7,2]
var k = 2

console.log(maxPerformance(n,speed,eff,k))

//Runtime: 284 ms, faster than 100.00% of JavaScript online submissions for Maximum Performance of a Team.
//Memory Usage: 63.7 MB, less than 50.00% of JavaScript online submissions for Maximum Performance of a Team.