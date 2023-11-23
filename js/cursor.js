const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
"#000000",
"#1c0d12",
"#1c0d12", 
"#2e141d",
"#2e141d",
"#421828",
"#571d33",
"#6d203f", 
"#6d203f",
"#83234b", 
"#83234b",
"#9a2558",
"#9a2558", 
"#b22765",
"#b22765", 
"#cb2872", 
"#cb2872",
"#e4297f", 
"#e4297f",
"#fd288d",
"#fd288d",
"#fd288d",
"#fd288d"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();