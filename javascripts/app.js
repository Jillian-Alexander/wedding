var wedding = (function(){
	var banners, count = 0;

	function initialize(){
		getAddons();
		banners = $('#main-page > .banner').length;
		$('#main-page .banner').css({display: "none"});
		$('.banner').eq(count).fadeIn(1000);

		if($('#main-page').length){
			var timer = window.setInterval(rotator, 8000);
		}
		displayDate();
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
		$('.banner').eq(count).fadeIn(1000);
		$('.banner').eq(count - 1).fadeOut(1000);
	}

	function displayDate(){
		var one_day = 24*60*60*1000;
		var today = new Date();
		var wedding_date = new Date(2018, 4, 19);

		var difference = Math.round(Math.abs((today.getTime() - wedding_date.getTime())/(one_day)));
		$('#countdown').html(difference);
	}

	$(document).ready(initialize);

}(wedding || {}));