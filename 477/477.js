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


var totalHammingDistance_fail = function(nums) {
    //two error more than nine and too log will broke
    var count = nums.length;
    var bitStrArr = [];
    var bitCountArr = [];
    var ret = 0;

    //change to byte
    nums.forEach(element => {
        bitStrArr.push(element.toString(2));
    });
    console.log(bitStrArr)

    //transform digti and reverse the number 
    //foreach in arr  
    //split the bit string 
    //then covert to number and add to bitArr sam location if bitArr not exist add to new array
    //14 = "1110" => [1,1,1,0]
    //bitStrBigArr = [0,0,0,0]
    //             + [0,1,1,1]

    bitStrArr.forEach(element=>{
        //split the bit string 
        var cur_bit_string_arr = element.split('');
        
        
        //covert to int and add to bitCountArr
        for(var i = cur_bit_string_arr.length-1;i>=0;i--)
        {
            //count now bitCountArr pos
            var pos = cur_bit_string_arr.length-1-i;

            console.log(cur_bit_string_arr[i])
            //check or init bitCountArr[i]
            if(bitCountArr[pos]==undefined)
            {
                bitCountArr[pos]=0;
            }
            bitCountArr[pos]+=parseInt(cur_bit_string_arr[i]);         
        }
    })
    console.log(bitCountArr)

    //C(count,2)
    var total_count = (count*(count-1))/2;

    //count every digital
    bitCountArr.forEach(e=>{
        if(e!=0 && e<count)
        {
            ret+=(total_count- (e*(e-1))/2 - ((count-e)*(count-e-1))/2)
        }
    })
    return ret
};


var nums = [4,14,2]
console.log(totalHammingDistance(nums))


