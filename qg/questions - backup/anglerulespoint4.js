function anglerulespoint4(){rot=randint(0,360);a=randint(30,210);b=randint(a+30,240);c=randint(b+30,270);d=randint(c+30,300);e=randint(d+30,330);var answer=360-e;var question='<img width=300 src="https://www.jake4maths.com/generator/angles.php?rot='+rot+'&a='+a+'&b='+b+'&c='+c+'&d='+d+'&e='+e+'&anga=1&angb=1&angc=1&angd=1&ange=1&angf=2"><br>angle = '+numberanswer(answer);var description="Find the missing angle.";var array={question:question,answer:answer,description:description}
return array}