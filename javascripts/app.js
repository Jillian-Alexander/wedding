var wedding = (function(){
	var banner = $('#main-page .banner'),
	count = 0;

	function initialize(){
		getAddons();
		banner.eq(count).fadeIn();
		//var timer = window.setInterval(rotator, 7000);
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
		if(count < banner.length) count++;
		console.log(count);
	}


	$(document).ready(initialize);

}(wedding || {}));