/*
Sort:|2.04|
Question Type:|Non &#8894; Trig <standards>(2.4)</standards>|
Question Name:|Sine Rule - Find Side|
*/

function nonratrig4sinfindside(){
  a=parseFloat(Math.pow(10,rand(0.1,2,0.1)).toPrecision(2));
  b=parseFloat((rand(0.3,3,0.1)*a).toFixed(1));
  angle=rand(60,140,0.1);
  rot=randint(0,360);
  c=Math.sqrt(a*a+b*b-2*a*b*Math.cos(toRadians(angle)));
  angA=toDegrees(Math.acos((b*b+c*c-a*a)/(2*b*c))).toFixed(0);
  angB=toDegrees(Math.acos((a*a+c*c-b*b)/(2*a*c))).toFixed(0);
  var aorb = randint(0,1);
  if(aorb==1){
    var answer = (b/Math.sin(toRadians(angB))*Math.sin(toRadians(angA))).toPrecision(3);
    var question = '<img width=300 src="https://www.jake4maths.com/generator/triangle.php?a='+a+'&b='+b+'&angle='+angle+'&rot='+rot+'&sidea=x&sideb=1&sidec=0&anga=1&angb=1&angc=0"><br>x = '+numberanswer(answer);
  } else {
    var answer = (a/Math.sin(toRadians(angA))*Math.sin(toRadians(angB))).toPrecision(3);
    var question = '<img width=300 src="https://www.jake4maths.com/generator/triangle.php?a='+a+'&b='+b+'&angle='+angle+'&rot='+rot+'&sidea=1&sideb=x&sidec=0&anga=1&angb=1&angc=0"><br>x = '+numberanswer(answer);
  }

  var description = "Find the marked side on the triangle. Give answer to at least 3 significant figures.<br><img src='./images/2.4-formulas.png' style='max-height:300px;'>";
  var array = {
      question: question,
	  answer: answer,
	  description: description
    }
  return array;
}
