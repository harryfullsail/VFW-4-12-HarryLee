// Visual Frameworks Project 2
// Harry D Lee 4/12
// main.js

// Wait until the DON is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementById Function
		function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	
	//Variable defaults
	

	function storeData(){
		localStorage.setItem("test", "hello");
	}

	//Sat Link & Submit Click Events
	/*
	var displayLink = $('displayLink');
	displayLink.addEventListener("click",  getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);*/
	var save = $('submit');
	save.addEventListener("Click", storeData);

});