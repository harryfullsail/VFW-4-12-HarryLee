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
	
	function storeData(){
		var id 				= Math.floor(Math.random()*100000001);
		//Gather up all our form field values and store in an object
		//Object properties contain array with the form label and iput value.
		var item					={};
			item.bookl					=["Book Listed:", $('bookl').value];
			item.authorn				=["Author Name:", $('authorn').value];
			item.titleofbook			=["Title of Book:", $('titleofbook').value];
			item.datee					=["Date Enter:", $('datee').value];
			/*item.checkbox				=["Checkbox:", $('checkbox').value];*/
			item.checksubjectofbook		=["Check Subject of Book:", $('checksubjectofbook').value];
			item.ratethebook			=["Rate the Book:", ratethebook];
			item.notes					=["Notes:", $('notes').value];
		//Save data into Local Storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Date Saved!");
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
	save.addEventListener("click", storeData);

});