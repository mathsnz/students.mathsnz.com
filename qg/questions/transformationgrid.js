/*
Sort:|0.09|
Question Type:|Geometry|
Question Name:|Blank Transformation Grid|
*/	

function transformationgrid(){var id=Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,20);var question="<canvas id='"+id+"' class='sidetopview' width='500' height='300'>Canvas not supported</canvas><script>transgrid('"+id+"');</script>";var answer='';var description='Here is some blank paper. Click where you want to draw a square. To remove a sqaure click it again.';var array={question:question,answer:answer,description:description,noworking:!0}
return array}