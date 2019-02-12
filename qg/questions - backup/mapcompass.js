function mapcompass(){seed=randint(0,999999);scale=randint(1,4);if(scale==4){scale=10}
if(scale==3){scale=5}
adj=randint(1,2);if(adj==1){answermult=1*scale;scale+="km"}else{answermult=100*scale;scale+="00m"}
angle1=randint(0,360);angle2=randint(0,360);if(Math.abs(angle1-angle2)){angle2=angle1-180}
distance1=randint(30,150);distance2=randint(30,150);x1=Math.round(distance1*Math.cos(toRadians(angle1))+200)
x2=Math.round(distance2*Math.cos(toRadians(angle2))+200)
y1=Math.round(distance1*Math.sin(toRadians(angle1))+200)
y2=Math.round(distance2*Math.sin(toRadians(angle2))+200)
var answer=toDegrees(Math.atan((x2-x1)/(y1-y2)));if(y1<y2){answer+=180}
if(answer<0){answer+=360}
answer=Math.round(answer/45)*45
if(answer==0){answer="N"}
if(answer==45){answer="NE"}
if(answer==90){answer="E"}
if(answer==135){answer="SE"}
if(answer==180){answer="S"}
if(answer==225){answer="SW"}
if(answer==270){answer="W"}
if(answer==315){answer="NW"}
options="<option></option><option>N</option><option>NE</option><option>E</option><option>SE</option><option>S</option><option>SW</option><option>W</option><option>NW</option>"
var question='<img width=300 src="https://www.jake4maths.com/generator/map.php?seed='+seed+'&scale='+scale+'&A='+x1+'-'+y1+'&B='+x2+'-'+y2+'"><br>compass reading = <select class=select answer="'+encode64(answer)+'" style="max-width:90%">'+options+'</select>'
var description="Estimate the compass reading from A to B.";var array={question:question,answer:answer,description:description}
return array}