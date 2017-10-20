var wedding = (function(){
	var banners, count = 0;

	function initialize(){
		getAddons();
		banners = $('div#main-page div.banner').length;
		$('#main-page .banner').css({display: "none"});
		$('.banner').eq(count).fadeIn(500);
		console.log(banners);
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
		if(count < banners) count++;
		console.log(count);
	}


	$(document).ready(initialize);

}(wedding || {}));