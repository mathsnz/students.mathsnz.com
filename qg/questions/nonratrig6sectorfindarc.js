/*
Sort:|2.04|
Question Type:|Non &#8894; Trig <standard>(2.4)</standard>|
Question Name:|Sector - Find Arc Length|
*/	

function nonratrig6sectorfindarc(){a=parseFloat(Math.pow(10,rand(0.1,2,0.1)).toPrecision(2));angle=rand(20,140,0.1);rot=randint(0,360);var answer=(2*3.14159265358979*a*angle/360).toPrecision(3);var question='<img width=300 src="https://www.jake4maths.com/generator/sector.php?a='+a+'&angle='+angle+'&rot='+rot+'&sidea=1&sideb=1&sidec=x&angc=1"><br>x = '+numberanswer(answer);var description="Find the arc length of the sector. Give answer to at least 3 significant figures.<br><img src='https://students.mathsnz.com/qg/images/2.4-formulas.png' style='max-height:300px;'>";var array={question:question,answer:answer,description:description}
return array}