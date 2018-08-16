/*
Sort:|3.13|
Question Type:|Probability|
Question Name:|Finding Probability From Table or Graph 1|
*/	

function probbasic1(){
	var question='Looking at the graph below, what is the probability<br><img src="./images/probmatchgraph1.png"><br>a.	P(X=0) '+numberanswer(0.2)+'<br>b.	P(there is exactly one) '+numberanswer(0.3)+'<br>c.	There are two or more? '+numberanswer(0.5)
	var answer='a. 0.2, b. 0.3, c. 0.5';
	var description="Answer the Questions Below"
	var array={question:question,answer:answer,description:description}
	return array
}