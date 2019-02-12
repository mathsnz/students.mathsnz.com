/*
Sort:|2.04|
Question Type:|Non &#8894; Trig <standard>(2.4)</standard>|
Question Name:|Area of Triangle|
*/	

function nonratrig1findarea(){a=parseFloat(Math.pow(10,rand(0.1,2,0.1)).toPrecision(2));b=parseFloat((rand(0.3,3,0.1)*a).toFixed(1));angle=rand(40,140,0.1);rot=randint(0,360);var answer=parseFloat((1/2*a*b*Math.sin(toRadians(angle))).toPrecision(3));var question='<img width=300 src="https://www.jake4maths.com/generator/triangle.php?a='+a+'&b='+b+'&angle='+angle+'&rot='+rot+'&sidea=1&sideb=1&sidec=0&anga=0&angb=0&angc=1"><br>area = '+numberanswer(answer);var description="Find the area of the triangle. Give answer to at least 3 significant figures.<br><img src='https://students.mathsnz.com/qg/images/2.4-formulas.png' style='max-height:300px;'>";var array={question:question,answer:answer,description:description}
return array}