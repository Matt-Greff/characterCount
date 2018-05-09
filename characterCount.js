
function countLetters(str){
    var str = str.split(' ').join('').toLowerCase();
    var output = {}
    for(var i = 0; i < str.length; i++){
        var x = output[str[i]]
        x? x.push(i): x = [i];
        output[str[i]] = x;
    }
    return output;
}
console.log(countLetters('lighthouse in the house'));