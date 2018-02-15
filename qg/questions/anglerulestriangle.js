/*
Sort:|0.09|
Question Type:|Geometry|
Question Name:|Angle Rules - Triangle|
*/	

function anglerulestriangle(){a=parseFloat(Math.pow(10,rand(0.1,2,0.1)).toPrecision(2));b=parseFloat((rand(0.3,3,0.1)*a).toFixed(1));angle=rand(60,140,0.1);rot=randint(0,360);c=Math.sqrt(a*a+b*b-2*a*b*Math.cos(toRadians(angle)));angA=toDegrees(Math.acos((b*b+c*c-a*a)/(2*b*c))).toFixed(0);angB=toDegrees(Math.acos((a*a+c*c-b*b)/(2*a*c))).toFixed(0);var answer=180-angA-angB;var question='<img width=300 src="https://www.jake4maths.com/generator/triangle.php?a='+a+'&b='+b+'&angle='+angle+'&rot='+rot+'&sidea=0&sideb=0&sidec=0&anga=1&angb=1&angc=2"><br>angle = '+numberanswer(answer);var description="Find the missing angle.";var array={question:question,answer:answer,description:description}
return array}