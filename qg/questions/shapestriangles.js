function shapestriangles(){var question='<div class=dropholder><table>';question+='<tr><th>Shape<th>Properties<th>Name';question+='<tr><td><img src="https://students.mathsnz.com/qg/images/triangle-regular.png"><td>'+dragdropanswer('All sides and angles the same')+'<td>'+dragdropanswer('Equalateral');question+='<tr><td><img src="https://students.mathsnz.com/qg/images/triangle-isosceles.png"><td>'+dragdropanswer('Two sides and two angles the same')+'<td>'+dragdropanswer('Isosceles');question+='<tr><td><img src="https://students.mathsnz.com/qg/images/triangle-scalene.png"><td>'+dragdropanswer('No sides or angles the same')+'<td>'+dragdropanswer('Scalene');question+='<tr><td><img src="https://students.mathsnz.com/qg/images/triangle-rightangle.png"><td>'+dragdropanswer('Has a right angle')+'<td>'+dragdropanswer('Right Angle');question+='</table></div>';question+='<div class=dragholder>';drops=[];drops.push('Right Angle');drops.push('Equalateral');drops.push('Isosceles');drops.push('Scalene');drops.push('All sides and angles the same');drops.push('Two sides and two angles the same');drops.push('No sides or angles the same');drops.push('Has a right angle');drops=shuffle(drops);drops.forEach(function(entry){question+=dragdropdrops(entry)});question+='</div>';var answer='Equalateral, Isosceles, Scalene, Right Angle';var description="Drag and drop to put the words into the correct place:"
var array={question:question,answer:answer,description:description}
return array}