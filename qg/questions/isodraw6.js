function isodraw6(){var id=Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,20);img=randint(1,25)
var question="<img src='https://students.mathsnz.com/qg/blocks/Block 6 ("+img+").jpg'><br>"
question+="<canvas id='"+id+"' class='isometric' width='500' height='300'>Canvas not supported</canvas><script>drawisopaper('"+id+"')</script>";var answer='';var description='Draw the folliowing blocks on the isometric paper';var array={question:question,answer:answer,description:description,noworking:!0}
return array}