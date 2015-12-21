function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var canvas_size = 1000;
  var precision = 50;
  var element_size = canvas_size/precision;
  var color_precision = 255/precision;
  for (var i=0;i<precision;i++){
    for (var j=0;j<precision;j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255-color_precision*i) + ',' +
                       Math.floor(255-color_precision*j) + ',0)';
      ctx.fillRect(j*element_size,i*element_size,element_size,element_size);
    }
  }
}draw();
