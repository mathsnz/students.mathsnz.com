/*
Sort:|0.01|
Question Type:|Number|
Question Name:|Decimal Add 1dp (#.# + #.#)|
*/

function numberdecimaladd1dp(){
	//variables for question
	var a = rand(1,9.9,0.1);
	var b = rand(1,9.9,0.1);
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
