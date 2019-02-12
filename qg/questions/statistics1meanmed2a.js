/*
Sort:|1.10|
Question Type:|Statistics <standard>(1.10)</standard>|
Question Name:|Median of 6 numbers|
*/	

function statistics1meanmed2a(){var arr=randarray(1,10,6);var list=arr.join(', ');var answer=median(arr).toPrecision(3);var question=list+'<br>median = '+numberanswer(answer);var description="Find the mean / median of the data below. Give answer to at least 3 significant figures.";var array={question:question,answer:answer,description:description}
return array}