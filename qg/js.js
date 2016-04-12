
window.onerror=function(msg,url,line)
{$.post("http://tracking.jake4maths.com/generatorerror.php",{msg:encodeURIComponent(msg),url:encodeURIComponent(url),line:encodeURIComponent(line)});console.log('there was an error');return true;}
var loaded={};var questions;$(document).ready(function(){var pathArray=window.location.pathname.split('/');var newPathname="";for(i=0;i<pathArray.length-1;i++){newPathname+=pathArray[i];newPathname+="/";}
$('#selectors').load("allquestions.html",function(){if(window.location.hash.length){questions=window.location.hash.substring(1).split(',');window.location.hash='';checknewquest();}
$('.addquestion').click(function(){var w=$(this).parent().children('.addselect').first().val();addquestion(w,1);});});$('#linkscreen').attr("href",window.location.origin+newPathname+'onscreen.html#');$('#linkprint').attr("href",window.location.origin+newPathname+'print.html#');$('#linkcreator').attr("href",window.location.origin+newPathname+'creator.html#');});function checknewquest(){if(questions.length>0){quest=questions[0];questions.shift();addquestion(quest,1);}}
function addquestion(w,e){if(!loaded[w]){if($('.addselect option[value="'+w+'"]').length>0){$.getScript('./questions/'+w+'.js',function(){processquestion(w,e);loaded[w]='yes';checknewquest();});}}else{processquestion(w,e);checknewquest();}}
function processquestion(w,e){if(e==1){$.get("http://tracking.jake4maths.com/newgeneratorget.php",{question:w});var _href=$("#linkprint").attr("href")+w+',';$('#linkprint').attr("href",_href);var _href=$("#linkscreen").attr("href")+w+',';$('#linkscreen').attr("href",_href);var _href=$("#linkcreator").attr("href")+w+',';$('#linkcreator').attr("href",_href);window.location.hash+=w+',';}
var array=window[w]();if(typeof array==='object'){var question=array['question'];var answer=array['answer'];var description=array['description'];var lastdescription=$('.questiondescription').last().text();if(lastdescription!=description){$('#questions').append('<li class=questiondescription>'+description+'</li>');}
if(question.indexOf("class=checktext")>=0||question.indexOf("class=checknumber")>=0||question.indexOf("class=checkmulti")>=0){question='<li class=questionli><div class=remove>&#10006;</div><div class=question><div class=questiontext>'+question+'</div><div class=workinglabel>Working / Notes</div><div class=working contenteditable=true></div><div class=check><p>Check</p></div><div class=attemptholder style="color:green;">Attempt <span class=attempt>1</span>/3</div></div></li>';}else{question='<li class=questionli><div class=remove>&#10006;</div><div class=question><div class=questiontext>'+question+'</div><div class=workinglabel>Working / Notes</div><div class=working contenteditable=true></div><div class=check><p>Done</p></div><div class=attemptholder style="color:green; display:none;">Attempt <span class=attempt>#</span>/#</div></div></li>';}
$('#questions').append(question);$('#answers').append('<li>'+answer+'</li>');preventmove();}else{addquestion(array,0);}}
function textanswer(answer){return'<div contenteditable="true" class=checktext answer="'+encode64(answer)+'"></div>';}
function multianswer(answer){answers=[]
for(index in answer){answers[index]=encode64((""+answer[index]).replace(/\s+/g,''));}
return'<div contenteditable="true" class=checkmulti answer="'+answers.join("|")+'"></div>';}
function numberanswer(answer){return'<div contenteditable="true" class=checknumber answer="'+encode64(answer)+'"></div>';}
function strReplaceAll(string,Find,Replace){try{return string.replace(new RegExp(Find,"gi"),Replace);}catch(ex){return string;}}
$(document).on('click','.check',function(){var done='yes';var answers=0;var attempts=$(this).parent().children('.attemptholder').first().children('.attempt').first().text();$(this).parent().children('.questiontext').first().children('.checktext, .checknumber, .checkmulti').each(function(){answers=answers+1;if($(this).hasClass('checknumber')){var thiscurrentlyis=encode64(parseFloat($(this).text()).toPrecision(3));}else if($(this).hasClass('checkmulti')){var thiscurrentlyis=encode64($(this).text().replace(/\s+/g,''));}else{var thiscurrentlyis=encode64($(this).text());}
var thisshouldbe=$(this).attr("answer").split("|");if(thisshouldbe.indexOf(thiscurrentlyis)>-1){$(this).removeClass('checktext');$(this).removeClass('checknumber');$(this).removeClass('checkmulti');$(this).removeClass('checkedwrong');$(this).addClass('checkeda');$(this).removeAttr('contenteditable').blur();}else{$(this).addClass('checkedwrong');done='no';}});if(done=='yes'||attempts==3){$(this).parent().children('.attemptholder').first().text('Correct on Attempt '+attempts+'/3');$(this).removeClass('check');$(this).addClass('checked');$(this).removeAttr('style');$(this).parent().children('.questiontext').first().children('.buttons').first().remove();$(this).parent().children('.questiontext').first().children('.checktext, .checknumber, .checkmulti').each(function(){if($(this).text().length==0){$(this).text('not answered');}
$(this).removeAttr('contenteditable').blur();})
$(this).parent().children('.attemptholder').first().removeAttr('style');if(attempts==3&&done!='yes'){$(this).parent().children('.attemptholder').first().text('No Attempts Left');}
if(answers==0){$(this).parent().children('.attemptholder').first().text('');}}else{$(this).parent().children('.attemptholder').first().children('.attempt').first().text(add(attempts,1));if(attempts==1){$(this).parent().children('.attemptholder').first().css('color','orange');$(this).css('background-color','#fec');}else if(attempts==2){$(this).parent().children('.attemptholder').first().css('color','red');$(this).css('background-color','#fcc');}}});$(document).on('click','.remove',function(){var num=$('.remove').index(this);var questions=window.location.hash.substring(1).split(',');var hash=''
$.each(questions,function(i,w){if(i!=num){hash+=w+',';}});var pathArray=window.location.pathname.split('/');var newPathname="";for(i=0;i<pathArray.length-1;i++){newPathname+=pathArray[i];newPathname+="/";}
$('#linkscreen').attr("href",window.location.origin+newPathname+'onscreen.html#'+hash);$('#linkprint').attr("href",window.location.origin+newPathname+'print.html#'+hash);$('#linkcreator').attr("href",window.location.origin+newPathname+'creator.html#'+hash);window.location.hash=hash;if($(this).parent().prev('li').hasClass('questiondescription')&&$(this).parent().next('li').hasClass('questiondescription')){$(this).parent().prev('li').remove();if($(this).parent().prevAll('.questiondescription').first().text()==$(this).parent().next('li').text()){$(this).parent().next('li').remove();}}
if($(this).parent().prev('li').is('.questiondescription:last')&&$(this).parent().is('.questionli:last')){$(this).parent().prev('li').remove();}
$(this).parent().remove();$('#showhideanswers').remove();$('#answerholder').remove();});$(document).on('keypress','.checktext, .checknumber, .checkmulti',function(e){return e.which!=13;});function rand(min,max,step){var num=new BigNumber.random();num=(max-min)*num+min;num=Math.floor(num/step);num=num*step;num=parseFloat(num).toPrecision(Math.max(Math.floor(Math.log(1/step)),1));return new BigNumber(num);}
function randint(min,max){return Math.floor((Math.random()*(max-min+1))+min);}
function randarray(min,max,num){i=0;arr=[];while(i<num){arr.push(randint(min,max));i++;}
return arr;}
function randletter(){letters="abcdegmswxyz";l=randint(0,letters.length-1);l=letters.substring(l,l+1);return l;}
var isChange;window.onbeforeunload=function(){if(isChange){return"You're about to end your session, are you sure?";}}
function preventmove(){$('.checktext,.checknumber,.checkmulti,.working').bind('blur keyup paste copy cut mouseup',function(){isChange=true;});}
function createCookie(name,value,days){var expires;if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}else{expires="";}
document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value)+expires+"; path=/";}
function readCookie(name){var nameEQ=encodeURIComponent(name)+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)===' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)===0)return decodeURIComponent(c.substring(nameEQ.length,c.length));}
return null;}
function eraseCookie(name){createCookie(name,"",-1);}
function addbuttons(){buttons='<br><br><span class="buttons">';numbers="0123456";while(numbers.length>0){n=numbers.substr(0,1);numbers=numbers.substr(1);buttons+='<span class=button onclick="addchar($(this))"> '+n+'</span>';}
buttons+='<br>';letters="789";while(letters.length>0){l=letters.substr(0,1);letters=letters.substr(1);buttons+='<span class=button onclick="addchar($(this))"> '+l+'</span>';}
syms=['+','-','&#215;','&#247;'];for(index in syms){s=syms[index];buttons+='<span class=button onclick="addchar($(this))"> '+s+' </span>';}
buttons+='<br>';letters="abcdegm";while(letters.length>0){l=letters.substr(0,1);letters=letters.substr(1);buttons+='<span class=button onclick="addchar($(this))"> '+l+'</span>';}
buttons+='<br>';letters="swxyz";while(letters.length>0){l=letters.substr(0,1);letters=letters.substr(1);buttons+='<span class=button onclick="addchar($(this))"> '+l+'</span>';}
buttons+='<span class=button style="width:48px;" onclick="clearbox($(this))">Clear</span>';buttons+='<br>';pow=[2,3,4,5,6,7,8];for(index in pow){p=pow[index];buttons+='<span class=button onclick="addchar($(this))">&#9633;<sup>'+p+'</sup> </span>';}
buttons+='</span>';return buttons;}
function addchar(item){item.parent().siblings('.checktext, .checknumber, .checkmulti').first().append(item.html().substring(1));setEndOfContenteditable(item.parent().siblings('.checktext, .checknumber, .checkmulti').first().get(0));isChange=true;}
function clearbox(item){item.parent().siblings('.checktext, .checknumber, .checkmulti').first().text(" ");setEndOfContenteditable(item.parent().siblings('.checktext, .checknumber, .checkmulti').first().get(0));}
function setEndOfContenteditable(contentEditableElement)
{var range,selection;if(document.createRange)
{range=document.createRange();range.selectNodeContents(contentEditableElement);range.collapse(false);selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);}
else if(document.selection)
{range=document.body.createTextRange();range.moveToElementText(contentEditableElement);range.collapse(false);range.select();}}
function add(a,b){return new BigNumber(a).add(b);}
function subtract(a,b){return new BigNumber(a).minus(b);}
function toRadians(angle){return angle*(Math.PI/180);}
function toDegrees(angle){return angle/(Math.PI/180);}
function calculatemean(values){count=values.length;sum=0;for(var index in values){sum=add(sum,values[index]);}
return parseFloat((sum/count).toPrecision(5));}
function median(values){count=values.length;values.sort(function(a,b){return a-b});n=count/2-0.5;if(Math.ceil(n)==n){themedian=values[n];}else{themedian=add(values[n-0.5],values[n+0.5])/2;}
return parseFloat(Number(themedian).toPrecision(10));}