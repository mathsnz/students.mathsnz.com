function nonratrig7sectorfindeverything(){a=parseFloat(Math.pow(10,rand(0.1,2,0.1)).toPrecision(2));angle=rand(20,140,0.1);rot=randint(0,360);arc=(2*3.14159265358979*a*angle/360).toPrecision(3);per=(2*3.14159265358979*a*angle/360+a+a).toPrecision(3);area=(3.14159265358979*a*a*angle/360).toPrecision(3);var answer="Arc Length: "+arc+", Perimeter: "+per+", Area: "+area;var question='<img width=300 src="http://www.jake4maths.com/generator/sector.php?a='+a+'&angle='+angle+'&rot='+rot+'&sidea=1&sideb=1&sidec=0&angc=1"><br><span style="display:inline-block;width:100px;">arc length = </span>'+numberanswer(arc)+'<br><span style="display:inline-block;width:100px;">perimeter = </span>'+numberanswer(per)+'<br><span style="display:inline-block;width:100px;">area = </span>'+numberanswer(area);var description="Find the area of the sector. Give answer to at least 3 significant figures.";var array={question:question,answer:answer,description:description}
return array}