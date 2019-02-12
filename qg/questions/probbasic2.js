/*
Sort:|3.13|
Question Type:|Probability|
Question Name:|Finding Probability From Table or Graph 2|
*/	

function probbasic2(){
	var question='Looking at the table below, what is the probability<br><table class=border><tr><th>x<td>0<td>1<td>2<td>3<tr><th>P(X=x)<td>0.5<td>0.1<td>0.3<td>0.1</table><br>a.	P(X=1) '+numberanswer(0.1)+'<br>b.	P(there is exactly two) '+numberanswer(0.3)+'<br>c.	There is one or less? '+numberanswer(0.6)
	var answer='a. 0.1, b. 0.3, c. 0.6';
	var description="Answer the Questions Below"
	var array={question:question,answer:answer,description:description}
	return array
}