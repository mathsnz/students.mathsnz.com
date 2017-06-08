function sidetopview(){var id=Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,20);var question="<canvas id='"+id+"' class='sidetopview' width='500' height='300'>Canvas not supported</canvas><script>drawsidetopview('"+id+"')</script>";var answer='';var description='Here is some blank paper. Click where you want to draw a square. To remove a sqaure click it again.';var array={question:question,answer:answer,description:description,noworking:!0}
return array}
function drawgrid(ctx,left,right,topgrid,bottom){y=topgrid;while(y<=bottom){ctx.beginPath();ctx.moveTo(left,y);ctx.lineTo(right,y);ctx.stroke();y+=20}
x=left
while(x<=right){ctx.beginPath();ctx.moveTo(x,topgrid);ctx.lineTo(x,bottom);ctx.stroke();x+=20}}
function drawsidetopview(id){var canvas=$("#"+id)[0];var ctx=canvas.getContext('2d');ctx.fillStyle='#fff'
ctx.fillRect(0,0,500,300);topgrid=10
bottom=130
left=10
right=210
ctx.fillStyle="#000";ctx.font="15px Arial";ctx.textAlign="center";ctx.fillText("Top View",120,25);ctx.fillText("Front View",120,165);ctx.fillText("Side View",360,165);ctx.strokeStyle="#888";ctx.lineWidth=2;drawgrid(ctx,10,230,30,150);drawgrid(ctx,10,230,170,290);drawgrid(ctx,250,470,170,290);$("#"+id).click(function(e){var ctx=$(this)[0].getContext('2d');var rect=$(this)[0].getBoundingClientRect();var x=e.clientX-rect.left,y=e.clientY-rect.top
x=Math.floor((x-10)/20)*20+20;y=Math.floor((y-10)/20)*20+20;if(y<40||x<20||y==160||x==240||x>460){return}
var c=ctx.getImageData(x,y,1,1).data;if(c[0]<180){ctx.fillStyle='#ffffff'}else{ctx.fillStyle='#00A400'}
ctx.fillRect(x-9,y-9,18,18)})}