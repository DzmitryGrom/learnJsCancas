const canvasElement = document.querySelector('canvas'),
  ctx = canvasElement.getContext('2d');

function inRad(num) {
  //я ведь говорил, что функция принимает угол в радианах?
  return num * Math.PI / 180;
}
ctx.fillStyle = 'rgb(159, 0, 0)';
ctx.fillRect(50, 200, 30, 200);
ctx.fillStyle = 'rgba(0, 170, 0, 0.8)';
ctx.fillRect(80, 200, 60, 30);
ctx.fillStyle = 'rgb(159, 0, 0)';
ctx.fillRect(140, 200, 30, 200);
ctx.fillStyle = 'rgba(0, 170, 0, 0.8)';
ctx.fillRect(70, 120, 30, 80);
ctx.fillStyle = 'rgba(0, 170, 0, 0.8)';
ctx.fillRect(120, 120, 30, 80);
ctx.fillStyle = 'rgba(0, 170, 0, 0.8)';
ctx.fillRect(100, 120, 20, 30);
ctx.fillStyle = 'rgb(159, 0, 0)';
ctx.fillRect(200, 120, 30, 200);
ctx.rotate(inRad(30));
ctx.fillStyle = 'rgba(0, 170, 0, 0.8)';
ctx.fillRect(327, -20, 30, 200);
ctx.rotate(inRad(-30));
ctx.fillStyle = 'rgb(159, 0, 0)';
ctx.fillRect(290, 120, 30, 200);
ctx.fillStyle = 'rgba(0, 170, 0, 0.8)'
ctx.fillRect(350, 120, 30, 180);
ctx.fillStyle = 'rgba(0, 170, 0, 0.8)'
ctx.fillRect(450, 120, 30, 180);
ctx.rotate(inRad(-45));
ctx.fillStyle = 'rgb(159, 0, 0)';
ctx.fillRect(152, 352, 30, 80);
ctx.rotate(inRad(90));
ctx.fillStyle = 'rgb(159, 0, 0)';
ctx.fillRect(404, -235, 30, 80);
ctx.rotate(inRad(-30));
ctx.fillStyle = 'rgb(159, 0, 0)';
ctx.fillRect(554, -20, 30, 185);
ctx.rotate(inRad(-35));
ctx.fillStyle = 'rgb(159, 0, 0)';
ctx.fillRect(460, 320, 30, 185);
ctx.rotate(inRad(-70));
ctx.fillStyle = 'rgb(0, 170, 0, 0.8)';
ctx.fillRect(-250, 520, 30, 75);

ctx.closePath();
ctx.stroke();
