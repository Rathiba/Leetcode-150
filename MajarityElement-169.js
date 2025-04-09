//HashMap Frequency counting method.
var majorityElement = function (nums) {
    let count = {};
    let n = nums.length / 2;
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > n) return num;
    }
};

let nums = [3, 3, 2];
let result = majorityElement(nums);
console.log("Majarity element",result);