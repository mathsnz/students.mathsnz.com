/*
Sort:|3.13|
Question Type:|Probability|
Question Name:|When to add or multiply 2|
*/	

function probaddmult2(){
	var question='I have a number of 4 sided dice with numbers 1 to 4 on them. What is the probability:<br><br>a.	I get a total of 2 when I throw two dice (both land on 1)? '+numberanswer(0.0625)+'<br><br>b.	I get 3 or 4 when I throw once die? '+numberanswer(0.5)+'<br><br>c.	I get a total of 7 when I throw two dice? (either 3 and 4, or 4 and 3) '+numberanswer(0.125)+'<br><br>d.	I get a total of 6 when I throw two dice? '+numberanswer(0.1875)
	var answer='a. 0.0625, b. 0.5, c. 0.125, d. 0.1875';
	var description="Answer the Questions Below"
	var array={question:question,answer:answer,description:description}
	return array
}