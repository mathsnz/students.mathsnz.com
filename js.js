$(document).ready(function() {
	$(window).resize(function(){ $('#nav2').css("display", "none");});
	$('head').append('<link rel="apple-touch-icon" href="http://www.mathsnz.com/icon.png">');
	$('body').append('<img src="https://tracking.jake4maths.com/studentsimage.php?url='+window.location.href+'" style="position:absolute;left:-100px;top:-100px;">');
	if(getCookie(window.location.pathname)!=undefined){
		rat=getCookie(window.location.pathname);
		$('.star:lt('+rat+')').attr('src','../img/fullstar.png');
		$('.star:eq('+rat+')').attr('src','../img/fullstar.png');
		$('.star:gt('+rat+')').attr('src','../img/emptystar.png');
	}
	$('.star').click(function(index){
		rat = $( ".star" ).index($(this));
		$('.star:lt('+rat+')').attr('src','../img/fullstar.png');
		$(this).attr('src','../img/fullstar.png');
		$('.star:gt('+rat+')').attr('src','../img/emptystar.png');
		document.cookie = window.location.pathname+"="+rat+"; expires=Thu, 31 Dec 2020 12:00:00 UTC";
		$.post( "//tracking.jake4maths.com/mathsnzfeedback.php", { URL: window.location.pathname, rating: rat })
	  .done(function( data ) {
	    $('#rating').html("<span style='font-size:16px;'>Why did you give this rating? (optional): <input id='reason' style='font-size:16px;height:23px;'></input><input type=hidden id=rat value='"+rat+"'> <span id=send onclick='sendinreason();'>Send</span></span>");
	  });
	});
 });

function sendinreason(){
	var rat=$('#rat').val();
	var res=$('#reason').val();
	$.post( "//tracking.jake4maths.com/mathsnzfeedbackreason.php", { URL: window.location.pathname, rating: rat, reason: res })
	.done(function( data ) {
		$('#rating').html("<span style='font-size:16px;'>Thanks for your feedback :)</span>");
	});
}

 function getCookie(name) {
   var value = "; " + document.cookie;
   var parts = value.split("; " + name + "=");
   if (parts.length == 2) return parts.pop().split(";").shift();
 }

//google analytics tracking
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-36760253-2', 'auto');
  ga('send', 'pageview');
