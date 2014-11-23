var colorMap = {
  1: "red",
  2: "yellow",
  3: "green"	
};

function addColor(id, color) {
	var svg = document.querySelector(id);
	svg.addEventListener('mouseover', function() {
    svg.setAttribute("fill", color);
  });

  svg.addEventListener('mouseout', function() {
    svg.setAttribute("fill", "white");
  });    
}

(function loopColorMap(colorMap) {
  var colorsLength = Object.keys(colorMap).length;

  for (var i = 1; i <= colorsLength; i++) {  
  	var id = ["#light", i].join("");
    var color = colorMap[i];
    addColor(id, color);
  }
})(colorMap);