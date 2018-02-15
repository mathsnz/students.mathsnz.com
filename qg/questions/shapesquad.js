/*
Sort:|0.09|
Question Type:|Geometry|
Question Name:|Shapes - Quadrilaterals|
*/	

function shapesquad(){yesnoselect='<td><select class=select answer="'+encode64("Yes")+'" style="max-width:90%"><option></option><option>Yes</option><option>No</option></select>';noyesselect='<td><select class=select answer="'+encode64("No")+'" style="max-width:90%"><option></option><option>Yes</option><option>No</option></select>';names='<option></option><option>Square</option><option>Parallelogram</option><option>Kite</option><option>Rhombus</option><option>Rectangle</option><option>Trapezium</option>';var question='<table>';question+='<tr><th>Shape<th>Name<th>All sides equal?<th>Two pairs of parallel sides?<th>Adjacent Sides Equal<th>Angles 90 degrees?<th>Opposite Angles Equal';question+='<tr><td><img src="./images/quadrilateral-square.png" style="max-width:80px;max-height:80px;"><td>'+'<select class=select answer="'+encode64("Square")+'" style="max-width:90%">'+names+"</select>"+yesnoselect+yesnoselect+yesnoselect+yesnoselect+yesnoselect
question+='<tr><td><img src="./images/quadrilateral-kite.png" style="max-width:80px;max-height:80px;"><td>'+'<select class=select answer="'+encode64("Kite")+'" style="max-width:90%">'+names+"</select>"+noyesselect+noyesselect+yesnoselect+noyesselect+noyesselect
question+='<tr><td><img src="./images/quadrilateral-parallelogram.png" style="max-width:80px;max-height:80px;"><td>'+'<select class=select answer="'+encode64("Parallelogram")+'" style="max-width:90%">'+names+"</select>"+noyesselect+yesnoselect+noyesselect+noyesselect+yesnoselect
question+='<tr><td><img src="./images/quadrilateral-rectangle.png" style="max-width:80px;max-height:80px;"><td>'+'<select class=select answer="'+encode64("Rectangle")+'" style="max-width:90%">'+names+"</select>"+noyesselect+yesnoselect+noyesselect+yesnoselect+yesnoselect
question+='<tr><td><img src="./images/quadrilateral-rhombus.png" style="max-width:80px;max-height:80px;"><td>'+'<select class=select answer="'+encode64("Rhombus")+'" style="max-width:90%">'+names+"</select>"+yesnoselect+yesnoselect+yesnoselect+noyesselect+yesnoselect
question+='<tr><td><img src="./images/quadrilateral-trapezium.png" style="max-width:80px;max-height:80px;"><td>'+'<select class=select answer="'+encode64("Trapezium")+'" style="max-width:90%">'+names+"</select>"+noyesselect+noyesselect+noyesselect+noyesselect+noyesselect
question+='</table>';var answer='Square, Kite, Parallelogram, Rectangle, Rhombus, Trapezium';var description="Select the right options from the dropdowns below:"
var array={question:question,answer:answer,description:description,noworking:!0}
return array}