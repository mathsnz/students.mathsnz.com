
function statistics1meanmed2(){var arr=randarray(1,10,5);var list=arr.join(', ');var answer=median(arr).toPrecision(3);var question=list+'<br>median = '+numberanswer(answer);var description="Find the mean of the data below. Give answer to at least 3 significant figures.";var array={question:question,answer:answer,description:description}
return array;}