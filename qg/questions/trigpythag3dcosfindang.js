
function trigpythag3dcosfindang(){choice=randint(1,2);if(choice=1){a="";b=randint(5,54)/10;c=randint(55,100)/10;ang1="x";ang2="";answer=(toDegrees(Math.acos(b/c))).toPrecision(3);ang1=ang1+"°";}else{a=randint(5,54)/10;b="";c=randint(55,100)/10;ang1="";ang2="x";answer=(toDegrees(Math.acos(a/c))).toPrecision(3);ang2=ang2+"°";}
tri=randint(1,8);question='<img width=300 src="http://www.jake4maths.com/generator/triangle'+tri+'.php?a='+a+'&b='+b+'&c='+c+'&ang1='+ang1+'&ang2='+ang2+'"><br>x = '+numberanswer(answer);description="Find the size of x. Note: Diagrams are not to scale. Give answer to at least 3 significant figures.";var array={question:question,answer:answer,description:description}
return array;}