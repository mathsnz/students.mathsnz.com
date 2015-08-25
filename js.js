function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            minsize = 30,
			leftright = 40;
            header = document.getElementById("header"),
			size = 100 - distanceY,
			imgheight = 70 - distanceY,
			maxheight = 70 - leftright;
        if (minsize > size) {
            $("#header").css( "height", minsize+"px" );
        } else {
            $("#header").css( "height", size+"px" );
        }
		if (distanceY > leftright) {
            $("#header img").css( "float", "left" );
            $("#nav").css( "text-align", "right" );
            $("#header img").css( "max-height", maxheight+"px" );
		} else {
            $("#header img").css( "float", "none" );
            $("#nav").css( "text-align", "center" );
            $("#header img").css( "max-height", imgheight+"px" );
		}
    });
}
window.onload = init();
$(document).ready(function() {
	$(window).resize(function(){ $('#nav2').css("display", "none");}); 
	$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />');
	$('head').append('<link rel="apple-touch-icon" href="http://www.mathsnz.com/icon.png">');
 });
 
 
//google analytics tracking
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-36760253-1', 'auto');
  ga('send', 'pageview');