var lengthOfLastWord = function (s) {
    let sArray = s.split(' ').filter(word => word !== '');
    let n = sArray.length - 1;
    return sArray[n].length;
};
let s = " Hi,  How  are you "
let result = lengthOfLastWord(s);
console.log(result);