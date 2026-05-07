var reverseStr = function(s, k) {
    let arr = s.split("");
    for(let i = 0;i<s.length;i = i+(2*k)) {
        let n = k;
        let mid = Math.floor(n/2);
        for(let j = 0;j<mid;j++) {
            let temp = arr[i+j];
            arr[i+j] = arr[i+n-j-1];
            arr[i+n-j-1] = temp;
        }

    }
    return arr.join("");
};