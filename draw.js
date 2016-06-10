

function paint() {

       //Mountain 2
      ctx.beginPath();
      ctx.moveTo(0, ch*.7);
      ctx.lineTo(cw*.2, ch*.65);
      ctx.lineTo(cw*.4, ch*.7);
      ctx.lineTo(cw*.6, ch*.55);
      ctx.lineTo(cw*.8, ch*.7);
      ctx.lineTo(cw, ch);
      ctx.lineTo(0,ch);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#98B6A1';
      ctx.fillStyle = '#98B6A1';    
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
      //Mountain 1
      ctx.beginPath();
	ctx.moveTo(cw, ch*.8);
      ctx.lineTo(cw*.8, ch*.4);
      ctx.lineTo(cw*.6, ch);
      ctx.lineTo(cw, ch);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#709A7D';
      ctx.fillStyle = '#709A7D';    
      ctx.fill();
      ctx.stroke();
      ctx.closePath();


};




//    paint();
