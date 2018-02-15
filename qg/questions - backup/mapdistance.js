function mapdistance(){seed=randint(0,999999);scale=randint(1,4);if(scale==4){scale=10}
if(scale==3){scale=5}
adj=randint(1,2);if(adj==1){answermult=1*scale;scale+="km"}else{answermult=100*scale;scale+="00m"}
angle1=randint(0,360);angle2=randint(0,360);if(Math.abs(angle1-angle2)){angle2=angle1-180}
distance1=randint(30,150);distance2=randint(30,150);x1=Math.round(distance1*Math.cos(toRadians(angle1))+200)
x2=Math.round(distance2*Math.cos(toRadians(angle2))+200)
y1=Math.round(distance1*Math.sin(toRadians(angle1))+200)
y2=Math.round(distance2*Math.sin(toRadians(angle2))+200)
var answer=Math.round(Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))/50)*answermult
var question='<img width=300 src="https://www.jake4maths.com/generator/map.php?seed='+seed+'&scale='+scale+'&A='+x1+'-'+y1+'&B='+x2+'-'+y2+'"><br>distance = '+numberanswer(answer);var description="Find the distance between A and B to the nearest "+scale+". Make sure you use the scale on the map.";var array={question:question,answer:answer,description:description}
return array}