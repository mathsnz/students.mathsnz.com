/*
Sort:|0.3|
Question Type:|TEG|
Question Name:|Patterns - Change Shape - 3 Shapes|
*/	

function patterns1changeshape2(){
	question = "";
	i=0;
	shape1sides = randint(3,10);
	shape2sides = shape1sides;
	while(shape1sides==shape2sides){
		shape2sides = randint(3,10);
	}
	shape3sides = shape1sides;
	while(shape1sides==shape3sides || shape2sides==shape3sides){
		shape3sides = randint(3,10);
	}
	color = randint(0,255)+","+randint(0,255)+","+randint(0,255);
	while(i<2){
		question += "<img src='https://www.jake4maths.com/generator/shape.php?border=0,0,0&fill="+color+"&points="+shape1sides+"&rotation=180' style='width:100px;height:100px;'>";
		question += "<img src='https://www.jake4maths.com/generator/shape.php?border=0,0,0&fill="+color+"&points="+shape2sides+"&rotation=180' style='width:100px;height:100px;'>";
		question += "<img src='https://www.jake4maths.com/generator/shape.php?border=0,0,0&fill="+color+"&points="+shape3sides+"&rotation=180' style='width:100px;height:100px;'>";
		i++;
	}
	question += "<br>What comes next:<br>";
	clicks=[];
	clicks.push(["<img src='https://www.jake4maths.com/generator/shape.php?border=0,0,0&fill="+color+"&points="+shape1sides+"&rotation=180' style='width:100px;height:100px;'>",'correct']);
	clicks.push(["<img src='https://www.jake4maths.com/generator/shape.php?border=0,0,0&fill="+color+"&points="+shape2sides+"&rotation=180' style='width:100px;height:100px;'>",'incorrect']);
	clicks.push(["<img src='https://www.jake4maths.com/generator/shape.php?border=0,0,0&fill="+color+"&points="+shape3sides+"&rotation=180' style='width:100px;height:100px;'>",'incorrect']);
	clicks=shuffle(clicks);
	clicks.forEach(function(entry){
		question+=clickanswer(entry[0],entry[1])
	});
	answer = "<img src='https://www.jake4maths.com/generator/shape.php?border=0,0,0&fill="+color+"&points="+shape1sides+"&rotation=180' style='width:100px;height:100px;'>";
	description = "Click the shape that comes next:";
	var array={question:question,answer:answer,description:description}
	return array
}