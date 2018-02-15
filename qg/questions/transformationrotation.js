/*
Sort:|0.09|
Question Type:|Geometry|
Question Name:|Transformation - Rotation|
*/	

function transformationrotation(){var id=Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,20);var question="<canvas id='"+id+"' class='sidetopview' width='500' height='300'>Canvas not supported</canvas>";question+="<script>transgrid('"+id+"');</script>";question+="<script>colordot(250,150,'"+id+"');</script>";left=180
right=220
thistop=180
bottom=220
t=randint(1,4);if(t==1){left=180
right=220
thistop=180
bottom=220}
if(t==2){left=180
right=220
thistop=80
bottom=120}
if(t==3){left=280
right=320
thistop=80
bottom=120}
if(t==4){left=280
right=320
thistop=180
bottom=220}
dy=thistop;while(dy<=bottom){dx=left;while(dx<=right){if(randint(0,1)==0){question+="<script>colorsquare("+dx+","+dy+",'"+id+"');</script>"}
dx+=20}
dy+=20}
d=randint(1,4);d=d*90;d=d+"°";c=randint(1,2);if(c==1){c="anti-clockwize"}else{c="clockwize"}
question+='<script>ctx = $("#'+id+'")[0].getContext("2d");ctx.fillStyle = "#fff";ctx.fillRect(0,0,209,29);</script>';question+='<script>ctx = $("#'+id+'")[0].getContext("2d");ctx.fillStyle = "#000";ctx.font = "15px Arial";ctx.textAlign = "left";ctx.fillText("Rotate by '+d+c+'",10,15);';question+='</script>';var answer='';var description='Rotate the shape by the shown angle. Click where you want to draw a square. To remove a sqaure click it again.';var array={question:question,answer:answer,description:description,noworking:!0}
return array}