
function algebra2liketerms6(){a=randint(2,3);b=randint(1,2);letter1=randletter();letter2=letter1;while(letter2==letter1){letter2=randletter();}
terms=[];i=0;total1=0;while(i<a){num=randint(-7,7);while(num==0){num=randint(-7,7);}
total1+=num;if(num==1){num="";}
if(num==-1){num="-";}
terms.push(num+letter1);i++;}
i=0;total2=0;while(i<b){num=randint(-7,7);while(num==0){num=randint(-7,7);}
total2+=num;if(num==1){num="";}
if(num==-1){num="-";}
terms.push(num+letter2);i++;}
terms.sort(function(){return 0.5-Math.random()});var question=terms.shift();for(index in terms){term=terms[index];if(term.substring(0,1)=="-"){question+=' - '+term.substring(1);}else{question+=' + '+term;}}
var answer=[];if(a==1){a=""}
if(b==1){b=""}
if(total1==1||total1==-1){t1=""}else{t1=Math.abs(total1)};if(total1==-1){ft1="-"}else{ft1=total1};if(ft1==1){ft1=""}
if(total2==1||total2==-1){t2=""}else{t2=Math.abs(total2)};if(total2==-1){ft2="-"}else{ft2=total2};if(ft2==1){ft2=""}
if(total2<0){answer[0]=ft1+letter1+" - "+t2+letter2;}else{answer[0]=ft1+letter1+" + "+t2+letter2;}
if(total1<0){answer[1]=ft2+letter2+" - "+t1+letter1;}else{answer[1]=ft2+letter2+" + "+t1+letter1;}
if(total1==0){answer[0]=ft2+letter2;answer[1]=ft2+letter2;}
if(total2==0){answer[0]=ft1+letter1;answer[1]=ft1+letter1;}
if(total1==0&&total2==0){answer[0]=0;answer[1]=0;}
question+=" = "+multianswer(answer)+addbuttons()+addbuttons();var description="Simplify the following expressions.";var array={question:question,answer:answer[0],description:description}
return array;}