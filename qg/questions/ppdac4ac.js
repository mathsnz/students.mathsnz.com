function ppdac4ac(){var question='<div class=dropholder>'
question+='<b>Analysis:</b><br><img src="./images/9.10-bar.png"><img src="./images/9.10-pie.png">';question+=dragdropanswer('More students have blue eyes.')+'<br>';question+=dragdropanswer('We know this as the blue bar is tallest.')+'<br>';question+=dragdropanswer('The blue sector is also biggest in the pie chart.')+'<br><br>';question+='<b>Conclusion:</b><br>';question+=dragdropanswer('We found that our class is more likely to have blue eyes (13 out of 25)')+'<br>';question+=dragdropanswer('than to have brown eyes (9 out of 25).')+'<br>';question+=dragdropanswer('There were also 3 students in our class with green eyes.');question+='</div>';question+='<div class=dragholder>';drops=[];drops.push('More students have blue eyes.');drops.push('We know this as the blue bar is tallest.');drops.push('The blue sector is also biggest in the pie chart.');drops.push('We found that our class is more likely to have blue eyes (13 out of 25)');drops.push('than to have brown eyes (9 out of 25).');drops.push('There were also 3 students in our class with green eyes.');drops=shuffle(drops);drops.forEach(function(entry){question+=dragdropdrops(entry)});question+='</div>';var answer='Analysis: More students have blue eyes. We know this as the blue bar is tallest. The blue sector is also biggest in the pie chart. Conclusion: We found that our class is more likely to have blue eyes (13 out of 25) than to have brown eyes (9 out of 25). There were also 3 students in our class with green eyes.';var description="Drag and drop to put the words into the correct place:"
var array={question:question,answer:answer,description:description}
return array}