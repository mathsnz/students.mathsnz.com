function algebra2liketerms4(){a=randint(2,3);b=randint(1,2);letter1=randletter();letter2=letter1;while(letter2==letter1){letter2=randletter()}
terms=[];i=0;total1=0;while(i<a){num=randint(1,7);total1+=num;if(num==1){num=""}
terms.push(num+letter1);i++}
i=0;total2=0;while(i<b){num=randint(1,7);total2+=num;if(num==1){num=""}
terms.push(num+letter2);i++}
terms.sort(function(){return 0.5-Math.random()});var question=terms.join(" + ");var answer=[];if(a==1){a=""}
if(b==1){b=""}
answer[0]=total1+letter1+" + "+total2+letter2;answer[1]=total2+letter2+" + "+total1+letter1;question+=" = "+multianswer(answer)+addbuttons();var description="Simplify the following expressions.";var array={question:question,answer:answer[0],description:description}
return array}