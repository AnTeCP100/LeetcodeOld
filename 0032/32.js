/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var res = 0;
    var stack=[];
    for(var i = 0 ; i < s.length ; i++) {
        /*一個一個輸入解決掉成對的 在STACK中就是不成對的*/
        if(s[i] == '(') stack.push(i);
        else {
            if(!stack.length==0 && s[stack[stack.length-1]] == '(') 
            {
                stack.pop();
                res = Math.max(res, i - (stack.length==0 ? -1 : stack[stack.length-1]));
            } else stack.push(i);    
        }
        console.log(stack);
        console.log(res);

    }
    return res;
};
//int longestValidParentheses(string s) {
//        
//    int res = 0;
//    stack<int> st;
//    
//    for(int i = 0 ; i < s.length() ; i++) {
//        
//        if(s[i] == '(') st.push(i);
//        else {
//            if(!st.empty() && s[st.top()] == '(') {
//                st.pop();
//                res = max(res, i - (st.empty() ? -1 : st.top()));
//            } else st.push(i);    
//        }
//    }
//    return res;
//}




//Input: s = "(()"
//Output: 2
//Explanation: The longest valid parentheses substring is "()".
//
//Input: s = ")()())"
//Output: 4
//Explanation: The longest valid parentheses substring is "()()".
//
//Input: s = ""
//Output: 0

var s = ")())())";
var a = "()(()"
console.log(longestValidParentheses(s));