var insertStr = function(charL,lenL,charS,lenS){
    
    var strArr = [];
    if(lenL+lenS<4){
        for(var count =0;count<lenL;count++){
            strArr.push(charL)
        }
        for(var count =0;count<lenS;count++){
            strArr.push(charS)
        }
        return strArr
    }
    var strArr = [];
    strArr.length = lenL
    strArr.fill(charL, 0, lenL);
    var bLess = lenS;
    console.log(strArr)
    if(Math.ceil(lenL/2)>lenS){
        for(var count = lenL-2;count>0; count-=2){
            strArr.splice(count,0,charS)
        }
    }else{
        for(var count = lenL-2;count>=0; count-=2){
            if(bLess>=2){
                strArr.splice(count,0,charS+charS)
                bLess-=2
            }else{
                strArr.splice(count,0,charS)
                bLess-=1
            }
            if(bLess<=0){
                break
            }
        }    
    }
    
    /*
    for(var count = lenL-2;count>0; count-=2){
        strArr.splice(count,2,charS)
        bLess-=2
    }
    console.log(strArr)
    console.log(bLess)
    if(bLess>0){
        for(var count = (lenS+lenL-bLess-1);count>0; count-=3){
            strArr.splice(count,0,charS)
            bLess--
            if(bLess==0)break;
        }
    }
    if(bLess>0){
        strArr.push(charS)
    }*/
    return strArr
}


/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
 var strWithout3a3b = function(a, b) {
    
    var aLarB = a>b;
    var resArr ;
    /* according a more than b or b more than a */
    if(aLarB){
        resArr = insertStr('a',a,'b',b);   
    }else{
        resArr = insertStr('b',b,'a',a);
    }
    
    //console.log(resArr)
    return resArr.join('')
    
};



console.log(strWithout3a3b(2,5))


/*
Runtime: 80 ms, faster than 66.67% of JavaScript online submissions for String Without AAA or BBB.
Memory Usage: 38.6 MB, less than 75.76% of JavaScript online submissions for String Without AAA or BBB.*/