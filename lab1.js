var inputString = "building";
var l = inputString.length;
var stringRev = "";
for (i=(l-1);i>=0;i--){
	stringRev = stringRev + inputString[i] + " "
}
console.log(stringRev);