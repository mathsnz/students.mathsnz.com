/*
Sort:|2.04|
Question Type:|Non &#8894; Trig <standards>(2.4)</standards>|
Question Name:|Sine Rule then Cosine Rule then Area and Sector Area - Not Scafolded|
*/

function nonratrig8sinrulecosrulesectorareanotscafolded(){
  a=randint(30,50);
  b=randint(30,50);
  d=randint(20,40);
  angle=randint(45,80);
  angle2=randint(45,80);
  angle3=randint(40,140);
  c=Math.sqrt(a*a+b*b-2*a*b*Math.cos(toRadians(angle)));
  angB=toDegrees(Math.acos((a*a+c*c-b*b)/(2*a*c)));
  e=Math.sqrt(d*d+b*b-2*d*b*Math.cos(toRadians(angle2)));
  angD=toDegrees(Math.acos((b*b+e*e-d*d)/(2*b*e)));
  angF=(180-angle2-angD);
  rot=randint(0,360);
  displayangB=angB.toFixed(0);
  displayangD=angD.toFixed(0);
  displayangF=angF.toFixed(0);
  displayc=c.toFixed(0);
  displaye=e.toFixed(0);
  x=toDegrees(Math.asin(Math.sin(toRadians(displayangB))/b*displayc));
  y=180-x-displayangB;
  z=Math.sqrt(b*b+displaye*displaye-2*b*displaye*Math.cos(toRadians(displayangD)));
  area1=(1/2*b*displayc*Math.sin(toRadians(y)));
  area2=(1/2*b*displaye*Math.sin(toRadians(displayangD)));
  area3=(3.14159265358979*z*z*angle3/360);
  totalarea=parseFloat((parseFloat(area1)+parseFloat(area2)+parseFloat(area3)).toPrecision(3));
  x=x.toPrecision(3);
  y=y.toPrecision(3);
  z=z.toPrecision(3);
  area1=parseFloat(area1.toPrecision(3));
  area2=parseFloat(area2.toPrecision(3));
  area3=parseFloat(area3.toPrecision(3));
  var answer = totalarea;
  var question = '<img width=300 src="https://www.jake4maths.com/generator/triangletrianglesector.php?rot='+rot+'&angle='+angle+'&angle2='+angle2+'&angle3='+angle3+'&a='+a+'&b='+b+'&d='+d+'&sidea=0&sideb=1&sidec=1&sided=0&sidee=1&sidef=0&sideg=0&anga=0&angb=1&angc=0&angd=1&ange=0&angf=0&angg=1"><br>Total area = <br>'+numberanswer(totalarea);
  var description = "Find the total area. Give answer to at least 3 significant figures.<br><img src='./images/2.4-formulas.png' style='max-height:300px;'>";
  var array = {
      question: question,
	  answer: answer,
	  description: description
    }
  return array;
}