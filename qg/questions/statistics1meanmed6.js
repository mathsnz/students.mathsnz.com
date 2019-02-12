/*
Sort:|1.10|
Question Type:|Statistics <standard>(1.10)</standard>|
Question Name:|Mean and Median of between 15 and 20 numbers|
*/	

function statistics1meanmed6(){var number=randint(15,20);var arr=randarray(10,100,number);var list=arr.join(', ');var answer1=median(arr).toPrecision(3);var answer2=calculatemean(arr).toPrecision(3);var question=list+'<br>mean = '+numberanswer(answer2)+'<br>median = '+numberanswer(answer1);var description="Find the mean / median of the data below. Give answer to at least 3 significant figures.";var array={question:question,answer:'mean: '+answer2+', median: '+answer1,description:description}
return array}