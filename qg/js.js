window.onerror=function(msg,url,line)
{
	$.post("https://tracking.jake4maths.com/generatorerror.php",{msg:encodeURIComponent(msg),url:encodeURIComponent(url),line:encodeURIComponent(line)});
	console.log('there was an error');
	return false;
}
var loaded={};
var questions;

$(document).ready(function(){
	var pathArray=window.location.pathname.split('/');
	var newPathname="";
	for(i=0;i<pathArray.length-1;i++){
		newPathname+=pathArray[i];newPathname+="/"
	}
	$('#selectors').load("allquestions.html?cachebuster="+new Date().getTime(),function(){
		//load questions from url
		if(window.location.hash.length){
			questions=window.location.hash.substring(1).split(',');
			window.location.hash='';
			checknewquest();
		}
		$('.addquestion').click(function(){
			var w=$(this).parent().children('.addselect').first().val();
			addquestion(w,1);
		})
	});
	$('#linkscreen').attr("href",window.location.origin+newPathname+'onscreen.html#');
	$('#linkprint').attr("href",window.location.origin+newPathname+'print.html#');
	$('#linkcreator').attr("href",window.location.origin+newPathname+'creator.html#');
});

function checknewquest(){
	if(questions.length>0){
		quest=questions[0];
		questions.shift();
		addquestion(quest,1);
	}
}

//add question
function addquestion(w,e){
	if(!loaded[w]){
		if($('.addselect option[value="'+w+'"]').length>0){
			$.getScript('./questions/'+w+'.js',function(){
				processquestion(w,e);
				loaded[w]='yes';
				checknewquest();
			})
		}
	} else {
		processquestion(w,e);
		checknewquest();
	}
}

//question processing
function processquestion(w,e){
	if(e==1){
		$.get("https://tracking.jake4maths.com/newgeneratorget.php",{question:w});
		var _href=$("#linkprint").attr("href")+w+',';
		$('#linkprint').attr("href",_href);
		var _href=$("#linkscreen").attr("href")+w+',';
		$('#linkscreen').attr("href",_href);
		var _href=$("#linkcreator").attr("href")+w+',';
		$('#linkcreator').attr("href",_href);
		window.location.hash+=w+',';
	}
	var array=window[w]();
	if(typeof array==='object'){
		var question=array.question;
		var answer=array.answer;
		var description=array.description;
		var lastdescription=$('.questiondescription').last().text();
		if(lastdescription!=$('<div>'+description+'</div>').text()){
			$('#questions').append('<li class=questiondescription>'+description+'</li>');
		}
		hideworking=''
		if(array.noworking){
			hideworking=' style="display:none"';
		}
		if(question.indexOf("class=checktext")>=0 || question.indexOf("class=checknumber")>=0 || question.indexOf("class=select")>=0 || question.indexOf("class=checkmulti")>=0 || question.indexOf("class=checkalgebra")>=0 || question.indexOf("class=drop")>=0 || question.indexOf("class=clickanswer")>=0){
			question='<li class=questionli><div class=remove>&#10006;</div><div class=question><div class=questiontext>'+question+'</div><div '+hideworking+' class=workinglabel>Working / Notes</div><div '+hideworking+' class=working contenteditable=true></div><div class=check><p>Check</p></div><div class=attemptholder style="color:green;">Attempt <span class=attempt>1</span>/3</div></div></li>';
		} else if (question.substr(0,9)=='<b>Lesson'){
			question=question+"<br><br>"
		} else {
			question='<li class=questionli><div class=remove>&#10006;</div><div class=question><div class=questiontext>'+question+'</div><div '+hideworking+' class=workinglabel>Working / Notes</div><div '+hideworking+' class=working contenteditable=true></div><div class=check><p>Done</p></div><div class=attemptholder style="color:green; display:none;">Attempt <span class=attempt>#</span>/#</div></div></li>';
		}
		$('#questions').append(question);
		$('#answers').append('<li>'+answer+'</li>');
		preventmove();
		checkalgebra();
	} else {
		addquestion(array,0);
	}
	$('.clickers tr td:not(.home)').click(function(){
		$(this).toggleClass('clicked');
	})
	$('.isopaper tr td').click(function(){
		$(this).toggleClass('clicked');
	})
}

//text answer
function textanswer(answer){
	return '<div contenteditable="true" class=checktext answer="'+encode64(answer)+'"></div>';
}

function multianswer(answer){
	answers=[]
	for(index in answer){
		answers[index]=encode64((""+answer[index]).replace(/\s+/g,''))
	}
	return '<div contenteditable="true" class=checkmulti answer="'+answers.join("|")+'"></div>';
}

function algebraanswer(answer){
	return '<div contenteditable="true" class=checkalgebra answer="'+CaesarCipher(answer,1)+'"></div><br><div class="algebradisplay"></div>';
}

function checkalgebra(){
	$('.checkalgebra').bind('blur keyup paste copy cut mouseup',function(){
		var math=$(this).parent().children('.algebradisplay').first();
		math.css('opacity','0');
		math.html('`'+$(this).text()+'`');
		math.css('opacity','1');
	})
}

function numberanswer(answer){
	return '<div contenteditable="true" class=checknumber answer="'+encode64(parseFloat(answer))+'"></div>';
}

function dragdropanswer(answer){
	answer=answer.split('|');
	a=[];
	answer.forEach(function(entry){a.push(encode64($("<div/>").html(entry).text()))});
	a=a.join('|');
	return '<div class=drop id=drop'+randint(0,10000000000)+' ondrop="drop(event)" ondragover="allowDrop(event)" answer="'+(a)+'"></div>';
}

function dragdropdrops(entry){
	return '<div class=draghome id=drop'+randint(0,10000000000)+' ondrop="drop(event)" ondragover="allowDrop(event)"><div class=drag id=drag'+randint(0,10000000000)+' draggable="true" ondragstart="drag(event)">'+entry+'</div></div>';
}

function clickanswer(entry,correct){
	return '<div class=clickanswer answer='+correct+' onclick="toggleclick($(this))">'+entry+'</div>';
}

function toggleclick(item){
	if(item.hasClass('clicked')){
		item.removeClass('clicked')
	} else {
		item.addClass('clicked')
	}
}

//replace items in text
function strReplaceAll(string,Find,Replace){
	try{
		return string.replace(new RegExp(Find,"gi"),Replace);
	} catch(ex) {
		return string;
	}
}

//check
$(document).on('click','#checkall',function(){
	$(".check").each(function(){
		$(this).trigger("click");
	})
});

$(document).on('click','.check',function(){
	var done='yes';
	var answers=0;
	var algebracorrect='no';
	var attempts=$(this).parent().children('.attemptholder').first().children('.attempt').first().text();
	$(this).parent().children('.questiontext').first().find('.checktext, .checknumber, .checkmulti ,.checkalgebra, .drop, .select, .clickanswer').each(function(){
		answers=answers+1;
		if($(this).hasClass('checknumber')){
			var thiscurrentlyis=encode64(parseFloat(parseFloat($(this).text()).toPrecision(3)));
		} else if($(this).hasClass('checkmulti')){
			var thiscurrentlyis=encode64($(this).text().replace(/\s+/g,''));
		} else if($(this).hasClass('checkalgebra')){
			var thiscurrentlyis=$(this).text();
			thiscurrentlyis=algebra.parse(thiscurrentlyis);
			thisshouldbe=algebra.parse(CaesarCipher($(this).attr("answer"),-1));
			algebraanswer=thiscurrentlyis.subtract(thisshouldbe).toString();
			if(algebraanswer==0){algebracorrect='yes'}
		} else if($(this).hasClass('select')){
			var thiscurrentlyis=encode64($(this).val());
		} else if($(this).hasClass('clickanswer')){
			if($(this).hasClass('clicked')){
				var thiscurrentlyis="correct";
			} else {
				var thiscurrentlyis="incorrect";
			}
		} else if($(this).text().replace(/\s+/g,'').length==0){
			thiscurrentlyis="";
		} else {
			var thiscurrentlyis=encode64($(this).text());
		}
		var thisshouldbe=$(this).attr("answer").split("|");
		console.log(thisshouldbe);
		console.log(thiscurrentlyis);
		if(thisshouldbe.indexOf(thiscurrentlyis)>-1 || algebracorrect=='yes'){
			if($(this).hasClass('select')){
				$(this).replaceWith('<div class="checkeda">'+$(this).val()+'</div>');
			}
			$(this).removeClass('checktext');
			$(this).removeClass('checknumber');
			$(this).removeClass('checkmulti');
			$(this).removeClass('checkalgebra');
			$(this).removeClass('checkedwrong');
			$(this).addClass('checkeda');
			$(this).find('[draggable]').removeAttr('draggable');
			$(this).removeAttr('contenteditable').blur()
		} else {
			if(attempts==3){
				if($(this).hasClass('select')){
					$(this).replaceWith('<div class="checkedwrong">'+$(this).val()+'</div>')
				}
			}
			$(this).addClass('checkedwrong');done='no';
		}
	});
	if(done=='yes'||attempts==3){
		$(this).parent().children('.attemptholder').first().text('Correct on Attempt '+attempts+'/3');
		$(this).removeClass('check');
		$(this).addClass('checked');
		$(this).removeAttr('style');
		$(this).parent().children('.questiontext').first().find('.clickanswer').removeAttr('onclick');
		$(this).parent().children('.questiontext').first().find('.clicked.clickanswer[answer=correct]').css('border','3px solid #0f0');
		$(this).parent().children('.questiontext').first().find('.clicked.clickanswer[answer=incorrect]').css('border','3px solid #f00');
		$(this).parent().children('.questiontext').first().find('.clickanswer').css('display','inline-block');
		$(this).parent().children('.questiontext').first().find('.clicked').removeClass('clicked');
		$(this).parent().children('.questiontext').first().children('.buttons').first().remove();
		$(this).parent().children('.questiontext').first().children('.checktext, .checknumber, .checkmulti, .checkalgebra').each(function(){
			if($(this).text().length==0){
				$(this).text('not answered');
			}
			$(this).removeAttr('contenteditable').blur();
			if($(this).hasClass('checknumber')){
				$(this).after("<br><div style='display:inline-block;font-size:80%;'>Should have been "+decode64($(this).attr("answer"))+'</div>');
			}
		})
		$(this).parent().children('.attemptholder').first().removeAttr('style');
		if(attempts==3 && done!='yes'){
			$(this).parent().children('.attemptholder').first().text('No Attempts Left')
		}
		if(answers==0){
			$(this).parent().children('.attemptholder').first().text('')
		}
	} else {
		$(this).parent().children('.attemptholder').first().children('.attempt').first().text(add(attempts,1));
		if(attempts==1){
			$(this).parent().children('.attemptholder').first().css('color','orange');
			$(this).css('background-color','#fec')
		} else if(attempts==2){
			$(this).parent().children('.attemptholder').first().css('color','red');
			$(this).css('background-color','#fcc');
		}
	}
});

//remove question
$(document).on('click','.remove',function(){
	var num=$('.remove').index(this);
	var questions=window.location.hash.substring(1).split(',');
	var hash=''
	$.each(questions,function(i,w){
		if(i!=num){
			hash+=w+',';
		}
	});
	var pathArray=window.location.pathname.split('/');
	var newPathname="";
	for(i=0;i<pathArray.length-1;i++){
		newPathname+=pathArray[i];
		newPathname+="/";
	}
	$('#linkscreen').attr("href",window.location.origin+newPathname+'onscreen.html#'+hash);
	$('#linkprint').attr("href",window.location.origin+newPathname+'print.html#'+hash);
	$('#linkcreator').attr("href",window.location.origin+newPathname+'creator.html#'+hash);
	window.location.hash=hash;
	if($(this).parent().prev('li').hasClass('questiondescription') && $(this).parent().next('li').hasClass('questiondescription')){
		$(this).parent().prev('li').remove();
		if($(this).parent().prevAll('.questiondescription').first().text()==$(this).parent().next('li').text()){
			$(this).parent().next('li').remove()
		}
	}
	if($(this).parent().prev('li').is('.questiondescription:last') && $(this).parent().is('.questionli:last')){
		$(this).parent().prev('li').remove()
	}
	$(this).parent().remove();
	$('#showhideanswers').remove();
	$('#answerholder').remove()
});

//prevent new line in answer
$(document).on('keypress','.checktext, .checknumber, .checkmulti, .checkalgebra',function(e){
	return e.which!=13;
});

//random number generator
function rand(min,max,step){
	var num=new BigNumber.random();
	num=(max-min)*num+min;
	num=Math.floor(num/step);
	num=num*step;
	num=parseFloat(num).toPrecision(Math.max(Math.floor(Math.log(1/step)),1));
	return new BigNumber(num);
}

function randint(min,max){
	return Math.floor((Math.random()*(max-min+1))+min);
}

function randarray(min,max,num){
	i=0;
	arr=[];
	while(i<num){
		arr.push(randint(min,max));
		i++
	}
	return arr
}
function randletter(){
	letters="abcdegmswxyz";
	l=randint(0,letters.length-1);
	l=letters.substring(l,l+1);
	return l;
}

var isChange;

window.onbeforeunload=function(){
	if(isChange){
		return "You're about to end your session, are you sure?";
	}
}

function preventmove(){
	$('.checktext,.checknumber,.checkmulti,.working,.checkalgebra').bind('blur keyup paste copy cut mouseup',function(){
		isChange=!0
	})
}

//handle cookies
function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function addbuttons(){
	buttons = '<br><br><span class="buttons">';
	numbers="0123456";
	while (numbers.length>0){
		n=numbers.substr(0,1);
		numbers=numbers.substr(1);
		buttons+='<span class=button onclick="addchar($(this))"> '+n+'</span>';
	}
	buttons+='<br>';
	letters="789";
	while (letters.length>0){
		l=letters.substr(0,1);
		letters=letters.substr(1);
		buttons+='<span class=button onclick="addchar($(this))"> '+l+'</span>';
	}
	syms = ['+','-','&#215;','&#247;'];
	for (index in syms){
		s=syms[index];
		buttons+='<span class=button onclick="addchar($(this))"> '+s+' </span>';
	}
	buttons+='<br>';
	letters="abcdegm";
	while (letters.length>0){
		l=letters.substr(0,1);
		letters=letters.substr(1);
		buttons+='<span class=button onclick="addchar($(this))"> '+l+'</span>';
	}
	buttons+='<br>';
	letters="swxyz";
	while (letters.length>0){
		l=letters.substr(0,1);
		letters=letters.substr(1);
		buttons+='<span class=button onclick="addchar($(this))"> '+l+'</span>';
	}
	buttons+='<span class=button style="width:48px;" onclick="clearbox($(this))">Clear</span>';
	buttons+='<br>';
	pow = [2,3,4,5,6,7,8];
	for (index in pow){
		p=pow[index];
		buttons+='<span class=button onclick="addchar($(this))">&#9633;<sup>'+p+'</sup> </span>';
	}
	buttons += '</span>';
	return buttons;
}

function addchar(item){
	item.parent().siblings('.checktext, .checknumber, .checkmulti, .checkalgebra').first().append(item.html().substring(1));
	setEndOfContenteditable(item.parent().siblings('.checktext, .checknumber, .checkmulti, .checkalgebra').first().get(0));
	isChange = true;
}

function clearbox(item){
	item.parent().siblings('.checktext, .checknumber, .checkmulti, .checkalgebra').first().text(" ");
	setEndOfContenteditable(item.parent().siblings('.checktext, .checknumber, .checkmulti, .checkalgebra').first().get(0));
}

function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    {
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}

function CaesarCipher(str, num) {

    str = str.toLowerCase();
    var result = '';
    var charcode = 0;

    for (i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

}

//maths functions
function add(a,b){
	return new BigNumber(a).add(b);
}
function subtract(a,b){
	return new BigNumber(a).minus(b);
}
function toRadians (angle) {
  return angle * (Math.PI / 180);
}
function toDegrees (angle) {
  return angle / (Math.PI / 180);
}

function calculatemean(values){
 count = values.length;
 sum=0;
 for (var index in values){
	 sum = add(sum,values[index]);
 }
 return parseFloat((sum/count).toPrecision(5));
}

function median(values){
 count = values.length;
 values.sort(function(a, b){return a-b});
 n = count/2-0.5;
 if(Math.ceil(n)==n){
	 themedian = values[n];
 } else {
	 themedian = add(values[n-0.5],values[n+0.5])/2;
 }
 return parseFloat(Number(themedian).toPrecision(10));
}

function allowDrop(ev){
	ev.preventDefault()
}
function drag(ev){
	ev.dataTransfer.setData("text",ev.target.id)
}
function drop(ev){
	ev.preventDefault();
	var data=ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data))
}

function shuffle(array){
	var currentIndex=array.length,temporaryValue,randomIndex;
	while(0!==currentIndex){
		randomIndex=Math.floor(Math.random()*currentIndex);
		currentIndex-=1;
		temporaryValue=array[currentIndex];
		array[currentIndex]=array[randomIndex];array[randomIndex]=temporaryValue
	}
	return array;
}

function patterntable(width,height,home,filled){
	table="<table class='clickers'>";
	i=1;
	r=0;
	while(r<height){
		table+='<tr>';
		c=0;
		while(c<width){
			table+='<td class="'+i;
			console.log(home);
			if($.inArray(i,filled)>-1){
				table+=' clicked'
			}
			if($.inArray(i,home)>-1){
				table+=' home'
			}
			table+='">';
			console.log(i);
			c++;
			i++
		}
		r++
	}
	table+='</table>';
	return table
}

function transgrid(id){
	var canvas=$("#"+id)[0];
	var ctx=canvas.getContext('2d');
	ctx.fillStyle='#fff';
	ctx.fillRect(0,0,500,300);
	ctx.strokeStyle="#888";
	ctx.lineWidth=2;
	drawgrid(ctx,10,490,10,290);
	$("#"+id).click(function(e){
		var ctx=$(this)[0].getContext('2d');
		var rect=$(this)[0].getBoundingClientRect();
		var x=e.clientX-rect.left,y=e.clientY-rect.top
		x=Math.floor((x-10)/20)*20+20;
		y=Math.floor((y-10)/20)*20+20;
		if(y<20||x<20||x>480||y>280){
			return
		}
		var c=ctx.getImageData(x,y,1,1).data;
		if(c[0]<180){
			ctx.fillStyle='#ffffff'
		}else{
			ctx.fillStyle='#00A400'
		}
		ctx.fillRect(x-9,y-9,18,18)
	}
)}

function colorsquare(x,y,id){
	var ctx=$('#'+id)[0].getContext('2d');
	ctx.fillStyle='#0066A4';
	ctx.fillRect(x-9,y-9,18,18)
}

function colordot(x,y,id){
	var ctx=$('#'+id)[0].getContext('2d');
	ctx.beginPath();
	ctx.arc(x,y,5,0,Math.PI*2,!0);
	ctx.fillStyle='#F00';
	ctx.fill();
	ctx.closePath()
}

function colorline(x,y,xx,yy,id){
	var ctx=$('#'+id)[0].getContext('2d');
	ctx.strokeStyle="#000";
	ctx.lineWidth=4;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(xx,yy);
	ctx.stroke();
	ctx.strokeStyle="#888";
	ctx.lineWidth=2;
}

function drawgrid(ctx,left,right,topgrid,bottom){
	y=topgrid;
	while(y<=bottom){
		ctx.beginPath();
		ctx.moveTo(left,y);
		ctx.lineTo(right,y);
		ctx.stroke();
		y+=20
	}
	x=left
	while(x<=right){
		ctx.beginPath();
		ctx.moveTo(x,topgrid);
		ctx.lineTo(x,bottom);
		ctx.stroke();
		x+=20
	}
}

function drawsidetopview(id){
	var canvas=$("#"+id)[0];
	var ctx=canvas.getContext('2d');
	ctx.fillStyle='#fff';
	ctx.fillRect(0,0,500,300);
	ctx.fillStyle="#000";
	ctx.font="15px Arial";
	ctx.textAlign="center";
	ctx.fillText("Top View",120,25);
	ctx.fillText("Front View",120,165);
	ctx.fillText("Side View",360,165);
	ctx.strokeStyle="#888";
	ctx.lineWidth=2;
	drawgrid(ctx,10,230,30,150);
	drawgrid(ctx,10,230,170,290);
	drawgrid(ctx,250,470,170,290);
	$("#"+id).click(function(e){
		var ctx=$(this)[0].getContext('2d');
		var rect=$(this)[0].getBoundingClientRect();
		var x=e.clientX-rect.left,y=e.clientY-rect.top
		x=Math.floor((x-10)/20)*20+20;
		y=Math.floor((y-10)/20)*20+20;
		if(y<40||x<20||y==160||x==240||x>460){
			return
		}
		var c=ctx.getImageData(x,y,1,1).data;
		if(c[0]<180){
			ctx.fillStyle='#ffffff';
		} else {
			ctx.fillStyle='#00A400';
		}
		ctx.fillRect(x-9,y-9,18,18)
	})
}

function drawisopaper(id){
	var canvas=$("#"+id)[0];
	var ctx=canvas.getContext('2d');
	ctx.fillStyle='#fff'
	ctx.fillRect(0,0,500,300);y=10;lastx=10
	while(y<300){
		if(lastx==10){
			lastx=40
		} else {
			lastx=10
		}
		x=lastx;
		while(x<500){
			ctx.beginPath();
			ctx.arc(x,y,2,0,Math.PI*2,!0);
			ctx.fillStyle='#000'
			ctx.fill();
			ctx.closePath();
			x+=60
		}
		y+=15
	}
	$("#"+id).click(function(e){
		var ctx=$(this)[0].getContext('2d');
		var rect=$(this)[0].getBoundingClientRect();
		var x=e.clientX-rect.left,y=e.clientY-rect.top
		checkx=Math.floor((x+2)/5)-2;
		if(Math.floor(checkx/6)==checkx/6){
			x=(checkx+2)*5;
			if(checkx/12==Math.floor(checkx/12)){
				y=Math.floor((y+30)/30)*30-20
			} else {
				y=Math.floor((y+15)/30)*30-5
			}
			var c=ctx.getImageData(x,y,1,1).data;
			if(c[0]<180){
				ctx.strokeStyle="#fff";
				ctx.lineWidth=4
			} else {
				ctx.strokeStyle="#000";
				ctx.lineWidth=2
			}
			ctx.beginPath();
			ctx.moveTo(x,y-13);
			ctx.lineTo(x,y+13);
			ctx.stroke();
			return
		}
		x=Math.floor((x+20)/30)*30-5;
		y=Math.floor((y+6)/15)*15+3;
		var c=ctx.getImageData(x,y,1,1).data;
		if(c[0]<180){
			ctx.strokeStyle="#fff";
			ctx.lineWidth=4
		} else {
			ctx.strokeStyle="#000";
			ctx.lineWidth=2
		}
		if((Math.floor((y-3)/30)==(y-3)/30 && Math.floor((x+5)/60)==(x+5)/60) || (Math.floor((y-3)/30)!=(y-3)/30 && Math.floor((x+5)/60)!=(x+5)/60)){
			ctx.beginPath();
			ctx.moveTo(x+13,y-7);
			ctx.lineTo(x-13,y+7);
			ctx.stroke()
		} else {
			ctx.beginPath();
			ctx.moveTo(x-13,y-7);
			ctx.lineTo(x+13,y+7);
			ctx.stroke()
		}
	})
}