var words = ["dog", "chicken", "lego", "javascript", "egg", "hi"];
var maxLength = 4;
var newArray = [];

for(var i=0; i<words.length;i++){
	if(words[i].length <= maxLength){
		newArray.push(words[i])
	}
}

console.log(newArray);