// Variaables
var x_origin = 500;
var y_origin = 500;
var flower_size = 5;
var flower_radius = 50;

//Random test
var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);
var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';


// Set up!
var a_canvas = document.getElementById("canvas");
var ctx = a_canvas.getContext("2d");
ctx.fillStyle = rgb;
ctx.beginPath();

// Flower 0
ctx.arc(x_origin, y_origin, flower_size, 0, 2*Math.PI);
ctx.fill();



// Flower 1
var petals = 24;
 function flower() {
  for (var i=0;i<petals;i++){
        var x_i = Math.cos(2*Math.PI/petals*i);
        var y_i = Math.sin(2*Math.PI/petals*i);
        var wind = 1 - 2 * Math.random();

        ctx.arc(x_origin  + x_i * flower_radius + wind , y_origin + y_i  * flower_radius + wind, flower_size, 0, 2*Math.PI);
        ctx.fill();
    }
  } flower();


/*
var ir = 2*PI;
var x_i = Math.cos(ir);
var y_i = Math.sin(ir);
var wind = 1 - 2 * Math.random();
ctx.arc(x_origin, y_origin, flower_size, 0, 2*Math.PI);
ctx.fill();
*/

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
