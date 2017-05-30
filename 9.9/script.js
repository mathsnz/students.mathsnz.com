	$( document ).ready(function(){
	  $("#sites").load("../sites.html"); 
	  $("#header").load("../header-L2.html"); 
	  $("#footer").load("../footer.html"); 
	  $("#horisontalnav").load("left.html", function() {
		var page = location.href.split("/").slice(-1);
		var dopre="yes";
		var donext="no";
		$("#horisontalnav a").each(function(){
			if(donext == "yes"){
				$(".nextlesson").attr("href",$(this).attr("href"));
				donext="no";
			}
            if ($(this).attr("href") == page){
				$(this).addClass( "bold" );
				donext="yes";
				dopre="no";
				$("#left").scrollTop($(this).offset().top-60);
				$(this).parent().css("display","inline");
            }
			if(dopre == "yes"){
				$(".prelesson").attr("href",$(this).attr("href"));
			}
        });
		$("#horisontalnav .title").each(function(){
			var n = $(this).text().indexOf(":");
			$(this).html("<a href='./'>"+$(this).text().substr(0,n+1)+"</a>");
		});
      });
	});