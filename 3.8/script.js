	$(function(){
	  $("#sites").load("../sites.html"); 
	  $("#header").load("../header-L2.html"); 
	  $("#footer").load("../footer.html"); 
	  $("#left").load("left.html", function() {
		var page = location.href.split("/").slice(-1);
		var dopre="yes";
		var donext="no";
		$("#left a").each(function(){
			if(donext == "yes"){
				$(".nextlesson").attr("href",$(this).attr("href"));
				donext="no";
			}
            if ($(this).attr("href") == page){
				$(this).css( "font-weight", "bold" );
				donext="yes";
				dopre="no";
				$("#left").scrollTop($(this).offset().top-60);
            }
			if(dopre == "yes"){
				$(".prelesson").attr("href",$(this).attr("href"));
			}
        });
      });
	  document.title='MathsNZ Students - 3.14 - '+title;
	  $("#pagetitle").text(title);
	});