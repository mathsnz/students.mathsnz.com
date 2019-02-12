$(document).ready(function() {
	$(window).resize(function(){ $('#nav2').css("display", "none");});
	$('head').append('<link rel="apple-touch-icon" href="https://www.mathsnz.com/icon.png">');
	$('body').append('<img src="https://tracking.jake4maths.com/studentsimage.php?url='+window.location.href+'" style="position:absolute;left:-100px;top:-100px;">');
 });

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
