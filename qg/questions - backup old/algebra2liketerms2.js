/*
Sort:|1.02|
Question Type:|Algebra <standards>(1.2)</standards>|
Question Name:|Combining Like Terms Without Coefficient - 2 Variables|
*/

function algebra2liketerms2(){
  a=randint(2,4);
  b=randint(1,4);
  letter1=randletter();
  letter2=letter1;
  while(letter2==letter1){
	  letter2=randletter();
  }
  letters=[];
  i=0;
  while(i<a){
	  letters.push(letter1);
	  i++;
  }
  i=0;
  while(i<b){
	  letters.push(letter2);
	  i++;
  }
  letters.sort(function() { return 0.5 - Math.random() }); // shuffle the array
  var question = letters.join(" + ");
  var answer = [];
  if(a==1){a=""}
  if(b==1){b=""}
  answer[0] = a + letter1 + " + " + b + letter2;
  answer[1] = b + letter2 + " + " + a + letter1;
  question += " = "+multianswer(answer)+addbuttons();

  var description = "Simplify the following expressions.";
  var array = {
      question: question,
	  answer: answer[0],
	  description: description
    }
  return array;
}