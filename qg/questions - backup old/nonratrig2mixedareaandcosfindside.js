/*
Sort:|2.04|
Question Type:|Non &#8894; Trig <standards>(2.4)</standards>|
Question Name:|Combined: Area and Cosine Rule - Find Side|
*/

function nonratrig2mixedareaandcosfindside(){
  a=parseFloat(Math.pow(10,rand(0.1,2,0.1)).toPrecision(2));
  b=parseFloat((rand(0.3,3,0.1)*a).toFixed(1));
  angle=rand(40,140,0.1);;
  rot=randint(0,360);
  var area = (1/2*a*b*Math.sin(toRadians(angle))).toPrecision(3);
  var side = Math.sqrt(a*a+b*b-2*a*b*Math.cos(toRadians(angle))).toPrecision(3);
  var answer = 'Area: '+area+', Side: '+side;
  var question = '<img width=300 src="https://www.jake4maths.com/generator/triangle.php?a='+a+'&b='+b+'&angle='+angle+'&rot='+rot+'&sidea=1&sideb=1&sidec=x&anga=0&angb=0&angc=1"><br><span style="display:inline-block;width:100px;">area = </span>'+numberanswer(area)+'<br><span style="display:inline-block;width:100px;">missing side = </span>'+numberanswer(side);

  var description = "Find the area and the missing side of the triangle. Give answer to at least 3 significant figures.<br><img src='./images/2.4-formulas.png' style='max-height:300px;'>";
  var array = {
      question: question,
	  answer: answer,
	  description: description
    }
  return array;
}
