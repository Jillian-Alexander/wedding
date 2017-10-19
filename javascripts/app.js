var wedding = (function(){

	function initialize(){
		getaddons();
	}
	
	function getAddons(){
    $('header').load("/wedding/addons/navigation.html"); 
    $('head').load("/wedding/addons/links.html")
	}

	$(document).ready(initialize);

}(wedding || {}));