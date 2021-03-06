/*
Sort:|2.04|
Question Type:|Non &#8894; Trig <standards>(2.4)</standards>|
Question Name:|Sine Rule then Cosine Rule then Area and Sector Area - Scafolded|
*/

function nonratrig8sinrulecosrulesectorareascafolded(){
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
  var answer = "x = "+x+", y = "+y+", z = "+z+", area 1 = "+area1+", area 2 = "+area2+", area 3 = "+area3+", total area = "+totalarea;
  var question = '<img width=300 src="https://www.jake4maths.com/generator/triangletrianglesector.php?rot='+rot+'&angle='+angle+'&angle2='+angle2+'&angle3='+angle3+'&a='+a+'&b='+b+'&d='+d+'&sidea=0&sideb=1&sidec=1&sided=z&sidee=1&sidef=0&sideg=0&anga=y&angb=1&angc=x&angd=1&ange=0&angf=0&angg=1"><br>angle x = <br>'+numberanswer(x)+'<br><small>(Hint: use '+b+' and '+displayc+' and '+displayangB+'°)</small><br><br>angle y = <br>'+numberanswer(y)+'<br><small>(Hint: angles in a triangle add to 180°)</small><br><br>area of triangle with x and y in it = <br>'+numberanswer(area1)+'<br><small>(Hint: use '+b+' and '+displayc+' and y°)</small><br><br>side z = <br>'+numberanswer(z)+'<br><small>(Hint: use '+b+' and '+displaye+' and '+displayangD+'°)</small><br><br>Area of other triange = <br>'+numberanswer(area2)+'<br><small>(Hint: use '+b+' and '+displaye+' and '+displayangD+'°)</small><br><br>Area of sector = <br>'+numberanswer(area3)+'<br><small>(Hint: use z and '+angle3+'°)</small><br><br>Total area = <br>'+numberanswer(totalarea)+'<br><small>(Hint: add the three areas together)</small>';
  var description = "Find the total area. Give answer to at least 3 significant figures.<br><img src='./images/2.4-formulas.png' style='max-height:300px;'>";
  var array = {
      question: question,
	  answer: answer,
	  description: description
    }
  return array;
}
