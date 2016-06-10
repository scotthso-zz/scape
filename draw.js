

function paint() {

      //Mountain 1
      ctx.beginPath();
	ctx.moveTo(cw, ch-340);
      ctx.quadraticCurveTo(cw-200, 150, cw-300, 222);
      ctx.quadraticCurveTo(cw-600, ch-195, cw-685, ch-195);
      ctx.lineTo(cw, ch-195);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#709A7D';
      ctx.fillStyle = '#709A7D';    
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
};




//    paint();
