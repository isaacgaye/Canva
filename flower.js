// Variaables
var x_origin = 500;
var y_origin = 500;
var flower_size = 10;
var flower_radius = 50;

//Random test
Math.random();
Math.random();


// Flower 1
// Set up!
var a_canvas = document.getElementById("canvas");
var ctx = a_canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(95, 90, 26, 0, 2*Math.PI, true);
ctx.fill();

/*
function flower() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i=0;i<6;i++){
    for (var j=0;j<6;j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                       Math.floor(255-42.5*j) + ',0)';
      ctx.fillRect(j*25,i*25,25,25);
    }
  }
} flower();

*/
