/*
Sort:|1.06|
Question Type:|&#8894; Triangle <standard>(1.6, 1.7)</standard>|
Question Name:|Trigonometry Tan find Angle|
*/	

function trigpythag5dtanfindang(){choice=randint(1,2);if(choice=1){a=randint(5,100)/10;b=randint(5,100)/10;c=""
ang1="x"
ang2="";answer=(toDegrees(Math.atan(a/b))).toPrecision(3);ang1=ang1+"°"}else{a=randint(5,100)/10;b=randint(5,100)/10;c="";ang1="";ang2=randint(5,80);answer=(toDegrees(Math.atan(b/a))).toPrecision(3);ang2=ang2+"°"}
tri=randint(1,8);question='<img width=300 src="https://www.jake4maths.com/generator/triangle'+tri+'.php?a='+a+'&b='+b+'&c='+c+'&ang1='+ang1+'&ang2='+ang2+'"><br>x = '+numberanswer(answer);description="Find the size of x. Note: Diagrams are not to scale. Give answer to at least 3 significant figures.";var array={question:question,answer:answer,description:description}
return array}