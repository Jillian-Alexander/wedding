var wedding = (function(){
	var count = 0;

	function initialize(){
		getAddons();
		$('.banner').css({display: "none"});
		$('.banner').eq(count).fadeIn(500);
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
		if(count < $('.banner').length) count = count + 1;
		console.log(count);
	}


	$(document).ready(initialize);

}(wedding || {}));