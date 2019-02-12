/*
Sort:|1.02|
Question Type:|Algebra <standards>(1.2)</standards>|
Question Name:|Combining Like Terms with Positive Coefficients - 1 Variable|
*/

function algebra2liketerms3(){
  a=randint(2,5);
  i=1;
  letter1=randletter();
  total=0;
  num = randint(1,7);
  total+=num;
  if(num==1){num="";}
  var question = num+letter1;
  while(i<a){
	  num = randint(1,7);
  total+=num;
	  if(num==1){num="";}
	  question += " + "+num+letter1;
	  i++;
  }
  answer=[];
  answer[0] = total+letter1;
  question += " = "+multianswer(answer)+addbuttons();
  
  var description = "Simplify the following expressions.";
  var array = {
      question: question,
	  answer: answer,
	  description: description
    }
  return array;
}
