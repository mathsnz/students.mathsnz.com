/*
Sort:|1.06|
Question Type:|&#8894; Triangle <standard>(1.6, 1.7)</standard>|
Question Name:|Pythagoras Find Side|
*/	

function trigpythag1bfindside(){a=rand(0.5,7,0.1);c=rand(parseFloat(a),10,0.1);b="x";tri=randint(1,8);var answer=Math.sqrt(Math.pow(c,2)-Math.pow(a,2)).toPrecision(3);var question='<img width=300 src="https://www.jake4maths.com/generator/triangle'+tri+'.php?a='+a+'&b='+b+'&c='+c+'&ang1=&ang2="><br>x = '+numberanswer(answer);var description="Find the size of x. Note: Diagrams are not to scale. Give answer to at least 3 significant figures.";var array={question:question,answer:answer,description:description}
return array}