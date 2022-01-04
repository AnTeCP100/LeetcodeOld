/**
 * @param {number[]} nums
 * @return {number}
 */
 var totalHammingDistance_fail = function(nums) {
    //two error more than nine and too log will broke
    var count = nums.length;
    var total = 0;
    var arr = [];
    var ret = 0;

    //change to byte
    nums.forEach(element => {
        arr.push(parseInt(element.toString(2)));
    });
    //console.log(arr)

    //sum
    arr.forEach(element => {
        total +=element;
    });
    console.log(total)
    //change to arr
    let changeToDigit = num => Number(num);
    var intArr = Array.from(String(total), changeToDigit);
    console.log(intArr)


    //C(count,2)
    var total_count = (count*(count-1))/2;

    //count every digital
    intArr.forEach(e=>{
        if(e!=0 && e<count)
        {
            ret+=(total_count- (e*(e-1))/2 - ((count-e)*(count-e-1))/2)
        }
    })
    return ret
};


var totalHammingDistance = function(nums) {
    //two error more than nine and too log will broke
    var count = nums.length;
    var total = 0;
    var bitStrArr = [];
    var bitStrBigArr = [];
    var ret = 0;

    //change to byte
    nums.forEach(element => {
        bitStrArr.push(element.toString(2));
    });
    //console.log(arr)

    //transform digti and reverse the number 
    //foreach in arr  
    //split the bit string 
    //then covert to number and add to bitArr sam location if bitArr not exist add to new array
    //14 = "1110" => [1,1,1,0]
    //bitArr = [0,0,0,0]
    //       + [0,1,1,1]


    //C(count,2)
    var total_count = (count*(count-1))/2;

    //count every digital
    bitArr.forEach(e=>{
        if(e!=0 && e<count)
        {
            ret+=(total_count- (e*(e-1))/2 - ((count-e)*(count-e-1))/2)
        }
    })
    return ret
};

var nums = [4,14,4,14]
console.log(totalHammingDistance(nums))


