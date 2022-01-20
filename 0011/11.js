/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    //(1),8,6,2,5,4,8,3,(7)
    //1,(8),6,2,5,4,8,3,(7)
    //1,(8),6,2,5,4,8,(3),7
    //1,(8),6,2,5,4,(8),3,7
    var left_idx = 0
    var right_idx = height.length-1
    var ret = 0;

    while(left_idx<right_idx)
    {        
        //find the current base number
        var base = Math.min(height[left_idx],height[right_idx])

        //calculate the area
        var cur_area = base*(right_idx-left_idx)

        //update the result
        ret = Math.max(cur_area, ret)

        //move left or right position
        if(height[left_idx]<height[right_idx])
            left_idx++
        else
            right_idx--
    }
    return ret;
};


var height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))