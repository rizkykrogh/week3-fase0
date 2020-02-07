function angkaPalindrome(num) {
    var nextNum = num + 1;

    while (true) {
        var numStr = nextNum.toString();
        var reversedNumStr = '';
        for (var i = numStr.length - 1; i >= 0; i--) 
            {reversedNumStr += numStr[i];}
        if(reversedNumStr == nextNum) 
            {return nextNum;} 
        else {nextNum++;}
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); //9
console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(117)); //121
console.log(angkaPalindrome(175)); //181
console.log(angkaPalindrome(1000)); //1001