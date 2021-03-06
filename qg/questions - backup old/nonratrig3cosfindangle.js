/*
Sort:|2.04|
Question Type:|Non &#8894; Trig <standards>(2.4)</standards>|
Question Name:|Cosine Rule - Find Angle|
*/

function nonratrig3cosfindangle(){
  a=parseFloat(Math.pow(10,rand(0.1,2,0.1)).toPrecision(2));
  b=parseFloat((rand(0.3,3,0.1)*a).toFixed(1));
  angle=rand(40,140,0.1);
  rot=randint(0,360);
  c=Math.sqrt(a*a+b*b-2*a*b*Math.cos(toRadians(angle))).toFixed(0);
  var answer = toDegrees(Math.acos((a*a+b*b-c*c)/(2*a*b))).toPrecision(3);
  var question = '<img width=300 src="https://www.jake4maths.com/generator/triangle.php?a='+a+'&b='+b+'&angle='+angle+'&rot='+rot+'&sidea=1&sideb=1&sidec=1&anga=0&angb=0&angc=2"><br>marked angle = '+numberanswer(answer);

  var description = "Find the marked angle on the triangle. Give answer to at least 3 significant figures.<br><img src='./images/2.4-formulas.png' style='max-height:300px;'>";
  var array = {
      question: question,
	  answer: answer,
	  description: description
    }
  return array;
}
