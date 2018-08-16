/*
Sort:|3.13|
Question Type:|Probability|
Question Name:|When to add or multiply 4|
*/	

function probaddmult4(){
	var question='A student has gone into a multi choice test without doing any preparation. There are two questions he has no idea on, therefore needs to guess the answer to the questions.<br>One has 5 possible answers, with two of them being correct, and the other one has 4 possible answers, with only one of the answers being correct.<br>What is the probability:<br><br>a.	In the question with 5 possible answers, they get it correct? '+numberanswer(0.4)+'<br><br>b.	They get both questions correct? '+numberanswer(0.1)+'<br><br>c.	The get one of the two questions correct? '+numberanswer(0.45)
	var answer='a. 0.4, b. 0.1, c. 0.45';
	var description="Answer the Questions Below"
	var array={question:question,answer:answer,description:description}
	return array
}