/* main function area*/
var testmanager = {
    'ie_symbols' : ie_symbols,
    'ie_functionStar' :testFunc
}

//!========================
var NAME = 'ie_functionStar'
//!========================
testmanager[NAME]();


//#region fucntion* & yield
/* Function* & yield
 * Function* is like a generator
 * look example
 */
function* goodGenerator(count){
    for(var a = 0;a<count;a++){
        yield a;
    }
}
function testFunc(){
    var Arr = goodGenerator(10);
    console.log(Arr.next().value);
    console.log(Arr.next().value);
    console.log(Arr.next().value);
    console.log(Arr.next().value);
}

//#endregion


//#region  Symbol
/* First to konw : Symbol
* Evrey symbol is Unique
* Can use description get the info of Symbol
* Use "Object.getOwnPropertySymbols()" instead for and foreach
*/
function ie_symbols(){
    const testList ={};
    const a = Symbol('int')
    const b = Symbol('str')
    console.log(typeof(a))
    console.log(a.description)
    
    testList[a] = 525
    testList[b] = "Ya"
    
    const objectSymbols = Object.getOwnPropertySymbols(testList)
    
    console.log(testList)
    console.log(testList[Symbol('int')])
    console.log(objectSymbols)
}

/* First to konw : Iterable  */
//#endregion

/* Iterable and Iterator */


