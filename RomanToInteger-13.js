var romanToInt = function(s) {
    let roman = {
I:1,
V:5,
X:10,
L:50,
C:100,
D:500,
M:1000

    }
    let result=[];
    let output=[];
    for (let i = 0; i < s.length; i++){
        let element=s[i]
        if(roman.hasOwnProperty(element)){
result.push(roman[element]);
        }
    }
    let n=result.length-1;
    let m = n - 1;
    while (n >= 0) {
        
        if (result[n] > result[m]) {
            output.push(result[n] - result[m]);
            n = n - 2;
            m=n-1
        } else {
            output.push(result[n]);
            n = n - 1;
            m = n - 1;
        }
    }
    return output.reduce((acc,current)=>acc+current,0);
};
let s = "LVIII";
let output = romanToInt(s);
console.log(output);