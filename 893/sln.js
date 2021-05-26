/**
 * @param {string[]} words
 * @return {number}
 */

 
var numSpecialEquivGroups = function(words) {
    var resultArr = []
    words.forEach(Element=>{
        var evenSringArr =[], oddStringArr = []
        var evenString ="",oddString="";

        //oddstring Arr and evenString Arr and sort by english
        for(i=0;i<(Element.length);i++)
        {
            if(i%2==0)evenSringArr.push(Element[i]);
            else oddStringArr.push(Element[i]);
        }
        
        evenSringArr.sort();
        oddStringArr.sort();
        
        //make a new string even at first nad second is odd
        evenSringArr.forEach(char=>{
            evenString+=char;
        });    
        oddStringArr.forEach(char=>{
            oddString+=char;
        });
        
        var addString=evenString+oddString;
        //push to result
        resultArr.push(addString)
    })    
    //console.log("result : ",resultArr);
    //clean the same string
    resultArr = resultArr.filter((Element,index)=>resultArr.indexOf(Element)===index);
    return resultArr.length;

}

words =["abacsed","b","c","a","c","c"]

console.log(numSpecialEquivGroups(words));