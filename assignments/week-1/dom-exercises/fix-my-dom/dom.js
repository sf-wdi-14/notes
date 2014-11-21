// write code here
/*
document.querySelector("li").textContent = "first";



li2 = document.querySelectorAll("li")[1];
li2.textContent ="second"

//allLI[0].
//document.querySelector(allLI[1]).textContent = "second"
var h1 = document.querySelector('h1');

var myFunction = function() {
		console.log("You clicked me");
};

h1.addEventListener("click",myFunction);

h1.removeEventListener("click",myFunction);
*/


document.querySelectorAll("#light1").addeEventListener("mouseover",function() {
	document.querySelector("#light1").setAttribute("fill","red")
})
document.querySelectorAll("#light1").addeEventListener("mouseout",function() {
	document.querySelector("#light1").setAttribute("fill","white")
})
	