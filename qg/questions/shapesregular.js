function shapesregular(){var question='<div class=dropholder><table>';question+='<tr><th>Shape<th>Sides<th>Name';question+='<tr><td><img src="https://students.mathsnz.com/qg/images/regularshapes-3.png"><td>'+dragdropanswer('3')+'<td>'+dragdropanswer('Triangle');question+='<tr><td><img src="https://students.mathsnz.com/qg/images/regularshapes-4.png"><td>'+dragdropanswer('4')+'<td>'+dragdropanswer('Square');question+='<tr><td><img src="https://students.mathsnz.com/qg/images/regularshapes-5.png"><td>'+dragdropanswer('5')+'<td>'+dragdropanswer('Pentagon');question+='<tr><td><img src="https://students.mathsnz.com/qg/images/regularshapes-6.png"><td>'+dragdropanswer('6')+'<td>'+dragdropanswer('Hexagon');question+='<tr><td><img src="https://students.mathsnz.com/qg/images/regularshapes-7.png"><td>'+dragdropanswer('7')+'<td>'+dragdropanswer('Heptagon');question+='<tr><td><img src="https://students.mathsnz.com/qg/images/regularshapes-8.png"><td>'+dragdropanswer('8')+'<td>'+dragdropanswer('Octagon');question+='<tr><td><img src="https://students.mathsnz.com/qg/images/regularshapes-10.png"><td>'+dragdropanswer('10')+'<td>'+dragdropanswer('Decagon');question+='<tr><td><img src="https://students.mathsnz.com/qg/images/regularshapes-12.png"><td>'+dragdropanswer('12')+'<td>'+dragdropanswer('Dodecagon');question+='</table></div>';question+='<div class=dragholder>';drops=[];drops.push('Triangle');drops.push('Square');drops.push('Pentagon');drops.push('Hexagon');drops.push('Heptagon');drops.push('Octagon');drops.push('Decagon');drops.push('Dodecagon');drops.push('3');drops.push('4');drops.push('5');drops.push('6');drops.push('7');drops.push('8');drops.push('10');drops.push('12');drops=shuffle(drops);drops.forEach(function(entry){question+=dragdropdrops(entry)});question+='</div>';var answer='Problem, Plan, Data, Analysis, Conclusion';var description="Drag and drop to put the words into the correct place:"
var array={question:question,answer:answer,description:description}
return array}