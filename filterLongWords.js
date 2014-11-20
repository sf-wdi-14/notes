var wordAry = ["smile", "cat", "process", "indecision", "protagonists"]
var maxLength = 0;
var newWordAry = [];
for (i=0;i<wordAry.length;i++)  {
	if (wordAry[i].length > maxLength) {
		maxLength = wordAry[i].length;
	}
}
for (i=0;i<wordAry.length;i++)  {
	if (wordAry[i].length < maxLength) {
		newWordAry.push(wordAry[i]);
	}
}
console.log(wordAry);
console.log(newWordAry);