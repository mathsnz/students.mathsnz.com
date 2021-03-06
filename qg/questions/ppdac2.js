/*
Sort:|0.10|
Question Type:|Statistics|
Question Name:|Intro: PPDAC - Detailed|
*/	

function ppdac2(){var question='<div class=dropholder>'
	question+='1. Problem:<br>';
	question+=dragdropanswer('Explain what the problem actually is|Look at how we can solve the problem')+'<br>';
	question+=dragdropanswer('Explain what the problem actually is|Look at how we can solve the problem')+'<br>';
	question+='2. Plan:<br>';
	question+=dragdropanswer('What do we want to measure?|How are we going to measure it?|Think about what other variables we need to look at')+'<br>';
	question+=dragdropanswer('What do we want to measure?|How are we going to measure it?|Think about what other variables we need to look at')+'<br>';
	question+=dragdropanswer('What do we want to measure?|How are we going to measure it?|Think about what other variables we need to look at')+'<br>';
	question+='3. Data:<br>';
	question+=dragdropanswer('Collect the data|Clean the data')+'<br>';
	question+=dragdropanswer('Collect the data|Clean the data')+'<br>';
	question+='4. Analysis:<br>';
	question+=dragdropanswer('Sort the data|Make tables and graphs|Look for patterns|Explore what is going on')+'<br>';
	question+=dragdropanswer('Sort the data|Make tables and graphs|Look for patterns|Explore what is going on')+'<br>';
	question+=dragdropanswer('Sort the data|Make tables and graphs|Look for patterns|Explore what is going on')+'<br>';
	question+=dragdropanswer('Sort the data|Make tables and graphs|Look for patterns|Explore what is going on')+'<br>';
	question+='5. Conclusion:<br>';
	question+=dragdropanswer('Answer the question|Explain what this means|This may lead to other questions')+'<br>';
	question+=dragdropanswer('Answer the question|Explain what this means|This may lead to other questions')+'<br>';
	question+=dragdropanswer('Answer the question|Explain what this means|This may lead to other questions')+'<br>';
	question+='</div>';
	question+='<div class=dragholder>';
	drops=[];
	drops.push('Explain what the problem actually is');
	drops.push('Look at how we can solve the problem');
	drops.push('What do we want to measure?');
	drops.push('How are we going to measure it?');
	drops.push('Think about what other variables we need to look at');
	drops.push('Collect the data');
	drops.push('Clean the data');
	drops.push('Sort the data');
	drops.push('Make tables and graphs');
	drops.push('Look for patterns');
	drops.push('Explore what is going on');
	drops.push('Answer the question');
	drops.push('Explain what this means');
	drops.push('This may lead to other questions');
	drops=shuffle(drops);
	drops.forEach(function(entry){
		question+=dragdropdrops(entry)
	});
	question+='</div>';
	var answer='1. Problem: Explain what the problem actually is, Look at how we can solve the problem. 2. Plan: How are we going to measure it? What do we want to measure? Think about what other variables we need to look at. 3. Data: Clean the data, Collect the data. 4. Analysis: Explore what is going on, Sort the data, Look for patterns, Make tables and graphs. 5. Conclusion: Answer the question, Explain what this means, This may lead to other questions';
	var description="Drag and drop to put the words into the correct place:"
	var array={question:question,answer:answer,description:description}
	return array
}