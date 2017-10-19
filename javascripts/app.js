var wedding = (function(){

	function initialize(){
		getNav();
	}
	
	function getNav(){
    $('nav').load("/wedding/addons/navigation.html"); 
	}

	$(document).ready(initialize);

}(wedding || {}));