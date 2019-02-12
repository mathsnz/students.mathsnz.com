/*
Sort:|0.09|
Question Type:|Geometry|
Question Name:|Draw Front, Side and Top View - 3 Blocks|
*/	

function sidetopview3(){var id=Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,20);var question="<img src='https://students.mathsnz.com/qg/blocks/Block3.jpg'><br>"
question+="<canvas id='"+id+"' class='isometric' width='500' height='300'>Canvas not supported</canvas><script>drawsidetopview('"+id+"')</script>";var answer='';var description='Draw the front, side and top views on the grids below. Click where you want to draw a square. To remove a sqaure click it again.';var array={question:question,answer:answer,description:description,noworking:!0}
return array}