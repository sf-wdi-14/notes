<<<<<<< HEAD
document.querySelector("#light1").addEventListener("mouseover", function() {
	document.querySelector("#light1").style.fill = "red";
});
document.querySelector("#light1").addEventListener("mouseout", function() {
	document.querySelector("#light1").style.fill = "white";
});

document.querySelector("#light2").addEventListener("mouseover", function() {
	document.querySelector("#light2").style.fill = "yellow";
});
document.querySelector("#light2").addEventListener("mouseout", function() {
	document.querySelector("#light2").style.fill = "white";
});

document.querySelector("#light3").addEventListener("mouseover", function() {
	document.querySelector("#light3").style.fill = "green";
});
document.querySelector("#light3").addEventListener("mouseout", function() {
	document.querySelector("#light3").style.fill = "white";
});


// My Solution, Very Verbose

// var light1 = document.getElementById("light1");
// var light2 = document.getElementById("light2");
// var light3 = document.getElementById("light3");

// light1.addEventListener("mouseover", function(){
//     document.getElementById("light1").style.fill = "green";
// });
// light1.addEventListener("mouseout", function(){
//     document.getElementById("light1").style.fill = "white";
// });

// light2.addEventListener("mouseover", function(){
//     document.getElementById("light2").style.fill = "yellow";
// });
// light2.addEventListener("mouseout", function(){
//     document.getElementById("light2").style.fill = "white";
// });

// light3.addEventListener("mouseover", function(){
//     document.getElementById("light3").style.fill = "red";
// });
// light3.addEventListener("mouseout", function(){
//     document.getElementById("light3").style.fill = "white";
// });
=======
// Event Listeners for First Light (Red Light)
document.querySelector('#light1').addEventListener('mouseover', function() {
  document.querySelector('#light1').setAttribute("fill", "red");
});

document.querySelector('#light1').addEventListener('mouseout', function() {
  document.querySelector('#light1').setAttribute("fill", "white");
});

// Event Listeners for First Light (Yellow Light)
document.querySelector('#light2').addEventListener('mouseover', function() {
  document.querySelector('#light2').setAttribute("fill", "yellow");
});

document.querySelector('#light2').addEventListener('mouseout', function() {
  document.querySelector('#light2').setAttribute("fill", "white");
});

// Event Listeners for First Light (Green Light)
document.querySelector('#light3').addEventListener('mouseover', function() {
  document.querySelector('#light3').setAttribute("fill", "green");
});

document.querySelector('#light3').addEventListener('mouseout', function() {
  document.querySelector('#light3').setAttribute("fill", "white");
});
>>>>>>> a86e4eff4569ff7e690ecc7d8f5df8430f92f6fc
