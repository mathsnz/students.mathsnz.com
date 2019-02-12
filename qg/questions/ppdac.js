/*
Sort:|0.10|
Question Type:|Statistics|
Question Name:|Intro: PPDAC|
*/	

function ppdac(){var question='<div class=dropholder>'
question+='1. '+dragdropanswer('Problem')+'<br>';question+='2. '+dragdropanswer('Plan')+'<br>';question+='3. '+dragdropanswer('Data')+'<br>';question+='4. '+dragdropanswer('Analysis')+'<br>';question+='5. '+dragdropanswer('Conclusion')+'<br>';question+='</div>';question+='<div class=dragholder>';drops=[];drops.push('Problem');drops.push('Plan');drops.push('Data');drops.push('Analysis');drops.push('Conclusion');drops=shuffle(drops);drops.forEach(function(entry){question+=dragdropdrops(entry)});question+='</div>';var answer='Problem, Plan, Data, Analysis, Conclusion';var description="Drag and drop to put the words into the correct place:"
var array={question:question,answer:answer,description:description}
return array}