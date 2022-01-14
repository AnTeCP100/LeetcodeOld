
var MyQueue = function() {
    this.NewArr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.NewArr.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.NewArr.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return  this.NewArr[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.NewArr.length>0?false:true;
};

//Runtime: 76 ms, faster than 48.79% of JavaScript online submissions for Implement Queue using Stacks.
//Memory Usage: 38.5 MB, less than 16.50% of JavaScript online submissions for Implement Queue using Stacks.