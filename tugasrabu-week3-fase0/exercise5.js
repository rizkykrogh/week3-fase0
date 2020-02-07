function palindrome(kata) {
    // you can only write your code here!
    var iniDibalikini = kata.length / 2;
    for(var i = 0; i < iniDibalikini; i++) {
        if (kata[i] != kata[kata.length - i - 1])
        return false;
    }
    return true;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false