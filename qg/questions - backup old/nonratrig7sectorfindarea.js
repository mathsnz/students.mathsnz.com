/*
Sort:|2.04|
Question Type:|Non &#8894; Trig <standards>(2.4)</standards>|
Question Name:|Sector - Find Area|
*/

function nonratrig7sectorfindarea(){
  a=parseFloat(Math.pow(10,rand(0.1,2,0.1)).toPrecision(2));
  angle=rand(20,140,0.1);
  rot=randint(0,360);
  var answer = (3.14159265358979*a*a*angle/360).toPrecision(3);
  var question = '<img width=300 src="http://www.jake4maths.com/generator/sector.php?a='+a+'&angle='+angle+'&rot='+rot+'&sidea=1&sideb=1&sidec=0&angc=1"><br>area = '+numberanswer(answer);
  var description = "Find the area of the sector. Give answer to at least 3 significant figures.<br><img src='./images/2.4-formulas.png' style='max-height:300px;'>";
  var array = {
      question: question,
	  answer: answer,
	  description: description
    }
  return array;
}
