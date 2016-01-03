var loaded = {};

$( document ).ready(function() {
	var pathArray = window.location.pathname.split( '/' );
	var newPathname = "";
	for (i = 0; i < pathArray.length-1; i++) {
	  newPathname += pathArray[i];
	  newPathname += "/";
	}
	$('#selectors').load( "allquestions.html" , function() {
		//load questions from url
		if( window.location.hash.length){
			var questions=window.location.hash.substring(1).split(',');
			$.each(questions, function(i,w){
				addquestion(w);
			});
		}
		window.location.hash='';
	
		$('.addquestion').click(function() {
			var w=$(this).parent().children('.addselect').first().val();
			addquestion(w);
		});
	});
	$('#linkscreen').attr("href", window.location.origin+newPathname+'onscreen.html#');
	$('#linkprint').attr("href", window.location.origin+newPathname+'print.html#');
	$('#linkcreator').attr("href", window.location.origin+newPathname+'creator.html#');
});


//function for button
function buttonaddquestion(){
	var w=$('#questiontoadd option:selected').val();
	addquestion(w);
}


//add question
function addquestion(w){
	if(!loaded[w]){
		if($('.addselect option[value="'+w+'"]').length>0){
			$.getScript('./questions/'+w+'.js', function(){
				processquestion(w);
				loaded[w]='yes';
			});
		}
	} else {
		processquestion(w);
	}
}

//question processing
function processquestion(w) {
	var array = window[w]();
	var question = array['question'];
	var answer = array['answer'];
	var description = array['description'];
	var lastdescription = $('.questiondescription').last().text();
	if(lastdescription != description) {
		$('#questions').append('<li class=questiondescription>'+description+'</li>');
	}
	question = '<li class=questionli><div class=remove>&#10006;</div><div class=question><div class=questiontext>' + question + '</div><div class=workinglabel>Working / Notes</div><div class=working contenteditable=true></div><div class=check><p>Check</p></div><div class=attemptholder style="color:green;">Attempt <span class=attempt>1</span>/3</div></div></li>';
	$('#questions').append(question);
	$('#answers').append('<li>'+answer+'</li>');
	var _href = $("#linkprint").attr("href") + w + ',';
	$('#linkprint').attr("href", _href);
	var _href = $("#linkscreen").attr("href") + w + ',';
	$('#linkscreen').attr("href", _href);
	var _href = $("#linkcreator").attr("href") + w + ',';
	$('#linkcreator').attr("href", _href);
	window.location.hash+=w+',';
}

//text answer
function textanswer(answer){
	return '<div contenteditable="true" class=checktext answer="'+encode64(answer)+'"></div>';
}

//replace items in text
function strReplaceAll(string, Find, Replace) {
    try {
        return string.replace( new RegExp(Find, "gi"), Replace );
    } catch(ex) {
        return string;
    }
}

//check
$(document).on('click', '.check', function () {
	var done='yes';
	var attempts = $(this).parent().children('.attemptholder').first().children('.attempt').first().text();
    $(this).parent().children('.questiontext').first().children('.checktext').each(function(){
		var thiscurrentlyis = encode64($(this).text());
		var thisshouldbe = $(this).attr("answer");
		if(thiscurrentlyis == thisshouldbe){
			$(this).removeClass('checktext');
			$(this).removeClass('checkedtextwrong');
			$(this).addClass('checkedtext');
			$(this).removeAttr('contenteditable').blur();
		} else {
			$(this).addClass('checkedtextwrong');
			done = 'no';
		}
	});
	if(done=='yes' || attempts == 3){
		$(this).parent().children('.attemptholder').first().text('Correct on Attempt '+attempts+'/3');
		$(this).removeClass('check');
		$(this).addClass('checked');
		$(this).removeAttr('style');
		$(this).parent().children('.working').each(function(){
			$(this).removeAttr('contenteditable').blur();
		})
		$(this).parent().children('.questiontext').first().children('.checktext').each(function(){
			if($(this).text().length == 0){
				$(this).text('not answered');	
			}
			$(this).removeAttr('contenteditable').blur();
		})
		$(this).parent().children('.attemptholder').first().removeAttr('style');
		if(attempts == 3 && done != 'yes'){
			$(this).parent().children('.attemptholder').first().text('No Attempts Left');
		}
	} else {
		$(this).parent().children('.attemptholder').first().children('.attempt').first().text(add(attempts,1));
		if(attempts==1){
			$(this).parent().children('.attemptholder').first().css('color', 'orange');
			$(this).css('background-color','#fec');
		} else if (attempts == 2){
			$(this).parent().children('.attemptholder').first().css('color', 'red');
			$(this).css('background-color','#fcc');
		}
	}
});


//remove question
$(document).on('click', '.remove', function () {
	var num = $('.remove').index(this);
	var questions=window.location.hash.substring(1).split(',');
	var hash = ''
	$.each(questions, function(i,w){
		if(i != num){
			hash += w + ',';
		}
	});
	var pathArray = window.location.pathname.split( '/' );
	var newPathname = "";
	for (i = 0; i < pathArray.length-1; i++) {
	  newPathname += pathArray[i];
	  newPathname += "/";
	}
	$('#linkscreen').attr("href", window.location.origin+newPathname+'onscreen.html#'+hash);
	$('#linkprint').attr("href", window.location.origin+newPathname+'print.html#'+hash);
	$('#linkcreator').attr("href", window.location.origin+newPathname+'creator.html#'+hash);
	window.location.hash=hash;
	if($(this).parent().prev('li').hasClass('questiondescription') && $(this).parent().next('li').hasClass('questiondescription')){
		$(this).parent().prev('li').remove();
		if($(this).parent().prevAll('.questiondescription').first().text() == $(this).parent().next('li').text()){
			$(this).parent().next('li').remove();
		}
	}
	if($(this).parent().prev('li').is('.questiondescription:last')){
		$(this).parent().prev('li').remove();
	}
	$(this).parent().remove();
});

//prevent new line in answer
$(document).on('keypress', '.checktext', function(e){
    return e.which != 13; 
}); 

//random number generator
function rand(min,max,step){
	var num = new BigNumber.random();
	num = (max-min)*num+min;
	num = Math.floor(num/step);
	num = num * step;
	num = parseFloat(num).toPrecision(Math.floor(Math.log(1/step)));
	return new BigNumber(num);
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

//maths functions
function add(a,b){
	return new BigNumber(a).add(b);
}
function subtract(a,b){
	return new BigNumber(a).minus(b);
}
