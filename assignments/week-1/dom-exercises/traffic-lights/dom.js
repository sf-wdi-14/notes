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