/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 var rand10 = function() {
    var a = (rand7()-1)*7+rand7();
     return a<=40?(a % 10 + 1) : rand10();
 };