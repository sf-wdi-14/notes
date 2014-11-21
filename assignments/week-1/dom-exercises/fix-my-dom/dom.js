<<<<<<< HEAD
// write code here
document.querySelect("li").textContent = "first";

var li = document.querySelectorAll("li")[1]
li.textContent = "second";

var li = document.querySelectorAll("li")[3]
li.textContent = "fourth";
=======
var uList = document.querySelector("ul");
var list = uList.getElementsByTagName('li');
var numbers = ["first", "second", "third", "fourth"];
for (var i = 0; i<= list.length; i++) {
	list[i].textContent = numbers[i];
}
>>>>>>> c86e920d2c604dce1b99f27d8b29c9e9259f77ae
