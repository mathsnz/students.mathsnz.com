/*
Sort:|3.13|
Question Type:|Probability|
Question Name:|Finding Probability From Table or Graph 4|
*/	

function probbasic4(){
	var question='Looking at the table below, what is the probability<br><table class=border><tr><th>x<td>0<td>1<td>2<td>3<td>4<tr><th>P(X=x)<td>0.15<td>0.05<td>0.3<td>0.2<td>0.3</table><br>a.	P(X=4) '+numberanswer(0.3)+'<br>b.	P(there is exactly three) '+numberanswer(0.2)+'<br>c.	There is three or less? '+numberanswer(0.7)
	var answer='a. 0.3, b. 0.2, c. 0.7';
	var description="Answer the Questions Below"
	var array={question:question,answer:answer,description:description}
	return array
}