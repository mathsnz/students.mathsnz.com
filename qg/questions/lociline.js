function lociline(){var id=Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,20);angle=randint(0,12)*15;size=randint(1,4);scale=randint(1,4);if(scale==4){scale=10}
if(scale==3){scale=5}
dist=size*scale;adj=randint(1,2);if(adj==1){scale+="km";dist+="km"}else{scale+="00m";dist+="00m"}
var question="<canvas id='"+id+"' width='500' height='300'>Canvas not supported</canvas><br>Size: <input id='slider"+id+"' type=range min=25 value=25 max=250 step=25 onchange='draw"+id+"()' oninput='draw"+id+"()'><br>Rotation: <input id='rotslider"+id+"' type=range min=0 value=0 max=180 step=15 onchange='draw"+id+"()' oninput='draw"+id+"()'>";question+='<script>function draw'+id+'(){var canvas=document.getElementById("'+id+'");ctx = canvas.getContext("2d");ctx.clearRect(0,0,500,300);ctx.textAlign="left";ctx.font="12px Arial";ctx.fillText("Draw the Loci of all the points '+dist+' from the line.",10,10);ctx.beginPath();ctx.moveTo(10,280);ctx.lineTo(10,290);ctx.lineTo(110,290);ctx.lineTo(110,280);ctx.moveTo(60,280);ctx.lineTo(60,290);ctx.stroke();ctx.textAlign="center";ctx.font="10px Arial";ctx.fillText("'+scale+'",35,288);ctx.fillText("'+scale+'",85,288);ctx.lineWidth=3;ctx.beginPath();\
  ctx.moveTo('+(Math.cos(toRadians(angle))*500+250)+','+(150-Math.sin(toRadians(angle))*500)+');\
  ctx.lineTo('+(Math.cos(toRadians(angle+180))*500+250)+','+(150-Math.sin(toRadians(angle+180))*500)+');\
  ctx.stroke();ctx.lineWidth=1;\
  angle=document.getElementById("rotslider'+id+'").value;\
  distance=document.getElementById("slider'+id+'").value;\
  x1=(Math.cos(toRadians(angle))*500+250);\
  y1=(150-Math.sin(toRadians(angle))*500);\
  x2=(Math.cos(toRadians(add(angle,180)))*500+250);\
  y2=(150-Math.sin(toRadians(add(angle,180)))*500);\
  xshift=(Math.sin(toRadians(angle))*distance);\
  yshift=(Math.cos(toRadians(angle))*distance);\
  ctx.beginPath();\
  ctx.moveTo(x1+xshift,y1+yshift);\
  ctx.lineTo(x2+xshift,y2+yshift);\
  ctx.stroke();\
  ctx.beginPath();\
  ctx.moveTo(x1-xshift,y1-yshift);\
  ctx.lineTo(x2-xshift,y2-yshift);\
  ctx.stroke();\
  }\
  var canvas'+id+'=document.getElementById("'+id+'"),ctx = canvas'+id+'.getContext("2d"),targetX'+id+' = 250,targetY'+id+' = 150;canvas'+id+'.width = 500; canvas'+id+'.height = 300;var flag'+id+' = 0;canvas'+id+'.addEventListener("mousedown", function(){flag'+id+' = 1;}, false);canvas'+id+'.addEventListener("mouseup", function(){flag'+id+' = 0;}, false);canvas'+id+'.addEventListener("mousemove", function(e){if(flag'+id+'==1){var rect = $("#'+id+'")[0].getBoundingClientRect();targetX'+id+' = e.clientX - rect.left;targetY'+id+' = e.clientY - rect.top;draw'+id+'();}});draw'+id+'();</script>';var answer='';var description='Position and size the lines appropriately.';var array={question:question,answer:answer,description:description,noworking:!0}
return array}