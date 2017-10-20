var wedding = (function(){
	var banners, count = 0;

	function initialize(){
		getAddons();
		banners = $('#main-page > .banner').length;
		$('#main-page .banner').css({display: "none"});
		$('.banner').eq(count).fadeIn(1000);

		if($('#main-page').length){
			var timer = window.setInterval(rotator, 7000);
		}
	}
	
	function getAddons(){
    $('header').load("/wedding/addons/navigation.html"); 
    $.ajax({
    	url: "/wedding/addons/links.html",
    	success: function(data){$('head').append(data);},
    	dataType: 'html'
    });
	}

	function rotator(){
		(count == banners - 1) ? count = 0 : count++;
		$('.banner').eq(count).fadeIn(1000, function(){
			$('.banner').eq(count - 1).fadeOut(1000);
		});

	}


	$(document).ready(initialize);

}(wedding || {}));