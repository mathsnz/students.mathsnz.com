function transformationenlargement(){var id=Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,20);var question="<canvas id='"+id+"' class='sidetopview' width='500' height='300'>Canvas not supported</canvas>";question+="<script>transgrid('"+id+"');</script>";question+="<script>colordot(110,190,'"+id+"');</script>";left=160
right=200
thistop=140
bottom=180
dy=thistop;while(dy<=bottom){dx=left;while(dx<=right){if(randint(0,1)==0){question+="<script>colorsquare("+dx+","+dy+",'"+id+"');</script>"}
dx+=20}
dy+=20}
sf=randint(2,4);if(sf==4){sf=-1}
question+='<script>ctx = $("#'+id+'")[0].getContext("2d");ctx.fillStyle = "#fff";ctx.fillRect(0,0,189,29);</script>';question+='<script>ctx = $("#'+id+'")[0].getContext("2d");ctx.fillStyle = "#000";ctx.font = "15px Arial";ctx.textAlign = "left";ctx.fillText("Enlarge by scale factor '+sf+'",10,15);';question+='</script>';var answer='';var description='Enlarge the shape by the shown scale factor. Click where you want to draw a square. To remove a sqaure click it again.';var array={question:question,answer:answer,description:description,noworking:!0}
return array}