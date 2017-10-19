var wedding = (function(){

	function initialize(){
		getAddons();
	}
	
	function getAddons(){
    $('header').load("/wedding/addons/navigation.html"); 
    $('head').load("/wedding/addons/links.html")
	}

	$(document).ready(initialize);

}(wedding || {}));