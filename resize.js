
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

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

      paint();
}

