function balikString (inputStr) {
    var result = '';
    for(var i = inputStr.length - 1; i >= 0; i--) {
        result += inputStr[i];
    }
    return result;
}
console.log(stringKebalik('hello world!'));

//input "hello world!"
//output "!dlrow olleh"