
function numberdecimaladd2dp(){var a=rand(1,9.99,0.01);var b=rand(1,9.99,0.01);var c=add(a,b);var description="Answer these questions:"
var question=a+' + '+b+' = '+textanswer(c);var answer=c;var array={question:question,answer:answer,description:description}
return array;}