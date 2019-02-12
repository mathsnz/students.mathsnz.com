/*
Sort:|3.13|
Question Type:|Probability|
Question Name:|When to add or multiply 1|
*/	

function probaddmult1(){
	var question='I have 10 marbles in a bag. They all have a letter on them, either A, B, C or D.<br><table class=border><tr><th>x<td>A<td>B<td>C<td>D<tr><th>P(X=x)<td>0.4<td>0.2<td>0.1<td>0.3</table>After drawing a ball out and looking at it, I always return it to the bag.<br><br>a.	What is the probability of pulling out a ball labelled C then a ball labelled D? '+numberanswer(0.03)+'<br><br>b.	What is the likelihood of pulling out a ball labelled C or a ball labelled D? '+numberanswer(0.4)+'<br><br>c.	Calculate the probability of pulling ball C out twice in a row. '+numberanswer(0.01)+'<br><br>d.	What is the probability you pull out the same letter twice in a row? '+numberanswer(0.3)
	var answer='a. 0.03, b. 0.4, c. 0.01, d. 0.3';
	var description="Answer the Questions Below"
	var array={question:question,answer:answer,description:description}
	return array
}