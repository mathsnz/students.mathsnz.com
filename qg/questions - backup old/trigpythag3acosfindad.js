/*
Sort:|1.07|
Question Type:|&#8894; Triangle <standards>(1.6, 1.7)</standards>|
Question Name:|Trigonometry Cos find Adjacent|
*/

function trigpythag3acosfindad(){
	choice = randint(1,2);
	if(choice=1){
		a="";
		b="x";
		c=randint(5,100)/10;
		ang1=randint(5,80);
		ang2="";
		answer=(Math.cos(toRadians(ang1))*c).toPrecision(3);
		ang1=ang1+"°";
	} else {
		a="x";
		b="";
		c=randint(5,100)/10;
		ang1="";
		ang2=randint(5,80);
		answer=(Math.cos(toRadians(ang2))*c).toPrecision(3);
		ang2=ang2+"°";
	}
	tri=randint(1,8);
	question = '<img width=300 src="https://www.jake4maths.com/generator/triangle'+tri+'.php?a='+a+'&b='+b+'&c='+c+'&ang1='+ang1+'&ang2='+ang2+'"><br>x = '+numberanswer(answer);
	description = "Find the size of x. Note: Diagrams are not to scale. Give answer to at least 3 significant figures.";
	var array = {
		question: question,
		answer: answer,
		description: description
	}
	return array;
}
