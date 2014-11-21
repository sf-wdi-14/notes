var uList = document.querySelector("ul");
var list = uList.getElementsByTagName('li');
var numbers = ["first", "second", "third", "fourth"];
for (var i = 0; i<= list.length; i++) {
	list[i].textContent = numbers[i];
}

