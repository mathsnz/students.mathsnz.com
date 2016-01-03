/*
Sort:|0.01|
Question Type:|Number|
Question Name:|Decimal Add 2dp (#.## + #.##)|
*/

function numberdecimaladd2dp(){
	//variables for question
	var a = rand(1,9.99,0.01);
	var b = rand(1,9.99,0.01);
	var c = add(a,b);
	
	//leading text 
	var description = "Answer these questions:"
	
	//question
	var question = a+' + '+b+' = '+ textanswer(c);
	
	//answer
	var answer = c;
	
	//compile to send back
	var array = {
      question: question,
	  answer: answer,
	  description: description
    }
	return array;
}