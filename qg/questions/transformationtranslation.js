function transformationtranslation(){var id=Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,20);var question="<canvas id='"+id+"' class='sidetopview' width='500' height='300'>Canvas not supported</canvas>";question+="<script>transgrid('"+id+"');</script>";left=220
right=260
thistop=120
bottom=160
dy=thistop;while(dy<=bottom){dx=left;while(dx<=right){if(randint(0,1)==0){question+="<script>colorsquare("+dx+","+dy+",'"+id+"');</script>"}
dx+=20}
dy+=20}
leftright=randint(5,10)
updown=randint(4,6)
if(randint(0,1)=="1"){leftright=-leftright};question+='<script>ctx = $("#'+id+'")[0].getContext("2d");ctx.fillStyle = "#fff";ctx.fillRect(0,0,129,29);</script>';question+='<script>ctx = $("#'+id+'")[0].getContext("2d");ctx.fillStyle = "#000";ctx.font = "15px Arial";ctx.textAlign = "left";ctx.fillText("Translate by (     )",10,15);';question+='ctx.textAlign = "center";ctx.fillText("'+leftright+'",109,11);'
question+='ctx.textAlign = "center";ctx.fillText("'+updown+'",109,24);'
question+='</script>';var answer='';var description='Translate the shape by the shown vector. Click where you want to draw a square. To remove a sqaure click it again.';var array={question:question,answer:answer,description:description,noworking:!0}
return array}