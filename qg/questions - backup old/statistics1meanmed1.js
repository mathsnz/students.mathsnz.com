/*
Sort:|1.10|
Question Type:|Statistics <standards>(1.10)</standards>|
Question Name:|Mean of 5 numbers|
*/

function statistics1meanmed1(){
  var arr = randarray(1,10,5);
  var list = arr.join(', ');
  var answer = calculatemean(arr).toPrecision(3);
  var question = list+'<br>mean = '+numberanswer(answer);
  
  var description = "Find the mean / median of the data below. Give answer to at least 3 significant figures.";
  var array = {
      question: question,
	  answer: answer,
	  description: description
    }
  return array;
}

