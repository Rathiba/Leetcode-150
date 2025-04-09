var majorityElement = function (nums) {
    let assign = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length;i++) {
        if (nums[i] === assign) {
            count++;
        }
        else count--;
        if (count === 0) {
            assign = nums[i];
            count = 1;
        }
    }
    return assign;
};
//Here we assume max count correspond to output
//Question itself say there must be single output.
let nums = [3, 3, 2];
let result = majorityElement(nums);
console.log("Majarity element",result);