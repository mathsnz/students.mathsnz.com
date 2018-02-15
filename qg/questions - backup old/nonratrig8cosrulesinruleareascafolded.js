/*
Sort:|2.04|
Question Type:|Non &#8894; Trig <standards>(2.4)</standards>|
Question Name:|Cosine Rule then Sine Rule then Area - Scafolded|
*/

function nonratrig8cosrulesinruleareascafolded(){
  a=randint(30,50);
  b=randint(30,50);
  d=randint(45,80);
  angle=randint(45,80);
  angle2=randint(45,80);
  c=Math.sqrt(a*a+b*b-2*a*b*Math.cos(toRadians(angle)));
  angB=toDegrees(Math.acos((a*a+c*c-b*b)/(2*a*c)));
  e=Math.sqrt(d*d+b*b-2*d*b*Math.cos(toRadians(angle2)));
  angD=toDegrees(Math.acos((b*b+e*e-d*d)/(2*b*e)));
  angF=(180-angle2-angD);
  rot=randint(0,360);
  displayangB=angB.toFixed(0);
  displayangF=angF.toFixed(0);
  displayc=c.toFixed(0);
  displaye=e.toFixed(0);
  x=Math.sqrt(a*a+displayc*displayc-2*a*displayc*Math.cos(toRadians(displayangB)));
  y=toDegrees(Math.asin(Math.sin(toRadians(displayangF))/x*displaye));
  z=180-displayangF-y;
  area1=(1/2*a*displayc*Math.sin(toRadians(displayangB)));
  area2=(1/2*x*displaye*Math.sin(toRadians(z)));
  totalarea=parseFloat((parseFloat(area1)+parseFloat(area2)).toPrecision(3));
  x=x.toPrecision(3);
  y=y.toPrecision(3);
  z=z.toPrecision(3);
  area1=parseFloat(area1.toPrecision(3));
  area2=parseFloat(area2.toPrecision(3));
  var answer = "x = "+x+", y = "+y+", z = "+z+", area 1 = "+area1+", area 2 = "+area2+", total area = "+totalarea;
  var question = '<img width=300 src="https://www.jake4maths.com/generator/triangletriangle.php?rot='+rot+'&angle='+angle+'&angle2='+angle2+'&a='+a+'&b='+b+'&d='+d+'&sidea=1&sideb=x&sidec=1&sided=0&sidee=1&anga=0&angb=1&angc=0&angd=z&ange=y&angf=1"><br>length x = <br>'+numberanswer(x)+'<br><small>(Hint: use '+a+' and '+displayc+' and '+displayangB+'°)</small><br><br>area of triangle with two sides = <br>'+numberanswer(area1)+'<br><small>(Hint: use '+a+' and '+displayc+' and '+displayangB+'°)</small><br><br>angle y = <br>'+numberanswer(y)+'<br><small>(Hint: use '+displaye+' and x and '+displayangF+'°)</small><br><br>angle z = <br>'+numberanswer(z)+'<br><small>(Hint: angles in a triangle add to 180°)</small><br><br>Area of other triange = <br>'+numberanswer(area2)+'<br><small>(Hint: use z° and x and '+displaye+')</small><br><br>Total area = <br>'+numberanswer(totalarea)+'<br><small>(Hint: add the two areas together)</small>';
  var description = "Find the total area. Give answer to at least 3 significant figures.<br><img src='./images/2.4-formulas.png' style='max-height:300px;'>";
  var array = {
      question: question,
	  answer: answer,
	  description: description
    }
  return array;
}
