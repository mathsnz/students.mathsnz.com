/*
Sort:|3.13|
Question Type:|Probability|
Question Name:|Matching Tables and Graphs|
*/	

function probmatchtablegraph(){
	var question='<div class=dropholder style="font-size:70%;line-height:1em;">'
	question+='<img src="./images/probmatchgraph1.png"><br>'+dragdropanswer('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<tr><th>P(X=x)<td>0.2<td>0.3<td>0.1<td>0.4</table>')+'<br>';
	question+='<img src="./images/probmatchgraph2.png"><br>'+dragdropanswer('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<tr><th>P(X=x)<td>0.5<td>0.1<td>0.3<td>0.1</table>')+'<br>';
	question+='<img src="./images/probmatchgraph3.png"><br>'+dragdropanswer('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<tr><th>P(X=x)<td>0.4<td>0.2<td>0.3<td>0.1</table>')+'<br>';
	question+='<img src="./images/probmatchgraph4.png"><br>'+dragdropanswer('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<td>4<tr><th>P(X=x)<td>0.1<td>0.5<td>0.2<td>0.15<td>0.05</table>')+'<br>';
	question+='<img src="./images/probmatchgraph5.png"><br>'+dragdropanswer('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<td>4<tr><th>P(X=x)<td>0.15<td>0.05<td>0.3<td>0.2<td>0.3</table>')+'<br>';
	question+='<img src="./images/probmatchgraph6.png"><br>'+dragdropanswer('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<td>4<tr><th>P(X=x)<td>0.05<td>0.25<td>0.35<td>0.05<td>0.3</table>')+'<br>';
	question+='</div>';
	
	question+='<div class=dragholder style="font-size:70%;line-height:1em;">';
	
	drops=[];
	drops.push('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<tr><th>P(X=x)<td>0.2<td>0.3<td>0.1<td>0.4</table>');
	drops.push('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<tr><th>P(X=x)<td>0.5<td>0.1<td>0.3<td>0.1</table>');
	drops.push('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<tr><th>P(X=x)<td>0.4<td>0.2<td>0.3<td>0.1</table>');
	drops.push('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<td>4<tr><th>P(X=x)<td>0.1<td>0.5<td>0.2<td>0.15<td>0.05</table>');
	drops.push('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<td>4<tr><th>P(X=x)<td>0.15<td>0.05<td>0.3<td>0.2<td>0.3</table>');
	drops.push('<table class=border><tr><th>x<td>0<td>1<td>2<td>3<td>4<tr><th>P(X=x)<td>0.05<td>0.25<td>0.35<td>0.05<td>0.3</table>');
	drops=shuffle(drops);
	drops.forEach(function(entry){
		question+=dragdropdrops(entry)
	});
	question+='</div>';
	var answer='Deterministic Model: A model that will always produce the same result for a given set of input values. Does not include elements of randomness.<br>Experiment: A process or study that results in the collection of data, the outcome of which is unknown.<br>Experimental Probability : An estimate of the probability that an event will occur calculated from trials of a probability activity by dividing the number of times the event occurred by the total number of trials.<br>Probabilistic Model: A model that takes uncertainty in outcomes into account. This is often done by associating a probability with each possible outcome.<br>Randomness: The idea that although each outcome of a process has a fixed probability, the actual outcome of any trial of the process cannot be predicted.<br>Simulation: A technique for imitating the behaviour of a situation that involves elements of chance or a probability activity.<br>Theoretical Probability: The probability that an event will occur based on a probability model.<br>True Probability: The actual probability that an event will occur.';
	var description="Drag and drop to put the definitions into the correct place:"
	var array={question:question,answer:answer,description:description,noworking:1}
	return array
}