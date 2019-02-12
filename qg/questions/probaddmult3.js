/*
Sort:|3.13|
Question Type:|Probability|
Question Name:|When to add or multiply 3|
*/	

function probaddmult3(){
	var question='The number of spas sold during a week at a successful spa shop is shown in the table below.<br><table class=border><tr><th>x<td>0<td>1<td>2<td>3<td>4<tr><th>P(X=x)<td>0.1<td>0.4<td>0.3<td>0.1<td>k</table><br>a.	What is the missing value (k)? '+numberanswer(0.1)+'<br><br>b.	What is the probability of selling 2 or 3 spas in a week? '+numberanswer(0.4)+'<br><br>c.	What is the probability of selling 2 spas in two consecutive weeks? '+numberanswer(0.09)+'<br><br>d.	What is the probability of selling no spas 3 weeks in a row? '+numberanswer(0.001)
	var answer='a. 0.1, b. 0.4, c. 0.09, d. 0.001';
	var description="Answer the Questions Below"
	var array={question:question,answer:answer,description:description}
	return array
}