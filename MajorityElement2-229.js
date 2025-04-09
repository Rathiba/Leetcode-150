var majorityElement = function(nums) {
    let count = {};
    let n = nums.length/3;
    let result =[];
    for(let num of nums){
        count[num]=(count[num]||0)+1
            }
            for(let num in count){
                if(count[num]>n){
                    result.push(parseInt(num));
                }
            }
            return result;
};
let nums = [1, 2];
let result = majorityElement(nums);
console.log(result);
