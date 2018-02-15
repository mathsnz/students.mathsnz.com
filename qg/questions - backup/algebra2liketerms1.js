function algebra2liketerms1(){a=randint(2,5);i=1;letter1=randletter();var question=letter1;while(i<a){question+=" + "+letter1;i++}
answer=[];answer[0]=a+letter1;question+=" = "+multianswer(answer)+addbuttons();var description="Simplify the following expressions.";var array={question:question,answer:answer,description:description}
return array}