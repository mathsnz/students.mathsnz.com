function sidetopview(){var id=Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,20);var question="<canvas id='"+id+"' class='sidetopview' width='280' height='220'>Canvas not supported</canvas><script>drawsidetopviewsmall('"+id+"')</script>";var answer='';var description='Here is some blank paper. Click where you want to draw a square. To remove a sqaure click it again.';var array={question:question,answer:answer,description:description,noworking:!0}
return array}
function drawsidetopviewsmall(id){var canvas=$("#"+id)[0];var ctx=canvas.getContext('2d');ctx.fillStyle='#fff'
ctx.fillRect(0,0,500,300);topgrid=10
bottom=130
left=10
right=210
ctx.fillStyle="#000";ctx.font="15px Arial";ctx.textAlign="center";ctx.fillText("Top View",70,25);ctx.fillText("Front View",70,125);ctx.fillText("Side View",210,125);ctx.strokeStyle="#888";ctx.lineWidth=2;drawgrid(ctx,10,130,30,110);drawgrid(ctx,10,130,130,210);drawgrid(ctx,150,270,130,210);$("#"+id).click(function(e){var ctx=$(this)[0].getContext('2d');var rect=$(this)[0].getBoundingClientRect();var x=e.clientX-rect.left,y=e.clientY-rect.top
x=Math.floor((x-10)/20)*20+20;y=Math.floor((y-10)/20)*20+20;var c=ctx.getImageData(x,y,1,1).data;if(c[0]<180){ctx.fillStyle='#ffffff'}else{ctx.fillStyle='#00A400'}
ctx.fillRect(x-9,y-9,18,18)})}