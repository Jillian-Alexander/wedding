var wedding = (function(){

	function initialize(){
		getNav();
	}
	
	function getNav(){
    $('header').load("/wedding/addons/navigation.html"); 
	}

	$(document).ready(initialize);

}(wedding || {}));