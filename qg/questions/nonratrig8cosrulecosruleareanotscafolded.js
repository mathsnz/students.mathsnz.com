/*
Sort:|2.04|
Question Type:|Non &#8894; Trig <standard>(2.4)</standard>|
Question Name:|Cosine Rule then Cosine Rule then Area - Not Scafolded|
*/	

function nonratrig8cosrulecosruleareanotscafolded(){a=randint(30,50);b=randint(30,50);d=randint(45,80);angle=randint(45,80);angle2=randint(45,80);c=Math.sqrt(a*a+b*b-2*a*b*Math.cos(toRadians(angle)));angB=toDegrees(Math.acos((a*a+c*c-b*b)/(2*a*c)));e=Math.sqrt(d*d+b*b-2*d*b*Math.cos(toRadians(angle2)));angD=toDegrees(Math.acos((b*b+e*e-d*d)/(2*b*e)));angF=(180-angle2-angD);rot=randint(0,360);displayangB=angB.toFixed(0);displayangF=angF.toFixed(0);displayc=c.toFixed(0);displayd=d.toFixed(0);displaye=e.toFixed(0);x=Math.sqrt(a*a+displayc*displayc-2*a*displayc*Math.cos(toRadians(displayangB)));y=toDegrees(Math.acos((x*x+displaye*displaye-displayd*displayd)/(2*x*displaye)));area1=(1/2*a*displayc*Math.sin(toRadians(displayangB)));area2=(1/2*x*displaye*Math.sin(toRadians(y)));totalarea=parseFloat((parseFloat(area1)+parseFloat(area2)).toPrecision(3));x=x.toPrecision(3);y=y.toPrecision(3);area1=parseFloat(area1.toPrecision(3));area2=parseFloat(area2.toPrecision(3));var answer=totalarea;var question='<img width=300 src="https://www.jake4maths.com/generator/triangletriangle.php?rot='+rot+'&angle='+angle+'&angle2='+angle2+'&a='+a+'&b='+b+'&d='+d+'&sidea=1&sideb=0&sidec=1&sided=1&sidee=1&anga=0&angb=1&angc=0&angd=0&ange=0&angf=0"><br>Total area = <br>'+numberanswer(totalarea)+'<br><small>(Hint: add the two areas together)</small>';var description="Find the total area. Give answer to at least 3 significant figures.<br><img src='https://students.mathsnz.com/qg/images/2.4-formulas.png' style='max-height:300px;'>";var array={question:question,answer:answer,description:description}
return array}