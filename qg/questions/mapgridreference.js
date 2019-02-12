/*
Sort:|0.09|
Question Type:|Geometry|
Question Name:|Map - Grid Reference|
*/	

function mapgridreference(){seed=randint(0,999999);scale=randint(1,4);g1=randint(100,990);g2=randint(100,990);if(scale==4){scale=10}
if(scale==3){scale=5}
adj=randint(1,2);if(adj==1){answermult=1*scale;scale+="km"}else{answermult=100*scale;scale+="00m"}
angle1=randint(0,360);angle2=randint(0,360);if(Math.abs(angle1-angle2)){angle2=angle1-180}
distance1=randint(30,150);distance2=randint(30,150);x1=Math.round((distance1*Math.cos(toRadians(angle1))+175)/50)*50+25
x2=Math.round((distance2*Math.cos(toRadians(angle2))+175)/50)*50+25
y1=Math.round((distance1*Math.sin(toRadians(angle1))+175)/50)*50+25
y2=Math.round((distance2*Math.sin(toRadians(angle2))+175)/50)*50+25
var answera=(g1+(x1-25)/50)+""+(g2+7-(y1-25)/50);var answerb=(g1+(x2-25)/50)+""+(g2+7-(y2-25)/50);var answer='A: '+answera+' B: '+answerb;var question='<img width=300 src="https://www.jake4maths.com/generator/map.php?seed='+seed+'&A='+x1+'-'+y1+'&B='+x2+'-'+y2+'&grid='+g1+'-'+g2+'"><br>grid reference of A = '+textanswer(answera)+'<br>grid reference of B = '+textanswer(answerb)
var description="Estimate the compass reading from A to B.";var array={question:question,answer:answer,description:description}
return array}