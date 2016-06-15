
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var c2= document.getElementById("canvas-star");
var ctx2 = c2.getContext("2d");

initialize();
 
function initialize() {
      window.addEventListener('resize', resizeCanvas, false);
      resizeCanvas();
}

function resizeCanvas() {
      cw = window.innerWidth;
      ch = window.innerHeight;

      canvas.width = cw;
      canvas.height = ch;

      c2.width= cw;
      c2.height= ch;

      paint();
}

