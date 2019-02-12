/*
Sort:|0.10|
Question Type:|Statistics|
Question Name:|Investigation Types|
*/	

function ppdac7investigationtypes(){var type=randint(1,4);if(type==1){type='Summary (Univariate data)';image='bar'+randint(1,9)}else if(type==2){type='Relationship (Bivariate data)';image='scatter'+randint(1,9)}else if(type==3){type='Comparison (Multivariate data)';image='dot'+randint(1,11)}else{type='Time series (data collected over time)';image='ts'+randint(1,5)}
var question='<img src="https://students.mathsnz.com/qg/images/'+image+'.png"><br><select class=select answer="'+encode64(type)+'">';question+='<option></option>';question+='<option>Summary (Univariate data)</option>';question+='<option>Relationship (Bivariate data)</option>';question+='<option>Comparison (Multivariate data)</option>';question+='<option>Time series (data collected over time)</option>';question+='</select>';var answer='';var description="Select the correct investigation type:"
var array={question:question,answer:answer,description:description}
return array}