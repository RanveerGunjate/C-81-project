canvas=  document.getElementById("mycanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle ="grey";
ctx.lineWidth = 1;
ctx.rect(100,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="blue";
ctx.lineWidth = 3;
ctx.arc(220,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="red";
ctx.lineWidth = 3;
ctx.arc(380,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="black";
ctx.lineWidth = 3;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="yellow";
ctx.lineWidth = 3;
ctx.arc(260,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="green";
ctx.lineWidth = 3;
ctx.arc(335,250,40,0,2*Math.PI);
ctx.stroke();