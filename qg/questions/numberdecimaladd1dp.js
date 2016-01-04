
function numberdecimaladd1dp(){var a=rand(1,9.9,0.1);var b=rand(1,9.9,0.1);var c=add(a,b);var description="Answer these questions:"
var question=a+' + '+b+' = '+textanswer(c);var answer=c;var array={question:question,answer:answer,description:description}
return array;}