/*
Sort:|1.02|
Question Type:|Algebra <standard>(1.2)</standard>|
Question Name:|Algebra Test|
*/	

function algebra0test(){a=randint(2,3);b=randint(1,2);letter1=randletter();letter2=letter1;while(letter2==letter1){letter2=randletter()}
terms=[];i=0;total1=0;while(i<a){num=randint(-7,7);while(num==0){num=randint(-7,7)}
total1+=num;if(num==1){num=""}
if(num==-1){num="-"}
terms.push(num+letter1);i++}
i=0;total2=0;while(i<b){num=randint(-7,7);while(num==0){num=randint(-7,7)}
total2+=num;if(num==1){num=""}
if(num==-1){num="-"}
terms.push(num+letter2);i++}
terms.sort(function(){return 0.5-Math.random()});terms.sort(function(){return 0.5-Math.random()});var question=terms.shift();for(index in terms){term=terms[index];if(term.substring(0,1)=="-"){question+=' - '+term.substring(1)}else{question+=' + '+term}}
answer=question;question="<span class=prettyalgebra>`"+question+"`</span> = "+algebraanswer(answer);var description="Simplify the following expressions.";var array={question:question,answer:answer,description:description}
return array}