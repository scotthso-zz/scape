var points = [];
var stars = [];
var roughness = 0.50;
var pointsSize = Math.pow(2, Math.ceil(Math.log(canvas.width) / (Math.log(2))));
console.log(pointsSize);

//Animation
window.requestAnimFrame = (function(){
  return  window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            setInterval(callback, 1);
          };
})();

requestAnimFrame(starPaint);

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

for(i=0;i<500;i++){
    stars.push(new Star());
}

function Star() {
  this.X = Math.random()*canvas.width;
  this.Y = Math.random()*canvas.height;
  this.velocity = (Math.random()*1);
  this.opacity = (((Math.random()*10)+1)*0.5);
  
  this.Update = function() {
    this.X -= this.velocity;
    if(this.X<0){
      this.X = canvas.width+1;
    }
  };
  
  this.Draw = function() {
    //ctx.save();
    ctx2.fillStyle = "rgba(255,255,255," + this.opacity + ")";
    if (Math.round((Math.random()*5000))==1) {
      ctx2.fillRect(this.X,this.Y,1+2,1+2);
    } else {
      ctx2.fillRect(this.X,this.Y,1,1);
    }
   // ctx.restore();
  };
}

function starPaint() {
  requestAnimFrame(starPaint);
  ctx2.clearRect(0,0,canvas.width,canvas.height);
   for(var i=0;i<stars.length;i++)
   {
     stars[i].Update();
     stars[i].Draw();
   }
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
