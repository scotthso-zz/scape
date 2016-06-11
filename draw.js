var points = [];
//var displacement = 50;
var roughness = 0.50;
var pointsSize = Math.pow(2, Math.ceil(Math.log(canvas.width) / (Math.log(2))));
console.log(pointsSize);

function fractal(origin, end, displacement) {
      points[0] = origin + (Math.random() * displacement * 2) - displacement;
      points[pointsSize] = end + (Math.random() * 2) - displacement;
      
      for (var i = 1; i < pointsSize; i*=2) {
            //Calculate Midpoint of each segment
            for (var j = (pointsSize/i)/2; j < pointsSize; j+=(pointsSize/i)) {
                  points[j] = (((points[j - (pointsSize/i)/2] + points[j + (pointsSize/i)/2])/2) + (Math.random() * displacement *2));
            }
            displacement *= roughness;

      }
      return points;
}



function paint() {



//Mountain 3
fractal(canvas.height/2, canvas.height/2, 150);
ctx.beginPath();
ctx.moveTo(0, points[0]);
for (var t = 1; t < points.length; t+=30) {
    ctx.lineTo(t, points[t]);
}
ctx.lineTo(canvas.width, canvas.height);
ctx.lineTo(0, canvas.height);
ctx.fillStyle = '#305454';    
ctx.fill();
ctx.closePath();

//Mountain 2
fractal(canvas.height/2+100, canvas.height/2+150, 120);
ctx.beginPath();
ctx.moveTo(0, points[0]);

for (var t = 1; t < points.length; t+=50) {
    ctx.lineTo(t, points[t]);
}
ctx.lineTo(canvas.width, canvas.height);
ctx.lineTo(0, canvas.height);
ctx.fillStyle = '#0F3434';    
ctx.fill();
ctx.closePath();

//Mountain 1
fractal(canvas.height-100, canvas.height/2, 80);
ctx.beginPath();
ctx.moveTo(0, points[0]);
for (var t = 1; t < points.length; t+=50) {
    ctx.lineTo(t, points[t]);
}
ctx.lineTo(canvas.width, canvas.height);
ctx.lineTo(0, canvas.height);
ctx.fillStyle = '#052323';    
ctx.fill();
ctx.closePath();


};




    paint();
