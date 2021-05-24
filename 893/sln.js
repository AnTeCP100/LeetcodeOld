/**
 * @param {string[]} words
 * @return {number}
 */

 
var numSpecialEquivGroups = function(words) {
    var result = [];
    words.forEach(Element =>{
        var oddString=[],evenString=[];
        for( i =0;i<Element.length;i++){
            if(i%2==0) evenString.push(Element[i])
            else oddString.push(Element[i]);
        }
        oddString.sort();
        evenString.sort();
        console.log("A ",oddString);
        console.log("B ",evenString);
        result=oddString.concat(evenString);
        result=result.filter((value,index)=> result.indexOf(value)===index);
        console.log("C ",result);

    })
    return result.length;
};

words =["a","b","c","a","c","c"]

console.log(numSpecialEquivGroups(words));