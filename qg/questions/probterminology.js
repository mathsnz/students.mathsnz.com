/*
Sort:|3.13|
Question Type:|Probability|
Question Name:|Terminology|
*/	

function probterminology(){
	var question='<div class=dropholder style="font-size:70%;line-height:1em;">'
	question+='Deterministic Model:<br>'+dragdropanswer('A model that will always produce the same result for a given set of input values. Does not include elements of randomness.')+'<br>';
	question+='Experiment:<br>'+dragdropanswer('A process or study that results in the collection of data, the outcome of which is unknown.')+'<br>';
	question+='Experimental Probability:<br>'+dragdropanswer('An estimate of the probability that an event will occur calculated from trials of a probability activity by dividing the number of times the event occurred by the total number of trials.')+'<br>';
	question+='Probabilistic Model:<br>'+dragdropanswer('A model that takes uncertainty in outcomes into account. This is often done by associating a probability with each possible outcome.')+'<br>';
	question+='Randomness:<br>'+dragdropanswer('The idea that although each outcome of a process has a fixed probability, the actual outcome of any trial of the process cannot be predicted.')+'<br>';
	question+='Simulation:<br>'+dragdropanswer('A technique for imitating the behaviour of a situation that involves elements of chance or a probability activity.')+'<br>';
	question+='Theoretical Probability:<br>'+dragdropanswer('The probability that an event will occur based on a probability model.')+'<br>';
	question+='True Probability:<br>'+dragdropanswer('The actual probability that an event will occur.')+'<br>';
	question+='</div>';
	
	question+='<div class=dragholder style="font-size:70%;line-height:1em;">';
	
	drops=[];
	drops.push('A model that will always produce the same result for a given set of input values. Does not include elements of randomness.');
	drops.push('A process or study that results in the collection of data, the outcome of which is unknown.');
	drops.push('An estimate of the probability that an event will occur calculated from trials of a probability activity by dividing the number of times the event occurred by the total number of trials.');
	drops.push('A model that takes uncertainty in outcomes into account. This is often done by associating a probability with each possible outcome.');
	drops.push('The idea that although each outcome of a process has a fixed probability, the actual outcome of any trial of the process cannot be predicted.');
	drops.push('A technique for imitating the behaviour of a situation that involves elements of chance or a probability activity.');
	drops.push('The probability that an event will occur based on a probability model.');
	drops.push('The actual probability that an event will occur.');
	drops=shuffle(drops);
	drops.forEach(function(entry){
		question+=dragdropdrops(entry)
	});
	question+='</div>';
	var answer='Deterministic Model: A model that will always produce the same result for a given set of input values. Does not include elements of randomness.<br>Experiment: A process or study that results in the collection of data, the outcome of which is unknown.<br>Experimental Probability : An estimate of the probability that an event will occur calculated from trials of a probability activity by dividing the number of times the event occurred by the total number of trials.<br>Probabilistic Model: A model that takes uncertainty in outcomes into account. This is often done by associating a probability with each possible outcome.<br>Randomness: The idea that although each outcome of a process has a fixed probability, the actual outcome of any trial of the process cannot be predicted.<br>Simulation: A technique for imitating the behaviour of a situation that involves elements of chance or a probability activity.<br>Theoretical Probability: The probability that an event will occur based on a probability model.<br>True Probability: The actual probability that an event will occur.';
	var description="Drag and drop to put the definitions into the correct place:"
	var array={question:question,answer:answer,description:description}
	return array
}