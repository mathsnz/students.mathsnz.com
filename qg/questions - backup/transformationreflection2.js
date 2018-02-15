function transformationreflection2(){var id=Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,20);var question="<canvas id='"+id+"' class='sidetopview' width='500' height='300'>Canvas not supported</canvas>";question+="<script>transgrid('"+id+"');</script>";t=randint(1,4);if(t==1){question+="<script>colorline(100,0,400,300,'"+id+"');</script>";left=120
right=220
thistop=160
bottom=260}
if(t==2){question+="<script>colorline(400,0,100,300,'"+id+"');</script>";left=140
right=220
thistop=40
bottom=120}
if(t==3){question+="<script>colorline(0,150,500,150,'"+id+"');</script>";left=180
right=300
thistop=20
bottom=100}
if(t==4){question+="<script>colorline(250,0,250,300,'"+id+"');</script>";left=60
right=190
thistop=100
bottom=200}
dy=thistop;while(dy<=bottom){dx=left;while(dx<=right){if(randint(0,2)==0){question+="<script>colorsquare("+dx+","+dy+",'"+id+"');</script>"}
dx+=20}
dy+=20}
var answer='';var description='Reflect the shape in the line. Click where you want to draw a square. To remove a sqaure click it again.';var array={question:question,answer:answer,description:description,noworking:!0}
return array}