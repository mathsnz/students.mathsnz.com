/*
Sort:|2.04|
Question Type:|Non &#8894; Trig <standards>(2.4)</standards>|
Question Name:|Three Triangles and a Sector - Not Scafolded|
*/

function nonratrig8threetrianglesandsectornotscafolded(){
  a=randint(30,50);
  b=randint(30,50);
  d=randint(20,40);
  h=randint(30,50);
  angle=randint(45,80);
  angle2=randint(45,80);
  angle3=randint(40,100);
  angle4=randint(45,80);
  c=Math.sqrt(a*a+b*b-2*a*b*Math.cos(toRadians(angle)));
  angB=toDegrees(Math.acos((a*a+c*c-b*b)/(2*a*c)));
  e=Math.sqrt(d*d+b*b-2*d*b*Math.cos(toRadians(angle2)));
  angD=toDegrees(Math.acos((b*b+e*e-d*d)/(2*b*e)));
  angF=(180-angle2-angD);
  rot=randint(0,360);
  i=Math.sqrt(a*a+h*h-2*a*h*Math.cos(toRadians(angle4)));
  angJ=toDegrees(Math.acos((i*i+h*h-a*a)/(2*i*h)));
  displayangB=angB.toFixed(0);
  displayangD=angD.toFixed(0);
  displayangF=angF.toFixed(0);
  displayangJ=angJ.toFixed(0);
  displayc=c.toFixed(0);
  displaye=e.toFixed(0);
  displayi=i.toFixed(0);
  v=displaye/Math.sin(toRadians(angle2))*Math.sin(toRadians(displayangF));
  w=180-angle2-displayangF;
  x=Math.sqrt(h*h+displayi*displayi-2*h*displayi*Math.cos(toRadians(displayangJ)));
  y=toDegrees(Math.acos((x*x+v*v-displayc*displayc)/(2*x*v)));
  z=displaye/Math.sin(toRadians(angle2))*Math.sin(toRadians(w));;
  area1=(1/2*v*displaye*Math.sin(toRadians(w)));
  area2=(1/2*h*displayi*Math.sin(toRadians(displayangJ)));
  area3=(1/2*v*x*Math.sin(toRadians(y)));
  area4=(3.14159265358979*z*z*angle3/360);
  totalarea=parseFloat((parseFloat(area1)+parseFloat(area2)+parseFloat(area3)+parseFloat(area4)).toPrecision(3));
  v=v.toPrecision(3);
  x=x.toPrecision(3);
  y=y.toPrecision(3);
  z=z.toPrecision(3);
  area1=parseFloat(area1.toPrecision(3));
  area2=parseFloat(area2.toPrecision(3));
  area3=parseFloat(area3.toPrecision(3));
  area4=parseFloat(area4.toPrecision(3));
  var answer = totalarea;
  var question = '<img width=300 src="https://www.jake4maths.com/generator/triangletriangletrianglesector.php?rot='+rot+'&angle='+angle+'&angle2='+angle2+'&angle3='+angle3+'&angle4='+angle4+'&a='+a+'&b='+b+'&d='+d+'&h='+h+'&sidea=0&sideb=0&sidec=1&sided=0&sidee=1&sidef=0&sideg=0&sideh=1&sidei=1&anga=0&angb=0&angc=0&angd=0&ange=1&angf=1&angg=1&angh=0&angi=0&angj=1"><br>Total area = <br>'+numberanswer(totalarea)+'<br><small>(Hint: add the four areas together)</small>';
  var description = "Find the total area. Give answer to at least 3 significant figures.<br><img src='./images/2.4-formulas.png' style='max-height:300px;'>";
  var array = {
      question: question,
	  answer: answer,
	  description: description
    }
  return array;
}
