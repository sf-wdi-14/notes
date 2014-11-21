<<<<<<< HEAD
var uList = document.querySelector("ul");
var list = uList.getElementsByTagName('li');
var numbers = ["first", "second", "third", "fourth"];
for (var i = 0; i<= list.length; i++) {
	list[i].textContent = numbers[i];
}

=======
// write code here
document.querySelector("li").textContent = "first";
var li = document.querySelectorAll("li")[1];
li.textContent = "second";
>>>>>>> a86e4eff4569ff7e690ecc7d8f5df8430f92f6fc
